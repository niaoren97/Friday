<template lang="pug">
.container
  .header
    
  cart-item(v-for="item in items", :key="item.id")
</template>
<script>
import CartItem from './CartItem'
export default {
  name: 'CartBasket',
  components: {
    CartItem,
  },
  data() {
    return {items: []}
  }
}
</script>
<style lang="stylus" scoped>
</style>