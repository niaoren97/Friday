<template lang='pug'>
.product(:class='myclass')
  img(:src="product.images[0]")
  .title {{product.name}}
  .number {{product.specs[0].quantity}}个装
  .price 
    span 礼拜五特价: 
    span ￥{{(product.specs[0].current_price*product.discount).toFixed(2)}}
</template>
<script>
export default {
  data() {
    return {
      // product: {
      //   images: ["/static/goods/i1.png"],
      //   title: "新西兰黄金奇异果",
      //   number: 6,
      //   currentPrice: 28.8
      // }
    };
  },
  props:['product','myclass']
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
  background-color #f8f6f7
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