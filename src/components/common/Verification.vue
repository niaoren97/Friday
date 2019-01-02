<template>
  <div class="verification">
    <canvas id="canvas" ref='canvas' width="110" height="50"></canvas>
    <a  id="changeImg" @click="e()">换一张</a>
  </div>
</template>

<script type="text/javascript">
export default {
  name:'Verification',
  props: ['value'],
  data() {
    return {
      code:''
    };
  },
  // 生成一个随机数
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 生成一个随机色
    randomColor(min, max) {
      var r = this.randomNum(min, max);
      var g = this.randomNum(min, max);
      var b = this.randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    e() {
      this.clear();
      this.drawPic();
      this.$emit('input',this.code)
    },
    clear() {
      var canvas = this.$refs.canvas;
      var width = canvas.width;
      var height = canvas.height;
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,width,height);
    },
    // 绘制验证码图片
    drawPic() {
      this.code =''
      var canvas = this.$refs.canvas;
      var width = canvas.width;
      var height = canvas.height;
      var ctx = canvas.getContext("2d");
      ctx.textBaseline = "bottom";

      // 绘制背景色
      ctx.fillStyle = this.randomColor(180, 240);
      //颜色若太深可能导致看不清
      // ctx.fillRect(0, 0, width, height);
      // 绘制文字
      var str = "ABCEFGHJKLMNPQRSTWXY123456789";
      for (var i = 0; i < 4; i++) {
        var txt = str[this.randomNum(0, str.length)];
        ctx.fillStyle = this.randomColor(50, 160);
        //  随机生成字体颜色
        ctx.font = this.randomNum(15, 40) + "px SimHei";
        //随机生成字体大小
        var x = 10 + i * 25;
        var y = this.randomNum(25, 45);
        var deg = this.randomNum(-45, 45);
        //修改坐标原点和旋转角度
        ctx.translate(x, y);
        ctx.rotate((deg * Math.PI) / 180);
        ctx.fillText(txt, 0, 0);
        //恢复坐标原点和旋转角度
        ctx.rotate((-deg * Math.PI) / 180);
        ctx.translate(-x, -y);
        this.code+=txt;

      }
      // 绘制干扰线
      for (var i = 0; i < 8; i++) {
        ctx.strokeStyle = this.randomColor(40, 180);
        ctx.beginPath();
        ctx.moveTo(this.randomNum(0, width), this.randomNum(0, height));
        ctx.lineTo(this.randomNum(0, width), this.randomNum(0, height));
        ctx.stroke();
      }
      // 绘制干扰点
      for (var i = 0; i < 100; i++) {
        ctx.fillStyle = this.randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(this.randomNum(0, width), this.randomNum(0, height), 1, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  },
  mounted: function() {
    this.e()
  }
};
</script>
<style lang="stylus">
.verification
  display inline
#canvas
  vertical-align middle
  margin 0 5px
#changeImg
  color #f08200
  vertical-align middle
</style>

