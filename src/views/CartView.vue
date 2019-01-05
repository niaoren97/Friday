<template lang="pug">
.content.cart-view
  .main(v-if="Object.keys(items).length===0")
    p 你还没有商品
  .main(v-else)
    .logo
      img(src="/static/logo/cart2.png")
      span 购物车
    cart-group(v-for="(items, k) in groups", :items="items", :key="k")
    .footer
      .group-actions
        span.all(@click="selectAll") 全选
        span.batch(@click="deleteSelected") 批量删除
      .group-info
        span 商品总计: 
          span.price {{totalPrice | currency('cn')}}
        f-button(big, secondary, @click="buy") 立即购买

</template>
<script>
import { mapState } from 'vuex'
import { groupBy } from 'lodash'
import CartGroup from '@/components/cart/CartGroup.vue'

export default {
  name: 'CartView',
  data() {
    return {}
  },
  components: { CartGroup },
  created() {
    if (!this.loggedIn) {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState({
      items: (s) => s.cart.items,
    }),
    totalPrice() {
      return Object.values(this.items)
        .filter((i) => i.checked)
        .reduce((sum, i) => sum + i.quantity * i.spec.current_price, 0)
        .toFixed(2)
    },
    loggedIn() {
      return this.$store.state.user.loggedIn
    },
    // 根据商品的店铺分类,不同店铺的商品分别分组.
    groups() {
      // return items grouped by seller
      return groupBy(this.items, (item) => item.seller.id)
    },
  },
  methods: {
    buy() {
      this.$route.push('/cart/confirm')
    },
    selectAll() {

    },
    deleteSelected() {

    }
  },
  watch: {
    loggedIn() {
      if (!this.loggedIn) {
        this.$router.push('/login')
      }
    },
    // loggedIn(newValue) {
    //   if (!this.loggedIn) this.$router.push('/login')
    // },
  },
}
</script>
<style lang="stylus" scoped>
.cart-view
  margin auto

.main
  min-height 490px

  .logo
    font-size 20px
    margin-bottom 20px

    img
      width 30px
      height 30px
      margin-right 10px
      vertical-align bottom
.footer
  display flex
  justify-content space-between
  padding 44px 0
  .group-actions
    span 
      color green
      margin  0 20px
      font-size 14px
  .group-info
    font-size 20px
    span:first-child
      margin-right 20px
    .price
      font-size 24px
      color red
</style>