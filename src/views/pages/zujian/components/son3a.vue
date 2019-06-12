<template>
  <div>
    <h3>A组件: {{name}}</h3>
    <button @click="send">将数据发送给C组件</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    send() {
         this.$emit('data1', '你瞅啥')
    }
  }
};
</script>
