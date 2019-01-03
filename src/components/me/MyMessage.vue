<template lang="pug">
panel(title="我的消息")
  .msg-main
    f-table
      thead
        tr
          td 标题
          td 发送时间
          td 状态
          td 操作
      tbody
        tr(v-for='m in messages', :key="m.id")
          td {{m.title}}
          td {{m.created_at | dateFormat('YYYY年MM月DD日 HH:mm:ss')}}
          td {{mapStatus(m.status)}}
          td 
            span(@click="readMessage(m.id)")
              router-link( :to="{name: 'message-detail', params: {id: m.id}, query: {redirect: $route.fullPath}}") 查看
            span(@click="deleteMessage(m.id)") 删除
</template>
<script>
import { mapState } from 'vuex'
import { http } from '@/utils'
export default {
  name: 'MyMessage',
  data() {
    return {
      // me: { messages: [{ id: 1, title: 'sdf', content: 'skdjfksdjfl' }] },
      messages: [],
    }
  },
  computed: {
    ...mapState({ me: (s) => s.user.me }),
    page() {
      return this.$route.query.page || 1
    },
  },
  watch: {
    page() {
      this.fetchMessages(this.page)
    },
  },
  created() {
    this.fetchMessages(this.page)
  },
  methods: {
    readMessage(id) {
      const msg = this.messages.find((m) => m.id === id)
      msg && (msg.status = 1)
    },
    deleteMessage(id) {
      http
        .withToken(this.me.token)
        .post('/api/me/message/delete', { id })
        .then(() => {
          this.fetchMessages(this.page)
        })
    },
    mapStatus(s) {
      return { 0: '未查看', 1: '已查看' }[s]
    },
    fetchMessages({ page }) {
      http
        .withToken(this.me.token)
        .get('/api/me/messages', { params: { page } })
        .then(({ data }) => {
          this.messages = data.data
        })
    },
  },
}
</script>
<style lang='stylus' scoped>
.msg-main
  padding 20px
</style>