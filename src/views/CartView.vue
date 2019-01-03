<template lang="pug">
.content.cart-view
  .main(v-if="!items.length")
    p 你还没有商品
  .main(v-else)
    .logo
      img(src="/static/logo/cart2.png")
      span 购物车
    cart-group(:items='[]')
    
</template>
<script>
import { mapState } from "vuex";
import { groupBy } from "lodash";
import CartGroup from "@/components/cart/CartGroup.vue";

export default {
  name: "CartView",
  computed: {
    // ...mapState({ items: s => s.cart.items }),
    groups() {
      // return items grouped by seller
      return groupBy(this.items, item => item.seller.id);
    }
  },
  data() {
    return {
      items: [
        1
      ]
    };
  },
  components: { CartGroup }
};
</script>
<style lang="stylus" scoped>
.cart-view
  margin auto

.main
  min-height 490px
  .logo 
    font-size 20px
    margin-bottom 20px
    img 
      width 30px
      height 30px
      margin-right 10px
      vertical-align bottom
    
</style>