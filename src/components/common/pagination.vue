<template>
  <el-pagination
    background
    @current-change="handleCurrentChange"
    :current-page="currentPageNum"
    :page-size="pageSize"
    layout="total,slot,prev"
    :total="total"
  ></el-pagination>
</template>
<script>
export default {
  name: "pages",
  data() {
    return {
      currentPageNum: this.currentPage
    };
  },
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    firstPage: {
      type: Number
    },
    lastPage: {
      type: Number
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPageNum = val;
      this.$emit("handleCurrentChangeSub", val);
    },
    toFirstPage(val) {
      this.currentPageNum = this.firstPage;
      this.handleCurrentChange(this.firstPage);
    },
    toLastPage(val) {
      this.currentPageNum = this.lastPage;
      this.handleCurrentChange(this.lastPage);
    }
  }
};
</script>
<style>
</style>
