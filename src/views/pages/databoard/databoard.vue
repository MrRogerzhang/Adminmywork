<template>
  <div>
    <!-- 头部标签 -->
    <div class="datalookheader">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">目标业绩分析</template>
          <el-menu-item index="1-1">编辑</el-menu-item>
          <el-menu-item index="1-2">隐藏</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">销售漏斗</template>
          <el-menu-item index="2-1">编辑</el-menu-item>
          <el-menu-item index="2-2">隐藏</el-menu-item>
        </el-submenu>
      </el-menu>

      <div class="litteicon">
        <!-- <i class="el-icon-circle-plus-outline"></i>
        <i class="el-icon-setting"></i>-->
        <img src alt>
        <img src alt>
      </div>
    </div>
    <div class="datalookcontent"></div>

    <div class="datalookmain">
      <!-- 这个是第一个图形 -->
      <div class="vchartone">
        <!-- 头部 -->
        <div class="vcharthead">
          <div class="bi-board-chart__main__hd__title">目标完成情况(金额)</div>
          <div class="bi-board-chart__main__hd__filter"></div>
        </div>
        <!-- 内容主体 -->
        <div class="vchartmain">
          <!-- <div class="VBar">
            <v-bar></v-bar>
          </div>-->
          <div class="VHistogram">
            <v-histogram></v-histogram>
          </div>
        </div>
        <!-- 内容底部 -->
        <div class="vchartfooter">{{newDate}}更新</div>
      </div>
      <!-- 这个是第二个图形 -->
      <div class="vchartone">
        <!-- 头部 -->
        <div class="vcharthead">
          <div class="bi-board-chart__main__hd__title">各部门目标完成情况</div>
          <div class="bi-board-chart__main__hd__filter"></div>
        </div>
        <!-- 内容主体 -->
        <div class="vchartmain">
          <!-- <div class="VBar">
            <v-bar></v-bar>
          </div>-->
          <div class="VHistogram">
            <v-histogram></v-histogram>
          </div>
        </div>
        <!-- 内容底部 -->
        <div class="vchartfooter">{{newDate}}更新</div>
      </div>

      <!-- 这是第三个图形 -->
      <div class="vchartone">
        <!-- 头部 -->
        <div class="vcharthead">
          <div class="bi-board-chart__main__hd__title">各部门完成业绩占比（订单）</div>
          <div class="bi-board-chart__main__hd__filter"></div>
        </div>
        <!-- 内容主体 -->
        <div class="vchartmain">
          <!-- <div class="VBar">
            <v-bar></v-bar>
          </div>-->
          <div class="VPie">
            <v-pie></v-pie>
          </div>
          <!-- <div class="VHistogram">
            <v-histogram></v-histogram>
          </div>-->
        </div>
        <!-- 内容底部 -->
        <div class="vchartfooter">{{newDate}}更新</div>
      </div>

      <!-- 这是第四个图形 -->
      <div class="vchartone">
        <!-- 头部 -->
        <div class="vcharthead">
          <div class="bi-board-chart__main__hd__title">各部门完成业绩占比（回款）</div>
          <div class="bi-board-chart__main__hd__filter"></div>
        </div>
        <!-- 内容主体 -->
        <div class="vchartmain">
          <!-- <div class="VBar">
            <v-bar></v-bar>
          </div>-->
          <div class="VPie">
            <v-pie></v-pie>
          </div>
          <!-- <div class="VHistogram">
            <v-histogram></v-histogram>
          </div>-->
        </div>
        <!-- 内容底部 -->
        <div class="vchartfooter">{{newDate}}更新</div>
      </div>

      <!-- 这是第五个图形 -->
      <div class="vchartone">
        <!-- 头部 -->
        <div class="vcharthead">
          <div class="bi-board-chart__main__hd__title">目标完成率（订单）</div>
          <div class="bi-board-chart__main__hd__filter"></div>
        </div>
        <!-- 内容主体 -->
        <div class="vchartmain">
          <!-- <div class="VBar">
            <v-bar></v-bar>
          </div>-->
          <div class="VHistogram">
            <ve-histogram :data="chartData5" :settings="chartSettings"></ve-histogram>
          </div>
        </div>
        <!-- 内容底部 -->
        <div class="vchartfooter">{{newDate}}更新</div>
      </div>

      <!-- 这是第六个图形 -->
      <div class="vchartone">
        <!-- 头部 -->
        <div class="vcharthead">
          <div class="bi-board-chart__main__hd__title">目标完成率（回款）</div>
          <div class="bi-board-chart__main__hd__filter"></div>
        </div>
        <!-- 内容主体 -->
        <div class="vchartmain">
          <!-- <div class="VBar">
            <v-bar></v-bar>
          </div>-->
          <div class="VHistogram">
            <ve-histogram :data="chartData5" :settings="chartSettings"></ve-histogram>
          </div>
        </div>
        <!-- 内容底部 -->
        <div class="vchartfooter">{{newDate}}更新</div>
      </div>

      <!-- 这是第七个图形 -->
      <div class="vchartone">
        <!-- 头部 -->
        <div class="vcharthead">
          <div class="bi-board-chart__main__hd__title">目标完成率</div>
          <div class="bi-board-chart__main__hd__filter"></div>
        </div>
        <!-- 内容主体 -->
        <div class="vchartmain">
          <!-- <div class="VBar">
            <v-bar></v-bar>
          </div>-->
          <div class="VGauge">
            <v-gauge></v-gauge>
          </div>
        </div>
        <!-- 内容底部 -->
        <div class="vchartfooter">{{newDate}}更新</div>
      </div>

       <!-- 这是第八个图形 -->

       <div class="vchartone">
        <!-- 头部 -->
        <div class="vcharthead">
          <div class="bi-board-chart__main__hd__title">员工订单金额Top5销售榜</div>
          <div class="bi-board-chart__main__hd__filter"></div>
        </div>
        <!-- 内容主体 -->
        <div class="vchartmain">
          <div class="VBar">
            <v-bar></v-bar>
          </div>

        </div>
        <!-- 内容底部 -->
        <div class="vchartfooter">{{newDate}}更新</div>
      </div>
    </div>
  </div>
