import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registrator from './plugins/registrator'
import http from './plugins/http'
import toast from './plugins/toast'
import filters from './filters'
import './registerServiceWorker'
import './assets/style/style.styl'

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

filters()

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
