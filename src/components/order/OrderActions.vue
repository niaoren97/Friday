<template lang="pug">
.actions(:class="extraClass", :style="extraStyle")
  //- TODO: 
  router-link(:to="{name: 'order-detail', params: {id: order.id}}") 去查看
  div(v-if="order.status === 0")
    button(@click="payOrder") 去支付
    button(@click="cancelOrder") 取消订单
  div(v-else-if="order.status === 1")
    button(@click="payback") 申请退款
  div(v-else-if="order.status === 2")
    button(@click="confirm") 确认收货
    button(@click="checkExpress") 查看物流
  div(v-else-if="order.status === 3")
    button(@click="confirm") 
    button(@click="checkExpress") 查看物流
  div(v-else-if="order.status === 10")
    button(@click="deleteOrder") 删除订单
</template>
<script>
export default {
  name: 'OrderAction',
  props: ['order', 'extraClass', 'extraStyle'],
  methods: {
    payOrder() {},
    cancelOrder() {},
    confirm() {},
    payback() {},
    checkExpress() {},
    deleteOrder() {},
  },
}
</script>
<style lang="stylus" scoped>
</style>