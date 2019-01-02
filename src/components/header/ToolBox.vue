<template lang="pug">
.container
  router-link(to="/me")
    span.tool 
      img(src="/static/logo/user.png")
      span 个人中心
  router-link(to="/cart")
    span.tool 
      //- .bubble(v-if="quantity>0") {{quantity}}
      .bubble {{quantity}}
      img(src="/static/logo/cart.png")
      | 购物车
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'ToolBox',
  computed: {
    ...mapState({items: s => s.cart.items}),
    quantity() {
      return this.items.reduce((s, i) => s + i.quantity, 0)
    }
  }
}
</script>
<style lang="stylus" scoped>
.tool
  display inline-block
  width 120px
  height 40px
  background-color #F8F8F6
  border solid 1px #E5E5E5
  text-align center
  line-height 40px
  position relative
  *
    padding 0 10px
    vertical-align middle
  .bubble
    position absolute
    width 22px
    height 22px
    background #F08200
    border-radius 3px
    color #fff
    left 20px
    top -10px
</style>