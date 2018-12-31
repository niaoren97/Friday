<template lang="pug">
panel(title="我的订单")
  .filter
    span 全部
    span 待付款
    span 待发货
    span 待收货
    span 待评价
    span 退款/售后
    span 已完成/关闭
  .orders(v-if="orders.length === 0")
    img(src="/static/")
    span 你还没有订单
    router-link(to="/") 去首页看看
  .orders(v-else)
    span {{filter}}
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'MyOrder',
  created() {

  },
  data() {
    return {
      filter: '',
      filters: ['all', 'to-pay', 'to-ship', 'to-confirm', 'to-review',
      'service', 'finished'],
    }
  },
  computed: {
    ...mapState({orders: s =>s.user.me.orders}),
    filteredOrders() {
      return this.orders.filter()
    },
    pathFilter() {
      // /me/orders/<filter>
      const fs = ['all', 'to-pay', 'to-ship', 'to-confirm', 'to-review',
      'service', 'finished']
      const f = this.$route.path.split('/')[3]
      return (fs.indexOf(f) > -1) ? f : 'all'
    }
  },
  watch: {
    pathFilter() {
      this.filter = this.pathFilter
    }
  }

}
</script>
<style lang='stylus' scoped>
</style>