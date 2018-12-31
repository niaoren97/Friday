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
import MyFeedback from '@/components/me/MyFeedback'

export default {
  path: '/me',
  component: UserCenter,
  meta: { requiresAuth: true },
  children: [
    { path: 'account', component: MyAccount, alias: '' },
    { path: 'orders', component: MyOrder },
    { path: 'points', component: MyPoint },
    { path: 'point-order', component: MyPointOrder },
    { path: 'wallet', component: MyWallet },

    { path: 'profile', component: MyProfile },
    { path: 'address', component: MyAddress },
    { path: 'favorite', component: MyFavorite },
    { path: 'footprint', component: MyFootprint },
    { path: 'modify-password', component: ModifyPassword },

    { path: 'message', component: MyMessage },
    { path: 'feedback', component: MyFeedback },
  ],
}
