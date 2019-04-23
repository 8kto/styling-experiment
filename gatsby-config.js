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
      resolve: 'gatsby-source-google-sheets',
      options: {
        spreadsheetId: '1D01HIhIuF8Yrq6EGCXrfKhRAE4OZWybO3wFdsXRYNO8',
        worksheetTitle: 'Sheet1',
        credentials: require('./client_secret.json')
      }
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