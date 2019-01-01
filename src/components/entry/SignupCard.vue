<template lang="pug">
.signup-card
  .form-group
    input(type="text", placeholder="请输入手机号", v-model="mobile")
  .hint
  .form-group
    input(type="password", placeholder="请输入密码(6-20位号码字符)",v-model="password")
  .hint
  .form-group
    input(type="password", placeholder="请再次输入密码确认",v-model="passwordAgain")
  .hint
  .form-group
    input(type="")
  .hint
  .form-group.with-decoration
    input(type='text', placeholder="手机验证码", v-model="mobileCode")
    button(@click="getMobileCode", ref="mobile", :disabled="down") 获取验证码
  .form-group.agree
    check-box(:checked="agree", @click="agree = !agree")
    span 我已阅读并同意《星期五用户协议》
  .form-group.buttons
    f-button(big, secondary, @click="", :disabled="!signupable") 注册
    router-link(to="/login")
      f-button(big, primary ) 登录
</template>
<script>
export default {
  name: 'SignupCard',
  data() {
    return { agree: true, down: false,
      mobileCode: '',
      mobile: '',
      password: '',
      passwordAgain: ''
    }
  },
  computed: {
    signupable() {
      const r1 = /^\d{11}$/
      const r2 = /^\w{6,20}$/
      return  r1.test(this.mobile) && r2.test(this.password) 
      && r2.test(this.passwordAgain) && this.password === this.passwordAgain
      // && 
    }
  },
  methods: {
    getMobileCode() {
      let t = 59
      this.down = true
      const timer = setInterval(() => {
        if (t === -1) {
          this.down = false
          clearInterval(timer)
          return
        }
        this.$refs.mobile.textContent = `已发送(${t}s)`
        t--
      }, 1000)
    },
  },
}
</script>
<style lang="stylus" scoped>
.signup-card
  height 100%
  width 386px
  height 500px
  border solid 1px lightgray
  padding-top 30px
  box-shadow 0 0 3px rgba(30, 30, 30, 0.3)
  background-color #fff

.form-group
  width 306px
  margin auto
  height 44px
  &.with-decoration
    position relative
    button
      position absolute
      width 100px
      height 30px
      background-color green
      right 7px
      top 7px
      border-radius 0
      color #fff
      &:disabled
        background-color gray
  &.agree
    padding 14px 0
    *
      vertical-align middle
    span
      font-size 12px
  input
    height 100%
    width 100%
    border solid 1px lightgray
    font-size 18px
    padding 7px

.hint
  height 30px

.buttons
  display flex
  justify-content space-between
</style>
