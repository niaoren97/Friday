<template lang="pug">
panel(title="我的积分")
  .container
    div.point 当前积分: 
      span {{me.points}}
    f-table
      thead
        tr
          th 积分日期
          th 变动
          th 来源
      tbody
        tr(v-for="redeem in redeems", :key="redeem.id")
          td {{redeem.created_at | dateFormat('YYYY-MM-DD HH:mm:ss')}}
          td {{redeem.change | number(true)}}
          td {{redeem.source}}

</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'MyPoint',
  data(){
    return {
      me: {points: 32},
      redeems: [
        {id:1, source: '2k34234', change: 32, created_at:  Date.now()},
        {id:2, source: '2k34234', change: 32, created_at:  Date.now()}
      ]
    }
  },
  computed: {
    // ...mapState({me: s=>s.user.me}),
    // redeems() {
    //   return this.me.redeems
    // }
  },
}
</script>
<style lang='stylus' scoped>
.container
  padding 1em
.point
  margin-bottom 1em
  span
    color red
.redeems
  width 100%
  border-collapse collapse
  border solid 1px #f6f6f6
  thead
    background-color #F2F2F2
    tr
      height 46px
  tr
    border solid 1px #eee
    padding 16px   
    height 50px
    &:hover
      background-color #F4FFF2
    * 
      text-align center
    *:nth-child(1)
      width 30%
    *:nth-child(2)
      width 45%
    *:nth-child(3)
      width 25%
</style>