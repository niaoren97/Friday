import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import registrator from './plugins/registrator'
import http from './plugins/http'
import toast, { Toast } from './plugins/toast'
import filters from './filters'
import './registerServiceWorker'
import './assets/style/style.styl'
import { http as httpHelper } from '@/utils'

// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/js/swiper.js'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.config.productionTip = false
Vue.use(registrator)

Vue.use(http)
Vue.use(toast)

// eslint-disable-next-line no-unused-vars
const authInterceptor = axios.interceptors.response.use(
  function(res) {
    console.log('interceptor')
    if (res.status === 401) {
      // unauthorized
      Toast.present({ message: '你的回话已过期, 请重新登录' })
      setTimeout(() => {
        router.push('/login')
      }, 1500)
    } else return res
  },
  function(error) {
    if (error.response.status === 401) {
      // unauthorized
      Toast.present({ message: '你的回话已过期, 请重新登录' })
      setTimeout(() => {
        store.dispatch('user/logout')
        router.push('/login')
      }, 1500)
    }
    return Promise.reject(error)
  }
)
httpHelper.init(axios)
filters()

// config axios
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
