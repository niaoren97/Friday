<template lang='pug'>
product-base(:product='product',:myclass="myclass")
  p(slot="description" class="description") {{product.digest}}
  .price(slot="foot") 
    span $ {{product.specs[0].original_price}}
    span $ {{product.specs[0].current_price}}
    .cart-wrapper
      img(v-if="isInCart", src='/static/logo/cartfull.png', @click.stop="addToCart")
      img(v-else, src='/static/logo/cart2.png', @click.stop="addToCart")
//- <h1 slot="foot"></h1>
</template>
<script>
import ProductBase from '@/components/common/ProductBase.vue'
import { mapState, mapActions } from 'vuex'
export default {
  components: { ProductBase },
  props: ['product', 'myclass'],
  data() {
    return {
      //   products: [
      //     { description: "新西兰佳沛黄金奇异果", price: 28.08 },
      //     { description: "新西兰佳沛黄金奇异果", price: 28.08 },
      //     { description: "新西兰佳沛黄金奇异果", price: 28.08 },
      //     { description: "新西兰佳沛黄金奇异果", price: 28.08 }
      //   ]
    }
  },
  computed: {
    ...mapState({ items: (s) => s.cart.items }),
    isInCart() {
      return Object.values(this.items).some(
        (i) => i.product.id === this.product.id
      )
    },
  },
  methods: {
    ...mapActions({ addItem: 'cart/addItem' }),
    addToCart() {
      if (this.isInCart) {
        this.$router.push('/cart')
      } else {
        this.addItem({
          item: {
            product: this.product,
            quantity: 1,
            spec: this.product.specs[0],
            checked: true,
            seller: this.product.seller,
          },
        })
      }
    },
  },
}
</script>
<style lang='stylus' scoped>
.price
  overflow hidden

  span:nth-child(1), float left
    color #ff5757
    font-size 20px
    margin-right 20px

  span:nth-child(2)
    font-size 15px
    color #8c8c8c
    text-decoration line-through

.cart-wrapper
  float right
  // display flex
  // flex-direction column
  img
    width 30px
    height 30px
.description
  color #666666
  font-size 15px
  overflow hidden
  white-space nowrap
  text-overflow ellipsis
</style>