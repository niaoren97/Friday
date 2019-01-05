<template lang='pug'>
.content
  .location
    span 您当前的位置 :
    router-link(:to="{name:'home'}") 
      span 首页 >
    router-link(:to="{name:'fresh'}")
      span 优先保障
  .top 
    .title 优先保障
    .time 2019.1.01
    .line
  .txt 
    p 我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。

    p 管理团队平均年龄 36 岁，员工平均年龄 26 岁，公司信奉平等公开民主的管理文化，每一个员工都有表达自己建议和主张的权利。加入和我们一起开拓全新的水果文化，创立健康的食材品牌，共同分享高速增长的鲜果食品市场，和公司共同成长为行业顶尖的人才。
  img(src="/static/images/yxbz.png")
  .txt
    p  我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。

    p 管理团队平均年龄 36 岁，员工平均年龄 26 岁，公司信奉平等公开民主的管理文化，每一个员工都有表达自己建议和主张的权利。加入和我们一起开拓全新的水果文化，创立健康的食材品牌，共同分享高速增长的鲜果食品市场，和公司共同成长为行业顶尖的人才。

</template>
<script>
export default {

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
.top 
  .title 
    color #498e3d
    font-size 20px
    text-align center
    margin 80px 0
  .time 
    color #666666 
    font-size 16px
    text-align right 
    margin-right 30px
  .line 
    border-bottom 1px solid #666666 
    width 1280px
    margin 20px 0
  p 
    font-size 16px
    line-height 30px
    color #666
    text-indent 2em
    margin-top 40px
img 
  width 1280px
  height 250px
  margin-top 40px

</style>