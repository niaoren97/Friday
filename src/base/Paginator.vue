<template lang="pug">
.links
  router-link(:to="prev()") &lt;
  router-link(:to="url(1)") 1
  span(v-if="current-first > max/2") ...
  //- from 
  router-link(v-for="l in links", :key="l",
    :to="url(l)") {{l}}
  span(v-if="last-current > max/2") ...
  router-link(:to="url(last)") {{last}}
  router-link(:to="next()") &gt;
</template>
<script>
import {range} from 'lodash'
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
    links() {
      const w = (this.max-2)/2
      return range(Math.ceil(this.current-w), Math.floor(this.current+w))
    }
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