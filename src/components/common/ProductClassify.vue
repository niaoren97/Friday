<template lang='pug'>
product-base(:product='product',:myclass="myclass")
  p(slot="description" class="description") {{product.description}}
  p(slot="foot" class='price') 
    span $ {{product.price}}
    span $ {{product.cut}}
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
  color #ff5757
  font-size 16px
.description
  color #666666
  font-size 15px
</style>