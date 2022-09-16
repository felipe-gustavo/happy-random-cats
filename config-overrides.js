/* eslint-disable no-param-reassign, @typescript-eslint/no-var-requires */
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const removePlugins = ["ESLintWebpackPlugin", "ModuleScopePlugin"];

/**
 * @param {import("webpack").Configuration} config
 * @param {'development' | 'production'} env
 */
function override(config) {
  config.plugins = config.plugins.filter(
    (plugin) => !removePlugins.includes(plugin.constructor.name)
  );

  config.resolve.plugins.push(
    new TsConfigPathsPlugin({ configFile: "./tsconfig.json" })
  );

  return config;
}

module.exports = override;
