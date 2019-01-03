<template lang="pug">
panel(title="个人资料")
  .container
    .line
      .label 当前头像
      .for 
        img.avatar(:src="avatar", ref="avatarShow")
        label(@click="", for="avatar") 修改
        input.avatar(ref="avatar", id="avatar",type="file", @change="avatarChange")
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
        input(type="date", v-model="birthday")
    .line
      .label 手机
      .for 
        input(v-model="mobile")
        span(@click="modifyMobile") 更换手机
    .line
      .label
      .for
        f-button(@click="submit", big, secondary) 确认提交
</template>
<script>
import { mapState } from 'vuex'
import { http } from '@/utils'

export default {
  name: 'MyProfile',
  data() {
    return {
      name: '',
      mobile: '',
      birthday: '',
      sex: 0,
      avatarChanged: false,
      uploadAvatar: '',
    }
  },
  created() {
    this.name = this.me.name
    this.sex = this.me.sex
    this.mobile = this.me.mobile
    this.birthday = this.me.birthday
  },
  computed: {
    ...mapState({ me: (s) => s.user.me }),
    avatar() {
      if (this.uploadAvatar) return this.uploadAvatar
      return this.me.avatar ? this.me.avatar : '/static/misc/avatar.png'
    },
  },
  methods: {
    modifyMobile() {},
    submit() {
      const payload = new FormData()
      if (this.birthday) payload.append('birthday', this.birthday)
      payload.append('name', this.name)
      payload.append('sex', this.sex)
      if (this.avatarChanged)
        payload.append('avatar', this.$refs.avatar.files[0])
      http
        .withToken(this.me.token)
        .post('/api/me/profile', payload, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          this.$store.commit('user/updateProfile', res.data)
        })
    },
    avatarChange() {
      this.avatarChanged = true
      const url = URL.createObjectURL(this.$refs.avatar.files[0])
      this.$refs.avatarShow.src = url
      this.$refs.avatarShow.onload = function() {
        URL.revokeObjectURL(url)
      }
    },
  },
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

label[for='avatar']
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