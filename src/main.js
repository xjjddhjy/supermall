import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
import Axios from 'axios'
import store from './store'
import toast from 'components/common/toast/toast.js';
// import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueLazyload,{
  loading:require('assets/img/common/placeholder.png')
})//4步，最后将:src改成v-lazy
// FastClick.attach(document.body)
// FastClick,3步
Vue.use(toast)
// Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';
// createApp(App).mount('#app')
Vue.prototype.$axios = Axios
Vue.prototype.$bus=new Vue()
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')