<template lang="pug">
.links
  router-link(:to="prev()", :class="{disabled:prev()==='#'}") &lt;
  router-link(:to="url(1)") 1
  span(v-if="current-first > max/2") ...
  //- from 
  router-link(v-for="l in links", :key="l",
    :to="url(l)") {{l}}
  span(v-if="last-current > max/2") ...
  router-link(:to="url(last)") {{last}}
  router-link(:to="next()", :class="{disabled: next()==='#'}") &gt;
  span
    input(v-model='page', type="number") 
    span /{{last}}
  f-button(secondary, @click="jump") 跳转
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
    },
    base: String,
  },
  // ['current', 'last', 'first', 'is', 'base', 'max'],
  data() {
    return {page: this.current}
  },
  computed: {
    links() {
      const w = (this.max-2)/2
      return range(Math.max(Math.ceil(this.current-w), this.first+1), 
        Math.min(Math.ceil(this.current+w), this.last))
    }
  },
  methods: {
    url(x) {
      let u = this.base
      if(this.base[this.base.length-1] === '/')
        u = this.base.substring(0, this.base.length-1)
      if(/\?/.test(this.base)) // has query
        return `${u}&page=${x}`
      // return `${this.base.substring(0, this.base.length-1)}?page=${x}`
      return  `${u}?page=${x}`
    },
    prev() {
      return this.current - 1 < this.first ? '#': this.url(this.current-1)
    },
    next() {
      return this.current+1 > this.last ? '#' : this.url(this.current+1)
    },
    jump() {
      this.$router.push(this.url(this.page))
    }
  }
}
</script>
<style lang="stylus" scoped>
.links
  text-align center
  a
    padding 6px 16px
    font-size 16px
    line-height 1
    background-color green
    color #fff
    text-align center
    margin-right 30px
    &.disabled
      background-color gray
.active
  background-color #498E3D
button
  height 30px
  margin-left 10px
  border-radius 0
input
  width 50px
  height 30px
  border solid 1px lightgray
</style>