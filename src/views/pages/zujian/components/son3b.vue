<template>
  <div>
    <h3>B组件: {{age}}</h3>
    <button @click="send">将数组发送给C组件</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      age: ""
    };
  },
  methods: {
    send() {
      this.$emit("data2", "瞅你咋滴");
    }
  }
};
</script>
