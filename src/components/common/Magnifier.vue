<template lang='pug'>
.container 
  .wrap(ref='wrap')
    .normal-wrap( ref='normalWrap',@mouseover='over()', @mouseout='out()')
      img(:src='pic')
      #zoom(ref='zoom',@mousemove='move($event)')
    .big-wrap(ref='bigWrap')
      img(:src='pic')
    
</template>
<script>
export default {
  props: ["pic"],
  methods: {
    over() {
      this.$refs.bigWrap.style.display = "block";
      this.$refs.zoom.style.display = "block";
    },
    //鼠标移除时隐藏
    out() {
      this.$refs.zoom.style.display = "none";
      this.$refs.bigWrap.style.display = "none";
    },
    move(e) {
      var eve = window.event || e;
      var l =
        eve.pageX -
        this.$refs.wrap.offsetLeft -
        this.$refs.zoom.offsetWidth / 2;
      var t =
        eve.pageY -
        this.$refs.wrap.offsetTop -
        this.$refs.zoom.offsetHeight / 2;
      //可移动的最大范围值
      var maxL =
        this.$refs.normalWrap.clientWidth - this.$refs.zoom.offsetWidth;
      var maxT =
        this.$refs.normalWrap.clientHeight - this.$refs.zoom.offsetHeight;
      //限制移动区域
      if (l <= 0) l = 0;
      if (l >= maxL) l = maxL;
      if (t <= 0) t = 0;
      if (t >= maxT) t = maxT;
      //设置位置
      this.$refs.zoom.style.left = l + "px";
      this.$refs.zoom.style.top = t + "px";

      //方块跟随移动的同时  在右侧放大区域显示方块内的放大图
      //比例  = 方块移动的距离/方块可移动的最大距离 = 右侧大图的移动距离/右侧大图的可移动最大距离
      //方式1：修改右侧区域的scrollLeft 和 scrollTop
      this.$refs.bigWrap.scrollLeft =
        (l / maxL) *
        (this.$refs.bigWrap.scrollWidth - this.$refs.bigWrap.clientWidth);
      this.$refs.bigWrap.scrollTop =
        (t / maxT) *
        (this.$refs.bigWrap.scrollHeight - this.$refs.bigWrap.clientHeight);
    }
  }
};
</script>
<style lang='stylus' scoped>
.wrap
  position relative
  width 400px
  height 500px
  border 1px solid gray

.normal-wrap
  width 500px
  height 500px
  img 
    width 500px
    height 500px

#zoom
  position absolute
  left 0
  top 0
  width 200px
  height 200px
  background url('/static/products/zoom.png')
  display none
  cursor move

.big-wrap
  position absolute
  left 510px
  top 0
  width 500px
  height 500px
  overflow hidden
  display none
  img 
    width 1000px
    height 1000px
</style>