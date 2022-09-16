const path = require("path");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  "stories": [
    "../src/**/*.stor@(ies|y).mdx",
    "../src/**/*.stor@(ies|y).@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    const configFile = path.resolve(__dirname, "../tsconfig.json");

    config.resolve.plugins.push(
      new TsConfigPathsPlugin({ configFile })
    );

    return config;
  }
}