<template lang="pug">
.login-card
  .form-group.clearfix
    span 登录
    span.green.fr(@click="$emit('changeMethod')") 账号密码登录
      img(src="/static/misc/user.png")
  .form-group
    input(type="text", placeholder="请输入手机号", v-model="mobile", @input="checkMobile", :class="{'not-correct': !mobileCorrect}")
    img.correct(src="/static/logo/check.png", v-show="mobileCorrect")
  .hint( :class="{show: mobileHint}")
    img(src="/static/logo/alert.png")
    span {{mobileHint}}
  .form-group
    .form-group.short(:style="{display: 'inline-block'}")
      input(type="",v-model="verifyCode", @input="checkVerify", :class="{'not-correct': !verifyCorrect}",)
      img.correct(src="/static/logo/check.png", v-show="verifyCorrect", )
    verification(v-model="verifiedCode")
  .hint
  .form-group.with-decoration
    input(type='text', placeholder="手机验证码", v-model="mobileCode")
    button(@click="getMobileCode", ref="mobile", :disabled="down") 获取验证码
  .form-group.line.clearfix
    check-box(v-model="autoLogin")
    span.auto-login 自动登录
    span.forget.fr
      router-link(to="/retrieve-password") 忘记密码?
  .form-group.buttons
    f-button(big,secondary, @click="login", :extraStyle="{width: '133px'}") 登录
    router-link(to="/signup")
      f-button(big, primary, :extraStyle="{width: '133px'}" ) 会员注册
  p(:style="{paddingLeft: '40px', color: 'gray'}") 提示: 未注册用户自动成为礼拜五用户
  .dash
    .dashline
    span 用合作网站登录
  .icons
    img(src='/static/')
    img(src='/static/')
</template>
<script>
import Verification from '@/components/common/Verification'
export default {
  name: 'LoginCard',
  components: {
    Verification,
  },
  data() {
    return {
      method: 0,

      agree: true,
      down: false,
      mobile: '',
      mobileCorrect: false,
      verifiedCode: '',
      verifyCode: '',
      verifyCorrect: false,
      mobileCode: '',
      mobileCorrect: false,
      autoLogin: false,

      mobileHint:'',
      
    }
  },
  created() {
    this.mobileRe = /^\d{11}$/
  },
  methods: {
    login() {
      this.$store.dispatch('user/login', {
        mobile: this.mobile,
        password: this.password,
      })
    },
    checkMobile() {
      if (!this.mobileRe.test(this.mobile)) {
        this.mobileHint = '手机号码格式不正确'
        this.mobileCorrect = false
      } else {
        this.mobileHint = ''
        this.mobileCorrect = true
      }
    },
    getMobileCode() {
      let t = 59
      this.down = true
      const timer = setInterval(() => {
        if (t === -1) {
          this.down = false
          clearInterval(timer)
          return
        }
        this.$refs.mobile = `已发送(${t}s)`
        t--
      }, 1000)
    },
    checkMobile() {
      if (!/^\d{11}$/.test(this.mobile)) {
        this.mobileHint = '手机号码格式不正确'
        this.mobileCorrect = false
      } else {
        this.mobileHint = ''
        this.mobileCorrect = true
      }
    },
    checkVerify() {
      if (this.verifiedCode.toLowerCase() !== this.verifyCode.toLowerCase()) {
        this.verifyCorrect = false
      } else {
        this.verifyCorrect = true
      }
    },
  },
}
</script>
<style lang="stylus" scoped>
.login-card
  height 100%
  width 386px
  height 500px
  padding-top 30px
  box-shadow 0 0 3px rgba(30, 30, 30, 0.3)
  background-color #fff
.green
  color green
.form-group
  width 306px
  margin auto
  height 44px
  position relative
  .correct
    position absolute
    top 17px
    right 7px
  &.short
    width 110px
  input
    height 100%
    width 100%
    border solid 1px lightgray
    font-size 18px
    padding 7px
    &.not-correct
      outline-color red
.line
  height 55px
  line-height 55px
  .router-link
    color #F08201
  *
    vertical-align middle

.hint
  height 30px
  width 306px
  margin auto
  font-size 10px
  line-height 30px
  color red
  opacity 0

  &.show
    opacity 1

  img
    margin-right 5px

  *
    vertical-align middle
  
.auto-login
  margin-left 5px
.forget
  text-decoration underline
  a
    color #F08201
.dash
  position relative
  text-align center
  span
    padding 10px
    position relative
    background-color #fff
  .dashline
    position absolute
    top 50%
    border dashed 1px lightgray
    width 100%
.buttons
  display flex
  justify-content space-between
</style>