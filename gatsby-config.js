module.exports = {
    plugins     : [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-source-gs-pages',
            options: {
                sheetId      : '11ziMHrafjFaY9ACiacW9H3SlERUTqsKcujvF1oV0npE',
                workSheetName: 'Pages',
                maxRows      : 200,
                maxCols      : 10,
                templatePath : `${__dirname}/src/templates/gs-page-template.js`,
                credsPath    : `${__dirname}/client_secret.json`,
                baseUrl      : `gs-pages`,
            },
        },
        // `gatsby-plugin-sass`
    ],
    siteMetadata: {
        title          : `Styling Experiment`,
        description    : `Blazing fast styling example playground`,
        navigationItems: [
            {path: '/', name: 'Home'},
            {path: '/about/', name: 'About Us'},
            {path: '/gs-pages/', name: 'GS Pages'},
        ],
    },
}