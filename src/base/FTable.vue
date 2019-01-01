<template lang="pug">
table.f-table
  slot
</template>
<script>
export default {
  name: 'FTable'
}
</script>
<style lang="stylus" scoped>
table.f-table
  width 100% 
  text-align center
  border-collapse collapse
  border solid 1px lightgray
  thead
    background-color lightgray
    height 45px
  tr
    height 50px
    border-bottom solid 1px lightgray
  tbody
    tr:hover
      background-color #F4FFF2
</style>