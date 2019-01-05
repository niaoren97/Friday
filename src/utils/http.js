// import axios from 'axios'

const http = {
  withToken: function(token) {
    const client = {}
    client.get = function(url, config = {}) {
      return http._ios.get(url, {
        ...config,
        headers: { ...config.headers, Authorization: `Bearer ${token}` },
      })
    }
    client.post = function(url, data, config = {}) {
      return http._ios.post(url, data, {
        ...config,
        headers: { ...config.headers, Authorization: `Bearer ${token}` },
      })
    }
    return client
  },
  init(ios) {
    http._ios = ios
  }
}
export default http
