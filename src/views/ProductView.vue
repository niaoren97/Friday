<template lang='pug'>
.content
  .product 
    magnifier
    .picture
      .big 
        img(src='static/products/goods1.png')
      .lunbo 
        .btn1(@click='pre()') 
          img(src='static/products/jiantou1.png')
        img(v-for='(image,index) in product.images', :src='image', :class='{active:index==id}')
        .btn2(@click='next()')
          img(src='static/products/jiantou2.png')
    .des
      .title {{product.name}}
      .label 
        span 全国
        span 礼拜五
        span 次日达
        span 自营
      .description
        .des-left
          img(:src='product.seller && product.seller.logo')
          p(class='zishen') {{product.name}}
        .des-right {{product.seller && product.seller.description}}

      .price
        span 现价￥: {{product.specs && product.specs[selected].current_price}}
        span 原价￥: {{product.specs && product.specs[selected].original_price}}
      .guige 请选择规格
        span(v-for='(item,index) in product.specs', :class='{active_border:selected==index}', @click='select(index)') {{item.quantity}}
      .number 数量:
        span(class='jian', @click='jian()') -
        span(class='num') {{num}}
        span(class='jia', @click='jia()') +
        span 件
      .cart
        div(class='tianjia', :class='{active_buy:!cur}', @click='toggle()') 添加购物车
        div(class='buy', :class='{active_buy:cur}', @click='toggle()')  购买
      
      .collection(@click='isShow()')
        img(src='/static/products/starts1.png' v-if='show')
        img(src='/static/products/starts2.png' v-else)
        span 收藏此商品
      
      .share 分享到:
        img(src='/static/products/logo1.png')
        img(src='/static/products/logo2.png')
        img(src='/static/products/logo3.png')
        img(src='/static/products/logo4.png')

        //- -------------------商品详情&评价 ----------------------
  .tabbar
    span(:class='{cur_bar:cur==0}', @click='togbar(0), change()') 商品详情
    span(:class='{cur_bar:cur==1}', @click='togbar(1), change()') 商品评价
  .details(v-if='details==true')
    .details_title {{product.name}} 
    .details_description {{product.detail}}
    img(src='/static/products/detail.png')
  .comments(v-else)
    .comments_left
      .avatar
        img(src='/static/products/touxiang.png')
        .phone 13166666688
    .comments_right
      .starts
        img(src='/static/products/starts2.png')
        img(src='/static/products/starts2.png')
        img(src='/static/products/starts2.png')
        img(src='/static/products/starts2.png')
        img(src='/static/products/starts2.png')
        .time 2018.12.31
      .comment 帮同事买的,很实惠,很好用.
      .pictuers
        img(src='/static/products/plt.png')
        img(src='/static/products/plt.png')
        img(src='/static/products/plt.png')
        img(src='/static/products/plt.png')
      
