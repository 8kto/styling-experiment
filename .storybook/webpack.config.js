const path = require('path')

module.exports = ({config, mode}) => {
  // Add typescript loader
  config.module.rules.push({
    test   : /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    loader : require.resolve('ts-loader'),
    options: {
      configFile: '.storybook/tsconfig.json'
    }
  })
  config.resolve.extensions.push('.ts', '.tsx')

  // Enable SCSS
  config.module.rules.push({
    test   : /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  })

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, '../src'),
  ]

  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

  return config
}
