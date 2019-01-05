import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import UserModule from './user'
import CartModule from './cart'
import CategoryModule from './category'
import SearchModule from './search'
import FavoriteModule from './favorite'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: UserModule,
    cart: CartModule,
    category: CategoryModule,
    search: SearchModule,
    favorite: FavoriteModule,
  },
  state: {},
  mutations: {},
  actions: {},
  plugins: [createPersistedState()],
})
