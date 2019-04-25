const { fetchPagesObject } = require('./fetch-pages-object.js')

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  const { creds, sheetId, workSheetName, maxRows, maxCols} = configOptions

  const processPage = (page, index) => {
    const nodeId = createNodeId(`gs-page-${index}`)
    const nodeContent = JSON.stringify(page)
    const nodeData = Object.assign({}, page, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `GSPage`,
        content: nodeContent,
        contentDigest: createContentDigest(page),
      }  
    })
    return nodeData
  }

  return fetchPagesObject({
    creds, 
    sheetId, 
    workSheetName, 
    maxRows, 
    maxCols
  }).then(data => {
    data.forEach( (page, index) => {
      createNode(processPage(page, index))      
    })    
  })
}