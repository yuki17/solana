/*
 * @Description: 
 * @Author: HuangQS
 * @Date: 2021-08-20 16:06:46
 * @LastEditors: HuangQS
 * @LastEditTime: 2021-11-02 19:22:36
 */
import { lazy } from 'react'
import { UnorderedListOutlined} from '@ant-design/icons'
// const NoPermission = lazy(() => import('pages/NoPermission/index.jsx'))
const Fusion = lazy(() => import('pages/fusion/index.jsx'))
const GoodsList = lazy(() => import('pages/goodsList/index.jsx'))
const Index = lazy(() => import('pages/index/index.jsx'))
const Mint = lazy(() => import('pages/mint/index.jsx'))



// advertising management
// const Test = lazy(() =>import('pages/test/test.jsx'));
const adminRoutes = [
    // { name: '没有权限', icon: UnorderedListOutlined, path: '/mms/noPermission', component: NoPermission, meta: { isNav: false, roles: '*' } },
    { name: 'XX', icon: UnorderedListOutlined, path: '/index', component: Index, }
]

export default adminRoutes