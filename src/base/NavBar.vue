<template lang="pug">
.navs
  button 分类
  route-link(to="/home") 首页
  route-link(to="/city") 同城
  route-link(to="/friday") 礼拜五
  route-link(to="/mall") 积分商城
  route-link(to="/nav") 导航+
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style lang="stylus" scoped>
</style>