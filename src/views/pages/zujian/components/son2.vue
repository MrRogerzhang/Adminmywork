<template>
  <div class="demo">
    <h1 style="border:1px solid #ccc;padding:5px 10px;background-color:gray;width:200px;text-align:center;" @click="changeTitle">{{tit}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tit: "点击按钮改变下方父组件的字体"
    };
  },
  methods: {
    changeTitle() {
      this.$emit("TitleChange", "我改变了");
    }
  }
};
</script>
