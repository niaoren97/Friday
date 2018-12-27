<template lang="pug">
.container
  .top
    .location 所在城市:{{city}}
    .tabbar  
      span(v-for="(item,index) in enter")
        span(v-if="index === 0") 你好,
        span {{item}}
</template>
<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      city:'郑州',
      out:'登录',
      enter:['131223131231', '退出' ,'我的订单','我的消息','我是商家']
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  background-color gray
  height 20px
.top
  overflow hidden
.location
  float left 
.tabbar
  float right
</style>