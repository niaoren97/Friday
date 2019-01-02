module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://192.168.43.68:8000',
      },
      '^/storage': {
        target: 'http://192.168.43.68:8000',
      },
    },
  },
}
