import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import List from '@/components/List'
import Login from '@/components/Login/Login'
import Tabs from '@/components/Tabs'
import SearchBtn from '@/components/SearchBtn'
import RouterSkip from '@/components/Skip/RouterSkip'
import SkipIn from '@/components/Skip/SkipIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs
    },
    {
      path: '/searchBtn',
      name: 'SearchBtn',
      component: SearchBtn
    },
    {
      path: '/routerSkip',
      name: 'RouterSkip',
      component: RouterSkip,
      meta:{
        keepAlive:true //不需要被缓存的组件
      }
    },
    { //在路由中显示传递的参数
      path: '/skipIn/:name/:age', //传递两个参数
      name: 'SkipIn',    //跳转页面的名字
      component: SkipIn,  //注册组件
      meta:{
        keepAlive:true //不需要被缓存的组件
      }
    },
    // { 
    //   path: '/skipIn',
    //   name: 'SkipIn',
    //   component: SkipIn
    // },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
