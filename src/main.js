import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GlobalComponents from './components/common'
import infiniteScroll from 'vue-infinite-scroll'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(GlobalComponents)
Vue.use(infiniteScroll)
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = 'https://1rcwozojf0.execute-api.ap-northeast-2.amazonaws.com/production'

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
