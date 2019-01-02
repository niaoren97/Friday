import axios from 'axios'
import Vue from 'vue'
const http = {
  install: function() {
    Vue.prototype.$http = axios
  },
}

export default http
