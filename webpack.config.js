const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
require('dotenv').config({
  path: '.env.test'
})
// Px2remWebpackPlugin引入


console.log('process.env.BASE_URL', process.env.BASE_URL)

const Px2remWebpackPlugin = require('px2rem-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 模块文件，定义模块转换规则
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
  // 插件，增强webpack功能，需要组件实例
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Custom template',
      // Load a custom template (lodash by default)
      template: 'index.html'
    }
  ),
    // 这个是vue-loader的库里的插件，处理vue文件中的js和css
    new VueLoaderPlugin(),
    // px转rem的插件
    // new Px2remWebpackPlugin({
    //   remUnit: 75,
    //   remPrecision: 8
    // })

    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify('5fa3b9'),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: '1+1',
      'typeof window': JSON.stringify('object'),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })
  ]
};
