// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './network/index'

import Mint from 'mint-ui'; //全局并且导入mint-ui中的组件以及js函数
Vue.use(Mint);
import 'mint-ui/lib/style.css'
// Vue.config.productionTip = falseimport './main.css'

// Vue.prototype.$axios = axios // 配置全局axios
// axios.defaults.baseURL = 'http://123.207.32.32:8000' // 配置全局默认url

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,   //挂载路由
  components: { App },
  template: '<App/>',
})

Vue.prototype.axios = $axios
axios({
  url:'http://123.207.32.32:8000/home/multidata'
  
}).then(res =>{
})

axios.all(
  [axios({
    url:''
  }),axios({
    url:'',
    params:{
      type:'',
      page:''
    }
  })]
).then(resp=>{
  
}).catch();



// require('./assets/css/base.css')
