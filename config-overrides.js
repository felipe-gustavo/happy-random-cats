/* eslint-disable no-param-reassign, @typescript-eslint/no-var-requires */
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const removePlugins = ["ESLintWebpackPlugin", "ModuleScopePlugin"];

/**
 * @param {import("webpack").Configuration} config
 * @param {'development' | 'production'} env
 */
function webpack(config) {
  config.plugins = config.plugins.filter(
    (plugin) => !removePlugins.includes(plugin.constructor.name)
  );

  config.resolve.plugins.push(
    new TsConfigPathsPlugin({ configFile: "./tsconfig.json" })
  );

  config.resolve.fallback = { ...config.resolve.fallback, crypto: false };

  return config;
}

/**
 * @param {import("ts-jest/dist/types").InitialOptionsTsJest} config
 * @param {'development' | 'production'} env
 */
function jest(config) {
  return config;
}

module.exports = {
  webpack,
  jest,
};
