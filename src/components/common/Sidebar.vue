<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-s-home',
                        index: 'first',
                        title: '首页'
                    },
                    {
                        icon: 'el-icon-message-solid',
                        index: '403',
                        title: 'CRM提醒'
                    },
                    {
                        icon: 'el-icon-pie-chart',
                        index: '403',
                        title: 'CRM信息'
                    },
                    {
                        icon: 'el-icon-s-platform',
                        index: 'databoard',
                        title: '数据看板',
                    },
                    {
                        icon: 'el-icon-s-order',
                        index: 'dataAnalysis',
                        title: '数据分析',
                        subs: [
                            {
                                index: 'Report',
                                title: '报表'
                            },
                            {
                                index: 'Permission',
                                title: '报表权限管理',
                            },
                            {
                                index: 'Subscription',
                                title: '订阅管理'
                            },
                            {
                                index: 'Reportlog',
                                title: '报表日志'
                            },
                            {

                                index: 'Statisticalindicator',
                                title: '统计指标管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-pie-chart',
                        index: '403',
                        title: '市场及线索管理',
                        subs: [
                            {
                                index: '403',
                                title: '市场活动'
                            },
                            {
                                index: '403',
                                title: '销售线索',
                            },
                            {
                                index: '403',
                                title: '线索池'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-rank',
                        index: '403',
                        title: '客户及商机管理',
                        subs: [
                            {
                                index: '403',
                                title: '目标',
                            },
                            {
                                index: '403',
                                title: '目标完成情况',
                            },
                            {
                                index: '403',
                                title: '客户',
                            },
                            {
                                index: '403',
                                title: '公海',
                            },
                            {
                                index: '403',
                                title: '联系人',
                            },
                            {
                                index: '403',
                                title: '商机',
                            },
                            {
                                index: '403',
                                title: '报价单',
                            },
                            {
                                index: '403',
                                title: '报价单明细',
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-rank',
                        index: '403',
                        title: '订单及回款管理',
                        subs: [
                            {
                                index: 'drag',
                                title: '合同',
                            },
                            {
                                index: '403',
                                title: '销售订单',
                            },
                            {
                                index: '403',
                                title: '回款计划',
                            },
                            {
                                index: '403',
                                title: '回款',
                            },
                            {
                                index: '403',
                                title: '回款明细',
                            },
                            {
                                index: '403',
                                title: '开票申请',
                            },
                            {
                                index: '403',
                                title: '价目表',
                            },
                            {
                                index: '403',
                                title: '价目表明细',
                            },
                            {
                                index: '403',
                                title: '退货单',
                            },
                            {
                                index: '403',
                                title: '退款',
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-rank',
                        index: '7',
                        title: '产品管理',
                        subs: [
                            {
                                index: '403',
                                title: '规格'
                            },
                            {
                                index: '403',
                                title: '规格值'
                            },
                            {
                                index: '403',
                                title: '商品'
                            },
                            {
                                index: '403',
                                title: '产品'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-rank',
                        index: '8',
                        title: '服务及工单管理',
                        subs: [
                            {
                                index: '403',
                                title: '服务管理'
                            },
                            {
                                index: '403',
                                title: '工单'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-s-custom',
                        index: '403',
                        title: '人员'
                    },
                    {
                        icon: 'el-icon-s-marketing',
                        index: 'icon',
                        title: '竞争对手'
                    },
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
