<template lang="pug">
.container
  .title {{title}}
  slot
</template>
<script>
export default {
  name: 'Panel',
  props: ['title'],
}
</script>
<style lang="stylus" scoped>
.container
  border solid 1px #EFEFEF
  .title
    height 56px
    line-height 56px
    padding-left 1em
    
</style>