<template>
  <el-col>
    <el-tag type="success">Table标签分页</el-tag>
    <el-tabs type="border-card" @tab-click="handleClick" style="margin-top:15px;">
      <el-tab-pane v-for="item in ElTab" :key="item.key" :label="item.title" :name="item.key"></el-tab-pane>
      <keep-alive>
        <tab-pane :type="item.key" @create="showCreatedTimes"></tab-pane>
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
      ],
      createdTimes: 0,
      type: ""
    };
  },
  created() {},
  methods: {
    handleClick(tab, event) {
      this.type = tab.name;
    },
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1;
    }
  },
  components: {
    TabPane
  },
  watch: {}
};
</script>
