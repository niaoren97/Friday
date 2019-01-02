<template lang="pug">
panel
  template(slot="title")
    span 账户余额: 
      span.money {{me.money | currency('cn')}}
  .wallet
    div 请选择充值金额:
    .choices.clearfix
      .choice(:class="{active: choice===500}",@click="choose(500)") 500元
      .choice(:class="{active: choice===1000}",@click="choose(1000)") 1000元
      .choice(:class="{active: choice===2000}",@click="choose(2000)") 2000元
    div.color 充值有礼
    .prizes.clearfix
      .prize 
        .title 充500元送:
        .product
          img(src="/static/misc/prize.png")
          div
            div 新疆哈密瓜25KG
            div 价值: 500
      .prize 
        .title 充1000元送:
        .product.clearfix
          img(src="/static/misc/prize.png")
          div
            div 新疆哈密瓜50KG
            div 价值: 1000
    button.topup(@click="topup") 立即充值
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'MyWallet',
  data() {
    return {
      choice: 500,
      me: {money: 20},
    }
  },
  computed: {
    // ...mapState({me: s=>s.user.me}),
  },
  methods: {
    choose(m) {
      this.choice = m
    },
    topup(){
      // TODO:
      alert('todo')
    }
  },
}
</script>
<style lang='stylus' scoped>
$orange = #F08201
.wallet
  padding 20px
.money
  color red
.choices
  margin-top 18px
  margin-bottom 36px
.choice
  float left
  width 115px
  height 36px
  line-height 36px
  margin-right 36px
  text-align center
  border solid 1px lightgray
  &:hover
    border-color green
  &.active
    background-color #F4FFF2
    border-color green
.color
  color $orange
  margin 18px 0
.prize
  float left
  width 350px
  // height 190px
  border solid 1px lightgray
  padding 20px
  margin-right 20px
  &:hover
    border-color $orange
  .product
    img 
      width 155px
      height 155px
    &>div
      display inline-block
      padding-top 50px
      vertical-align top
      &>div
        margin-bottom 10px
.topup
  background-color $orange
  color white
  margin-top 40px
  width 150px
  height 50px
  line-height 50px
  text-align center
  border-radius 5px
  border none
  font-size 20px
</style>