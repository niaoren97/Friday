<template lang="pug">
.wrapper
  .form-group(:style="extraStyle")
    input(:type="type", :placeholder="placeholder", @input="onInput", :value="value", ref="input")
    .correct(v-if="correct") 
      img(src='/static/logo/check.png')
  .hint(v-if="hint") 
    img(src="/static/logo/alert.png")
    span {{hint}}
</template>
<script>
export default {
  name: 'FormGroup',
  props: ['extraStyle','value', 'type', 'placeholder', 'verify',
  'hint', 'correct'],
  methods: {
    onInput() {
      this.$emit('input', this.$refs.input.value)
    }
  },
  computed:{
    // correct() {
    //   return this.verify(this.value)
    // }
  }

}
</script>
<style lang="stylus" scoped>
.form-group
  width 306px
  margin auto
  height 44px
  position relative
  input 
    width 100%
    height 100%
    border solid 1px lightgray
    font-size 18px
    padding 7px
  .correct
    position absolute
.hint
  color red
</style>