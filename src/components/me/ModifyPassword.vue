<template lang="pug">
panel(title="修改密码")
  .modify
    .form-group
      input(readonly, :value="me.name || me.mobile")
    .form-group
      input(placeholder="请输入密码", v-model="password")
    .form-group
      input(placeholder="请再次输入密码确认", v-model="passwordAgain")
    .form-group
      input.self(placeholder="验证码", v-model="verifyCode")
      Verification
    .form-group.with-button
      input(placeholder="手机验证码", v-model="mobileCode")
      button(@click="getMobileCode", :disabled="countingDown", ref="mobile") 获取验证码
    f-button(big, secondary, @click="submit", :disabled="!submitable") 提交修改
</template>
<script>
import { mapState } from 'vuex';
import { clearInterval } from 'timers';
import Verification from '@/components/common/Verification.vue'
export default {
  name: 'ModifyPassword',
  data() {
    return {me: {name: 'sdf', mobile: '13681647716', },
    password:'',
    passwordAgain: '',
    verifyCode: '',
    mobileCode: '',
    countingDown: false,}
  },
  computed: {
    ...mapState({me: s=>s.user.me}),
    submitable() {
      const c = /\w{6,16}/
      // TODO:
      return c.test(this.password) && c.test(this.passwordAgain) && this.password === this.passwordAgain
      && this.verifyCode === 3
    }
  },
  methods: {
    getMobileCode() {
      this.countingDown = true
      let t = 59
      const timer = setInterval(()=>{
        if(t===-1) {
          clearInterval(timer)
          this.countingDown = false
          this.$refs.mobile.innerText = '获取验证码'
          return
        }
        this.$refs.mobile.innerText = `已发送(${t}s)`
        t--
      }, 1000)
    },
    submit() {

    }
  },
  components:{Verification}
}
</script>
<style lang='stylus' scoped>
.modify
  padding 40px
  .form-group
    height 44px
    width 310px
    margin-bottom 40px
    &.with-button
      position relative
      button
        position absolute
        right 10px
        top 7px
        border-radius none
        background-color green
        color #fff
        width 100px
        height 30px
        &:disabled
          background-color gray
  input
    border solid 1px lightgray
    background-color #F9F9F9
    line-height 44px
    padding 14px
    width 100% 
    height 100%
  .self
      width 40%
  Verification
    display inline
    width 50%
</style>