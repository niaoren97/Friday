<template lang="pug">
.container.content
  img(src="/static/logo/logo.png" class='logo')
  .center
    div
      input(type='text' placeholder="请输入关键字进行搜索")
      span(class='search') 
        img(src='/static/logo/fangdajing.png')
    div(class='hot')
      span 热门: 奇异果  芒果  榴莲
  .right
    span(class='user') 
      img(src='/static/logo/user.png')
      span 个人中心
    span(class='cart')
      img(src='static/logo/cart.png')
      span 购物车
</template>
<script>
export default {
  name: "HeaderSection"
};
</script>
<style lang="stylus" scoped>
.container
  margin 20px auto
  overflow hidden
  height 100px
  line-height 100px

  .logo
    float left
    width 380px
    height 70px
    margin-right 100px

  .center
    float left
    margin-right 35px
    input
      background-color #fff
      width 400px
      height 40px
      padding-left 10px
      outline none
      text-decoration none
      border 1px solid #4b943d
    .search
      display inline-block
      box-sizing border-box
      width 40px
      padding 0 10px
      height 40px
      line-height 40px
      background-color #4b943d
      vertical-align middle
    .search img 
      vertical-align middle
  .right 
    float right 
      background-color #4b943d

      img
        width 30px
        height 30px

  .user, .cart
    box-sizing border-box
    border 1px solid #e5e5e5
    background-color #f2f2f2 
    color #666666
    height 40px
    line-height 40px
    font-size 20px
    padding 8px 10px
    vertical-align middle
    img 
      width 20px
      height 20px
      line-height 20px
      margin-right 10px
      vertical-align middle
  .user
    margin-right 20px
</style>