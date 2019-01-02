<template lang="pug">
panel(title="意见反馈")
  .feedback
    textarea.advice(v-model="advice", placeholder="请输入你的意见,我们期待与您共同成长")
    .buttons
      f-button(big, gray, @click="cancel") 取消
      span.space
      f-button(big, secondary, @click="submit") 提交
</template>
<script>
export default {
  name: 'MyFeedback',
  data() {
    return { advice: '' }
  },
  methods: {
    cancel() {

    },
    submit() {

    }
  }
}
</script>
<style lang="stylus" scoped>
.feedback
  padding 40px
  .advice
    border-color lightgray
    resize none
    width 100%
    height 375px
    padding 20px
.buttons
  margin-top 40px
  text-align center
  .space
    display inline-block
    width 100px
</style>