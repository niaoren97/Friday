<template lang="pug">
.container.regist
  input(type='text' placeholder='请输入手机号' class='phone')
  br
  p(class='arm') 手机号格式不正确，请重新输入。
  input(type='text' placeholder='请输入密码' class='password')
  br

  
</template>
<script>
export default {
  name: "RetrievePasswordCard"
};
</script>
<style lang="stylus" scoped>
.container
  width 390px
  height 500px
  background-color #ffffff
  border 1px solid #d3d3d3

.regist
  margin auto

  input
    outline none
    padding-left 15px
    margin-top 30px
    width 305px
    height 45px
    background-color #f9f9f9
    // color #e1e1e1
    font-size 18px
    border 1px solid #d3d3d3
  .arm
    text-align left 
    font-size 13px
</style>