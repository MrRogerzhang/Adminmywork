<template>
  <div class="all_content">
    <div class="left">
      <v-sales></v-sales>
      <!-- 漏斗图 -->
      <div class="vchart">
        <div class="title">
          <span class="cli_tit">销售漏斗(商机金额)</span>
          <div>
            <span class="widget-tab widget-tab-post hover-tip">陈少天</span>
            <span class="widget-tab widget-tab-time">本月</span>
          </div>
        </div>
        <div>
          <ve-funnel
            style="width:700px"
            :judge-width="true"
            :data="chartData"
            :settings="chartSettings"
          ></ve-funnel>
        </div>
      </div>
      <div>
        <v-leadconversion></v-leadconversion>
      </div>
      <div>
        <v-rank></v-rank>
      </div>
      <router-view></router-view>
    </div>

    <div class="right">
      <div class="data">
        <el-calendar v-model="value"></el-calendar>
      </div>
    </div>

    <el-tooltip placement="top">
      <back-to-top
        :custom-style="myBackToTopStyle"
        :visibility-height="100"
        :back-position="50"
        transition-name="fade"
      ></back-to-top>
    </el-tooltip>
  </div>
</template>


<script>
import BackToTop from "@/components/BackToTop";
import VSales from "./sales.vue";
import VRank from "./rank.vue";
import VLeadconversion from "./Leadconversion.vue";
export default {
  data() {
    this.chartSettings = {
      dataType: "percent"
    };
    return {
      // 返回顶部
      myBackToTopStyle: {
        right: "50px",
        bottom: "50px",
        width: "40px",
        height: "40px",
        "border-radius": "4px",
        "line-height": "45px", // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: "#e7eaf1" // 按钮的背景颜色 The background color of the button
      },
      value: new Date(),
      chartData: {
        columns: ["状态", "数值"],
        rows: [
          { 状态: "01. 验证客户 :0.00", 数值: "01. 验证客户 :0.00" },
          { 状态: "02. 需求确定 : 0.00", 数值: "02. 需求确定 : 0.00" },
          { 状态: "03. 方案/报价 : 0.00", 数值: "03. 方案/报价 : 0.00" },
          { 状态: "04. 谈判审核 : 0.00", 数值: "04. 谈判审核 : 0.00" },
          { 状态: "05. 赢单 : 0.00", 数值: "05. 赢单 : 0.00" },
          { 状态: "06. 输单 : 0.00", 数值: "06. 输单 : 0.00" },
          { 状态: "07. 无效 : 0.00", 数值: "07. 无效 : 0.00" }
        ]
      }
    };
  },
  components: { VSales, VLeadconversion, VRank, BackToTop }
};
</script>

<style>
.all_content {
  width: 100%;
  display: flex;
}
.left {
  width: 66.6%;
}
.right {
  width: 33.3%;
  margin-left: 10px;
}

.vchart {
  background-color: #fff;
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
/* 头部标签--------------------------- */
.title {
  display: flex;
  justify-content: space-between;
  line-height: 48px;
  font-size: 16px;
  font-weight: 700;
  padding-top: 6px;
}
.cli_tit {
  line-height: 48px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 700;
}
.widget-tab {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 10px;
  margin-top: 10px;
  margin-right: 15px;
  vertical-align: middle;
  height: 24px;
  line-height: 24px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background-color: #f0f1f7;
  font-size: 14px;
  font-weight: 400;
  color: #2a304d;
}
/* 头部标签---------------------------头部标签- */
</style>
