/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');

module.exports = {
  chainWebpack: (config) => {
    // use ~ instead of @ symbol
    config.resolve.alias
      .set('~', join(__dirname, 'src'))
      .set('assets', join(__dirname, 'src/assets'))
      .delete('@')

    config.resolve.extensions
      .clear()
      .add('.js')
      .add('.ts')
      .add('.tsx')
      .add('.vue')
      .add('.json')
      .add('.scss')
  },

  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
  },
}
