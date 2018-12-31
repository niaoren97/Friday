<template lang="pug">
panel(title="个人资料")
  .container
    .line
      .label 当前头像
      .for 
        img(:src="me.avatar")
        label(@click="", for="avatar") 修改
        input.avatar(ref="avatar", id="avatar")
    .line
      .label 昵称
      .for 
        input(v-model="name")
    .line
      .label 性别
      .for 
        //- input(v-model="sex", value="male")
    .line
      .label 生日
      .for 
    .line
      .label 手机
      .for 
        input(v-model="mobile")
        span(@click="modifyMobile") 更换手机
    .line
      .label
      .for
        button(@click="commit") 确认提交
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'MyProfile',
  data() {
    return {
      name: this.me.name,
      mobile: this.me.mobile,
    }
  },
  computed: {
    ...mapState({me: s=>s.user.me})
  }
}
</script>
<style lang="stylus" scoped>
.container
  padding 40px
  .line
    .label
      text-align right
      width 100px
.avatar
  display none
</style>