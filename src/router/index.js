import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/common/home'
import login from '@/components/pages/login'
import page403 from '@/components/pages/403'
import test from '@/router/test'

// 首页文件
import first from '@/components/pages/first/first'

// 数据看板文件
import databoard from '@/components/pages/databoard/databoard';
// 数据分析  子页面
import Report from '@/components/pages/dataAnalysis/Report';
import Permission from '@/components/pages/dataAnalysis/Permission';
import Subscription from '@/components/pages/dataAnalysis/Subscription';
import Reportlog from '@/components/pages/dataAnalysis/Reportlog';
import Statisticalindicator from '@/components/pages/dataAnalysis/Statisticalindicator';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/first'
    },
    {
      path: '/',
      component: home,
      meta: {
        title: '自述文件'
      },
      children: [{
          path: 'first',
          component: first,
          meta: {
            title: '系统首页'
          }
        },
        {
          path: 'databoard',
          component: databoard,
          meta: {
            title: '数据看板'
          }
        },
        {
          path: 'Report',
          component: Report,
          meta: {
            title: '数据分析/报表'
          }
        },
        {
          path: 'Permission',
          component: Permission,
          meta: {
            title: '数据分析/报表权限管理'
          }
        },
        {
          path: 'Subscription',
          component: Subscription,
          meta: {
            title: '数据分析/订阅 管理'
          }
        },
        {
          path: 'Reportlog',
          component: Reportlog,
          meta: {
            title: '数据分析/报表日志'
          }
        },
        {
          path: 'Statisticalindicator',
          component: Statisticalindicator,
          meta: {
            title: '数据分析/统计指标管理'
          }
        }
      ]
    },
    {
      path: '/login',
      component: login,
      meta: {
        title: '登录页面'
      }
    },
    {
      path: '/test',
      component: test
    },
    {
      path: '/403',
      component: page403,
      meta: {
        title: '403'
      }
    }
  ]
})
