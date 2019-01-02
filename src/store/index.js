import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './user'
import CartModule from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: UserModule,
    cart: CartModule,
  },
  state: {},
  mutations: {},
  actions: {},
})
