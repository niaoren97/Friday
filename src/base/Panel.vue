<template lang="pug">
.panel
  .panel-title
    slot(name="title")
      span {{title}}
  slot
</template>
<script>
export default {
  name: 'Panel',
  props: ['title'],
}
</script>
<style lang="stylus" scoped>
.panel
  border solid 1px #eee
  .panel-title
    height 56px
    line-height 56px
    padding-left 1em
    border-bottom solid 1px #eee
    
</style>