<template lang='pug'>
.wrap
  .addres
    .title 添加收货地址
    p.name
      span.start *
      span 收货人姓名:
      input(placeholder="请输入收货人姓名")
    p.city
      span.start *
      span 所在地区:
      input(placeholder="地区")
    p.des
      span.start *
      span 详细地址:
      input(placeholder="请输入详细地址")
    p.phone
      span.start *
      span 联系电话:
      input(placeholder="请输入手机号")
    .chose
      check-box
      span 设为默认地址
    .btn 
      .back 返回
      .save 保存


</template>
<script>
import CheckBox from "@/base/CheckBox.vue"
export default {
  components: [CheckBox]
}
</script>
<style lang='stylus' scoped>
.wrap
  width 100vw
  height 100vh
  background-color rgba(155,155,155,0.8)
  z-index 999999
  position absolute
  .addres
    width 670px
    height 440px
    border 3px solid #f2f2f2
    background-color #fff
    margin auto
    .title
      height 65px
      line-height 65px
      font-size 20px
      color green 
      border-bottom 1px solid #f2f2f2
      padding-left 30px
    .name,.city,.des,.phone
      span:nth-child(2) 
        margin-right 20px
      font-size 20px
      vertical-align middle
      .start
        color #f00
        padding-left 30px
        padding-right 5px
        vertical-align middle
    .name
      input
        width 330px
        height 35px
    .des
      input 
        width 460px
        height 35px
    .phone  
      input 
        width 150px
        height 35px   
    .chose 
      margin-left 165px
      check-box 
        margin-right 10px     
    .btn 
       display flex
       justify-content space-around
       align-items center
       margin-top 30px
      .back ,.save
        width 112px
        height 35px
        text-align center
        line-height 35px
        font-size 20px
        color #fff
        border-radius 5px
      .save 
        background-color #f08200
      .back
        background-color #999999
        
</style>