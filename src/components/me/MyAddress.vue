<template lang="pug">
panel
  template(slot="title")
    .clearfix
      span 地址管理
      button.add(@click="addAddress") 添加新地址
  .address-main
    .addresses(v-if="me.addresses.length===0")
      | 还没哟地址
    table.addresses(v-else)
      thead
        tr
          th 收货人
          th 所在区域
          th 街道地址
          th 联系电话
          th 备注
          th 操作
      tbody
        //- 顶部默认地址
        tr
          td {{topAddress.contact}}
          td {{area(topAddress)}}
          td {{topAddress.detail}}
          td {{topAddress.mobile}}
          td {{topAddress.note}}
          td
            span 修改 
            span 删除
            //- 其他地址
            
        tr(v-for="a in otherAddress", :key="a.id") 
          td {{a.contact}}
          td {{area(a)}}
          td {{a.detail}}
          td {{a.mobile}}
          td {{a.note}}
          td
            span.default(@click="setDefault(a.id)") 设为默认地址 
            span 修改 
            span 删除

</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MyAddress',
  data() {
    return {
      me: {
        defaultAddress: 1,
        addresses: [
          {
            id: 1,
            contact: 'ddd',
            detail: 'sdkfjksdjfksjd',
            note: '家里的地址1',
            province: 'ksdjf',
            region: 'sdf',
            city: 'sdfs',
            mobile: '12342342342',
          },
          {
            id: 2,
            contact: 'ddd',
            detail: 'sdkfjksdjfksjd',
            note: '家里的地址2',
            province: 'ksdjf',
            region: 'sdf',
            city: 'sdfs',
            mobile: '12342342342',
          },
          {
            id: 3,
            contact: 'ddd',
            detail: 'sdkfjksdjfksjd',
            note: '家里的地址3',
            province: 'ksdjf',
            region: 'sdf',
            city: 'sdfs',
            mobile: '12342342342',
          },
        ],
      },
    }
  },
  computed: {
    // ...mapState({me: s=>s.user.me})
    topAddress: function() {
      return this.me.addresses.find(a => a.id === this.me.defaultAddress)
    },
    otherAddress: function() {
       return this.me.addresses.filter(a => a.id !== this.me.defaultAddress)
    }
  },
  methods: {
    area(addr) {
      return `${addr.province}${addr.region}${addr.city}`
    },
    addAddress() {

    },
    setDefault(n) {
       this.me.defaultAddress = n;
    }
  }
}
</script>
<style lang='stylus' scoped>
.add
  float right
  height 30px
  border none
  background green
  color #fff
  border-radius 5px
  padding 10px
.address-main
  padding 20px
  table.addresses
    width 100% 
    text-align center
    border-collapse collapse
    border solid 1px lightgray
    thead
      background-color lightgray
      height 45px
    tr
      height 50px
    td:nth-child(1)
      width 100px
    td:nth-child(2)
      width 160px
    td:nth-child(3)
      width 320px
    td:nth-child(4)
      width 130px
    td:nth-child(5)
      width 100px
    span
      // text-decoration underline 
      color green
      padding 0 2px
    span.default
      color #F08201

</style>