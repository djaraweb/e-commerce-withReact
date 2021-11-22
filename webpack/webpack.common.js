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
    extensions: [".tsx", ".jsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "..", "src/"),
      "@components": path.resolve(__dirname, "..", "src/components/"),
      "@containers": path.resolve(__dirname, "..", "src/containers/"),
      "@context": path.resolve(__dirname, "..", "src/context/"),
      "@hooks": path.resolve(__dirname, "..", "src/hooks/"),
      "@pages": path.resolve(__dirname, "..", "src/pages/"),
      "@sass": path.resolve(__dirname, "..", "src/assets/styles/sass/"),
      "@css": path.resolve(__dirname, "..", "src/assets/styles/css/"),
      "@icons": path.resolve(__dirname, "..", "src/assets/icons/"),
      "@logos": path.resolve(__dirname, "..", "src/assets/logos/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx|js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: "asset/fonts",
      },
      {
        test: /\.tsx|ts?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "..", "./public/index.html"),
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/styles/[name].[contenthash].css",
    }),
    new Dotenv(),
  ],
  //stats: "errors-only", // Muestra solo errores
};
