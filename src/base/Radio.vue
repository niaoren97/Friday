<template lang="pug">
.box(@click="$emit('input', !value); $emit('click')", )
  span(class='checked', v-if='value')
</template>
<script>
export default {
  name: 'Radio',
  props: ['checked',  'value']
}
</script>
<style lang="stylus" scoped>
@import '../assets/style/vars.styl'
.box
  display inline-block
  width 16px
  height 16px
  line-height 0
  padding 2px
  margin-right 10px
  border solid 1px $primary
  border-radius 50%
  vertical-align middle
.checked
  display inline-block
  width 10px
  height 10px
  background-color green
  border-radius 50%
</style>