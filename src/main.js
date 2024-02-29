import Vue from "vue"
import App from "./App.vue"
// require('dotenv').config({
//   path: '.env.test'
// })

console.log('VERSION-from-mainjs', VERSION)

Vue.prototype.bbb = 'https://www.baidu.com'
new Vue({
  el: '#app',
  render: h => h(App)
})
