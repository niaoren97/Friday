<template lang="pug">
.container.regist
  .cont
    //- 手机号输入---------------------------
    input(type='text', placeholder='请输入手机号' ,class='phone' ,v-model="phone", @input='arm1()' @blur='arm1()')
    br
    p(class='arm')
      img(v-if='isShow1' src='/static/logo/alert.png')
      span(v-text='phonearm')
      //- 密码输入----------------------------
    input(type='text', placeholder='请输入密码（6-20位号码字符)', class='password',v-model='password',@input='arm2()' @blur='arm2()')
    br
    p(class='arm')
      img(v-if='isShow2' src='/static/logo/alert.png')
      span(v-text='passwordarm')
      //- 密码确认-------------------------------
    input(type='text' placeholder='请再次输入密码确认',v-model='rpassword', class='rpassword',@input='arm3()' @blur='arm3()')
    br
    p(class='arm')
      img(v-if='isShow3' src='/static/logo/alert.png')
      span(v-text='rpasswordarm')
      //- 验证码------------------------------
    input(class='yanzhengma' type='text' placeholder='验证码', v-model='mycode',@input='arm4()' @blur='arm4()') 
    verification(@getCode="getCode($event)")
    p(class='arm')
      img(v-if='isShow4' src='/static/logo/alert.png')
      span(v-text='codearm')
    //- 手机验证码-------------------------------
    .sjyanzhengma
      input( type='text' placeholder='手机验证码',v-model='pcode' @input='arm5()', @blur='arm5()') 
      span(class="getCode") 获取验证码
      p(class='arm')
        img(v-if="isShow5" src='/static/logo/alert.png')
        span(v-text='pcodearm')

    .agree
      span(class='checkbox')
        span(ref='check' class='check' v-if='check')
      span(@click='toggle()') 我已阅读并同意《礼拜五用户协议》
      check-box
    button(class='btn1') 登录
    button(class='btn2') 注册
</template>
<script>
import Verification from "@/components/common/Verification.vue";
import CheckBox from "@/base/CheckBox.vue";
export default {
  name: "RetrievePasswordCard",
  components: { Verification, CheckBox },
  // props:['code'],
  methods: {
    get(msg) {
      this.mycode = msg;
    }
  },
  data() {
    return {
      code: "",
      mycode: "",
      codearm: "",
      isShow1: false,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      isShow5: false,
      phone: "",
      phonearm: "",
      password: "",
      passwordarm: "",
      rpassword: "",
      rpasswordarm: "",
      codeaarm: "",

      pcode: "",
      pcodearm: "",
      check: false
    };
  },
  methods: {
    arm1() {
      if (this.phone === "") {
        this.phonearm = "手机号不能为空";
        this.isShow = true;
      } else if (this.phone !== "") {
        this.phonearm = "";
        this.isShow = false;
        var reg = /^1[3456789]\d{9}$/;
        if (!reg.test(this.phone)) {
          this.phonearm = "请输入正确手机号";
          this.isShow = true;
        }
      }
    },
    arm2() {
      if (this.password === "") {
        this.passwordarm = "密码不能为空";
        this.isShow2 = true;
      } else if (this.password !== "") {
        this.passwordarm = "";
        this.isShow2 = false;
        var reg = /^(?![^a-zA-Z]+$)(?!\D+$)/;
        if (!reg.test(this.password)) {
          this.passwordarm = "密码格式不正确";
          this.isShow2 = true;
        }
      }
    },
    arm3() {
      if (this.rpassword === "") {
        this.rpasswordarm = "请确认密码";
        this.isShow3 = true;
      } else if (this.rpassword !== "") {
        this.rpasswordarm = "";
        this.isShow3 = false;
        if (this.rpassword !== this.password) {
          this.rpasswordarm = "两次密码不一致";
        }
      }
    },
    arm4() {
      if (this.mycode === "") {
        this.codearm = "请输入验证码";
        this.isShow4 = true;
      } else if (this.mycode !== "") {
        this.codearm = "";
        this.isShow4 = false;
        if (this.mycode.toLowerCase() !== this.code.toLowerCase()) {
          this.isShow4 = true;
          this.codearm = "验证码不一致";
        }
      }
    },
    getCode(code) {
      this.code = code;
    },
    arm5() {
      if (this.pcode === "") {
        this.pcodearm = "请输入验证码";
        this.isShow5 = true;
      } else if (this.pcode !== "") {
        this.pcodearm = "";
        this.isShow5 = false;
        // if(this.pcode!==this.mycode) {
        //   this.pcodearm='验证码不一致'
        // }
      }
    },
    toggle() {
      this.check = !this.check;
    }
  }
};
</script>
<style lang="stylus" scoped>
.container
  background-color #ffffff
  border 1px solid #d3d3d3

.regist
  overflow hidden
  margin auto
  width 390px
  height 500px
  padding 30px 40px

.cont
  input
    outline none
    text-decoration none
    padding-left 15px
    width 305px
    height 45px
    background-color #f9f9f9
    font-size 18px
    border 1px solid #d3d3d3

  .arm
    color #f00
    text-align left
    font-size 13px
    height 30px
    line-height 30px
    padding 0
    margin 0

    img
      width 12px
      height 12px
      margin-right 5px

  .yanzhengma
    width 113px
    height 44px
    outline none
    text-decoration none
    padding-left 15px
    text-align left
    background-color #f9f9f9

  .sjyanzhengma
    position relative

  .getCode
    position absolute
    right 10px
    background-color #498e3d
    // width 100px
    // height 34px
    color #ffffff
    font-size 16px
    // line-height 34px
    margin-top 6px
    padding 5px 10px

  .checkbox
    display inline-block
    width 16px
    height 16px
    line-height 0
    border 1px solid #498e3d
    border-radius 50%
    padding 2px
    margin-right 10px
    vertical-align middle

  .check
    display inline-block
    width 10px
    height 10px
    border-radius 50%
    border 0
    background-color #498e3d

  button
    outline none
    border none
    width 135px
    height 45px
    border-radius 5px
    color #ffffff
    font-size 20px
    line-height 45px
    margin-top 10px

  .btn1
    float left
    background-color #f08200

  .btn2
    float right
    background-color #498e3d
</style>