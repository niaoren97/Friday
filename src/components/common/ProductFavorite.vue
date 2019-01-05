<template lang="pug">
product-base(:product="product")
  template(slot="description")
    span {{product.digest}}
    .price 
      span.current_price.one ${{product.current_price}}
      span.original_price.two ${{product.original_price}}
      img.cart(src="/static/logo/cart2.png")
    .collect 取消收藏
</template>
<script>
import ProductBase from './ProductBase'
export default {
  name: 'ProductFavorite',
  props: ['product'],
  components: {
    ProductBase,
  },
}
</script>
<style lang="stylus" scoped>
.price 
  .current_price.one
    font-size 20px
    color #f16252
    margin-right 20px
  .original_price.two
    font-size 16px
    color #333333
    margin-right 100px
    text-decoration line-through
  .cart
    width 25px
    height 20px
.collect
  font-size 20px 
  text-align center
  color #ffffff
  width 150px
  height 35px
  line-height 35px
  border-radius 10px
  background-color #4b943d
  margin 20px auto 
</style>