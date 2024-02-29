"use strict";
const path = require("path");
// const utils = require("./utils");
const config = require("../config");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

// function resolve(dir) {
//   return path.join(__dirname, "..", dir);
// }

module.exports = {
//   context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/main.js"
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
//   publicPath:
//      process.env.NODE_ENV === "'sit'"
//      ? config.build.assetsPublicPath
//      : config.build.assetsPublicPath
    publicPath: config.build.assetsPublicPath
  },
//   resolve: {
//     extensions: ['.js', '.vue', '.json'],
//     alias: {
//       vue$: "vue/dist/vue.esm.js",
//       "@": resolve("src")
//     }
//   },
  module:{
    rules:[
      {
        test:/\.vue$/, 
        use: 'vue-loader'
      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      {
        test:/.m?js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      },
    ]
  },
  optimization: {
    nodeEnv: false,
  },
//   node: {
//     // prevent webpack from injecting useless setImmediate polyfill because Vue
//     // source contains it (although only uses it if it's native).
//     setImmediate: false,
//     // prevent webpack from injecting mocks to Node native modules
//     // that does not make sense for the client
//     dgram: "empty",
//     fs: "empty",
//     net: "empty",
//     tls: "empty",
//     child_process: "empty"
//   }
    plugins: [
        new VueLoaderPlugin()
    ]
};