<template lang='pug'>
.cityproduct
  .item(v-for="(item,key) in products", :key="item.key")
    img(src="/static/images/dzx.png")
    .title {{item.name}}
    .des {{item.current_price}}/人
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          images: ["/static/images/dzx.png"],
          name: "阳澄湖大闸蟹",
          current_price: 62
        }
      ]
    };
  }
};
</script>
<style lang='stylus' scoped>
.cityproduct
  .item
    width 305px
    height 300px
    border 1px solid #f2f2f2

    img
      width 305px
      height 170px
</style>