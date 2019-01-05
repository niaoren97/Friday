<template lang="pug">
.content.user-center.clearfix
  side-bar(extraClass="side", )
    side-bar-title(title="个人中心")
    side-bar-item-group(title="交易管理")
      side-bar-item(title="我的账户", to="/me/account", key="11")
      side-bar-item(title="我的订单", to="/me/orders", key="12")
      side-bar-item(title="我的积分", to="/me/points", key="13")
      side-bar-item(title="积分订单", to="/me/point-orders", key="14")
      side-bar-item(title="我的钱包", to="/me/wallet", key="15")
    side-bar-item-group(title="会员资料")
      side-bar-item(title="个人资料", to="/me/profile", key="21")
      side-bar-item(title="地址管理", to="/me/addresses", key="22")
      side-bar-item(title="我的收藏", to="/me/favorites", key="23")
      side-bar-item(title="最近浏览", to="/me/footprints", key="24")
      side-bar-item(title="修改密码", to="/me/modify-password", key="25")
    side-bar-item-group(title="站内信")
      side-bar-item(title="我的消息", to="/me/messages", key="31")
      side-bar-item(title="意见反馈", to="/me/feedback", key="32")

  .main
    keep-alive
      router-view
</template>
<script>
export default {
  name: 'UserCenter',
  computed: {
    loggedIn() {
      return this.$store.state.user.loggedIn
    }
  },
  watch: {
    loggedIn() {
      if(!this.loggedIn) {
        this.$router.push('/login')
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.user-center
  padding-top 40px
  margin auto
.side
  float left
.main
  float right
  width 1084px
</style>