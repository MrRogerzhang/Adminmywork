<template>
  <div>
    <el-button v-waves type="primary">蓝色按钮</el-button>
  </div>
</template>



<script>
import waves from '@/directive/waves'
export default {
  directives: { waves }
};
</script>
