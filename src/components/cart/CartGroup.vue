<template lang='pug'>

f-table
  thead
    tr.head
      th 店铺名称
      th 规格
      th 单价
      th 数量
      th 金额
      th 操作
  tbody
    cart-item
    
    

  
</template>
<script>
import FTable from "@/base/FTable.vue"
import CartItem from "@/components/cart/CartItem.vue"
export default {
   components:{FTable,CartItem}
}
</script>
<style lang='stylus' scoped>
f-table
  thead
    
    
</style>