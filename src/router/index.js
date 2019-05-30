import Vue from 'vue'
import Router from 'vue-router'
import page403 from '@/components/pages/403'
// import test from '@/router/test'
// import home from '@/components/common/home'
// import login from '@/components/pages/login'

// // 首页文件
// import first from '@/components/pages/first/first'

// // 数据看板文件
// import databoard from '@/components/pages/databoard/databoard';
// // 客户详情页
// import clientDetail from '@/components/common/clientDetail.vue';
// // 数据分析  子页面
// import Report from '@/components/pages/dataAnalysis/Report';
// import Permission from '@/components/pages/dataAnalysis/Permission';
// import Subscription from '@/components/pages/dataAnalysis/Subscription';
// import Reportlog from '@/components/pages/dataAnalysis/Reportlog';
// import Statisticalindicator from '@/components/pages/dataAnalysis/Statisticalindicator';

// // 市场及线索管理
// import Activity from '@/components/pages/market/Activity'
// import Clue from '@/components/pages/market/Clue'
// import Sale from '@/components/pages/market/Sale'

// // 客户及商机管理
// import Aims from '@/components/pages/client/Aims'
// import Business from '@/components/pages/client/Business'
// import Client_son from '@/components/pages/client/Client_son'
// import Contact from '@/components/pages/client/Contact'
// import Highseas from '@/components/pages/client/Highseas'
// import Quotation from '@/components/pages/client/Quotation'
// import Quotationdetails from '@/components/pages/client/Quotationdetails'
// import Targetcompletion from '@/components/pages/client/Targetcompletion'

// // 订单及回款管理
// import Billingapplication from '@/components/pages/Order/Billingapplication'
// import Contract from '@/components/pages/Order/Contract'
// import Payment from '@/components/pages/Order/Payment'
// import Paymentdetail from '@/components/pages/Order/Paymentdetail'
// import Paymentplan from '@/components/pages/Order/Paymentplan'
// import Priceindicatesfine from '@/components/pages/Order/Priceindicatesfine'
// import Pricelist from '@/components/pages/Order/Pricelist'
// import Refund from '@/components/pages/Order/Refund'
// import Returnform from '@/components/pages/Order/Returnform'
// import Salesorder from '@/components/pages/Order/Salesorder'


// // 产品管理
// import Commodity from '@/components/pages/product/Commodity'
// import product_son from '@/components/pages/product/product_son'
// import Specification from '@/components/pages/product/Specification'
// import SpecificationValue from '@/components/pages/product/SpecificationValue'

