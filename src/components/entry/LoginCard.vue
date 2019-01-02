<template lang="pug">
div
  login-mobile-card(v-if='method===0', @changeMethod="method=1") 
  login-normal-card(v-else, @changeMethod="method=0")
</template>
<script>
import LoginNormalCard from './LoginNormalCard'
import LoginMobileCard from './LoginMobileCard'
export default {
  name: 'LoginCard',
  components: {
    LoginNormalCard,
    LoginMobileCard,
  },
  data() {
    return {
      method: 1,
    }
  },
  methods: {
    // a() {
    //   this.method = 0;
    //   console.log('to 0')
    // }
  }
  // render() {

  // }
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

  input
    height 100%
    width 100%
    border solid 1px lightgray
    font-size 18px
    padding 7px

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

.buttons
  display flex
  justify-content space-between
</style>