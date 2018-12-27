import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registrator from './plugins/registrator'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(registrator)

new Vue({  
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
