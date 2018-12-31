<template lang="pug"> 
.container
  .top.clearfix
    .fl
      img.avatar(:src="me.avatar")
      span 您好,
        span(v-if="me.name") {{me.name}}
        span(v-else) {{me.mobile | safe-phone}}
    .fr
      .block
        div 当前积分
        div {{me.points}} 
      .block
        div 我的钱包
        div {{me.money | currency('cn')}} 
      .block
        //- router-link(to="/me/") TODO:
        div 充值有礼
        div 充值卡兑换
  .second 
    //- TODO: add the banner
    router-link(to="") 充值图片
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MyAccount',
  computed: {
    ...mapState({ me: (s) => s.user.me }),
  },
}
</script>
<style lang='stylus' scoped>
.top
  height 220px
  background-color #F4FFF2
  border solid 1px #f6f6f6
  margin-bottom 1em
.second

.avatar
  width 150px
  height 150px
.block
  span:last-child
    color red
</style>