<template lang="pug">
.box(@click="$emit('click')")
  span(ref='check' class='check' v-if='check')
</template>
<script>
export default {
  name: 'CheckBox',
  props: ['checked']
}
</script>
<style lang="stylus" scoped>
@import '../assets/style/vars.styl'
.box
  width 16px
  height 16px
  border solid 1px $primary
  bordr-radius 50%
  &.checked
    border-color $primary
    // ---------------------------------------
.checkbox
    display inline-block
    width 16px
    height 16px
    line-height 0
    border 1px solid #498e3d
    border-radius 50%
    padding 2px
    margin-right 10px
    vertical-align middle

  .check
    display inline-block
    width 10px
    height 10px
    border-radius 50%
    border 0
    background-color #498e3d
</style>