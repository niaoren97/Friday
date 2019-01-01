<template lang="pug">
panel(title="我的订单")
  .container
    .filter.clearfix
      router-link(to="/me/orders/all")
        span(:class="{active: filter==='all'}", ) 全部
      router-link(to="/me/orders/to-pay")
        span(:class="{active: filter==='to-pay'}") 待付款
      router-link(to="/me/orders/to-ship")
        span(:class="{active: filter==='to-ship'}") 待发货
      router-link(to="/me/orders/to-confirm")
        span(:class="{active: filter==='to-confirm'}") 待收货
      router-link(to="/me/orders/to-review")
        span(:class="{active: filter==='to-review'}") 待评价
      router-link(to="/me/orders/service")
        span(:class="{active: filter==='service'}") 退款/售后
      router-link(to="/me/orders/finished")
        span(:class="{active: filter==='finished'}") 已完成/关闭
      span.fr 订单回收站
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
.container
  padding 20px
.active
  background-color #F08201
  color #fff
a
  padding 0 15px
  border-right solid 1px gray
  &:first-child
    padding-left 0
  //   span
  &:last-child
    border-right none
    span
      margin-right 0
  span
    padding 4px 12px
</style>