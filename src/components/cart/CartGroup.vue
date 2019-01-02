<template lang="pug">
f-table
  thead
    tr
      th 
        check-box(:checked="true")
        span {{seller.name}}
      th 规格
      th 单价
      th 数量
      th 金额
      th 操作
  tbody
    tr(v-for="item in items", :key="item.id")
      td
        check-box(:checked)
        img(:src="item.product.images[0]")
        span {{item.product.name}}
      td {{getSpec(item)}}
      td {{item.product.price}}
      td 
        button -
        span {{item.quantity}}
        button +
      td {{}}
      td
        span 删除
  tfoot.clearfix
    span 商品金额
      span {{totalPrice}}

</template>
<script>
export default {
  name: 'CartGroup',
  props: ['items'],
  computed: {
    seller() {
      return this.items[0].seller
    },
    totalPrice(){
      return this.items.reduce((s, i) => s+i.product.current_price *i.quantity, 0)
    }
  },
  methods: {
    getSpec(item) {
      const p = item.product
      return `${item.spec}${p.unit}/${p.pack}`
    }
  }
}
</script>
<style lang="stylus" scoped>
tr
  *:nth-child(1)
    width 380px
    text-align-last left
  *:nth-child(2)
    width 200px
  *:nth-child(3)
    width 150px
  *:nth-child(4)
    width 200px
  *:nth-child(5)
    width 180px
tfoot
  width 80px
  padding-right 40px
  line-height 80px
</style>