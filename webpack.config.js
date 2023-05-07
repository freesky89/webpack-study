const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// Px2remWebpackPlugin引入

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
        test:/.vue$/, 
        use: 'vue-loader'
      },
      {
        test:/.s[ca]ss$/,
        use:['style-loader','css-loader','sass-loader']
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
  // 插件，增强webpack功能，需要组件实例
  plugins:[
    // 这个是vue-loader的库里的插件，处理vue文件中的js和css
    new VueLoaderPlugin(),
    // px转rem的插件
    // new Px2remWebpackPlugin({
    //   remUnit: 75,
    //   remPrecision: 8
    // })
  ]
};
