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
      hot-sale(myhot="myhot")
      hot-sale(myhot="myhot")
      hot-sale(myhot="myhot")
      hot-sale(myhot="myhot")
    //- 倒计时
    count-down
    .product
      product(v-for="item in products" :product="item" myclass="product-item")
</template>
<script>
import HotSale from "@/components/common/HotSale.vue";
import CountDown from "@/components/home/CountDown.vue";
import Product from "@/components/common/Product.vue";
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
      },
      products: [
        {
          images: ["/static/goods/i1.png"],
          title: "新西兰黄金奇异果",
          number: 6,
          currentPrice: 28.8
        },
        {
          images: ["/static/goods/i4.png"],
          title: "新西兰黄金奇异果",
          number: 6,
          currentPrice: 28.8
        },
        {
          images: ["/static/goods/i1.png"],
          title: "新西兰黄金奇异果",
          number: 6,
          currentPrice: 28.8
        },
        {
          images: ["/static/goods/i4.png"],
          title: "新西兰黄金奇异果",
          number: 6,
          currentPrice: 28.8
        }
      ]
    };
  },
  components: {
    HotSale,
    Product,
    CountDown
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

.swiper-slide img
  width 100vw
  height 500px
  // 热卖商品

.hot
  margin 10px 0
  overflow hidden
  margin 22px auto
.myhot:last-child 
  margin-right  0
.myhot
  float left
  margin-right 20px

  // &:first-child
  //   margin-left 10px

.product
  overflow hidden
  margin 10px auto

.product .product-item
  float left
  margin-right 20px
.product-item:last-child
  margin-right 0
</style>