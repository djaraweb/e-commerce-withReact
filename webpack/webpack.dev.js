const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
//const path = require("path");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    //hot: true,
    //open: true,
    //contentBase: path.join(__dirname, "..", "dist"),
    compress: true,
    historyApiFallback: true,
    port: 3006,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Djara"),
    }),
  ],
};
