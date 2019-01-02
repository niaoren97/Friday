<template lang="pug">
.content.cart-view
  .main(v-if="!items.length")
    p 你还没有商品
  .main(v-else)
    .logo
      img(src="/static/logo/cart2.png")
      span 购物车
    
</template>
<script>
import {mapState} from 'vuex'
import {groupBy} from 'lodash'

export default {
  name: 'CartView',
  computed: {
    ...mapState({items: s=>s.cart.items}),
    groups() {
      // return items grouped by seller
      return groupBy(this.items, (item) => item.seller.id)
    }
  }
}
</script>
<style lang="stylus" scoped>
.cart-view
  margin auto
.main
  min-height 490px

</style>