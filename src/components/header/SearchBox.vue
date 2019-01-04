<template lang="pug">
.search-box
  .wrapper.clearfix
    input.fl(placeholder="请输入关键字进行搜索",v-model="q", @keydown.enter="search")
    .icon.fl(@click="search")
      img(src="/static/logo/fangdajing.png")
  .keywords
    span 热门:
    span.keyword(v-for="k in keywords", :key="k") {{k}}
</template>
<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      keywords: ['a', 'bla,', 'c'],
      q: ''
    }
  },
  methods: {
    search() {
      this.$router.push({name: 'search', query: {q: this.q}})
    }
  }
}
</script>
<style lang="stylus" scoped>
.search-box
  vertical-align middle
  width 500px
  display inline-block
  position relative
  margin-right 20px
.keywords
  position absolute
  bottom -25px
  line-height 1.2
  color gray
  .keyword
    padding 0 1em
.wrapper
  width 500px
  height 40px
  input
    outline none
    width 460px
    height 40px
    padding 0 20px
    border solid 2px #4B943D
    font-size 16px
  .icon
    width 40px
    height 40px
    line-height 40px
    text-align center
    background-color #4B943D
    cursor pointer
    img
      vertical-align middle
</style>