<template lang="pug">
.product(:product="product")
  router-link(:to="{name: 'product', params: {id: product.id}}") 
    img(:src="product.images[0]")
  .txt
    .title {{product.name}}
    .description {{product.digest}}
    .price 
      span.current_price.one 限时特惠:${{product.current_price}}
      span.original_price.two 原价: ${{product.original_price}}
    .exchange(@click="tog()", :class="{ok:n}") {{txt}}
</template>
<script>
import ProductBase from "./ProductBase";
export default {
  name: "ProductFavorite",
  data() {
    return {
      txt: "立即抢购",
      n:true
    };
  },
  props: ["product"],
  components: {
    ProductBase
  },
  methods: {
    tog() {
      this.txt = "已经抢光";
      this.n=false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.product
  width 305px
  height 435px
  background-color #f8f6f7
  box-sizing border-box
  font-size 16px
  text-align center

  img
    width 305px
    height 250px
    background-color #f8f6f7

.txt
  padding 0 15px

.title, .number
  font-size 20px
  color #333333
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

.description
  text-align center
  margin 10px 0
  overflow hidden
  white-space nowrap
  text-overflow ellipsis

.price
  text-align center
  color #808080

  .current_price.one
    font-size 20px
    color #f16252
    margin-right 20px

  .original_price.two
    font-size 16px
    color #333333
    text-decoration line-through

  .cart
    width 25px
    height 20px

.exchange
  font-size 20px
  text-align center
  color #ffffff
  width 150px
  height 35px
  line-height 35px
  border-radius 20px
  background-color #eca047
  margin 30px auto
.ok 
  background-color #f08200
</style>