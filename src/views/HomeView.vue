<template lang="pug">
.container
  .content
    nav-bar  
  .container
    swiper(class="swiper" :options="swiperOption")
      swiper-slide(class="slide" :key="item.id" v-for="item in product.images")
        img(:src="item.src")
      div(class="swiper-pagination"  slot="pagination")
      div(class="swiper-button-prev" slot="button-prev")
      div(class="swiper-button-next" slot="button-next")
      div(class="swiper-scrollbar"   slot="scrollbar")
      //- <div class="swiper-pagination"  slot="pagination"></div>
      //- <div class="swiper-button-prev" slot="button-prev"></div>
      //- <div class="swiper-button-next" slot="button-next"></div>
      //- <div class="swiper-scrollbar"   slot="scrollbar"></div>

      //- 中间礼拜五特价商品
    .content
      .hot
        HotSale(class="item")
        HotSale(class="item")
        HotSale(class="item")
        HotSale(class="item")
      .product
        Product(class="item")
        Product(class="item")
        Product(class="item")
        Product(class="item")
</template>
<script>
import HotSale from '@/components/common/HotSale.vue'
import Product from '@/components/common/Product.vue'
export default {
  name: "Homeview",
  data() {
    return {
      swiperOption: {
        autoplay: 1000,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true
      },
      product: {
        images: [
          { id: 1, src: "/static/goods/bigposter.png" },
          { id: 2, src: "/static/goods/bigposter.png" },
          { id: 3, src: "/static/goods/bigposter.png" }
        ]
      }
    }
  },
  components:{
    HotSale,
    Product
  },
  mounted() {
  //   var mySwiper = new Swiper('.swiper-container',{
  // pagination :{
  //   el: '.swiper-pagination',
  //   clickable :true,
  // },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
// })
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
}
</script>
<style lang="stylus" scoped>
.container
  width 100vw
.swiper-slide 
  width 100vw
.swiper-slide img 
  width 100vw
  height 500px
  // 热卖商品
.hot 
  margin 10px 5px
  overflow hidden
.hot .item
  float left
  // 中间礼拜五特价商品
.content
  margin auto
.product
  overflow hidden
  margin 10px 5px
.product .item
    float left 
  // -----------------------------
</style>