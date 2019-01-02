<template lang="pug">
tr(v-for="item in items", :key="item.id")
  td
    check-box(:checked)
    img(:src="item.product.images[0]")
    span {{item.product.name}}
  td {{getSpec(item)}}
  td {{item.product.price}}
  td 
    button(@click="alterItem(-1)", :disabled="item.quantity===0") -
    span {{item.quantity}}
    button(@click="alterItem(1)") +
  td {{summaryPrice}}
  td
    span(@click="deleteItem") 删除
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'CartItem',
  props: ['item'],
  computed: {
    summaryPrice() {
      return this.item.product.current_price * this.item.quantity
    }
  },
  methods: {
    deleteItem() {
      this.$store.dispatch('cart/deleteItem', {id: this.item.id})
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>