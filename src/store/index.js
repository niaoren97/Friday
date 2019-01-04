import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import UserModule from './user'
import CartModule from './cart'
import CategoryModule from './category'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: UserModule,
    cart: CartModule,
    category: CategoryModule,
  },
  state: {},
  mutations: {},
  actions: {},
  plugins: [createPersistedState()],
})
