<template lang="pug">
.check-box(@click="$emit('input', !value)", :class="{checked: value}")
  .inner(v-show="value")
</template>
<script>
export default {
  name: 'CheckBox',
  props: ['value'],
  // data() {
  //   return {inValue: this.value}
  // }

}
</script>
<style lang="stylus" scoped>
.check-box
  display inline-block
  width 14px
  height 14px
  border solid 1px #D3D3D3
  line-height 0
  padding 2px
  &.checked
    border-color green
  .inner
    width 8px
    height 8px
    background-color green
</style>