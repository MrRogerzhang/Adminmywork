import Vue from 'vue'
import Router from 'vue-router'
import page403 from '@/views/pages/403'
// import test from '@/router/test'
// import home from '@/layout/common/home'
// import login from '@/views/pages/login'

// // 首页文件
// import Home from '@/views/pages/Home/Home'

// // 数据看板文件
// import databoard from '@/views/pages/databoard/databoard';
// // 客户详情页
// import clientDetail from '@/layout/common/clientDetail.vue';
// // 数据分析  子页面
// import Report from '@/views/pages/dataAnalysis/Report';
// import Permission from '@/views/pages/dataAnalysis/Permission';
// import Subscription from '@/views/pages/dataAnalysis/Subscription';
// import Reportlog from '@/views/pages/dataAnalysis/Reportlog';
// import Statisticalindicator from '@/views/pages/dataAnalysis/Statisticalindicator';

// // 市场及线索管理
// import Activity from '@/views/pages/market/Activity'
// import Clue from '@/views/pages/market/Clue'
// import Sale from '@/views/pages/market/Sale'

// // 客户及商机管理
// import Aims from '@/views/pages/client/Aims'
// import Business from '@/views/pages/client/Business'
// import Client_son from '@/views/pages/client/Client_son'
// import Contact from '@/views/pages/client/Contact'
// import Highseas from '@/views/pages/client/Highseas'
// import Quotation from '@/views/pages/client/Quotation'
// import Quotationdetails from '@/views/pages/client/Quotationdetails'
// import Targetcompletion from '@/views/pages/client/Targetcompletion'

// // 订单及回款管理
// import Billingapplication from '@/views/pages/Order/Billingapplication'
// import Contract from '@/views/pages/Order/Contract'
// import Payment from '@/views/pages/Order/Payment'
// import Paymentdetail from '@/views/pages/Order/Paymentdetail'
// import Paymentplan from '@/views/pages/Order/Paymentplan'
// import Priceindicatesfine from '@/views/pages/Order/Priceindicatesfine'
// import Pricelist from '@/views/pages/Order/Pricelist'
// import Refund from '@/views/pages/Order/Refund'
// import Returnform from '@/views/pages/Order/Returnform'
// import Salesorder from '@/views/pages/Order/Salesorder'


// // 产品管理
// import Commodity from '@/views/pages/product/Commodity'
// import product_son from '@/views/pages/product/product_son'
// import Specification from '@/views/pages/product/Specification'
// import SpecificationValue from '@/views/pages/product/SpecificationValue'

