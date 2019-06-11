<template>
  <el-col>
    <el-tag type="success">Table标签分页</el-tag>
    <el-tabs style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in ElTab" :key="item.key" :label="item.title" :name="item.key"></el-tab-pane>
      <keep-alive>
        <tab-pane></tab-pane>
      </keep-alive>
    </el-tabs>
  </el-col>
</template>


<script>
import TabPane from "@/components/TabPane";
export default {
  data() {
    return {
      ElTab: [
        {
          title: "China",
          key: "CN"
        },
        {
          title: "Japan",
          key: "Jp"
        },
        {
          title: "Korea",
          key: "Ko"
        },
        {
          title: "USA",
          key: "US"
        },
        {
          title: "Singapore",
          key: "Se"
        }
      ]
    };
  },
  components: {
    TabPane
  },
  watch: {}
};
</script>
