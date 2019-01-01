<template lang="pug">
.content.four
  .top 
    span 4
    img(src="/static/misc/404.png")
    span 4
  .sorry
    span.warn 抱歉!
    span 您访问的页面不存在!
  p 您要查看的网址可能已前往火星
  .buttons
    f-button(secondary, @click="back", big) 返回上一页面
    .space
    f-button(primary, @click="home", big) 返回网站首页
</template>
<script>
export default {
  name: 'NotFoundView',
  methods: {
    back() {
      this.$router.go(-1)
    },
    home(){
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus" scoped>
.four
  text-align center
  margin auto
  padding 100px 0
  .top
    // font-family  
    font-size 145px
    color green
    *
      vertical-align middle
      line-height 145px
  .sorry
    font-family "yuppy tc"
    font-size 60px
    .warn
      color #F08201
.buttons
  text-align center
  .space
    display inline-block
    width 100px
</style>