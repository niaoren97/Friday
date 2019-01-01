<template lang="pug">
.item(@click="$emit('click')")
  router-link(v-if="to", :to="to") {{title}}
  span(v-else) {{title}}
</template>
<script>
export default {
  name: 'SideBarItem',
  props: ['title', 'to', ]
}
</script>
<style lang="stylus" scoped>
.item
  height 36px
  line-height 36px
</style>