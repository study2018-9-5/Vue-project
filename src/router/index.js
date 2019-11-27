import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import List from '@/components/List'
import Login from '@/components/Login/Login'
import Tabs from '@/components/Tabs'
import SearchBtn from '@/components/SearchBtn'
import RouterSkip from '@/components/Skip/RouterSkip'
import SkipIn from '@/components/Skip/SkipIn'
import VuexDemo from '@/components/VuexDemo/parent'
import Input from '@/components/Input/input'
import EventDemo from '@/components/EventDemo/EventDemo'
import Catalog from '@/components/Catalog'
import Echarts from '@/components/Echarts'
import store from '../vuex/store';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
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
    // vuex demo
    { 
      path: '/vuexdemo',
      name: 'vuexdemo',
      component: VuexDemo
    },
    // input demo
    { 
      path: '/input',
      name: 'input',
      component: Input
    },
    // EventDemo demo
    { 
      path: '/EventDemo',
      name: 'EventDemo',
      component: EventDemo
    },
    { 
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    },
    { 
      path: '/echarts',
      name: 'Echarts',
      component: Echarts
    },
    {
      path: '/',
      redirect: '/VuexDemo'
    }
  ]
});

// 路由跳转之前
// 定义完路由后，我们主要是利用vue-router提供的钩子函数beforeEach()对路由进行判断。
router.beforeEach((to,form,next) => {
  console.log(to,form,next);
  if(to.meta.requireAuth){  // 判断该路由是否需要登录权限
   
    if(store.state.login){
      router.replace({
        path: 'login',
        query: {redirect: router.currentRoute.fullPath}
      })
      next();
    }else{
      console.log(store.state.login)
      next({
        path: '/login',
        // query: {redirect: to.fullPath}
      })
    }
  }else{
    next();
  }
});

export default router;
