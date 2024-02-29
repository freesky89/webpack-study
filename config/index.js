'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports = {
//   dev: {  // dev开发 环境
//     evn:require('./sit.env'),
//     // 静态资源文件夹
//     assetsSubDirectory: 'static',
//     // 发布路径
//     assetsPublicPath: '/',
//     //配置代理（可跨域）
//     proxyTable: {
//       '/api': {
//         target: "http://sfe.crmclick.com",// 接口的域名
//         // secure: false,  // 如果是https接口，需要配置这个参数
//         changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
//         pathRewrite: {
//           '^/api': '/'
//         }
//       },
//       // 注意： '/api' 为匹配项，target 为被请求的地址，因为在 ajax 的 url 中加了前缀 '/api'，而原本的接口是没有这个前缀的，
//       //所以需要通过 pathRewrite 来重写地址，将前缀 '/api' 转为 '/'。如果本身的接口地址就有 '/api' 这种通用前缀，就可以把 pathRewrite 删掉。
//     },

//     // Various Dev Server settings
//     host: 'localhost', // can be overwritten by process.env.HOST
//     port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
//     autoOpenBrowser: false,
//     errorOverlay: true,
//     notifyOnErrors: true,
//     poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


//     /**
//      * Source Maps
//      */

//     // https://webpack.js.org/configuration/devtool/#development
//     devtool: 'cheap-module-eval-source-map',

//     // If you have problems debugging vue-files in devtools,
//     // set this to false - it *may* help
//     // https://vue-loader.vuejs.org/en/options.html#cachebusting
//     cacheBusting: true,

//     cssSourceMap: true
//   },

  build: { // 测试 预发布 正式生产 环境
    env:process.env.NODE_ENV == "production"
    ? require('./prod.env')
    : require('./sit.env'),
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'), // 编译输入的 index.html 文件

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'), // 编译输出的静态资源路径
    assetsSubDirectory: 'static', // 编译输出的二级目录
    assetsPublicPath: './', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名

    /**
     * Source Maps
     */

    productionSourceMap: false, // 是否开启 cssSourceMap
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // productionGzip: false, // 是否开启 gzip
    // productionGzipExtensions: ['js', 'css'], // 需要使用 gzip 压缩的文件扩展名

    // // Run the build command with an extra argument to
    // // View the bundle analyzer report after build finishes:
    // // `npm run build --report`
    // // Set to `true` or `false` to always turn it on or off
    // bundleAnalyzerReport: process.env.npm_config_report
  }
}