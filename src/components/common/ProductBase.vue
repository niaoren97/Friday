<template lang='pug'>
.product(:class="myclass")
  img(:src="product.images[0]")
  .txt
    .title {{product.name}}
    .description
        slot(name="description")
    .foot
        slot(name="foot")
</template>
<script>
export default {
  props: ["product", "myclass"]
};
</script>
<style lang='stylus' scoped>
.product
  width 305px
  height 435px
  background-color #f8f6f7
  box-sizing border-box
  font-size 16px
  text-align left

.product
  img
    width 305px
    height 305px
    background-color #f8f6f7

.txt
  padding 0 15px

.title, .number
  margin 5px 0

.title
  font-size 20px
  color #333333
  white-space nowrap
  text-overflow ellipsis
  overflow hidden

description
  font-size 14px
  color #8c8c8c
  white-space nowrap
  text-overflow ellipsis
  overflow hidden

.price
  margin 10px 0
  color #ff5757

.price span:first-child
  color #f08200

.price span:last-child
  color #ff6666
  font-size 20px

.slot
  display inline-block
</style>