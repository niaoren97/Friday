<template lang="pug">
.container.content
  router-link(to="/")
    img(src="/static/logo/logo.png" class='logo')
  span(v-if="isEntry") | {{subtitle}}
  div(v-else)
    search-box
    tool-box(v-if="loggedIn")
</template>
<script>
import SearchBox from '@/components/header/SearchBox'
import ToolBox from '@/components/header/ToolBox'
import {mapState} from 'vuex'
export default {
  name: "HeaderSection",
  components: {
    SearchBox,
    ToolBox,
  },
  computed: {
    ...mapState({loggedIn: s=>s.user.loggedIn}),
    page() {
      return this.$route.path.split('/')[1]
    },
    subtitle() {
      const m = {
        login: '登录',
        signup: '注册',
        'retrieve-password': '找回密码',
      }
      return m[this.page]
    },
    isEntry() {
      return ['login', 'signup', 'retrieve-password'].indexOf(this.page) > -1
    }
  }
};
</script>
<style lang="stylus" scoped>
.container
  margin 20px auto
  overflow hidden
  height 100px
  line-height 100px

  .logo
    float left
    width 380px
    height 70px
    margin-right 100px

  .center
    float left
    margin-right 35px
    input
      background-color #fff
      width 400px
      height 40px
      padding-left 10px
      outline none
      text-decoration none
      border 1px solid #4b943d
    .search
      display inline-block
      width 40px
      height 40px
      line-height 40px
      background-color #4b943d
      vertical-align middle
    .search img 
      vertical-align middle
  .right 
    float right 
      background-color #4b943d

      img
        width 30px
        height 30px

  .user, .cart
    box-sizing border-box
    border 1px solid #e5e5e5
    background-color #f2f2f2 
    color #666666
    height 40px
    line-height 40px
    font-size 20px
    padding 8px 10px
    vertical-align middle
    img 
      width 20px
      height 20px
      line-height 20px
      margin-right 10px
      vertical-align middle
  .user
    margin-right 20px
</style>