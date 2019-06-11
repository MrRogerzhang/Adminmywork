<template>
  <div class="tab-container">
    <el-tag
      style="height:34px;width:100px;text-align:center;line-height:34px;"
    >加载次数: {{createdTimes}}</el-tag>
    <el-alert
      style="width:100px;display:inline-block;vertical-align:middle;margin-left:30px"
      title="小标题"
      type="success"
    ></el-alert>

    <el-tabs style="margin-top:10px" type="border-card" v-model="activeBIU">
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :name="item.key"
        :label="item.label"
      ></el-tab-pane>
      <keep-alive>
        <tab-pane  ></tab-pane>
      </keep-alive>
    </el-tabs>
  </div>
</template>


<script>
import TabPane from "@/components/TabPane";
export default {
  data() {
    return {
      tabMapOptions: [
        {
          label: "China",
          key: "CN"
        },
        {
          label: "USA",
          key: "US"
        },
        {
          label: "Japan",
          key: "JP"
        },
        {
          label: "Eurzone",
          key: "EU"
        }
      ],
      createdTimes: 0,
      activeBIU: "CN"
    };
  },
  created() {
    const tab = this.$route.query.tab;
    if (tab) {
      this.activeBIU = tab;
    }
  },
  components: {
    TabPane
  },
  watch: {
    // 监听值的变化，改变路由的变化
    activeBIU(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`);
    }
  }
};
</script>
