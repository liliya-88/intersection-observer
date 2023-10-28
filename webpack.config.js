const webpack = require("webpack");
/* if we use  mode: "production" - it will be bundle.js for production - without any comments and so on */
const miniCss = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
    assetModuleFilename: "assets/images/[name]-[hash][ext]",
  },
  devServer: {
    port: 5000,
    static: "./public",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|mp4)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"], //it will work from sass-loader and so on
      },
    ],
  }, 
  plugins: [
    new miniCss({
      filename: "styles.css",
    }),
  ],
};
