<template lang="pug">
.links
  router-link(:to="prev()") &lt;

  router-link(:to="next()") &gt;
</template>
<script>
export default {
  name: 'Paginator',
  props: {
    current: Number,
    last: Number,
    first: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 5,
    }
  },
  // ['current', 'last', 'first', 'is', 'base', 'max'],
  computed: {

  },
  methods: {
    url(x) {
      if(this.base[this.base.length-1] === '/')
      return `${this.base.substring(0, this.base.length-1)}?page=${x}`
      return  `${this.base}?page=${x}`
    },
    prev() {
      return this.url(this.current-1)
    },
    next() {
      return this.url(this.current+1)
    }
  }
}
</script>
<style lang="stylus" scoped>
.active
  background-color #498E3D
</style>