</template>


<script>
import VBar from "./vchart_bar.vue";
import VFunnel from "./vchart_funnel.vue";
import VHistogram from "./vchart_histogram.vue";
import VLine from "./vchart_line.vue";
import VPie from "./vchart_pie.vue";
import VGauge from "./vchart_gauge.vue";

export default {
  data() {
    this.chartSettings = {
      axisSite: { right: ["下单率"] },
      yAxisType: ["KMB", "percent"],
      yAxisName: ["目标金额", "订单金额"]
    };
    return {
      chartData5: {
        columns: ["日期", "目标金额", "订单金额"],
        rows: [
          { 日期: "1/1", 目标金额: 1393, 订单金额: 1093 },
          { 日期: "1/2", 目标金额: 3530, 订单金额: 3221 },
          { 日期: "1/3", 目标金额: 2923, 订单金额: 2623 },
          { 日期: "1/4", 目标金额: 1723, 订单金额: 1423 },
          { 日期: "1/5", 目标金额: 3792, 订单金额: 3492 },
          { 日期: "1/6", 目标金额: 4593, 订单金额: 4293 }
        ]
      },
      chartData6: {
        columns: ["日期", "目标金额", "已回款金额"],
        rows: [
          { 日期: "1/1", 目标金额: 1393, 已回款金额: 1093 },
          { 日期: "1/2", 目标金额: 3530, 已回款金额: 3221 },
          { 日期: "1/3", 目标金额: 2923, 已回款金额: 2623 },
          { 日期: "1/4", 目标金额: 1723, 已回款金额: 1423 },
          { 日期: "1/5", 目标金额: 3792, 已回款金额: 3492 },
          { 日期: "1/6", 目标金额: 4593, 已回款金额: 4293 }
        ]
      },
      newDate: "",
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  components: {
    VBar,
    VFunnel,
    VHistogram,
    VLine,
    VPie,
    VGauge
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    var myDate = new Date(); //获取系统当前时间
    this.newDate = myDate.toLocaleTimeString();
  }
};
</script>


<style  scoped>
.datalookheader {
  display: flex;
  justify-content: space-between;
}
.datalookheader {
  background-color: rgb(84, 92, 100);
  box-sizing: border-box;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.datalookmain {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.vcharthead {
  width: 100%;
  height: 48px;
}
.vchartone {
  position: relative;
  width: 49%;
  height: 100%;
  margin-right: 10px;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 2%;
}
/* .vchartone:nth-child(1){
  margin-left: 10px;
}
.vchartone:nth-child(2){
  margin-left: 15px;
} */
.bi-board-chart__main__hd__title {
  float: left;
  max-width: 500px;
  padding: 0 12px;
  text-align: left;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.vchartfooter {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;
  color: #ccc;
}
</style>

