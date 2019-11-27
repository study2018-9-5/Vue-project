import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store' // 引入store

import ElementUI from 'element-ui';  // 引入ElementUI
import 'element-ui/lib/theme-chalk/index.css'; 
Vue.use(ElementUI);

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import axios from 'axios';    // 引入axios
Vue.prototype.$axios = axios; // 为了要在其他组件中使用, 将axios改为vue的原型属性。

import filters from '@/filters';
Object.keys(filters).forEach(key => { //过滤器统一处理加载
	Vue.filter(key, filters[key])
})

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  // 通过在根实例中注册 store 选项, 该 store 实例会注入到根组件下的所有子组件中, 且子组件能通过 this.$store 访问到
  components: { App },
  template: '<App/>'
})
