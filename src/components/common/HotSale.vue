<template lang='pug'>
.container(:class="myhot")
  .hot
    .left
      .title {{product.title}}
      .des {{product.description}}
    img(:src="product.images[0]")
</template>
<script>
export default {
data(){
  return {
    product: {title:'呢蒙古草原',description:'羔羊羊精肉',images:['/static/goods/item1.png']}
  }
},
props:['myhot']
}
</script>
<style lang='stylus'scoped>
.hot
  overflow hidden
  width 305px
  height 140px
  background-color #f2f2f2
  font-size 20px
  color #595959
.hot img
    width 140px
    height 90px
    float right 
    margin-top 10px
    margin-right 10px
.hot .left
    float left
    margin 0 20px
    margin-top 22px
</style>