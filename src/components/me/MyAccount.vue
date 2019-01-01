<template lang="pug"> 
.container
  .top.clearfix
    .fl
      img.avatar(v-if="!me.avatar",src="/static/misc/avatar.png")
      img.avatar(v-else,:src="me.avatar")
      span.hello 您好,
        span(v-if="me.name") {{me.name}}
        span(v-else) {{me.mobile | safe-phone}}
    .fr.right
      .block
        div 当前积分
        div.point {{me.points || 0}} 
      .block
        div 我的钱包
        div.point {{(me.money||0) | currency('cn')}} 
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
  border solid 1px #eee
  margin-bottom 1em
  padding 40px
// .second

.avatar
  width 140px
  height 140px
  margin-right 40px
  vertical-align middle
.hello
  vertical-align middle
  span
    color red
.block
  display inline-block
  vertical-align middle
  margin-left 80px
  span:last-child
    color red
  .point
    color red
.right
  padding 35px 0
</style>