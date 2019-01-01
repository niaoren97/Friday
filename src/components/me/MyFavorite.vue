<template lang="pug">
panel(title="我的收藏")
  .fav-main
    div(v-if="me.favorites.length ===0") 还没有收藏
    .favorites(v-else,)
      product-favorite(v-for="f in me.favorites", :key="f.id", :product="f.product")
</template>
<script>
import ProductFavorite from '@/components/common/ProductFavorite'
import {mapState} from 'vuex'
export default {
  name: 'MyFavorite',
  components: {
    ProductFavorite,
  },
  data(){
    return {
      me: {favorites: [
        {id: 1, product: {images: ['/static/goods/i5.png'], status: -1,
        digest: 'skdfj', name: 'skdjfksjdfk', original_price: 32,current_price: 20,
        }, },
        {id: 2, product: {images: ['/static/goods/i5.png'], status: 1,
        digest: 'skdfj', name: 'skdjfksjdfk', original_price: 32,current_price: 20,
        }, },
        {id: 3, product: {images: ['/static/goods/i5.png'], status: 1,
        digest: 'skdfj', name: 'skdjfksjdfk', original_price: 32,current_price: 20,
        }, }
      ]}
    }
  },
  computed: {

  }
}
</script>
<style lang='stylus' scoped>
.fav-main
  padding 20px
</style>