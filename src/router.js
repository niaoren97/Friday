import Vue from 'vue'
import Router from 'vue-router'
import AboutView from '@/views/AboutView'
import CategoryView from '@/views/CategoryView'
import CityView from '@/views/CityView'
import EntryView from '@/views/EntryView'
import FridayView from '@/views/FridayView'
import HomeView from '@/views/HomeView'
import MallView from '@/views/MallView'
import MallProductView from '@/views/MallProductView'
import NavView from '@/views/NavView'
import OrderView from '@/views/OrderView'
import SellerView from '@/views/SellerView'
import UserCenter from '@/views/UserCenter'

import NotFoundView from '@/views/404.vue'

// test路由
// import NavBar from '@/base/NavBar.vue'
import RetrievePasswordCard from '@/components/entry/RetrievePasswordCard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      alias: '/',
      name: 'home',
      component: HomeView,
    },
    // test路由接口
    { path: '/r', component:RetrievePasswordCard},

    { path: '/login', name: 'login', component: EntryView },
    { path: '/signup', name: 'signup', component: EntryView },
    { path: '/retrieve-password', component: EntryView },
    // 分类商品
    { path: '/category', component: CategoryView },
    // 同城
    { path: '/city', component: CityView },
    // 礼拜五
    { path: '/friday', component: FridayView },
    // 积分商城
    { path: '/mall', component: MallView },
    { path: '/mall/product', component: MallProductView },
    // TODO:
    // 商家
    { path: '/seller/:sid', component: SellerView },
    // 购物车
    { path: '/cart', component: SellerView },
    { path: '/cart/order/:oid', component: OrderView },
    // 导航
    { path: '/nav', component: NavView },
    { path: '/me', component: UserCenter },
    // 关于礼拜五
    { path: '/about', component: AboutView },
    { path: '*', component: NotFoundView },

    
  ],
})