// // 服务及工单管理
// import Servicemanagement from '@/components/pages/service/Servicemanagement'
// import Workorder from '@/components/pages/service/Workorder'
// import myCompetitor from '@/components/pages/myCompetitor'
// import myObject from '@/components/pages/myObject'
// import CRMinformation from '@/components/pages/CRMinformation'



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/first'
    },
    {
      path: '/',
      component: resolve => require(['@/components/common/home.vue'], resolve),
      meta: {
        title: '自述文件'
      },
      children: [{
          path: 'first',
          component: resolve => require(['@/components/pages/first/first'], resolve),
          meta: {
            title: '系统首页'
          }
        },
        {
          path: 'databoard',
          component: resolve => require(['@/components/pages/databoard/databoard'], resolve),
          meta: {
            title: '数据看板'
          }
        },
        {
          path: 'Report',
          component: resolve => require(['@/components/pages/dataAnalysis/Report'], resolve),
          meta: {
            title: '报表'
          }
        },
        {
          path: 'Permission',
          component: resolve => require(['@/components/pages/dataAnalysis/Permission'], resolve),
          meta: {
            title: '报表权限管理'
          }
        },
        {
          path: 'Subscription',
          component:  resolve => require(['@/components/pages/dataAnalysis/Subscription'], resolve),
          meta: {
            title: '订阅管理'
          }
        },
        {
          path: 'Reportlog',
          component: resolve => require(['@/components/pages/dataAnalysis/Reportlog'], resolve),
          meta: {
            title: '报表日志'
          }
        },
        {
          path: 'Statisticalindicator',
          component: resolve => require(['@/components/pages/dataAnalysis/Statisticalindicator'], resolve),
          meta: {
            title: '统计指标管理'
          }
        },
        {
          path: 'Activity',
          component:resolve => require(['@/components/pages/market/Activity'], resolve),
          meta: {
            title: '市场活动'
          }
        },
        {
          path: 'Clue',
          component:resolve => require(['@/components/pages/market/Clue'], resolve),
          meta: {
            title: '线索池'
          }
        },
        {
          path: 'Sale',
          component:resolve => require(['@/components/pages/market/Sale'], resolve),
          meta: {
            title: '销售线索'
          }
        },
        {
          path: 'Aims',
          component: resolve => require(['@/components/pages/client/Aims'], resolve),
          meta: {
            title: '目标'
          }
        },
        {
          path: 'Business',
          component: resolve => require(['@/components/pages/client/Business'], resolve),
          meta: {
            title: '商机 '
          }
        },
        {
          path: 'Client_son',
          component:resolve => require(['@/components/pages/client/Client_son'], resolve),
          meta: {
            title: '客户'
          }
        },
        {
          path: 'Contact',
          component: resolve => require(['@/components/pages/client/Contact'], resolve),
          meta: {
            title: '联系人'
          }
        },
        {
          path: 'Highseas',
          component: resolve => require(['@/components/pages/client/Highseas'], resolve),
          meta: {
            title: '公海'
          }
        },
        {
          path: 'Quotation',
          component: resolve => require(['@/components/pages/client/Quotation'], resolve),
          meta: {
            title: '报价单'
          }
        },
        {
          path: 'Quotationdetails',
          component: resolve => require(['@/components/pages/client/Quotationdetails'], resolve),
          meta: {
            title: '报价单明细'
          }
        },
        {
          path: 'Targetcompletion',
          component: resolve => require(['@/components/pages/client/Targetcompletion'], resolve),
          meta: {
            title: '目标完成情况'
          }
        },

        {
          path: 'Billingapplication',
          component: resolve => require(['@/components/pages/Order/Billingapplication'], resolve),
          meta: {
            title: '开票申请'
          }
        },
        {
          path: 'Contract',
          component:  resolve => require(['@/components/pages/Order/Contract'], resolve),
          meta: {
            title: '合同'
          }
        },
        {
          path: 'Payment',
          component:  resolve => require(['@/components/pages/Order/Payment'], resolve),
          meta: {
            title: '回款'
          }
        },
        {
          path: 'Paymentdetail',
          component:  resolve => require(['@/components/pages/Order/Paymentdetail'], resolve),
          meta: {
            title: '回款明细'
          }
        },
        {
          path: 'Paymentplan',
          component:  resolve => require(['@/components/pages/Order/Paymentplan'], resolve),
          meta: {
            title: '回款计划'
          }
        },
        {
          path: 'Priceindicatesfine',
          component:  resolve => require(['@/components/pages/Order/Priceindicatesfine'], resolve),
          meta: {
            title: '价目表明细'
          }
        },
        {
          path: 'Pricelist',
          component:   resolve => require(['@/components/pages/Order/Pricelist'], resolve),
          meta: {
            title: '价目表'
          }
        },
        {
          path: 'Refund',
          component:  resolve => require(['@/components/pages/Order/Refund'], resolve),
          meta: {
            title: '退款'
          }
        },
        {
          path: 'Returnform',
          component: resolve => require(['@/components/pages/Order/Returnform'], resolve),
          meta: {
            title: '退货单'
          }
        },
        {
          path: 'Salesorder',
          component:  resolve => require(['@/components/pages/Order/Salesorder'], resolve),
          meta: {
            title: '销售订单'
          }
        },
        {
          path: 'Commodity',
          component: resolve => require(['@/components/pages/product/Commodity'], resolve),
          meta: {
            title: '商品'
          }
        },
        {
          path: 'product_son',
          component: resolve => require(['@/components/pages/product/product_son'], resolve),
          meta: {
            title: '产品'
          }
        },
        {
          path: 'Specification',
          component:  resolve => require(['@/components/pages/product/Specification'], resolve),
          meta: {
            title: '规格'
          }
        },
        {
          path: 'SpecificationValue',
          component: resolve => require(['@/components/pages/product/SpecificationValue'], resolve),
          meta: {
            title: '规格值'
          }
        },
        {
          path: 'Servicemanagement',
          component: resolve => require(['@/components/pages/service/Servicemanagement'], resolve),
          meta: {
            title: '服务管理'
          }
        },
        {
          path: 'Workorder',
          component: resolve => require(['@/components/pages/service/Workorder'], resolve),
          meta: {
            title: '工单'
          }
        },
        {
          path: 'myCompetitor',
          component: resolve => require(['@/components/pages/myCompetitor'], resolve),
          meta: {
            title: '竞争对手'
          }
        },
        {
          path: 'myObject',
          component:  resolve => require(['@/components/pages/myObject'], resolve),
          meta: {
            title: 'todoList'
          }
        },
        {
          path: 'CRMinformation',
          component: resolve => require(['@/components/pages/CRMinformation'], resolve),
          meta: {
            title: 'CRM信息'
          }
        }
      ]
    },
    {
      path: '/clientDetail',
      component:  resolve => require(['@/components/common/clientDetail.vue'], resolve),
      meta: {
        title: '客户详情页'
      }
    },
    {
      path: '/login',
      component:   resolve => require(['@/components/pages/login'], resolve),
      meta: {
        title: '登录页面'
      }
    },
   
    {
      path: '/403',
      component: page403,
      meta: {
        title: '403'
      }
    },
    {
      path:'/shopping',
      component: resolve=>require(['@/components/common/Shopping/ShoppingApp.vue'] , resolve),
      meta:{
        title:'购物车'
      }
    }
  ]
})
