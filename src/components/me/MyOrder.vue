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
      order(v-for="order in orders", :key="order.id", :order="order")
      //- paginator(v-if="orders", :current="page", :last="last",
        :base="base")
</template>
<script>
import { mapState } from 'vuex'
import { http } from '@/utils'
import Order from '@/components/order/Order'

export default {
  name: 'MyOrder',
  components: {
    Order,
  },
  created() {},
  data() {
    return {
      filter: '',
      filters: [
        'all',
        'to-pay',
        'to-ship',
        'to-confirm',
        'to-review',
        'service',
        'finished',
      ],
      orders: [],
      last: 0,
    }
  },
  computed: {
    ...mapState({
      me: (s) => s.user.me,
      // orders: (s) => s.user.me.orders,
    }),
    filteredOrders() {
      return this.orders.filter()
    },
    base() {
      return this.$route.path
    },
    page() {
      return this.$route.query.page || 1
    },
    pathFilter() {
      // /me/orders/<filter>
      const fs = [
        'all',
        'to-pay',
        'to-ship',
        'to-confirm',
        'to-review',
        'service',
        'finished',
      ]
      const f = this.$route.path.split('/')[3]
      return fs.indexOf(f) > -1 ? f : 'all'
    },
  },
  created() {
    this.filter = this.pathFilter
    this.fetchOrders({ filter: this.filter, page: this.page })
  },
  methods: {
    fetchOrders({ filter, page }) {
      http
        .withToken(this.me.token)
        .get('/api/me/orders', { params: { page, filter } })
        .then(({ data }) => {
          this.orders = data.data
          this.last = data.last_page
        })
    },
  },
  watch: {
    pathFilter() {
      this.filter = this.pathFilter
      this.fetchOrders({ page: this.page, filter: this.filter })
    },
    page() {
      this.fetchOrders({ page: this.page, filter: this.filter })
    },
  },
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

  // span
  &:last-child
    border-right none

    span
      margin-right 0

  span
    padding 4px 12px
</style>