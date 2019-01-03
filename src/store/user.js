// import $ from 'axios'
import { http } from '@/utils'
import Vue from 'vue'
import axios from 'axios'
const init = {
  id: 0,
  token: '',
  footprints: [],
  orders: [],
  name: '',
  mobile: '',
  avatar: '',
  sex: 0,
  addresses: [],
}
export default {
  namespaced: true,
  state: {
    loggedIn: false,
    logging: false,
    loginMessage: '',
    loginStatus: 'ready',
    me: init,
  },
  mutations: {
    login(state, payload) {
      state.loggedIn = true
      Object.keys(payload).forEach((k) => {
        Vue.set(state.me, k, payload[k])
      })
    },
    logout(state) {
      state.loggedIn = false
      state.loginStatus = 'ready'
      state.logging = false
      state.me = init
      window.localStorage.removeItem('user.mobile')
      window.localStorage.removeItem('user.password')
    },
    updateProfile(state, payload) {
      Object.keys(payload).forEach((k) => {
        Vue.set(state.me, k, payload[k])
      })
    }
  },
  actions: {
    // TODO: should support pagination, both server side and client side
    fetchAddresses({ state }) {
      http
        .withToken(state.me.token)
        .get(`/api/user/${state.me.id}/addresses`)
        .then((res) => {
          state.me.addresses = res.data
        })
    },
    logout({ commit }) {
      // http
      //   .withToken(state.me.token)
      //   .post('/api/user/logout')
      //   .then(() => {
      //     commit('logout')
      //   })
      commit('logout')
    },
    login({ state, commit }, payload) {
      state.logging = true
      state.loginMessage = ''
      setTimeout(() => {
        if (payload.method === 'normal') {
          const { mobile, password, autoLogin, redirect } = payload
          if (autoLogin) {
            window.localStorage.setItem('user.mobile', mobile)
            window.localStorage.setItem('user.password', password)
          } else {
            window.localStorage.removeItem('user.mobile')
            window.localStorage.removeItem('user.password')
          }
          axios
            .post('/api/user/login', { mobile, password })
            .then((res) => {
              state.logging = false
              const { data } = res
              if (data.error || res.status === 401) {
                state.loginMessage = data.message || '登录失败'
                state.loginStatus = 'fail'
                return
              }
              state.loginMessage = ''
              state.loginStatus = 'ok'
              commit('login', data)
            })
            .catch((err) => {
              state.logging = false
              state.loginMessage = err.message || '登录失败'
              state.loginStatus = 'fail'
            })
        }
      }, 2500)
    },
  },
}
