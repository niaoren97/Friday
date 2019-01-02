<template lang="pug">
.signup-card
  //- form-group(type="text", placeholder="请输入手机号", v-model="mobile",
  //-   :hint="mobileHint", :correct="mobileCorrect")
  .form-group
    input(type="text", placeholder="请输入手机号", v-model="mobile", @input="checkMobile", :class="{'not-correct': !mobileCorrect}")
    img.correct(src="/static/logo/check.png", v-show="mobileCorrect")
  .hint( :class="{show: mobileHint}")
    img(src="/static/logo/alert.png")
    span {{mobileHint}}
  .form-group
    input(type="password", placeholder="请输入密码(6-20位号码字符)",v-model="password", @input="checkPassword", :class="{'not-correct': !passwordCorrect}")
    img.correct(src="/static/logo/check.png", v-show="passwordCorrect")
  .hint(:class="{show: passwordHint}")
    img(src="/static/logo/alert.png")
    span {{passwordHint}}
  .form-group
    input(type="password", placeholder="请再次输入密码确认",v-model="passwordAgain", @input="checkPasswordAgain", :class="{'not-correct': !passwordAgainCorrect}")
    img.correct(src="/static/logo/check.png", v-show="passwordAgainCorrect")
  .hint(:class="{show: passwordAgainHint}")
    img(src="/static/logo/alert.png")
    span {{passwordAgainHint}}
  .form-group
    .form-group.short(:style="{display: 'inline-block'}")
      input(type="",v-model="verifyCode", @input="checkVerify", :class="{'not-correct': !verifyCorrect}",)
      img.correct(src="/static/logo/check.png", v-show="verifyCorrect", )
    verification(v-model="verifiedCode")
  .hint
  //- .hint(v-if="verifyHint")
  //-   img(src="/static/logo/alert.png")
  //-   span {{verifyHint}}
  .form-group.with-decoration
    input(type='text', placeholder="手机验证码", v-model="mobileCode")
    button(@click="getMobileCode", ref="mobile", :disabled="down") 获取验证码
  .form-group.agree
    radio(v-model="agree")
    span 我已阅读并同意《星期五用户协议》
  .form-group.buttons
    f-button(big, secondary, @click="signup", :disabled="!signupable || signuping", :extraStyle="{width: '133px'}") 注册
      template(slot="decoration", v-if="signuping")
        img.cog(src="/static/misc/cog.png")
    router-link(to="/login")
      f-button(big, primary,:extraStyle="{width: '133px'}" ) 登录
</template>
<script>
import Verification from '@/components/common/Verification'
import { mapState } from 'vuex'
import axios from 'axios'
function msgFormater( msg) {
  let lis = Object.keys(msg).map(k => {
    return `<ul>${msg[k].map(i => `<li>${i}</li>`).join('')}</ul>` 
  }).join('')
  return lis
}
export default {
  name: 'SignupCard',
  components: {
    Verification,
  },
  data() {
    return {
      signuping: false,

      agree: true,
      down: false,
      mobileCode: '',
      verifyCode: '',
      verifiedCode: '',
      mobile: '',
      password: '',
      passwordAgain: '',
      // veirfy
      mobileHint: '',
      passwordHint: '',
      passwordAgainHint: '',
      verifyHint: '',
      mobileCorrect: false,
      passwordCorrect: false,
      passwordAgainCorrect: false,
      verifyCorrect: false,
    }
  },
  created() {
    this.pwRe = /^\w{6,20}$/
    this.mobileRe = /^\d{11}$/
  },
  computed: {
    // TODO: make the check more effecient
    signupable() {
      const r1 = /^\d{11}$/
      const r2 = /^\w{6,20}$/
      return (
        r1.test(this.mobile) &&
        r2.test(this.password) &&
        r2.test(this.passwordAgain) &&
        this.password === this.passwordAgain &&
        this.verifyCode.toLowerCase() === this.verifiedCode.toLowerCase() &&
        this.agree
      )
    },
  },
  methods: {
    getMobileCode() {
      let t = 60
      this.down = true
      const f = () => {
        if (t === 0) {
          this.down = false
          clearInterval(timer)
          return
        }
        this.$refs.mobile.textContent = `已发送(${t}s)`
        t--
      }
      const timer = setInterval(f, 1000)
      f()
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
    checkPassword() {
      if (!/^\w{6,20}$/.test(this.password)) {
        this.passwordHint = '密码格式不正确'
        this.passwordCorrect = false
        return
      }
      this.passwordCorrect = true
      this.passwordHint = ''
    },
    checkPasswordAgain() {
      if (this.password !== this.passwordAgain) {
        this.passwordAgainHint = '密码不一致'
        this.passwordAgainCorrect = false
        return
      }
      this.passwordAgainCorrect = true
      this.passwordAgainHint = ''
    },
    checkVerify() {
      if (this.verifiedCode.toLowerCase() !== this.verifyCode.toLowerCase()) {
        this.verifyCorrect = false
      } else {
        this.verifyCorrect = true
      }
    },
    signup() {
      // this.$toast.present({message: 'hello tosts'})
      this.signuping = true
      axios
        .post('/api/user/signup', {
          mobile: this.mobile,
          password: this.password,
        })
        .then((res) => {
          this.signuping = false
          if (res.data.token) {
            // success!
            this.$toast.present({
              message: '注册成功! 3秒后前往登录页面',
              action: { title: '立即前往', fn: () => {this.$router.push('/login')} },
            })
          } else {
            this.$toast.present({
              message: '注册失败' + msgFormater(res.data)
            })
          }
        })
        .catch((err) => {
          this.signuping = false
        })
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
  position relative

  &.short
    width 110px

  &.with-decoration
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

    &.not-correct
      outline-color red

    &.short
      width 110px

  .correct
    position absolute
    top 17px
    right 7px

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

.cog
  animation rotate 1s infinite linear

.buttons
  display flex
  justify-content space-between
</style>
