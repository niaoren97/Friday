<template lang='pug'>
.navs
  span(@mouseover="show()" @mouseleave="hide()")
    router-link(to="") 分类 
      img(src='/static/logo/jtx.png')
    ul(v-show="isShow")
      li(v-for="item in classify")
        img(:src="item.img")
        span {{item.txt}}
  span
    router-link(to="/home") 首页
  span
    router-link(to="city") 同城
  span
    router-link(to="/friday") 礼拜五
  span
    router-link(to="mall") 积分商城
  span
    router-link(to="/nav") 导航+
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      classify: [
        { img: "/static/classify/1.png", txt: "新鲜水果" },
        { img: "/static/classify/2.png", txt: "日用家居" },
        { img: "/static/classify/3.png", txt: "精美礼盒" },
        { img: "/static/classify/4.png", txt: "食用粮油" },
        { img: "/static/classify/5.png", txt: "零食酒水" },
        { img: "/static/classify/6.png", txt: "蛋奶素食" },
        { img: "/static/classify/7.png", txt: "肉类家禽" },
        { img: "/static/classify/8.png", txt: "田园蔬菜" },
        { img: "/static/classify/9.png", txt: "新鲜水果" }
      ]
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    }
  }
};
</script>
<style lang='stylus'scoped>
.navs
  box-sizing border-box

  span
    display inline-block
    padding 15px 0

    &:hover
      background-color #f08200

    &:last-child a
      border-right none

  a
    display inline-block
    box-sizing border-box
    padding 0 60px
    font-size 16px
    border-right 1px solid #dddddd
    text-decoration none
    color #000

.navs span:hover, .navs span:hover a
  color #fff

.navs span:first-child
  position relative

ul, li
  list-style none
  padding 0
  margin 0
  background-color #fff

ul
  width 153px
  border 1px solid #dddddd
  position absolute
  top 50px
  left 0
  z-index 999
  height 500px
  box-sizing border-box

li
  text-align center
  border-bottom 1px solid #dddddd
  color #333333
  height 11.11%

  &:hover
    background-color #f08200

li img
  width 30px
  height 30px
  margin-right 10px
  vertical-align middle

li span
  vertical-align middle
  font-size 16px
</style>