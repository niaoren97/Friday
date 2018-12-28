<template lang="pug">
.modal(@click.self="$emit('modal')")
  slot
</template>
<script>
export default {
  name: 'Modal'
}
</script>
<style lang="stylus" scoped>
.modal
  position fixed
  top 0
  left 0
  width 100vw
  height 100v
  background-color rgba(30,30,30,0.3)
</style>