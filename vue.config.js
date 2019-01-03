module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://10.90.92.229:8000',
      },
      '^/storage': {
        target: 'http://10.90.92.229:8000',
      },
    },
  },
}
