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

// 市场及线索管理
import Activity from '@/components/pages/market/Activity'
import Clue from '@/components/pages/market/Clue'
import Sale from '@/components/pages/market/Sale'

// 客户及商机管理
import Aims from '@/components/pages/client/Aims'
import Business from '@/components/pages/client/Business'
import Client_son from '@/components/pages/client/Client_son'
import Contact from '@/components/pages/client/Contact'
import Highseas from '@/components/pages/client/Highseas'
import Quotation from '@/components/pages/client/Quotation'
import Quotationdetails from '@/components/pages/client/Quotationdetails'
import Targetcompletion from '@/components/pages/client/Targetcompletion'

// 订单及回款管理
import Billingapplication from '@/components/pages/Order/Billingapplication'
import Contract from '@/components/pages/Order/Contract'
import Payment from '@/components/pages/Order/Payment'
import Paymentdetail from '@/components/pages/Order/Paymentdetail'
import Paymentplan from '@/components/pages/Order/Paymentplan'
import Priceindicatesfine from '@/components/pages/Order/Priceindicatesfine'
import Pricelist from '@/components/pages/Order/Pricelist'
import Refund from '@/components/pages/Order/Refund'
import Returnform from '@/components/pages/Order/Returnform'
import Salesorder from '@/components/pages/Order/Salesorder'


// 产品管理
import Commodity from '@/components/pages/product/Commodity'
import product_son from '@/components/pages/product/product_son'
import Specification from '@/components/pages/product/Specification'
import SpecificationValue from '@/components/pages/product/SpecificationValue'

// 服务及工单管理
import Servicemanagement from '@/components/pages/service/Servicemanagement'
import Workorder from '@/components/pages/service/Workorder'
import myCompetitor from '@/components/pages/myCompetitor'
import myObject from '@/components/pages/myObject'
import CRMinformation from '@/components/pages/CRMinformation'
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
            title: '报表'
          }
        },
        {
          path: 'Permission',
          component: Permission,
          meta: {
            title: '报表权限管理'
          }
        },
        {
          path: 'Subscription',
          component: Subscription,
          meta: {
            title: '订阅管理'
          }
        },
        {
          path: 'Reportlog',
          component: Reportlog,
          meta: {
            title: '报表日志'
          }
        },
        {
          path: 'Statisticalindicator',
          component: Statisticalindicator,
          meta: {
            title: '统计指标管理'
          }
        },
        {
          path: 'Activity',
          component: Activity,
          meta: {
            title: '市场活动'
          }
        },
        {
          path: 'Clue',
          component: Clue,
          meta: {
            title: '线索池'
          }
        },
        {
          path: 'Sale',
          component: Sale,
          meta: {
            title: '销售线索'
          }
        },
        {
          path: 'Aims',
          component: Aims,
          meta: {
            title: '目标'
          }
        },
        {
          path: 'Business',
          component: Business,
          meta: {
            title: '商机 '
          }
        },
        {
          path: 'Client_son',
          component: Client_son,
          meta: {
            title: '客户'
          }
        },
        {
          path: 'Contact',
          component: Contact,
          meta: {
            title: '联系人'
          }
        },
        {
          path: 'Highseas',
          component: Highseas,
          meta: {
            title: '公海'
          }
        },
        {
          path: 'Quotation',
          component: Quotation,
          meta: {
            title: '报价单'
          }
        },
        {
          path: 'Quotationdetails',
          component: Quotationdetails,
          meta: {
            title: '报价单明细'
          }
        },
        {
          path: 'Targetcompletion',
          component: Targetcompletion,
          meta: {
            title: '目标完成情况'
          }
        },

        {
          path: 'Billingapplication',
          component: Billingapplication,
          meta: {
            title: '开票申请'
          }
        },
        {
          path: 'Contract',
          component: Contract,
          meta: {
            title: '合同'
          }
        },
        {
          path: 'Payment',
          component: Payment,
          meta: {
            title: '回款'
          }
        },
        {
          path: 'Paymentdetail',
          component: Paymentdetail,
          meta: {
            title: '回款明细'
          }
        },
        {
          path: 'Paymentplan',
          component: Paymentplan,
          meta: {
            title: '回款计划'
          }
        },
        {
          path: 'Priceindicatesfine',
          component: Priceindicatesfine,
          meta: {
            title: '价目表明细'
          }
        },
        {
          path: 'Pricelist',
          component: Pricelist,
          meta: {
            title: '价目表'
          }
        },
        {
          path: 'Refund',
          component: Refund,
          meta: {
            title: '退款'
          }
        },
        {
          path: 'Returnform',
          component: Returnform,
          meta: {
            title: '退货单'
          }
        },
        {
          path: 'Salesorder',
          component: Salesorder,
          meta: {
            title: '销售订单'
          }
        },
        {
          path: 'Commodity',
          component: Commodity,
          meta: {
            title: '商品'
          }
        },
        {
          path: 'product_son',
          component: product_son,
          meta: {
            title: '产品'
          }
        },
        {
          path: 'Specification',
          component: Specification,
          meta: {
            title: '规格'
          }
        },
        {
          path: 'SpecificationValue',
          component: SpecificationValue,
          meta: {
            title: '规格值'
          }
        },
        {
          path: 'Servicemanagement',
          component: Servicemanagement,
          meta: {
            title: '服务管理'
          }
        },
        {
          path: 'Workorder',
          component: Workorder,
          meta: {
            title: '工单'
          }
        },
        {
          path: 'myCompetitor',
          component: myCompetitor,
          meta: {
            title: '竞争对手'
          }
        },
        {
          path: 'myObject',
          component: myObject,
          meta: {
            title: '人员'
          }
        },
        {
          path: 'CRMinformation',
          component: CRMinformation,
          meta: {
            title: 'CRM信息'
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
