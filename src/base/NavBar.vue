<template lang="pug">
.navs
  button 分类
  router-link(to="/home") 首页
  router-link(to="/city") 同城
  router-link(to="/friday") 礼拜五
  router-link(to="/mall") 积分商城
  router-link(to="/nav") 导航+
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style lang="stylus" scoped>
</style>