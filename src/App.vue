<template lang="pug">
#app
  header-bar
  header-section
  router-view
  footer-section
</template>
<script>
import HeaderBar from '@/components/HeaderBar'
import FooterSection from '@/components/FooterSection'
import HeaderSection from '@/components/HeaderSection'

export default {
  components: {
    HeaderBar,
    HeaderSection,
    FooterSection,
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
