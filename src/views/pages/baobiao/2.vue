<template>
  <!-- 具名插槽 有时我们需要多个插槽。例如对于一个带有如下模板的 <base-layout> 组件 -->
  <div class="container">
    <child>
       
    </child>
  </div>
</template>


<script>
import child from '@/components/Chacao/test1.vue'
export default {
  components: { child }
}
</script>
