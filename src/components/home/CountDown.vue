<template lang='pug'>
.container
  .content.countdown
    .left 
      img(src="/static/logo/clock.png")
      span 礼拜五
      span Friday
    .right 
      span(class='juli') 距离开始
      span(class="time") 5天
      span(class="time") 15
      span(class='fenge') :
      span(class="time") 30
      span(class='fenge') :
      span(class="time") 00
      span(class='gengduo') 更多>>
</template>
<script>
export default {};
</script>
<style lang='stylus'scoped>
.container
  width 100vw
.countdown
  position relative
  height 100px
  overflow hidden
  background-color #ebffe8
  padding  0 20px
  border-bottom 1px solid #498e3d

.left
  float left
  margin-top 27px

  img
    width 40px
    height 40px
    vertical-align middle
    margin 0 10px

  span:nth-child(2)
    font-size 30px
    color #498e3d
    font-family 'Regular'
    vertical-align middle
    margin 0 10px

  span:nth-child(3)
    font-size 22px
    vertical-align middle
    color #b1b8b0
.right
  margin-top 27px
  float right
  line-height 22px
  
.juli
  font-size 30px
  color #498e3d
  font-family 'Regular'
  margin-right 10px
.time
  border-radius 5px
  box-sizing border-box
  background-color #f08200
  display inline-block
  height 50px
  padding  0 10px
  margin 0 10px
  font-size 22px
  line-height 50px
  color #fff
.fenge 
  margin 0
  color #f08200
  font-size 22px
  line-height 50px
  height 50px
.gengduo
  font-size 20px
  color #9aa399
</style>