<template lang='pug'>
tr.item
  td.one 
    check-box(v-model="item.checked", @click="toggle") 
    img(:src="item.product.images[0]")
    span.digest {{item.product.digest}}
  td {{item.spec.quantity}}个装
  td ￥{{item.spec.current_price}}
  td 
    button.jian(@click='alter({id: item.id, change: -1})', :disabled="item.quantity<=0") -
    span.number {{item.quantity}}
    button.jia(@click="alter({id: item.id, change: 1})") +
  td
    span.sum {{sum | currency('cn')}}
  td 
    span.del(@click="del()") 删除
 
  
</template>
<script>
import CheckBox from '@/base/CheckBox.vue'
import { mapActions } from 'vuex'
export default {
  components: { CheckBox },
  props: ['item'],
  data() {
    return {
      // number: 1
    }
  },
  methods: {
    ...mapActions({ alter: 'cart/alterItem' }),
    toggle() {
      this.$store.commit('cart/setChecked', {
        id: this.item.id,
        checked: !this.item.checked,
      })
    },
    del() {
      this.$store.dispatch('cart/removeItems', [this.item.id])
    },
  },
  computed: {
    sum: function() {
      return (this.item.quantity * this.item.spec.current_price).toFixed(2)
    },
  },
}
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
      .jian, .jia
        display inline-block
        vertical-align bottom
        width 30px
        height 30px
        line-height 30px
        text-align center
        border none
        outline none
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
        border-bottom 1px solid #f2f2f2

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