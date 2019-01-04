<template lang="pug">
.content.results
  .none(v-if="!fetching && results.length ===0")
    span 没有你找的商品
  .fetching(v-if="fetching")  
    img(src="/static/misc/cog.png", class="cog")
    span 正在搜索
  .search-results
    product(v-for="p in results", :key="p.id", :product="p")
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
    return {fetching: false,
    results: []}
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
  },
  watch: {

  },
  methods: {
    search(query) {
      this.fetching = true
      axios.get('/api/search', {params: query})
      .then(res => {
        this.fetching = false
        this.results = res.data
      })
    }
  }
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
.cog
  animation rotate infinite 1s linear
</style>