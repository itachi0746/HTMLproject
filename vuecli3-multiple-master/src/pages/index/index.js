import Vue from 'vue'
import Index from './App.vue'
import router from './router'

Vue.use(require('vue-wechat-title'))

new Vue({
    router,
    render: h => h(Index)
}).$mount('#app')