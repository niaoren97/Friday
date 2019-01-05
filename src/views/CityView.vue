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
    
    .city_products
      city-product.city-product(v-for="(item,key) in seller", :key="item.key", :item="item")
  
    
</template>
<script>
import HotSale from '@/components/common/HotSale.vue'

export default {
  name: 'Cityview',
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
      },
      product: {
        images: [
          { id: 1, src: '/static/goods/bigposter.png' },
          { id: 2, src: '/static/goods/bigposter.png' },
          { id: 3, src: '/static/goods/bigposter.png' },
        ],
      },
      seller:[],
      products: [
        {
          images: ["/static/images/dzx.png"],
          name: "阳澄湖大闸蟹",
          current_price: 62,
          shop_address:"浙江省台州市温岭市人民西路2号"
        },
        {
          images: ["/static/images/dzx.png"],
          name: "阳澄湖大闸蟹",
          current_price: 62,
          shop_address:"浙江省台州市温岭市人民西路2号"
        },
        {
          images: ["/static/images/goods1.png"],
          name: "阳澄湖大闸蟹",
          current_price: 62,
          shop_address:"浙江省台州市温岭市人民西路2号"
        },
        {
          images: ["/static/images/dzx.png"],
          name: "阳澄湖大闸蟹",
          current_price: 62,
          shop_address:"浙江省台州市温岭市人民西路2号"
        },
        {
          images: ["/static/images/goods1.png"],
          name: "阳澄湖大闸蟹",
          current_price: 62,
          shop_address:"浙江省台州市温岭市人民西路2号"
        },
        {
          images: ["/static/images/dzx.png"],
          name: "阳澄湖大闸蟹",
          current_price: 62,
          shop_address:"浙江省台州市温岭市人民西路2号"
        },
        {
          images: ["/static/images/goods2.png"],
          name: "阳澄湖大闸蟹",
          current_price: 62,
          shop_address:"浙江省台州市温岭市人民西路2号"
        },
        {
          images: ["/static/images/dzx.png"],
          name: "阳澄湖大闸蟹",
          current_price: 62,
          shop_address:"浙江省台州市温岭市人民西路2号"
        }
      ]
    }
  },
  components: {
    HotSale,
  },
  created() {
    this.$http.get('/api/city').then(({data})=>{
      this.seller = data.data
    })
  },
  mounted() {

  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
}
</script>
<style lang="stylus" scoped>
.content
  margin auto

.swiper-slide
  width 100vw
.swiper-friday
  overflow-y: auto
  margin-bottom 20px
  .swiper-pagination
    bottom -10px
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

.city_products
  overflow hidden
  .city-product 
    float left
    margin-right 20px
    margin-top 20px
    &:nth-child(4n)
      margin-right 0
  

</style>