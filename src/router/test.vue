<template>
  <div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
