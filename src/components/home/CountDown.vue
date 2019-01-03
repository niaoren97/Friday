<template lang='pug'>
.container
  .content.countdown
    .left 
      img(src="/static/logo/clock.png")
      span 礼拜五
      span Friday
    .right 
      span(class='juli') 距离{{text}}
      span(class="time") {{days}}天
      span(class="time") {{hours}}
      span(class='fenge') :
      span(class="time") {{minutes}}
      span(class='fenge') :
      span(class="time") {{seconds}}
      span(class='gengduo') 更多>>
</template>
<script>
import moment from 'moment'
import {padStart} from 'lodash'
export default {
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      text: '开始'
    }
  },
  created() {
    const timer = setInterval(() => {
      this.judge()
    }, 1000)
  },
  methods: {
    judge() {

    const now = new Date
    let d = now.getDay()
    if(d === 5) // is friday , to end
    {
      this.text = '结束'
      this.days = padStart(0, 2, '0')
      this.hours = padStart(23 - now.getHours(), 2, '0')
      this.minutes = padStart(59- now.getMinutes(), 2, '0')
      this.seconds = padStart(59 - now.getSeconds(), 2, 0)
    }else {
      d = d === 0 ? 7 : d
      this.text = '开始'
      this.days = padStart(d < 5 ? 5 - d :  12 - d , 2, 0)
      this.hours = padStart(23 - now.getHours(), 2, '0')
      this.minutes = padStart(59- now.getMinutes(), 2, '0')
      this.seconds = padStart(59 - now.getSeconds(), 2, 0)

    }
    }
  }
};
</script>
<style lang='stylus'scoped>
.countdown
  position relative
  height 100px
  overflow hidden
  background-color #ebffe8
  padding  0 20px
  border-bottom 1px solid #498e3d

.left
  float left
  margin-top 27px

  img
    width 40px
    height 40px
    vertical-align middle
    margin 0 10px

  span:nth-child(2)
    font-size 30px
    color #498e3d
    font-family 'Regular'
    vertical-align middle
    margin 0 10px

  span:nth-child(3)
    font-size 22px
    vertical-align middle
    color #b1b8b0
.right
  margin-top 27px
  float right
  line-height 22px
  
.juli
  font-size 30px
  color #498e3d
  font-family 'Regular'
  margin-right 10px
.time
  border-radius 5px
  box-sizing border-box
  background-color #f08200
  display inline-block
  height 50px
  padding  0 10px
  margin 0 10px
  font-size 22px
  line-height 50px
  color #fff
.fenge 
  margin 0
  color #f08200
  font-size 22px
  line-height 50px
  height 50px
.gengduo
  font-size 20px
  color #9aa399
</style>