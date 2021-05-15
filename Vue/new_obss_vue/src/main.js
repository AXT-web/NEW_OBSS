import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/iconfont.css'
import './assets/css/global.css'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:3333/'
Vue.prototype.$http = axios

// //请求在到达服务器之前，先会调用use中的这个回调函数来添加请求头信息
// axios.interceptors.request.use(config=>{
//   //为请求头对象，添加token验证的Authorization字段
//   config.headers.Authorization = window.sessionStorage.getItem("token")
//   return config
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
