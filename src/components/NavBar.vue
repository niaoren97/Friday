<template lang='pug'>
.nav
  span
    a 分类
  span 首页
  span 同城
  span 礼拜五
  span 积分商城
  span 导航+
</template>
<script>
export default {

}
</script>
<style lang='stylus'scoped>
.nav  
  box-sizing border-box
.nav>span 
  display inline-block
  box-sizing border-box
  // width: 170px;
  padding 15px 60px
  // margin 15px 0
  font-size 16px
  border-right 1px solid #dddddd
.nav>span:last-child
  border none
.nav span:hover
  background-color #f08200
  color #fff
</style>