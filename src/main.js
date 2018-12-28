import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registrator from './plugins/registrator'
import './registerServiceWorker'

import './assets/style/style.styl'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/js/swiper.js'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false
Vue.use(registrator)

new Vue({  
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
