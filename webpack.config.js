const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  // Включить карты кода для отладки вывода webpack
  devtool: "production" ? false : "source-map-loader",
  devServer: {
    contentBase: "./public",
    open: true,
    compress: true,
    hot: true, // enables HMR in webpack-dev-server and in libs running in the browser
    port: 3000,
  },

  entry: {
    index: [
      "webpack-dev-server/client?http://localhost:3000", // bundle the client for webpack-dev-server and connect to the provided endpoint
      "webpack/hot/dev-server", // to perform HMR in the browser
      "./src/index.tsx",
    ],
  },
  output: {
    publicPath: "/",
    path: path.join(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 3000,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: ["babel-loader", "ts-loader"],

        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          // 'cache-loader',
          {
            loader: "file-loader?name=./image/[hash].[ext]",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "interactive paycard",
      template: path.resolve(__dirname, "./public/index.html"), // шаблон
      filename: "index.html", // название выходного файла
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(), //  to generate hot update chunks
  ],
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },
};
