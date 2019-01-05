<template lang='pug'>

f-table
  thead
    tr.head
      th.one
        check-box(:value="checked", @input="toggleAll")
        span 店铺名称 {{seller.name}}
      th 规格
      th 单价
      th 数量
      th 金额
      th 操作
  tbody
    cart-item(v-for="item in items", :key="item.key", :item="item")
  tfoot
    tr.foot 
      th.one
      th 
      th
      th
      th 
      th 
        span.total 商品金额:
        span.totalmoney ￥{{total}}
  
</template>
<script>
import CartItem from '@/components/cart/CartItem.vue'
export default {
  components: { CartItem },
  props: ['items'],
  data() {
    return {
      // total: "999.99"
    }
  },
  computed: {
    total: function() {
      return this.items
        .filter((i) => i.checked)
        .reduce((sum, i) => sum + i.spec.current_price * i.quantity, 0).toFixed(2)
    },
    seller() {
      return this.items[0].seller
    },
    checked() {
      return !this.items.some(i => !i.checked)
    }
  },
  methods: {
    toggleAll() {
      this.$store.commit('cart/setChecked', {items: this.items.map(i => i.id),
      checked: !this.checked});
    }
  }
}
</script>
<style lang='stylus' scoped>
table.f-table
  tfoot
    .foot
      height 120px

.one
  text-align left
  padding-left 30px
  width 40%

  span
    margin-left 10px

.all
  font-size 16px
  font-weight 500
  color green

.batch
  font-size 16px
  font-weight 500
  color green

.total
  font-size 16px
  font-weight 500

.totalmoney
  font-size 20px
  color #f00

.now
  display inline-block
  margin-left 20px
  width 100px
  height 50px
  line-height 50px
  text-align center
  color #ffffff
  font-size 18px
  font-weight 300
  background-color #f08200
  border-radius 5px
</style>