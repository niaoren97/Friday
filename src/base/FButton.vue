<template lang="pug">
button(:class="classes",@click="$emit('click')", :disabled="disabled", :style="extraStyle")
  slot
  slot(name="decoration")
</template>
<script>
export default {
  name: 'FButton',
  props: {
    extraStyle: {
      type: Object, 
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    big: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    gray: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      let c = this.big ? 'big' : ''
      c = `${c} ${this.primary ? 'primary' : ''} ${
        this.secondary ? 'secondary' : ''
      } ${this.gray ? 'gray' : ''}`
      return c
    },
  },
}
</script>
<style lang="stylus" scoped>
$primary = green
$secondary = #F08201

button
  color #fff
  border none
  outline none!important
  border-radius 5px
  font-size 16px
  *
    vertical-align middle
  &:focus, &:hover
    border solid 2px
  &:disabled
    cursor not-allowed
  &.big
    width 150px
    height 50px

  &.primary
    background-color $primary
    border-color  lime
  &.secondary
    background-color $secondary
    border-color orange
  &.gray
    background-color gray
    border-color #666
</style>