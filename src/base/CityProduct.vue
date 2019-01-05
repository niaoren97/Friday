<template lang='pug'>
.cityproduct
  .item
    img.pic(:src="item.images")
    .txt
      .title {{item.name}}
      .des 
        //- .start
        //-   img(src="/static/products/light_start.png")
        span {{item.current_price}}/人
      .shop_address {{item.shop_address}}
</template>
<script>
export default {
  data() {
    // return {
    //   products: [
    //     {
    //       images: ["/static/images/dzx.png"],
    //       name: "阳澄湖大闸蟹",
    //       current_price: 62,
    //       shop_address:"浙江省台州市温岭市人民西路2号"
    //     }
    //   ]
    // };
  },
  props:['item']
};
</script>
<style lang='stylus' scoped>
.cityproduct
  .item
    box-sizing border-box
    width 305px
    height 300px
    background-color #f8f6f7
    border 1px solid #f2f2f2
    padding-bottom 20px

    .pic
      width 305px
      height 170px
    .txt
      padding 20px
      text-align center
      font-size 16px
      .title 
        font-size 25px
      .des 
        .start
          width 20px 
          height 20px
        margin 10PX 0
        color #ec6a17

</style>