<template lang="pug">
.group
  .title.clearfix(@click="toggle")
    span.fl {{title}} 
    span.fr(v-if="!collapsed") ⌵
    span.fr(v-else) &gt;
  transition-expand
    .wrapper(v-show="!collapsed")
      slot
  //- transition(name="slide")
  //-   //- div(v-if="!collapsed", key='2')
  //-   div.t(v-show="!collapsed")
    //- slot(v-show="!collapsed")
</template>
<script>
export default {
  name: 'SideBarItemGroup',
  props: ['title'],
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
<style lang="stylus" scoped>
.group
  padding-left 20px
  line-height 36px
  .title
    height 36px
    font-weight bold
    padding-right 60px
.slide-enter-active, .slide-leave-active
  transition  3.5s
.slide-enter, .slide-leave-to
  // transform translate(0
  height 0
.slide-enter-to, .slide-leave
  height 200px
.t
  width 200px
  height 300px  
  background-color red
</style>