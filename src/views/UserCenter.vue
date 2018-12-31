<template lang="pug">
.content.user-center.clearfix
  side-bar(extraClass="side")
  .main
    keep-alive
      router-view
</template>
<script>
export default {
  name: 'UserCenter',
}
</script>
<style lang="stylus" scoped>
.user-center
  padding-top 40px
.side
  float left
.main
  float right
  width 1084px
</style>