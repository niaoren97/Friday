import UserCenter from '@/views/UserCenter'
import MyAccount from '@/components/me/MyAccount'
import MyOrder from '@/components/me/MyOrder'
import MyPoint from '@/components/me/MyPoint'
import MyPointOrder from '@/components/me/MyPointOrder'
import MyWallet from '@/components/me/MyWallet'

import MyProfile from '@/components/me/MyProfile'
import MyAddress from '@/components/me/MyAddress'
import MyFavorite from '@/components/me/MyFavorite'
import MyFootprint from '@/components/me/MyFootprint'
import ModifyPassword from '@/components/me/ModifyPassword'

import MyMessage from '@/components/me/MyMessage'
import MyMessageDetail from '@/components/me/MyMessageDetail'
import MyFeedback from '@/components/me/MyFeedback'

export default {
  path: '/me',
  component: UserCenter,
  meta: { requiresAuth: process.env.VUE_APP_STAGE === 'play' ? false : true },
  children: [
    { path: 'account', component: MyAccount, alias: '' },
    { path: 'orders', component: MyOrder },
    { path: 'orders/:filter', component: MyOrder },
    { path: 'points', component: MyPoint },
    { path: 'point-orders', component: MyPointOrder },
    { path: 'wallet', component: MyWallet },

    { path: 'profile', component: MyProfile },
    { path: 'addresses', component: MyAddress },
    { path: 'favorites', component: MyFavorite },
    { path: 'footprints', component: MyFootprint },
    { path: 'modify-password', component: ModifyPassword },

    {
      path: 'messages',
      component: MyMessage,
      // children: [
      //   {
      //     path: ':mid',
      //     name: 'message-detail',
      //     component: MyMessageDetail,
      //   },
      // ],
    },
    {
      path: 'messages/:mid',
      component: MyMessageDetail,
      name: 'message-detail',
    },
    { path: 'feedback', component: MyFeedback },
  ],
}
