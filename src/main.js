import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

import GlobalComponents from './components/common'

Vue.prototype.$axios = axios

Vue.use(GlobalComponents)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
