// import $ from 'axios'
import { http } from '@/utils'

export default {
  namespaced: true,
  state: {
    loggedIn: false,
    me: {
      id: 0,
      token: '',
      footprints: [],
      orders: [],
      name: '',
      mobile: '',
      avatar: '',
      sex: '',
      addresses: [],
    },
  },
  mutations: {},
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
  },
}
