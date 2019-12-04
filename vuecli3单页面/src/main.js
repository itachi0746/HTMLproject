import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant';

import 'vant/lib/index.css';
import '@/style/reset.scss';
import '@/style/common.css';
import '@/utils/rem';
import utils from '@/utils'
import * as http from '@/utils/core/http'
import * as http2 from '@/utils/core/http2'
import * as toast from '@/utils/toast'

Vue.prototype.http = http
Vue.prototype.http2 = http2
Vue.prototype.toast = toast
Vue.prototype.utils = utils
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
