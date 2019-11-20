import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.use(VueResource) // 声明使用 添加了$http
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
