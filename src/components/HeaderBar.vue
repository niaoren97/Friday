<template lang="pug">
.container
  .content
    .top
      .location 所在城市:{{city}}
      .tabbar  
        span(v-if="loggedIn", class="tab")
          span.center 你好,
            router-link(to="/me") {{me.name}}
          span.logout(@click="logout") 退出
          span
            router-link(to="/me/orders") 我的订单
          router-link(to="/me/messages") 我的消息
          router-link(to="/") 我是商家
        
        //- span(v-for="(item,index) in out" v-if="islogin" class="tab")
        //-   span {{item}}
        span.auth(v-if="!loggedIn")
          router-link(to="/login")  登录
          router-link(to="/signup") 注册
        img(src="/static/logo/telphone.png")
        span 400-800-8820
</template>
<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "HeaderBar",
  data() {
    return {
      city:'郑州',
      out:'登录',
      enter:['131223131231', '退出' ,'我的订单','我的消息','我是商家']
    }
  },
  computed: {
    ...mapState({loggedIn: s => s.user.loggedIn,
    me: s => s.user.me})
  },
  methods:{
    ...mapActions({logout: 'user/logout'})
  }
}
</script>
<style lang="stylus" scoped>
.container
  background-color #eeeeee  
  height 36px
.content 
.top
  height 36px
  font-size 15px
  line-height 36px
  margin auto
  overflow hidden
.location
  float left 
.tabbar
  float right
.tabbar>img
  width 17px
  height 17px
.tab>span 
  margin 0 5px 
.center
  a
    color green
    &:hover
      text-decoration underline
.logout
  cursor pointer
.auth
  a
    margin-right 20px
</style>