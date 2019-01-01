<template lang="pug">
.sidebar(:class="extraClass")
  slot
</template>
<script>
// import SideBarItem from 'module'
export default {
  name: 'SideBar',
  props: ['extraClass'],
}
</script>
<style lang="stylus" scoped>
.sidebar
  border solid 1px #eee
  width 170px

</style>