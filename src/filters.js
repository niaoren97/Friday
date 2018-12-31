import Vue from 'vue'
function install() {
  Vue.filter('safe-phone', function(value) {
    if (!/\d{11}/.test(value)) {
      return value
    }
    return `${value.substring(0, 3)}****${value.substring(7, 11)}`
  })

  Vue.filter('currency', function(v, c) {
    const map = { cn: '¥' }
    return `${map[c]}${v}`
  })
}
export default install
