<template lang="pug">
.container
  .top.clearfix
    span 订单号: {{order.id}}
    span 下单日期: {{order.date | dateformat('YYYY-')}}
    span.seller {{order.seller.name}}
    span.fr 订单状态:
      span.status {{getStatus(order.status)}}
  .main
    .orders
      .order(v-for="item in order.items", :key="item.id")
        img(:src="item.product.images[0]")
        span {{item.product.name}}
        span {{item.price | currency('cn')}}X{{item.quantity}}
    .summary
      span 店铺合计: {{totalPrice | currency('cn')}}
      span (含运费: {{order.postfee}})
    order-actions(:order="order")
</template>
<script>
import OrderActions from './OrderActions'
export default {
  name: 'Order',
  props: ['order'],
  components: {
    OrderActions,
  },
  computed: {
    totalPrice() {
      return this.order.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
    }
  },
  methods: {
    getStatus(s) {
      // 0 : 待支付
      // 1 : 待发货(已支付)
      // 2 : 待收货
      // 3 :: 待确认
      // 4 :: 交易完成
      // 10 :: 已关闭
      // 11 :: 已取消
      const map = {
        0: '待支付',
        1: '待发货',
        2: '待收货',
        3: '待确认',
        4: '交易完成',
        10: '已关闭',
        11: '已取消',
      }
      return map[s]
    },
  },
}
</script>
<style lang="stylus" scoped>
.top
  background-color lightgray
  padding 14px
  .seller
    color #498E3D
  .status
    color #F08201
</style>