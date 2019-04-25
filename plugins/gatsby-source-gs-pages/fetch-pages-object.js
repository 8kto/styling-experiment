const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')
// why this: https://cmichel.io/how-to-access-google-spreadsheet-with-node/

exports.fetchPagesObject = async function ( { creds, sheetId, workSheetName, maxRows=200, maxCols=10 } ) {
  // create Spreadsheet object
  const doc = new GoogleSpreadsheet(sheetId)    
  // auth
  await promisify(doc.useServiceAccountAuth)(creds)
  // get worksheets
  const { worksheets } = await promisify(doc.getInfo)()
  // filter out ours
  const sheet = worksheets.find( (worksheet) => worksheet.title == workSheetName );
  // fetch all cells
  const cells = await promisify(sheet.getCells)({
    'min-row': 1,
    'max-row': maxRows,
    'min-col': 1,
    'max-col': maxCols,  
    'return-empty': true,      
  })  
  // reduce all cells using our state automata    
  const { pages } = cells.reduce( (res, cell) => {
    const {row, col, value} = cell          
    switch(res.nextStep) {
      case 'find-page': 
        if(value == "Title") {
          res.nextStep = 'fetch-title'              
        }  
        break;
      case 'fetch-title': 
        if(value != "") {
          // create new page with title
          res.currentPage = {
            title: value
          }              
          res.nextStep = 'find-desc'
        } else {
          res.nextStep = 'find-page'
        }
        break            
      case 'find-desc': 
        if(value == "Description") {
          res.nextStep = 'fetch-desc'
        }
        break;
      case 'fetch-desc': 
        if(value != "") {
          // add description to current page              
          res.currentPage.description = value 
          res.nextStep = 'find-table'             
        }
        break;
      case 'find-table':
        if(value == "Table") {
          res.nextStep = 'fetch-header'                
        } else if(value == "Title") {              
          // no table found. Finalize currentPage
          res.pages.push(res.currentPage)              
          res.currentPage = null    
          res.nextStep = 'fetch-title'
        }
        break;
      case 'fetch-header': 
        if(value != "") {
          // init header reading
          res.currentPage.table = {
            headerRow: row,
            header: [ value ], 
            data: {},               
          }              
          res.nextStep = 'complete-header'            
        }
        break;
      case 'complete-header':
        if(row == res.currentPage.table.headerRow && value != "") {
          res.currentPage.table.header.push(value)
        } else {
          // go to values
          res.nextStep = 'fetch-data'              
        }
        break;
      case 'fetch-data':
        // do nothing in header row
        if(row > res.currentPage.table.headerRow) {
          // detect row number
          const dataRow = `row${row - res.currentPage.table.headerRow - 1}`;
          // zero column no value?
          if(value == "" && col == 1) {
            // table fetch done. Finalize currentPage             
            delete res.currentPage.table.headerRow
            res.pages.push(res.currentPage)              
            res.currentPage = null    
            res.nextStep = 'find-page'
            break;
          }
          // col number in header range?
          if(col <= res.currentPage.table.header.length) {                
            if(!res.currentPage.table.data[dataRow]) {
              res.currentPage.table.data[dataRow] = [value]  
            } else {
              res.currentPage.table.data[dataRow].push(value)  
            }
          } 
        } 
        break;          
    }
    return res
  }, { currentPage: null, pages: [], nextStep: 'find-page'})
  // get resulting pages spec
  return pages
}