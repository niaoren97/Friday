<template lang="pug">
panel(title="最近浏览")
  .footprints
    product-classify(v-for="f in me.footprints", :key="f.id", :product="f.product")
</template>
<script>
import {mapState} from 'vuex'
import ProductClassify from '@/components/common/ProductClassify'

export default {
  name: 'MyFootprint',
  components: {
    ProductClassify,
  },
  data() {
    return {
      me: {footprints: [
        {id: 3, product: {images: ['/static/goods/i5.png'], status: 1,
        digest: 'skdfj', name: 'skdjfksjdfk', original_price: 32,current_price: 20,
        }, }
      ]}
    }
  },
  computed: {
    // ...mapState({me: s=>s.user.me}),
    // footprints() {
    //   return this.me.footprints
    // },
    // pagedFootprints() {
    //   const p = this.page
    //   return this.footprints.slice((p-1)*6, p*6)
    // },
    // page() {
    //   return this.$route.query.page || 1
    // }
  },
  watch: {
    // page() {

    // }
  }
}
</script>
<style lang='stylus' scoped>
.footprints
  padding 20px
  .footprint
    margin 24px
    width calc(33.3333333% - 48px)
    height 200px
</style>