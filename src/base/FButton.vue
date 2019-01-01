<template lang="pug">
button(:class="classes",@click="$emit('click')")
  slot
</template>
<script>
export default {
  name: 'FButton',
  props: {
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
  border-radius 5px
  font-size 16px

  &.big
    width 150px
    height 50px

  &.primary
    background-color $primary

  &.secondary
    background-color $secondary

  &.gray
    background-color gray
</style>