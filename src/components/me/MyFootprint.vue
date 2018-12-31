<template lang="pug">
panel(title="最近浏览")
  .footprints
    .footprint(v-for="f in footprints")
</template>
<script>
import {mapState} from 'vuex'

export default {
  name: 'MyFootprint',
  computed: {
    ...mapState({me: s=>s.user.me}),
    footprints() {
      return this.me.footprints
    },
    pagedFootprints() {
      const p = this.page
      return this.footprints.slice((p-1)*6, p*6)
    },
    page() {
      return this.$route.query.page || 1
    }
  },
  watch: {
    page() {

    }
  }
}
</script>
<style lang='stylus' scoped>
.footprints
  .footprint
    margin 24px
    width calc(33.3333333% - 48px)
    height 200px
</style>