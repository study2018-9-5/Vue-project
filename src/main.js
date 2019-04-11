import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios';    //引入axios
Vue.prototype.$axios = axios; //为了要在其他组件中使用，将axios改为vue的原型属性。

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
