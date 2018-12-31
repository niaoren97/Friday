<template lang="pug">
panel(title="我的积分")
  .container
    div 当前积分: {{me.points}}
    table.redeems
      thead
        tr
          th 积分日期
          th 变动
          th 来源
      tbody
        tr(v-for="redeem in redeems", :key="redeem.id")
          td {{redeem.created_at}}
          td {{redeem.change}}
          td {{redeem.origin}}

</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'MyPoint',
  computed: {
    ...mapState({me: s=>s.user.me}),
    redeems() {
      return this.me.redeems
    }
  },
}
</script>
<style lang='stylus' scoped>
.container
  padding 1em
.redeems
  border-collapse collapse
  border solid 1px #f6f6f6
  thead
    background-color gray
  tr
    border solid 1px #f6f6f6
</style>