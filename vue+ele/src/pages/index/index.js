// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Row } from 'element-ui'
import '@/common/rem.js'
import '@/styles/reset.css'
import axiosPlugin from '../../common/server'
// require('../../common/mock') // 用于模拟数据, 正式环境需要注释掉
Vue.use(axiosPlugin)

Vue.use(Button)
Vue.use(Row)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
