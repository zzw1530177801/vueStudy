import Vue from 'vue'
import App from './App'
import router from './router'  //导入

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
