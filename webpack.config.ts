import * as path from "path";

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  // Включить карты кода для отладки вывода webpack
  devtool: "source-map-loader",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: ["babel-loader", "ts-loader"],

        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    // Добавить разрешения '.ts' и '.tsx' к обрабатываемым
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};

// for .js

// module.exports = {
//     entry: "./src/index.js",
//     output: {
//       path: path.join(__dirname, "/dist"),
//       filename: "index_bundle.js"
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: "babel-loader"
//           },
//         },
//         {
//           test: /\.css$/,
//           use: ["style-loader", "css-loader"]
//         }
//       ]
//     }
//   };
