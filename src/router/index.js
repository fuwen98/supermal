import Vue from 'vue'
import Router from 'vue-router'

import home from '../views/home/home'
import category from '../views/category/category'
import cart from '../views/cart/cart'
import profile from '../views/profile/profile'
import detail from '../views/detail/Detail'

import parameter from '../views/home/childComps/router/parameter'


// import VueRouter from 'vue-router'


//安装插件
Vue.use(Router)

//导出router
export default new Router({

  //创建路由对象
  routes: [
    {
      path: '/',
      // name: 'home',
      // component: HelloWorld
      redirect:'/home'
    },

    {
      path:'/home',
      component:home
    },
    {
      path:'/category',
      component:category
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/profile',
      component:profile
    },

    {
      path:'/detail:iid',
      component:detail
    },
    
    {
      path:'/parameter',
      component:parameter
    }
   
  ],
  mode:'history',
})

