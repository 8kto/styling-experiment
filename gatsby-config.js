const creds = require('./client_secret.json')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,  
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-gs-pages",
      options: {
        creds: creds,
        sheetId: '1D01HIhIuF8Yrq6EGCXrfKhRAE4OZWybO3wFdsXRYNO8',
        workSheetName: 'Pages',
        maxRows: 200,
        maxCols: 10,
      },
    },      
  ],
  siteMetadata: {
    title: `Styling Experiment`,
    description: `Blazing fast styling example playground`,
    navigationItems: [
      { path: "/", name: "Home" },
      { path: "/about/", name: "About Us" },
      { path: "/table/", name: "Temperatures" },
    ]
  },
}