<template lang="pug">
panel
  template(slot="title")
    .clearfix
      span.fl 消息详情
      span.fr
        router-link(:to="$route.query.redirect || '/me/messages'") back
  .message
    //- TODO: pass a from property, to support pagination back
    h2 {{realMessage.title}}
    .date {{realMessage.created_at | dateFormat('YYYY年MM月DD日 HH:mm:ss')}}
    .detail {{realMessage.content}}
</template>
<script>
import { mapState } from 'vuex'
import { http } from '@/utils'

export default {
  name: 'MyMessageDetail',
  // props: ['message'],
  props: ['message'],
  data() {
    return {
      realMessage: this.message,
    }
  },
  created() {
    if (!this.message) {
      this.fetchMessage()
    }
    this.readMessage()
  },
  watch: {
    id() {
      this.readMessage()
    },
  },
  computed: {
    // ...mapState({ messages: (s) => s.user.me.messages }),
    id() {
      return this.$route.params.id
    },
    // message() {
    //   return this.messages.find(m => m.id ==this.mid)
    // },
  },
  methods: {
    readMessage() {
        http
          .withToken(this.$store.state.user.me.token)
          .post('/api/me/message/read', { id: this.id, status: 1 })
    },
    fetchMessage() {
      http
        .withToken(this.$store.state.user.me.token)
        .get('/api/me/message/' + this.id)
        .then((res) => {
          this.realMessage = res.data
        })
    },
  },
}
</script>
<style lang="stylus" scoped>
.message
  padding 20px

  h2
    color green
    text-align center

  .date
    text-align right
    padding-right 20px

  .detail
    padding-top 20px
</style>