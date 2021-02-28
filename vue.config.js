// eslint-disable-next-line @typescript-eslint/no-var-requires
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  chainWebpack(config) {
    config.plugin('CompressionPlugin').use(CompressionPlugin);
  },
};
