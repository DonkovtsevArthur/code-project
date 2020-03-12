const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }

  const plugins = [
    new BundleAnalyzerPlugin({
      analyzerMode: "server",
      analyzerHost: "localhost",
      analyzerPort: 4444,
      reportFilename: "report.html",
      defaultSizes: "parsed",
      openAnalyzer: false,
      generateStatsFile: false,
      statsFilename: "stats.json",
      statsOptions: null,
      logLevel: "info"
    })
  ];

  config.plugins.push(...plugins);

  return config;
};
