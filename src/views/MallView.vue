<template lang="pug">
.content
  nav-bar
  swiper(class="swiper" :options="swiperOption")
      swiper-slide(class="slide" :key="item.id" v-for="item in product.images")
        img(:src="item.src")
        span 积分商城
      div(class="swiper-pagination"  slot="pagination")
      div(class="swiper-button-prev" slot="button-prev")
      div(class="swiper-button-next" slot="button-next")
      div(class="swiper-scrollbar"   slot="scrollbar")
  //- 积分商城页面展示的商品
  .mall_products
    product-mall(class="mall_product", v-for="m in mall.products", :key="m.id", :product="m.product")

</template>
<script>
import ProductMall from "@/components/common/ProductMall.vue";
export default {
  name: "MallView",
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true
      },
      product: {
        images: [
          { id: 1, src: "/static/images/mall.png" },
          { id: 2, src: "/static/images/mall.png" },
          { id: 3, src: "/static/images/mall.png" }
        ]
      },
      mall: {products: [
        {id: 1, product: {images: ['/static/goods/i1.png'], status: -1,
        digest: '花蜜般的甘甜百吃不厌', name: '新西兰佳沛黄金奇异果', original_price: 32,current_price: 20,
        }, },
        {id: 2, product: {images: ['/static/goods/i2.png'], status: 1,
        digest: '花蜜般的甘甜百吃不厌', name: '新西兰佳沛黄金奇异果', original_price: 32,current_price: 20,
        }, },
        {id: 3, product: {images: ['/static/goods/i3.png'], status: 1,
        digest: '真好吃呀', name: '伊朗猕猴桃', original_price: 32,current_price: 20,
        }, },
        {id: 4, product: {images: ['/static/goods/i1.png'], status: -1,
        digest: '花蜜般的甘甜百吃不厌', name: '新西兰佳沛黄金奇异果', original_price: 32,current_price: 20,
        }, },
        {id: 5, product: {images: ['/static/goods/i2.png'], status: 1,
        digest: '花蜜般的甘甜百吃不厌', name: '新西兰佳沛黄金奇异果', original_price: 32,current_price: 20,
        }, },
        {id: 6, product: {images: ['/static/goods/i1.png'], status: -1,
        digest: '花蜜般的甘甜百吃不厌', name: '新西兰佳沛黄金奇异果', original_price: 32,current_price: 20,
        }, },
        {id: 7, product: {images: ['/static/goods/i2.png'], status: 1,
        digest: '花蜜般的甘甜百吃不厌', name: '新西兰佳沛黄金奇异果', original_price: 32,current_price: 20,
        }, },
        {id: 8, product: {images: ['/static/goods/i2.png'], status: 1,
        digest: '花蜜般的甘甜百吃不厌', name: '新西兰佳沛黄金奇异果', original_price: 32,current_price: 20,
        }, },
      ]}
    };
  },
  components: {
    ProductMall
  },
  created() {
    // this.$http.get('/api/')
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style lang="stylus" scoped>
.content
  margin auto

.swiper-slide
  width 100vw
  position relative

  span
    position absolute
    top 150px
    left 50%
    margin-left -120px
    font-size 60px
    font-weight 400
    color #06911b

.swiper-slide img
  width 100vw
  height 400px

.mall_products
  overflow hidden
  .mall_product
    float left
    margin-right 20px
    margin-top 20px
    &:nth-child(4n)
      margin-right 0
</style>