module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8000',
      },
      '^/storage': {
        target: 'http://localhost:8000',
      },

    },
  },
}
