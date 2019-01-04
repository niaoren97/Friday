<template lang="pug">
.content.results
  .none(v-if="!fetching && results.length ===0")
    span 没有你找的商品
  .fetching(v-if="fetching")  
    img(src="/static/misc/cog.png", class="cog")
    span 正在搜索
  .search-results.clearfix
    router-link(:to="{name: 'product', params:{id: p.id}}", v-for="p in results",:key="p.id")
      product( , :product="p", myclass="product")
  paginator(:base="$route.path",:current="page | toInt", :last="last" )
</template>
<script>
import Product from '@/components/common/Product'
import axios from 'axios'

export default {
  name: 'SearchResult',
  components: {
    Product,
  },
  data() {
    return { fetching: false, results: [], last: 0 }
  },
  created() {
    // const {q, categories, sort, filter} = this.$route.query
    this.search(this.$route.query)
  },
  computed: {
    // q, categories, sort, filter
    // keyword() {
    //   return
    // }
    page() {
      return this.$route.query.page || 1
    },
  },
  watch: {},
  methods: {
    search(query) {
      this.fetching = true
      axios.get('/api/search', { params: query }).then(({ data }) => {
        this.fetching = false
        this.results = data.data
        this.last = data.last_page
      })
    },
  },
}
</script>
<style lang="stylus" scoped>
.results
  margin auto
  min-height 500px

.none
  text-align center
  line-height 500px

.fetching
  text-align center

.product
  float left
  margin-right 20px
a:nth-child(4n)
  .product
    margin-right 0

.cog
  animation rotate infinite 1s linear

@keyframes rotate
  from
    transform rotateZ(0deg)

  to
    transform rotateZ(360deg)
</style>