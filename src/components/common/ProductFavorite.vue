<template lang="pug">
product-base(:product="product")
  template(slot="description")
    span {{product.digest}}
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
</style>