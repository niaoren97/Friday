<template lang="pug">
.container 
  .main.clearfix
    .content.card.fr
      component(:is="componentID")

</template>
<script>
import HeaderSection from '@/components/HeaderSection'
import LoginCard from '@/components/entry/LoginCard'
import SignupCard from '@/components/entry/SignupCard'
import RetrievePasswordCard from '@/components/entry/RetrievePasswordCard'
export default {
  name: 'EntryView',
  components: {
    HeaderSection,
    LoginCard,
    SignupCard,
    RetrievePasswordCard,
  },
  data() {
    return {
      // page: 'login',
    }
  },
  computed: {
    page() {
      return this.$route.path.split('/')[1]
    },
    componentID() {
      const m = {
        login: 'LoginCard',
        signup: 'SignupCard',
        'retrieve-password': 'RetrievePasswordCard',
      }
      return m[this.page]
    },
  },
  watch: {
    page() {
      // get the first segment
    },
  },
}
</script>
<style lang="stylus" scoped>
.main
  background center/cover url(/static/banner/signup.png)
  height 500px
  // .card
  //   float
</style>