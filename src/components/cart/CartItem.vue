<template lang='pug'>
tr.item
  td.one 
    check-box 
    img(:src="item.product.images[0]")
    span.digest {{item.product.digest}}
  td {{item.product.specs[0].quantity}}个装
  td ￥{{item.product.specs[0].original_price}}
  td 
    span.jian(@click='jian()') -
    span.number {{number}}
    span.jia(@click="jia()") +
  td
    span.sum {{sum}}
  td 
    span.del 删除
 
  
</template>
<script>
import CheckBox from "@/base/CheckBox.vue";
export default {
  components: { CheckBox },
  props:['item'],
  data() {
    return {
      // number: 0,
      // sum: 0,
      // products: {
      //   images: ["/static/goods/i1.png","/static/goods/i1.png"],
      //   digest: "云南蒙自石榴8个装",
      //   specs: [
      //     {
      //       quantity: 8,
      //       original_price: 188
      //     }
      //   ]
      // }
    };
  },
  methods: {
    jian() {
      if (this.number == 0) {
        return (this.number = 0);
      }
      this.number--;
      this.sum = this.number*this.products.specs[0].original_price;
    },
    jia() {
      this.number++;
      this.sum = this.number*this.products.specs[0].original_price;
    }
  }
};
</script>
<style lang='stylus' scoped>
table.f-table
  .item
    font-size 18px 
    padding 10px 0
    height 120px
  tr
    td
      check-box
        vertical-align middle
      img
        width 80px
        height 80px
        margin 0 10px
        border 1px solid #f2f2f2
        vertical-align middle
      .digest
        vertical-align middle
    
    td 
      .sum 
        line-height 30px

    // 数量的加减-----------------------------------------
    td 
      .jian,.jia 
        display inline-block
        vertical-align bottom 
        width 30px
        height 30px
        line-height 30px
        text-align center
        background-color #f2f2f2
        border 1px solid #f2f2f2
      .number
        display inline-block
        vertical-align bottom 
        width 50px
        height 30px
        line-height 30px
        text-align center
        background-color #fff
        border-top 1px solid #f2f2f2
        border-bottom  1px solid #f2f2f2
    // 删除操作
    td 
      .del 
        color green 
        font-size 18px
.one 
  text-align left 
  padding-left 30px
  // width 40%   
</style>