<template lang="pug">
.container
  .wrapper
    input(placeholder="请输入关键字进行搜索",v-model="keyword", @keydown.enter="search")
    .icon(@click="search")
      img(src="/static/logo/fangdajing.png")
</template>
<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    search() {
      // TODO:
      // this.$router.push('/search')
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  width 50px
  height 40px
  border solid 2px #4B943D
  .icon
    width 40px
    height 40px
    background-color #4B943D
</style>