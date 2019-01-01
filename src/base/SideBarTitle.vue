<template lang="pug">
.title {{title}}
</template>
<script>
export default {
  name: 'SideBarTitle',
  props: ['title'],
}
</script>
<style lang="stylus" scoped>
.title
  height 60px
  border-bottom solid 1px #eee
  padding-left 20px
  line-height 60px
  font-weight bold
  font-size 20px
</style>