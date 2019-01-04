import { http } from '@/utils'
import Vue from 'vue'
// import uuid from 'uuid/v1'
let id = 1
export default {
  //命名空间
  namespaced: true,
  state: {
    items: {},
    // items: {
    //   1: {id: 1, product_id: 3},
    //   2: {id: 2, product_id: 3},
    // }
  },
  mutations: {
    addItem(state, { item }) {
      state.items[item.id] = item
    },
    addItems(state, items) {
      items.forEach((item) => {
        state.items[item.id] = item
      })
    },
    removeItem(state, { id }) {
      Vue.delete(state.items, id)
    },
    removeItems(state, ids) {
      for (let i = 0; i < ids.length; i++) {
        Vue.delete(state.items, ids[i])
      }
    },
  },
  actions: {
    fetchRemote({ commit, rootState }) {
      http
        .withToken(rootState.user.me.token)
        .get('/api/me/cart')
        .then((res) => {
          commit('addItems', res.data)
        })
    },

    addItem({ state, commit, rootState }, payload) {
      const { item } = payload
      // const item = payload.item
      let itemId
      if (!item.id) {
        item.id = id++
        itemId = item.id
      }
      commit('addItem', { item })
      http
        .withToken(rootState.user.me.token)
        .post('/api/me/cart/add', {
          item: {
            product_id: item.product.id,
            spec: item.spec.quantity,
            quantity: item.quantity,
          },
        })
        .then((res) => {
          const { id } = res.data
          // const { id } = res.data.id
          Vue.set(state.items, id, state.items[itemId])
          Vue.delete(state.items, itemId)
        })
    },
    removeItems({ commit }, items) {
      commit('removeItems', items)
      // removeItems(state, items)
    },
  },
}
