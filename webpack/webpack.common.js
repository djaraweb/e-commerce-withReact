const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/images/[name].[contenthash][ext][query]",
  },
  resolve: {
    extensions: [".jsx", ".js", ".sass"],
    alias: {
      "@": path.resolve(__dirname, "..", "src/"),
      "@components": path.resolve(__dirname, "..", "src/components/"),
      "@sass": path.resolve(__dirname, "..", "src/assets/sass/"),
      "@css": path.resolve(__dirname, "..", "src/assets/css/"),
      "@images": path.resolve(__dirname, "..", "src/assets/images/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x|js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      //inject: true,
      //template: "./public/index.html",
      template: path.resolve(__dirname, "..", "./public/index.html"),
      //filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/styles/[name].[contenthash].css",
    }),
    new Dotenv(),
  ],
  stats: "errors-only",
};
