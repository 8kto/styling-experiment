const { fetchPagesObject } = require('./fetch-pages-object.js')

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  const { creds, sheetId, workSheetName, maxRows, maxCols} = configOptions

  return fetchPagesObject({
    creds, 
    sheetId, 
    workSheetName, 
    maxRows, 
    maxCols
  }).then(data => console.log(data))
}