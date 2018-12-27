<template lang='pug'>
  .product
    img(:src="product.images[0]")
    .title {{product.title}}
    .number {{product.number}}个装
    .price 
      span 礼拜五特价: 
      span ￥{{product.currentPrice}}
</template>
<script>
export default {
  data() {
    return {
      product: {
        images: ["/static/goods/i1.png"],
        title: "新西兰黄金奇异果",
        number: 6,
        currentPrice: 28.8
      }
    };
  }
};
</script>
<style lang='stylus'scoped>
.product
  width 305px
  height 435px
  background-color #f8f6f7
  box-sizing border-box
  font-size 16px

.product img
  width 305px
  height 305px
.title,.number 
  margin 5px 0
.price 
  margin 10px 0
.price span:first-child 
  color #f08200 
.price span:last-child 
  color #ff6666  
  font-size 20px  
</style>