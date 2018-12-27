<template lang="pug">
.box(@click="$emit('click')")
</template>
<script>
export default {
  name: 'CheckBox',
  props: ['checked']
}
</script>
<style lang="stylus" scoped>
@import '~assets/style/vars.styl'
.box
  width 16px
  height 16px
  border solid 1px gray
  &.checked
    border-color $primary
</style>