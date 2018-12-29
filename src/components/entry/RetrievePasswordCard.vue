<template lang="pug">
.container.regist
  .cont
    input(type='text' placeholder='请输入手机号' class='phone')
    br
    p(class='arm')
      img(src='/static/logo/alert.png')
      span 手机号格式不正确，请重新输入。
    input(type='text' placeholder='请输入密码（6-20位号码字符）' class='password')
    br
    p(class='arm')
      img(src='/static/logo/alert.png')
      span 密码格式不正确,清重新输入.
    input(type='text' placeholder='请再次输入密码确认' class='password')
    br
    p(class='arm')
      img(src='/static/logo/alert.png')
      span 两次密码不一致,请再次确认.
      //- 验证码
    input(class='yanzhengma' type='text' placeholder='验证码') 
    verification
    p(class='arm')
      img(src='/static/logo/alert.png')
      span 验证码不确认.
    //- 手机验证码
    .sjyanzhengma
      input( type='text' placeholder='手机验证码') 
      span(class="getCode") 获取验证码
      p(class='arm')
        img(src='/static/logo/alert.png')
        span 验证码不确认.
    .agree
      span(class='checkbox')
        span(class='check')
      span 我已阅读并同意《礼拜五用户协议》
    button(class='btn1') 登录
    button(class='btn2') 注册
</template>
<script>
import Verification from "@/components/common/Verification.vue";
export default {
  name: "RetrievePasswordCard",
  components: { Verification }
};
</script>
<style lang="stylus" scoped>
.container
  background-color #ffffff
  border 1px solid #d3d3d3

.regist
  overflow hidden
  margin auto
  width 390px
  height 500px
  padding 30px 40px

.cont
  input
    outline none
    text-decoration none
    padding-left 15px
    width 305px
    height 45px
    background-color #f9f9f9
    font-size 18px
    border 1px solid #d3d3d3

  .arm
    color #f00
    text-align left
    font-size 13px
    height 30px
    line-height 30px
    padding 0
    margin 0

    img
      width 12px
      height 12px
      margin-right 5px

  .yanzhengma
    width 113px
    height 44px
    outline none
    text-decoration none
    padding-left 15px
    text-align left
    background-color #f9f9f9

  .sjyanzhengma
    position relative

  .getCode
    position absolute
    right 10px
    background-color #498e3d
    // width 100px
    // height 34px
    color #ffffff
    font-size 16px
    // line-height 34px
    margin-top 6px
    padding 5px 10px

  .checkbox
    border 1px solid #498e3d
    border-radius 50%
    padding 0 3px
    margin-right 10px

  .check
    display inline-block
    width 10px
    height 10px
    border-radius 50%
    background-color #498e3d

  button
    outline none
    border none
    width 135px
    height 45px
    border-radius 5px
    color #ffffff
    font-size 20px
    line-height 45px
    margin-top 10px

  .btn1
    float left
    background-color #f08200

  .btn2
    float right
    background-color #498e3d
</style>