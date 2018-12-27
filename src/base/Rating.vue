<template lang="pug">
.stars
  .star(v-for="i in [0,1,2,3,4]", :key="i")
</template>
<script>
export default {
  name: 'Rating',
  props: ['star', 'still'],
  computed: {
    isStill() {
      return this.still === undefined ? true : this.still;
    }
  }
}
</script>
<style lang="stylus" scoped>
.stars
  .star
    color gray
</style>