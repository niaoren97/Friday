<template lang='pug'>
product-base(:product='product',:myclass="myclass")
  p(slot="description" class="description") {{product.digest}}
  p(slot="foot" class='price') 
    span $ {{product.specs[0].original_price}}
    span $ {{product.specs[0].current_price}}
    img(src='/static/logo/cart2.png')
//- <h1 slot="foot"></h1>
</template>
<script>
import ProductBase from "@/components/common/ProductBase.vue";
export default {
  components: { ProductBase },
  props: ["product",'myclass'],
  data() {
    return {
    //   products: [
    //     { description: "新西兰佳沛黄金奇异果", price: 28.08 },
    //     { description: "新西兰佳沛黄金奇异果", price: 28.08 },
    //     { description: "新西兰佳沛黄金奇异果", price: 28.08 },
    //     { description: "新西兰佳沛黄金奇异果", price: 28.08 }
    //   ]
    };
  }
};
</script>
<style lang='stylus' scoped>
.price
  overflow hidden
  span:nth-child(1)
  float left
    color #ff5757
    font-size 20px
    margin-right 20px
  span:nth-child(2)
    font-size 15px
    color #8c8c8c
    text-decoration line-through
  img 
    float right 
    width 30px
    height 30px
.description
  color #666666
  font-size 15px
  overflow hidden 
  white-space nowrap
  text-overflow ellipsis

</style>