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

  .content
    //- 热卖商品
    .hot
      hot-sale(myhot="myhot")
      hot-sale(myhot="myhot")
      hot-sale(myhot="myhot")
      hot-sale(myhot="myhot")
    //- 倒计时
    count-down
    //- 礼拜五特价商品
    .product
      product(v-for="item in products" :product="item" myclass="product-item")
    //- 分类展示的商品
    .fruit 
      .left 
        img(src="/static/logo/fruit.png")
        span 新鲜水果
        span 来自新疆优质水果生产基地,品质一流.
      .right
        span 更多&gt;&gt;
    .display
      product-classify(v-for="item in products" :product="item" myclass="product-classify")

    .seafood 
      .left 
        img(src="/static/logo/seafood.png")
        span 生猛海鲜
        span 国内外新鲜到港的鱼虾蟹贝，我们全都有,品质一流.
      .right
        span 更多&gt;&gt;
    .display
      product-classify(v-for="item in products" :product="item" myclass="product-classify")

    .meat 
      .left 
        img(src="/static/logo/meat.png")
        span 肉类禽蛋
        span 国内外新鲜到港的鱼虾蟹贝，我们全都有,品质一流.
      .right
        span 更多&gt;&gt;
    .display
      product-classify(v-for="item in products" :product="item" myclass="product-classify")
    .egg 
      .left 
        img(src="/static/logo/egg.png")
        span 蛋奶素食
        span 国内外新鲜到港的鱼虾蟹贝，我们全都有,品质一流.
      .right
        span 更多&gt;&gt;
    .display
      product-classify(v-for="item in products" :product="item" myclass="product-classify")
    
    

    
    
</template>
<script>
import HotSale from "@/components/common/HotSale.vue";
import CountDown from "@/components/home/CountDown.vue";
import Product from "@/components/common/Product.vue";
import ProductClassify from "@/components/common/ProductClassify.vue";
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
          currentPrice: 28.8,
          description:"果肉绵密、花蜜般的甘甜百吃不厌",
          original_price:66.66,
          current_price:44.22
        },
        {
          images: ["/static/goods/i4.png"],
          title: "新西兰黄金奇异果",
          number: 6,
          currentPrice: 28.8,
          description:"果肉绵密、花蜜般的甘甜百吃不厌",
          original_price:66.66,
          current_price:44.22
        },
        {
          images: ["/static/goods/i1.png"],
          title: "新西兰黄金奇异果",
          number: 6,
          currentPrice: 28.8,
          description:"果肉绵密、花蜜般的甘甜百吃不厌",
          original_price:66.66,
          current_price:44.22
        },
        {
          images: ["/static/goods/i4.png"],
          title: "新西兰黄金奇异果",
          number: 6,    
          currentPrice: 28.8,
          description:"果肉绵密、花蜜般的甘甜百吃不厌",
          original_price:66.66,
          current_price:44.22
        }
      ]
    };
  },
  components: {
    HotSale,
    Product,
    CountDown,
    ProductClassify
  },
  mounted() {
    // var mySwiper = new Swiper(".swiper-container", {
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    //   }
    // });
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
  margin-right 0

.myhot
  float left
  margin-right 20px

.product
  overflow hidden
  margin 10px auto

.product-item
  float left
  margin-right 20px

.product-item:last-child
  margin-right 0

// 分类商品展示css
.fruit,.seafood,.meat,.egg
  overflow hidden
  padding 0 20px
  background-color #ebffe8
  height 100px
  border-bottom 1px solid #498e3d

  .left
    float left
    line-height 100px
    img 
      width 40px
      height 40px
      vertical-align middle
    span:nth-child(2)
      font-size 30px
      color #549648
      margin 0 15px
    span:nth-child(3)
      font-size 20px
      color #999999

  .right
    float right
    font-size 15px
    line-height 100px
    color #999999
.display
  overflow hidden
.product-classify
  float left
  margin-right 20px
  &:last-child
    margin-right 0
</style>