<template lang='pug'>
.content
  .location
    span 您当前的位置 :
    router-link(:to="{name:'home'}") 
      span 首页 >
    router-link(:to="{name:'nav'}")
      span 专题
  router-link(:to="{name:'friday'}") 
    .friday
        img(src="/static/images/zhuanti-1.png")
  router-link(:to="{name:'mall'}") 
    .mall
        img(src="/static/images/zhuanti-2.png")
  router-link(:to="{name:'seller'}") 
  .qiang
    img(src="/static/images/zhuanti-3.png")
</template>
<script>
export default {
  data() {
      return {
          products:[
             { images: ["/static/images/zhuanti-1.png",] }
          ]
      }
  }
}
</script>

<style lang='stylus' scoped>
.location 
  height  50px
  line-height 50px
  padding-left 24px
  background-color #f4f4f4
  color #666666
  font-size 16px
  span 
    margin-right 5px 
    color #666666
.friday, .mall, .qiang 
  width 1280px
  height 500px
  margin-top 20px
  img 
    width 1280px
    height 500px
.qiang 
  margin-bottom 30px
  
</style>