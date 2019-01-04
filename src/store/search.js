import { pick } from 'lodash'
import axios from 'axios'

export default {
  namespaced: true,
  state: {
    page: 1,
    categories: [],
    filter: '',
    sort: '',
    q: '',
    results: [],
  },
  mutations: {
    updateQuery() {},
    updateResults(state, payloads) {
      state.results = payloads
    }
  },
  actions: {
    search({state, commit}) {
      axios.get('/api/search', {params: {q: state.query,
      }})
    }
  },
}
