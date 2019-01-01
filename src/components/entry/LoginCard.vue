<template lang="pug">
.login-card
  .form-group
    input(type="text", placeholder="请输入手机号")
  .hint
  .form-group
    input(type="password", placeholder="请输入密码(6-20位号码字符)")
  .hint
  .form-group
    input(type="password", placeholder="请再次输入密码确认")
  .hint
  .form-group
    input(type="")
  .form-group
    input(type='text', placeholder="手机验证码", v-model="mobileCode")
    button(@click="getMobileCode", ref="mobile", :disabled="down") 获取验证码
  .form-group
    check-box(:checked="agree", @click="agree = !agree")
  .form-group
    f-button(big, primary, @click="")
</template>
<script>
export default {
  name: 'LoginCard',
  data() {
    return {agree: true,
    down: false
    }
  },
  methods: {
    getMobileCode() {
      let t = 59
      this.down = true
      const timer = setInterval(()=> {
        if(t=== -1)
        {
          this.down = false
          clearInterval(timer)
          return
        }
        this.$refs.mobile = `已发送(${t}s)`
        t--
      }, 1000)
    }
  }
}
</script>
<style lang="stylus" scoped>
.login-card
  height 100%
  width 386px
  padding-top 30px
  box-shadow 0 0 3px rgba(30, 30, 30, 0.3)
  background-color #fff
.form-group
  width 306px
  margin auto
  height 44px
  input
    height 100%
    width 100%
    border solid 1px lightgray
    font-size 18px
    padding 7px
.hint
  height 30px
</style>