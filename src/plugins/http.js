import axios from 'axios'
import Vue from 'vue'
import toast from './toast'
import router from '@/router'

const http = {
  install: function() {
    axios.interceptors.response.use(
      function(res) {
        if (res.status === 401) {
          // unauthorized
          toast.present('你的回话已过期, 请重新登录')
          setTimeout(() => {
            router.push('/login')
          }, 1500)
        } else return res
      },
      function(error) {
        return Promise.reject(error)
      }
    )
    Vue.prototype.$http = axios
  },
}

export default http
