<template lang='pug'>
.content
  .location
    span 您当前的位置 :
    router-link(:to="{name:'home'}") 
      span 首页 >
    router-link(:to="{name:'nav'}")
      span 礼拜五
  //- 横图展示区域
  router-link(:to="{name:'friday'}") 
    .friday
        img(src="/static/images/zhuanti-3.png")
  .tip 礼拜五限时特惠商品
  .products
    product-friday(class="product", v-for="m in mall.products", :key="m.id", :product="m.product")
  //- 横图展示区域
  router-link(:to="{name:'friday'}") 
    .friday
        img(src="/static/images/zhuanti-2.png")
</template>
<script>
import ProductFriday from '@/components/common/ProductFriday.vue'
export default {
  data() {
      return {
          products:[
             { images: ["/static/images/zhuanti-1.png",] }
          ],
          mall: {products: [
        {id: 1, product: {images: ['/static/goods/fruit.png'], status: -1,
        digest: '花蜜般的甘甜百吃不厌', name: '大西瓜', original_price: 32,current_price: 20,
        }, },
        {id: 2, product: {images: ['/static/goods/friday1.png'], status: 1,
        digest: '花蜜般的甘甜百吃不厌', name: '沛黄金奇异果', original_price: 32,current_price: 20,
        }, },
        {id: 3, product: {images: ['/static/goods/fruit.png'], status: 1,
        digest: '真好吃呀', name: '伊朗猕猴桃', original_price: 32,current_price: 20,
        }, },
        {id: 4, product: {images: ['/static/goods/friday1.png'], status: -1,
        digest: '花蜜般的甘甜百吃不厌', name: '卫龙', original_price: 32,current_price: 20,
        }, },
        {id: 5, product: {images: ['/static/goods/fruit.png'], status: 1,
        digest: '花蜜般的甘甜百吃不厌', name: '新西兰佳沛黄金奇异果', original_price: 32,current_price: 20,
        }, },
        {id: 6, product: {images: ['/static/goods/friday1.png'], status: -1,
        digest: '花蜜般的甘甜百吃不厌', name: '绝对诱惑', original_price: 32,current_price: 20,
        }, },
        {id: 7, product: {images: ['/static/goods/fruit.png'], status: 1,
        digest: '花蜜般的甘甜百吃不厌', name: '巴西牛肉', original_price: 32,current_price: 20,
        }, },
        {id: 8, product: {images: ['/static/goods/friday1.png'], status: 1,
        digest: '花蜜般的甘甜百吃不厌', name: '新西兰佳沛黄金奇异果', original_price: 32,current_price: 20,
        }, },
      ]}
      }
  },
  components: {
    ProductFriday
  }
}
</script>

<style lang='stylus' scoped>
.location 
  height  50px
  line-height 50px
  padding-left 24px
  background-color #f4f4f4
  color #666666
  font-size 16px
  span 
    margin-right 5px 
    color #666666
.friday
  width 1280px
  height 400px
  margin-top 20px
  img 
    width 1280px
    height 400px
.tip
  height  50px
  line-height 50px
  padding-left 24px
  background-color #f4f4f4
  color #ff5757
  font-size 18px
  margin 10px 0

.products
  overflow hidden
  .product
    float left
    margin-right 20px
    margin-top 20px
    &:nth-child(4n)
      margin-right 0
</style>