</template>
<script>
import axios from 'axios'
import Magnifier from "@/components/common/Magnifier.vue";
export default {
  components: { Magnifier },
  data() {
    return {
      details:true,
      cur:0,
      show:true,
      selected:0,
      num:0,
      id: 0,
      product: {
        images: [
          "static/products/goods1.png",
          "static/products/goods1.png",
          "static/products/goods1.png",
          "static/products/goods1.png"
        ]
      }
    };
  },
  created() {
    axios.get('/api/products/1')
    .then(res =>{
      this.product = res.data
    })
  },
  methods: {
    pre() {
      this.id--;
      if (this.id < 0) {
        this.id = 3;
      }
    },
    next() {
      this.id++;
      if (this.id > 3) {
        this.id = 0;
      }
    },
    jian() {
      
      if(this.num == 0){
       return this.num = 0;
      } 
      this.num--;
    },
    jia() {
      this.num++;
    },
    toggle() {
      this.cur=!this.cur;
    },
    select(n) {
      this.selected=n;
    },
    isShow() {
      this.show=!this.show;
    },
    togbar(n) {
      this.cur=n;
    },
    change() {
      this.details=!this.details;
    }
  }
};
</script>
<style lang='stylus' scoped>
.product
  overflow hidden
  margin 20PX auto

  .picture
    float left
    width 500px

    .big
      margin-bottom 40px

      img
        width 500px
        height 500px

    .lunbo
      margin auto
      text-align center

      .btn1, .btn2
        display inline-block

        img
          width 24px
          height 40px
          vertical-align middle
          margin 0

      img
        width 90px
        height 90px
        margin 0 10px
        vertical-align middle

  .active
    outline 2px solid #ec6a17

  .des
    float right
    width 740px
    height 600px
    .title 
      font-size 26px
      margin 20px 0
    .label 
      margin-bottom 20px
      span 
        height 27px
        line-height 27px
        text-align center
        padding 0px 10px
        margin 0 10px
        display inline-block
        background-color #498e3d
        color #fff
        font-size 16px 
        &:first-child
          margin-left 0
          background-color #498e3d   
        &:nth-child(2)
          background-color #f08200  
    .description
      height 184px
      overflow hidden
      padding 20px 0
      border-top 1px solid #f2f2f2     
      border-bottom 1px solid #f2f2f2 
      .des-left
        float left
        width 118px
        text-align center
        margin-right 30px
        img 
          width 100px
          height 100px
        .zishen
          background-color #ffe313
          border-radius 20px
          width 118px
          text-align center
          line-height 32px
          height 32px
      .des-right
        float right 
        width 586px
        font-size 16px
        color #737373
        line-height 30px

    .price  
      margin 20px 0
      width 344px
      span:first-child
        font-size 32px
        color #ff5757
        margin-right 20px
      span:last-child
        font-size 16px
        color #737373
        text-decoration line-through
    .guige 
      font-style 20px
      margin-bottom 30px
      color #737373
      span
        padding 5px 10px
        margin 0 9px
      .active_border
        border 1px solid #4b943d
    .number
      display inline-block
      margin-right 40px
      margin-bottom 40PX
      font-size 20px
      color #737373
      span 
        display inline-block
        border 1px solid #737373
        padding 5px
        text-align center
        &:first-child
          margin-left 20px
        &:last-child
          border 0
          padding 0
          margin-left 5px
      .jian,.jia
        width 35px
        height 35px   
        background-color #f2f2f2    
      .num 
        border-right 0
        border-left 0
        width 100px 
        background-color #fff 
    .cart 
      margin-bottom 40PX
      display inline-block
      
      .tianjia,.buy
        display inline-block
        margin 0 10px
        border-radius 5px
        width 150px
        height 50px
        line-height 50px 
        text-align center
        color #fff
        background-color #ffae4f
      .active_buy
        background-color #f08200
    .collection
      display inline-block
      span
        vertical-align bottom
        color #484848
        font-size 16px
      img 
        vertical-align middle
        margin-right 10px
    .share
      display inline-block
      margin-left  40px
      font-size 16px
      color #484848
      img 
        width 30px
        height 30px 
        margin 0 5px
        vertical-align middle

  // -------------------- 商品详情&评价 ------------------------
.tabbar 
  background-color #f4f4f4
  margin-bottom 20px
  span 
    display inline-block
    height 40px
    line-height 40px
    padding 0 10px
  .cur_bar
    background-color #fff
    color green 
    border-top 1px solid green
  
.details 
  .details_title 
    font-size 25px
    color #ec6a17
    margin-bottom 20px
  .details_description
    font-size 16px
    color #adadad
    line-height 22px
  img 
    width 1200px
    height 265px   
    margin 10px 0

.comments
  padding 20px 0
  border-bottom 1px solid #f2f2f2
  overflow hidden
  .comments_left
    float left
    .avatar 
      margin-right 30px
      img 
        width 100px
        height 100px
      .phone
        font-size 16px
  .comments_right
    float-right 
    padding 0 20px
    .starts
      overflow hidden
      img 
        margin 0 2px
      .time
        float right
    .comment
      font-size 16px
      margin 5px 0
    .pictuers
      img 
        margin 0 1px
    
          

</style>