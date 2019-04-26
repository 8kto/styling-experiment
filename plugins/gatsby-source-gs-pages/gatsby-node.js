const { fetchPagesObject } = require('./fetch-pages-object.js')
const slugify = require('slugify')

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  const { credsPath, sheetId, workSheetName, maxRows, maxCols} = configOptions
  const creds = require.resolve(credsPath)

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
      },
      url: slugify(page.title, { lower: true }),
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


exports.createPages = async function({graphql, actions}, configOptions) {  
  const {data} = await graphql(
    `{
      allGsPage {
        edges {
          node {
            id
            title
            url        
          }
        }
      }
    }`
  )
  data.allGsPage.edges.forEach( edge => {
    const generated_path = `${configOptions.baseUrl}/${edge.node.url}`
    actions.createPage({
      path: generated_path,
      component: require.resolve(configOptions.templatePath), 
      context: { gsId: edge.node.id }
    })
  })     
}