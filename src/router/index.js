import Vue from 'vue'
import Router from 'vue-router'
import AboutView from '@/views/AboutView'
import CartView from '@/views/CartView'
import CategoryView from '@/views/CategoryView'
import CityView from '@/views/CityView'
import EntryView from '@/views/EntryView'
import FridayView from '@/views/FridayView'
import HomeView from '@/views/HomeView'
import MallView from '@/views/MallView'
import MallProductView from '@/views/MallProductView'
import NavView from '@/views/NavView'
import OrderView from '@/views/OrderView'
import SearchResultView from '@/views/SearchResultView'
import SellerView from '@/views/SellerView'
import ProductView from '@/views/ProductView'

import NotFoundView from '@/views/404.vue'

import MeRouter from './me'

import store from '../store'

// 刚的页面路由
import Fresh from '@/components/about/Fresh.vue'
// test路由
// import NavBar from '@/base/NavBar.vue'
import ChoseAddres from '@/components/common/ChoseAddres.vue'

Vue.use(Router)
function scrollHandler(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }
  return { x: 0, y: 0 }
}
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: scrollHandler,
  routes: [
    {
      path: '/home',
      alias: '/',
      name: 'home',
      component: HomeView,
    },
    // test路由接口
    {
      path: '/c',
      component: ChoseAddres
    },

    {
      path: '/login',
      name: 'login',
      component: EntryView
    },
    {
      path: '/signup',
      name: 'signup',
      component: EntryView
    },
    {
      path: '/retrieve-password',
      component: EntryView
    },
    // 分类商品
    { path: '/category', component: CategoryView },
    { path: '/search', component: SearchResultView, name: 'search' },
    { path: '/product/:id', component: ProductView, name: 'product' },
    // 同城
    {
      path: '/city',
      component: CityView
    },
    // 礼拜五
    { path: '/friday', component: FridayView, name: 'friday' },
    // 积分商城
    { path: '/mall', component: MallView },
    { path: '/mall/product', component: MallProductView, name: 'mall' },
    // TODO:
    // 商家
    { path: '/seller/:sid', component: SellerView, name: 'seller' },
    // 购物车
    {
      path: '/cart',
      component: CartView,
      name: 'cart',
      requiresAuth: process.env.VUE_APP_STAGE === 'play' ? false : true,
    },
    {
      path: '/cart/order/:oid',
      component: OrderView,
      name: 'order'
    },
    // 导航
    { path: '/nav', component: NavView, name: 'nav' },
    MeRouter,
    // 关于礼拜五
    // 优鲜保障
    {
      path: 'fresh',
      component: Fresh,
      name: 'fresh'
    },
    {
      path: '/about',
      component: AboutView
    },
    {
      path: '*',
      component: NotFoundView
    },

  ],
})

// config router guard
router.beforeEach((to, from, next) => {
  if (to.matched.some((m) => m.meta.requiresAuth)) {
    if (!store.state.user.loggedIn) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router