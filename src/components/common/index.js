import btn from './btn'
import divider from './divider'
import loader from './loader'

export default {
  install(Vue) {
    Vue.component('btn', btn)
    Vue.component('divider', divider)
    Vue.component('loader', loader)
  }
}
