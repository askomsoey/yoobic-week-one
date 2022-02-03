const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-essentials'],
  webpack: (config) => {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: '../node_modules/@yoobic/design-system/dist/yoobic-design-system/assets',
            to: path.join(__dirname, 'assets'),
          },
        ],
      })
    );
    return config;
  },
};
