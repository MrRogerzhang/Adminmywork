<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "el-icon-s-home",
          index: "first",
          title: "首页"
        },
        // 要修改的集中地
        {
          icon: "el-icon-s-order",
          index: "1",
          title: "报表样式大全",
          subs: [
            {
              index: "bao1",
              title: "报表1"
            },
            {
              index: "bao2",
              title: "报表2"
            },
            {
              index: "bao3",
              title: "报表3"
            }
          ]
        },
        {
          icon: "el-icon-rank",
          index: "2",
          title: "组件间通信",
          subs: [
            {
              index: "zujian1",
              title: "组件1"
            },

            {
              index: "zujian2",
              title: "组件2"
            },

            {
              index: "zujian3",
              title: "组件3"
            },

            {
              index: "zujian4",
              title: "组件4"
            },

            {
              index: "zujian5",
              title: "组件5"
            }
          ]
        },
        {
          icon: "el-icon-message-solid",
          index: "403",
          title: "CRM提醒"
        },
        {
          icon: "el-icon-pie-chart",
          index: "CRMinformation",
          title: "CRM信息"
        },
        {
          icon: "el-icon-s-platform",
          index: "databoard",
          title: "数据看板"
        },
        {
          icon: "el-icon-s-order",
          index: "dataAnalysis",
          title: "数据分析",
          subs: [
            {
              index: "Report",
              title: "报表"
            },
            {
              index: "Permission",
              title: "报表文件"
            },
            {
              index: "Subscription",
              title: "可移动的dialog"
            },
            {
              index: "Reportlog",
              title: "报表日志"
            },
            {
              index: "Statisticalindicator",
              title: "el-table分页"
            }
          ]
        },
        {
          icon: "el-icon-pie-chart",
          index: "market",
          title: "组件",
          subs: [
            {
              index: "Activity",
              title: "富文本编辑器"
            },
            {
              index: "Sale",
              title: "Markdown"
            },
            {
              index: "Clue",
              title: "可拖拽看板"
            },
            {
              index: "zujian",
              title: "小组件"
            },
            {
              index: "backtotop",
              title: "返回顶部"
            }
          ]
        },
        {
          icon: "el-icon-rank",
          index: "client",
          title: "客户及商机管理",
          subs: [
            {
              index: "Aims",
              title: "目标"
            },
            {
              index: "Targetcompletion",
              title: "目标完成情况"
            },
            {
              index: "Client_son",
              title: "客户"
            },
            {
              index: "Highseas",
              title: "公海"
            },
            {
              index: "Contact",
              title: "联系人"
            },
            {
              index: "Business",
              title: "商机"
            },
            {
              index: "Quotation",
              title: "报价单"
            },
            {
              index: "Quotationdetails",
              title: "报价单明细"
            }
          ]
        },
        {
          // 订单及回款管理

          icon: "el-icon-rank",
          index: "Order",
          title: "订单及回款管理",
          subs: [
            {
              index: "Contract",
              title: "合同"
            },
            {
              index: "Salesorder",
              title: "销售订单"
            },
            {
              index: "Paymentplan",
              title: "回款计划"
            },
            {
              index: "Payment",
              title: "回款"
            },
            {
              index: "Paymentdetail",
              title: "回款明细"
            },
            {
              index: "Billingapplication",
              title: "开票申请"
            },
            {
              index: "Pricelist",
              title: "价目表"
            },
            {
              index: "Priceindicatesfine",
              title: "价目表明细"
            },
            {
              index: "Returnform",
              title: "退货单"
            },
            {
              index: "Refund",
              title: "退款"
            }
          ]
        },
        {
          // 产品管理

          icon: "el-icon-rank",
          index: "product",
          title: "产品管理",
          subs: [
            {
              index: "Specification",
              title: "规格"
            },
            {
              index: "SpecificationValue",
              title: "规格值"
            },
            {
              index: "Commodity",
              title: "商品"
            },
            {
              index: "product_son",
              title: "产品"
            }
          ]
        },
        {
          icon: "el-icon-rank",
          index: "service",
          title: "服务及工单管理",
          subs: [
            {
              index: "Servicemanagement",
              title: "服务管理"
            },
            {
              index: "Workorder",
              title: "工单"
            }
          ]
        },
        {
          icon: "el-icon-s-custom",
          index: "myObject",
          title: "todoList"
        },
        {
          icon: "el-icon-s-marketing",
          index: "shopping",
          title: "购物车"
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