// // 服务及工单管理
// import Servicemanagement from '@/views/pages/service/Servicemanagement'
// import Workorder from '@/views/pages/service/Workorder'
// import myCompetitor from '@/views/pages/myCompetitor'
// import myObject from '@/views/pages/myObject'
// import CRMinformation from '@/views/pages/CRMinformation'



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/',
      component: resolve => require(['@/layout/common/home.vue'], resolve),
      meta: {
        title: '自述文件'
      },
      children: [{
          path: 'Home',
          component: resolve => require(['@/views/pages/Home/Home'], resolve),
          meta: {
            title: '系统首页'
          }
        },
        {
          path: 'databoard',
          component: resolve => require(['@/views/pages/databoard/databoard'], resolve),
          meta: {
            title: '数据看板'
          }
        },
        {
          path: 'bao1',
          component: resolve => require(['@/views/pages/baobiao/1'], resolve),
          meta: {
            title: '报表1'
          }
        },
        {
          path: 'bao2',
          component: resolve => require(['@/views/pages/baobiao/2'], resolve),
          meta: {
            title: '报表2'
          }
        },
        {
          path: 'bao3',
          component: resolve => require(['@/views/pages/baobiao/3'], resolve),
          meta: {
            title: '报表3'
          }
        },
        {
          path: 'zujian1',
          component: resolve => require(['@/views/pages/zujian/1'], resolve),
          meta: {
            title: '组件1'
          }
        },
        {
          path: 'zujian2',
          component: resolve => require(['@/views/pages/zujian/2'], resolve),
          meta: {
            title: '组件2'
          }
        },
        {
          path: 'zujian3',
          component: resolve => require(['@/views/pages/zujian/3'], resolve),
          meta: {
            title: '组件3'
          }
        },

        {
          path: 'Report',
          component: resolve => require(['@/views/pages/dataAnalysis/Report'], resolve),
          meta: {
            title: '报表'
          }
        },
        {
          path: 'Permission',
          component: resolve => require(['@/views/pages/dataAnalysis/Permission'], resolve),
          meta: {
            title: '报表权限管理'
          }
        },
        {
          path: 'Subscription',
          component: resolve => require(['@/views/pages/dataAnalysis/Subscription'], resolve),
          meta: {
            title: '可移动的dialog'
          }
        },
        {
          path: 'Reportlog',
          component: resolve => require(['@/views/pages/dataAnalysis/Reportlog'], resolve),
          meta: {
            title: '报表日志'
          }
        },
        {
          path: 'Statisticalindicator',
          component: resolve => require(['@/views/pages/dataAnalysis/Statisticalindicator'], resolve),
          meta: {
            title: 'el-table分页'
          }
        },
        {
          path: 'Activity',
          component: resolve => require(['@/views/pages/market/Activity'], resolve),
          meta: {
            title: '市场活动'
          }
        },
        // zujian
        {
          path: 'Clue',
          component: resolve => require(['@/views/pages/market/Clue'], resolve),
          meta: {
            title: '线索池'
          }
        },
        {
          path: 'Zujian',
          component: resolve => require(['@/views/pages/market/Zujian'], resolve),
          meta: {
            title: '线索池'
          }
        }, ,
        {
          path: 'Backtotop',
          component: resolve => require(['@/views/pages/market/Backtotop'], resolve),
          meta: {
            title: '线索池'
          }
        },
        // backtotop
        {
          path: 'Sale',
          component: resolve => require(['@/views/pages/market/Sale'], resolve),
          meta: {
            title: '销售线索'
          }
        },
        {
          path: 'Aims',
          component: resolve => require(['@/views/pages/client/Aims'], resolve),
          meta: {
            title: '目标'
          }
        },
        {
          path: 'Business',
          component: resolve => require(['@/views/pages/client/Business'], resolve),
          meta: {
            title: '商机 '
          }
        },
        {
          path: 'Client_son',
          component: resolve => require(['@/views/pages/client/Client_son'], resolve),
          meta: {
            title: '客户'
          }
        },
        {
          path: 'Contact',
          component: resolve => require(['@/views/pages/client/Contact'], resolve),
          meta: {
            title: '联系人'
          }
        },
        {
          path: 'Highseas',
          component: resolve => require(['@/views/pages/client/Highseas'], resolve),
          meta: {
            title: '公海'
          }
        },
        {
          path: 'Quotation',
          component: resolve => require(['@/views/pages/client/Quotation'], resolve),
          meta: {
            title: '报价单'
          }
        },
        {
          path: 'Quotationdetails',
          component: resolve => require(['@/views/pages/client/Quotationdetails'], resolve),
          meta: {
            title: '报价单明细'
          }
        },
        {
          path: 'Targetcompletion',
          component: resolve => require(['@/views/pages/client/Targetcompletion'], resolve),
          meta: {
            title: '目标完成情况'
          }
        },

        {
          path: 'Billingapplication',
          component: resolve => require(['@/views/pages/Order/Billingapplication'], resolve),
          meta: {
            title: '开票申请'
          }
        },
        {
          path: 'Contract',
          component: resolve => require(['@/views/pages/Order/Contract'], resolve),
          meta: {
            title: '合同'
          }
        },
        {
          path: 'Payment',
          component: resolve => require(['@/views/pages/Order/Payment'], resolve),
          meta: {
            title: '回款'
          }
        },
        {
          path: 'Paymentdetail',
          component: resolve => require(['@/views/pages/Order/Paymentdetail'], resolve),
          meta: {
            title: '回款明细'
          }
        },
        {
          path: 'Paymentplan',
          component: resolve => require(['@/views/pages/Order/Paymentplan'], resolve),
          meta: {
            title: '回款计划'
          }
        },
        {
          path: 'Priceindicatesfine',
          component: resolve => require(['@/views/pages/Order/Priceindicatesfine'], resolve),
          meta: {
            title: '价目表明细'
          }
        },
        {
          path: 'Pricelist',
          component: resolve => require(['@/views/pages/Order/Pricelist'], resolve),
          meta: {
            title: '价目表'
          }
        },
        {
          path: 'Refund',
          component: resolve => require(['@/views/pages/Order/Refund'], resolve),
          meta: {
            title: '退款'
          }
        },
        {
          path: 'Returnform',
          component: resolve => require(['@/views/pages/Order/Returnform'], resolve),
          meta: {
            title: '退货单'
          }
        },
        {
          path: 'Salesorder',
          component: resolve => require(['@/views/pages/Order/Salesorder'], resolve),
          meta: {
            title: '销售订单'
          }
        },
        {
          path: 'Commodity',
          component: resolve => require(['@/views/pages/product/Commodity'], resolve),
          meta: {
            title: '商品'
          }
        },
        {
          path: 'product_son',
          component: resolve => require(['@/views/pages/product/product_son'], resolve),
          meta: {
            title: '产品'
          }
        },
        {
          path: 'Specification',
          component: resolve => require(['@/views/pages/product/Specification'], resolve),
          meta: {
            title: '规格'
          }
        },
        {
          path: 'SpecificationValue',
          component: resolve => require(['@/views/pages/product/SpecificationValue'], resolve),
          meta: {
            title: '规格值'
          }
        },
        {
          path: 'Servicemanagement',
          component: resolve => require(['@/views/pages/service/Servicemanagement'], resolve),
          meta: {
            title: '服务管理'
          }
        },
        {
          path: 'Workorder',
          component: resolve => require(['@/views/pages/service/Workorder'], resolve),
          meta: {
            title: '工单'
          }
        },
        {
          path: 'myCompetitor',
          component: resolve => require(['@/views/pages/myCompetitor'], resolve),
          meta: {
            title: '竞争对手'
          }
        },
        {
          path: 'myObject',
          component: resolve => require(['@/views/pages/myObject'], resolve),
          meta: {
            title: 'todoList'
          }
        },
        {
          path: 'CRMinformation',
          component: resolve => require(['@/views/pages/CRMinformation'], resolve),
          meta: {
            title: 'CRM信息'
          }
        }
      ]
    },
    {
      path: '/clientDetail',
      component: resolve => require(['@/layout/common/clientDetail.vue'], resolve),
      meta: {
        title: '客户详情页'
      }
    },
    {
      path: '/login',
      component: resolve => require(['@/views/pages/login'], resolve),
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
    }
  ]
})
