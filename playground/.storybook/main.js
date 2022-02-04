module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-essentials'],
  staticDirs: [{ from: '../../node_modules/@yoobic/design-system/dist/yoobic-design-system/assets', to: '/assets' }],
};
