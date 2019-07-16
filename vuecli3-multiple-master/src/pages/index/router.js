import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'index', component: r => {
    require(['./components/HelloWorld.vue'], r)
  }, meta: {title: 'console 登录1'}
  }
]

export default new VueRouter({
  routes: routes
})