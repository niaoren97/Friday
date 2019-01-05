<template lang="pug">
.container
  .content
    .top 
      .items
        router-link(:to="{name:'fresh'}")
          .item
            img(src="/static/logo/zpbz.png")
            span 优先保障
        router-link(:to="{name:'fresh'}")
          .item
            img(src="/static/logo/qcjk.png")
            span 全程监控
        router-link(:to="{name:'fresh'}")
          .item
            img(src="/static/logo/jxth.png")
            span 礼拜五特惠
        router-link(:to="{name:'fresh'}")
          .item
            img(src="/static/logo/zg.png")
            span 基地直供
        router-link(:to="{name:'fresh'}")
          .item
            img(src="/static/logo/clock.png")
            span 准时送达
  .line
  .content
      .middle
        router-link(:to="{name:'home'}")
          .l 
            img(src="/static/logo/logo.png")
            div 服务时间 8:00-22:00
              img(class="phone" src="/static/logo/telphone.png")
              span 400-800-8200
        .c 
          div 
            img(src="/static/logo/QR code.png")
            p 礼拜五官方微信
          div 
            img(src="/static/logo/QR code.png")
            p 礼拜五官方微信
        .r 
          dl 
            dt(href="") 关于礼拜五
            dd(href="") 新用户注册
            dd(href="") 新用户注册
            dd(href="") 新用户注册
          dl 
            dt(href="") 关于礼拜五
            dd(href="") 新用户注册
            dd(href="") 新用户注册
            dd(href="") 新用户注册
          dl 
            dt(href="") 关于礼拜五
            dd(href="") 新用户注册
            dd(href="") 新用户注册
            dd(href="") 新用户注册
          dl 
            dt(href="") 关于礼拜五
            dd(href="") 新用户注册
            dd(href="") 新用户注册
            dd(href="") 新用户注册
  .content
  .line
    .bottom 
      div 版权所有 © 礼拜五  保留所有权利 | 沪ICP备12042163 
      div 礼拜五  纵享品质 
</template>
<script>
export default {
  // name: "FooterSection"
};
</script>
<style lang="stylus" scoped>
.container
  height 200px
  border-top solid 1px #dddddd
  margin-top 30px
.content
  margin auto
.top
  padding 20px 0
.item
  display inline-block
  height 60px
  width 256px
  line-height 60px
  border-right 1px solid #dddddd
  padding 0 30px
  vertical-align middle
.item:last-child 
  border none
.item img
  width 40px
  height 40px
  margin-right 24px
  vertical-align middle

.item span
  font-size 24px
  vertical-align middle
.middle
  overflow hidden 
  padding 20px 0
.l
  font-size 20px
  float left
  margin-right 20px
.l>img  
  margin-bottom 40px
.phone
  margin 0 5px
  vertical-align middle
.c 
  float left
  overflow hidden
  margin 0 10px
.c div
  float left
  margin 0 10px
.c p 
  padding 0
  margin 0
.r 
  float right 
  overflow hidden
.r dl 
  float left 
  margin 0 20px
.r dl:.item:first-child
  margin 0  
.r dl:.item:last-child 
  margin 0
dl, dt, dd 
  margin 0
  padding 0
dl  
  text-align left 
dt 
  padding-bottom 10px
  font-size 16px
  color #333333
dd 
  padding 5px 0
  font-size 12px
  color #666666
.bottom 
  font-size 12px
  padding 20px 0
  div 
    margin auto
    text-align center
.bottom div:first-child
  color #000000
.bottom div:last-child
  color #f08200
  margin 5px 0
.line 
   border-top 1px solid #dddddd
   width 100%
dt:hover 
  color #f00
dd:hover 
  color #f08200
  
</style>