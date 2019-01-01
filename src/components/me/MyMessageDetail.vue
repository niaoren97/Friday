<template lang="pug">
panel(:title="'消息详情'")
  .message
    //- TODO: pass a from property, to support pagination back
    router-link(to="/me/messages") back
    div {{message.title}}
    div {{message.created_at | dateFormat('YYYY年MM月DD日 HH:mm:ss')}}
    div {{message.content}}
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MyMessageDetail',
  // props: ['message'],

  data() {
    return { messages: [{ id: 1, title: 'sdf', content: 'skdjfksdjfl' }] }
  },
  computed: {
    // ...mapState({ messages: (s) => s.user.me.messages }),
    mid() {
      return this.$route.params.mid
    },
    message() {
      return this.messages.find(m => m.id ==this.mid)
    },
  },
}
</script>
<style lang="stylus" scoped>
.message
  padding 20px
</style>