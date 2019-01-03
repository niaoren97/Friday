<template lang="pug">
.order-container
  .top.clearfix
    span 订单号: {{order.id}}
    span 下单日期: {{order.date | dateFormat('YYYY.MM.DD HH:mm:ss')}}
    span.seller {{order.seller.name}}
    span.fr 订单状态:
      span.status {{getStatus(order.status)}}
  .main.clearfix
    .orders.fl
      .order(v-for="item in order.items", :key="item.id")
        img(:src="item.product.images[0]")
        span.name {{item.product.name}}
        span.spec {{item.spec + item.product.unit + '/' + item.product.pack}}
        span.price {{item.price | currency('cn')}}X{{ item.quantity}}
    .summary.fl(:style="{height: `${height}px`}")
      span 店铺合计: {{totalPrice | currency('cn')}}
      span (含运费: {{order.postfee || 10 | currency('cn')}})
    order-actions(:order="order", extraClass="fl", :extraStyle="{height: `${height}px`, width: `100px`}")
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
    },
    height() {
      return this.order.items.length * 120
    },
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
.order-container
  border solid 1px lightgray
  margin-bottom 20px

.top
  background-color lightgray
  padding 14px

  .seller
    color #498E3D

  .status
    color #F08201

.orders
  width 700px
  border-right solid 1px lightgray

.summary
  width 210px
  display flex
  justify-content center
  flex-direction column
  align-items center
  border-right solid 1px lightgray

.order
  height 120px
  line-height 120px
  padding-left 20px
  border-bottom solid 1px lightgray

  *
    vertical-align middle

  span
    display inline-block

  &:last-child
    border none

  .name
    width 220px
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
    text-align-last left

  .spec
    width 160px
    text-align center

  .price
    width 180px
    text-align center

  img
    width 80px
    margin-right 20px
    height 80px
    border solid 1px lightgray
</style>