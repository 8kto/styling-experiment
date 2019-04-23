module.exports = {
  plugins: [
      {
          resolve: `gatsby-plugin-typography`,
          options: {
              pathToConfigModule: `src/utils/typography`,
          },
      },
      `gatsby-plugin-styled-components`,
  ],
}