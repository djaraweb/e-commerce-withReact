const webpack = require("webpack");
//const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: false,
    //open: true,
    compress: true,
    historyApiFallback: true,
    port: 3006,
  },
  plugins: [
    //  new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Djara"),
    }),
  ],
};
