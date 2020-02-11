import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import infiniteScroll from 'vue-infinite-scroll'

import GlobalComponents from './components/common'

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = 'https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production'
Vue.use(infiniteScroll)

Vue.use(GlobalComponents)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
