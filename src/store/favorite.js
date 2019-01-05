import { http } from '@/utils'
import Vue from 'vue'
let oid = 1
export default {
  namespaced: true,
  state: {
    favs: {
      // id: product
    },
  },
  mutations: {
    addFavorites(state, payload) {
      // payload: [product]
      payload.forEach((p) => {
        Vue.set(state.favs, p.id, p)
      })
    },
    removeFavorites(state, pids) {
      pids.forEach((id) => {
        Vue.delete(state.favs, id)
      })
    },
  },
  actions: {
    fetchFavorites({ commit, state, rootState }) {
      http
        .withToken(rootState.user.me.token)
        .get('/api/me/favorites')
        .then((res) => {
          commit('addFavorites', res.data)
        })
    },
    removeFavorites({ commit, rootState }, pids) {
      commit('removeFavorites', pids)
      http
        .withToken(rootState.user.me.token)
        .post('/api/me/favorites/delete', { favorites: pids })
    },
    addFavorites({ state, commit, rootState }, payload) {
      // [product]
      commit('addFavorites', payload)
      const pids = payload.map((p) => p.id)
      http
        .withToken(rootState.user.me.token)
        .post('/api/me/favorites/add', { favorites: pids })
        .then((res) => {
          // return real ids, should be an assoc-array
          const ids = res.data
          Object.keys(ids).forEach((tid) => {
            Vue.set(state.favs, ids[tid], state.favs[tid])
            Vue.delete(state.favs, tid)
          })
        })
    },
  },
}
