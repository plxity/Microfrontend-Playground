const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/dashboard/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './Dashboard': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
