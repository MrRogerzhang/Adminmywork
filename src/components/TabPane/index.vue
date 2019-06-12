<template>
  <el-table>
    <!-- ID -->
    <el-table-column></el-table-column>
    <!-- Date -->
    <el-table-column></el-table-column>
    <!-- Title -->
    <el-table-column></el-table-column>
    <!-- Author -->
    <el-table-column></el-table-column>
    <!-- Importance -->
    <el-table-column></el-table-column>
    <!-- Readings -->
    <el-table-column></el-table-column>
    <!-- status -->
    <el-table-column></el-table-column>
  </el-table>
</template>



<script>
export default {
  props: {
    type: {
      type: String,
      default: "CN"
    }
  },
  data() {
    return {
      getElTabData: [],
      tab: null,
      routerMove: "CN"
    };
  },
  created() {
    this.tab = this.$route.query.tab;
  },
  mounted() {
    this.getTabData();
  },
  methods: {
    getTabData() {
      this.$post("/elTabpane", {}).then(respone => {
        this.getElTabData = respone.data;
      });
    }
  },
  watch: {}
};
</script>
