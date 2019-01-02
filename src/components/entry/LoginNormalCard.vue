<template lang="pug">
.normal-card
  .login-message(ref="loginMessage")
  .form-group.clearfix
    span 账户密码登录
    span.green.fr(@click="$emit('changeMethod')") 手机快速登录
      img(src="/static/misc/user.png")
  .form-group
    input(type="text", placeholder="请输入手机号", v-model="mobile", @input="checkMobile", :class="{'not-correct': !mobileCorrect}")
    img.correct(src="/static/logo/check.png", v-show="mobileCorrect")
  .hint( :class="{show: mobileHint}")
    img(src="/static/logo/alert.png")
    span {{mobileHint}}
  .form-group
    input(type="password", placeholder="密码", v-model="password", @input="checkPassword", :class="{'not-correct': !passwordCorrect}")
    img.correct(src="/static/logo/check.png", v-show="passwordCorrect")
  .hint( :class="{show:passwordHint}")
    img(src="/static/logo/alert.png")
    span {{passwordHint}}
  .form-group.line.clearfix
    check-box(v-model="autoLogin")
    span.auto-login 自动登录
    span.forget.fr
      router-link(to="/retrieve-password") 忘记密码?
  .form-group.buttons
    f-button(big,secondary,
      :disabled="!loginable", @click="login", :extraStyle="{width: '133px'}") 登录
      template(slot="decoration", v-if="logging")
        img.cog(src="/static/misc/cog-white.png")
    router-link(to="/signup")
      f-button(big, primary, :extraStyle="{width: '133px'}" ) 会员注册
    
</template>
<script>
import { mapState } from 'vuex'
import { setTimeout } from 'timers'
export default {
  name: 'LoginNormalCard',
  data() {
    return {
      mobile: '',
      password: '',
      mobileCorrect: false,
      passwordCorrect: false,
      mobileHint: '',
      passwordHint: '',
      autoLogin: false,
    }
  },
  created() {
    this.mobile = window.localStorage.getItem('user.mobile') || ''
    this.password = window.localStorage.getItem('user.password') || ''
    if(this.mobile) {
      this.checkPassword(this.password)
      this.checkMobile(this.mobile)
    }
    if(this.loginable) {
      this.autoLogin = true
      this.login()
    }
  },
  computed: {
    ...mapState({ user: (s) => s.user }),
    logging() {
      return this.user.logging
    },
    loginStatus() {
      return this.user.loginStatus
    },
    message() {
      return this.user.loginMessage
    },
    redirect() {
      return this.$route.query.redirect
    },
    loginable() {
      return this.passwordCorrect && this.mobileCorrect
    },
  },
  watch: {
    logging() {},
    loginStatus() {
      if (this.loginStatus === 'ok') {
        // redirect!
        this.$router.push(this.redirect || '/')
      }
    },
    message() {
      if (this.message) {
        this.$refs.loginMessage.innerText = this.message
        setTimeout(() => {
          this.$refs.loginMessage.innerText = ''
        }, 2500)
      }
    },
  },
  methods: {
    login() {
      this.$store.dispatch('user/login', {
        mobile: this.mobile,
        password: this.password,
        redirect: this.redirect,
        method: 'normal',
        autoLogin: this.autoLogin,
      })
    },
    checkPassword() {
      if (this.password.trim()) {
        this.passwordCorrect = true
        this.passwordHint = ''
      } else {
        this.passwordCorrect = false
        this.passwordHint = '密码不能为空'
      }
    },
    checkMobile() {
      if (/^\d{11}$/.test(this.mobile)) {
        this.mobileCorrect = true
        this.mobileHint = ''
      } else {
        this.mobileCorrect = false
        this.mobileHint = '手机号码格式不正确'
      }
    },
  },
}
</script>
<style lang="stylus" scoped>
.normal-card
  height 100%
  width 386px
  height 500px
  padding-top 30px
  box-shadow 0 0 3px rgba(30, 30, 30, 0.3)
  background-color #fff
  position relative

.login-message
  position absolute
  width 100%
  top 0
  // padding 2px
  line-height 20px
  background-color #F08201
  color #fff
  text-align center

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

.line
  height 55px
  line-height 55px

  .router-link
    color #F08201

  *
    vertical-align middle

.auto-login
  margin-left 5px

.forget
  text-decoration underline

  a
    color #F08201

.cog
  animation rotate infinite 1s linear
  width 20px
  height 20px

.buttons
  display flex
  justify-content space-between

@keyframes rotate
  from
    transform rotateZ(0deg)

  to
    transform rotateZ(360deg)
</style>