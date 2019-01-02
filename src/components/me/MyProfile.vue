<template lang="pug">
panel(title="个人资料")
  .container
    .line
      .label 当前头像
      .for 
        img.avatar(:src="avatar")
        label(@click="", for="avatar") 修改
        input.avatar(ref="avatar", id="avatar",type="file")
    .line
      .label 昵称
      .for 
        input(v-model="name")
    .line
      .label 性别
      .for 
        check-box(:checked="sex==1",@click="sex=1")
        span 男
        check-box(:checked="sex==2",@click="sex=2")
        span 女
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
        f-button(@click="commit", big, secondary) 确认提交
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'MyProfile',
  data() {
    return {
      // name: this.me.name,
      // mobile: this.me.mobile,
      name: '',
      mobile: '',
      sex: 0,
      me: {avatar: '', mobile: '13681647716', birthday: null,
      sex: 0, name: ''}
    }
  },
  created() {
    this.name = this.me.name || this.me.mobile
    this.sex = this.me.sex
  },
  computed: {
    // ...mapState({me: s=>s.user.me})
    avatar() {
      return this.me.avatar ? this.me.avatar : '/static/misc/avatar.png'
    }
  },
  methods: {
    modifyMobile() {

    },
    commit() {

    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  padding 40px
  .line
    padding 10px 
    .label
      text-align right
      display inline-block
      width 100px
      margin-right 20px
    .for
      display inline-block
label[for="avatar"]
  cursor pointer
  color green
  text-decoration underline
  margin-left 10px
#avatar
  display none
.avatar
  width 76px
  height 76px
  vertical-align middle
</style>