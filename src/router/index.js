import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import List from '@/components/List'
import Login from '@/components/Login/Login'
import Tabs from '@/components/Tabs'
import SearchBtn from '@/components/SearchBtn'

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
      path: '/',
      redirect: '/login'
    }
  ]
})
