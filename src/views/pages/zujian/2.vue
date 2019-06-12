<template>
  <div class="demo">
    <div>子组件向父组件传值(通过事件形式)</div>
    <son2 v-on:TitleChange="TitleChange"></son2>
    <h2>{{title}}</h2>
  </div>
</template>


<script>
import Son2 from "./components/son2";
export default {
  data() {
    return {
      title: "传递值"
    };
  },
  methods: {
    TitleChange(e) {
      this.title = e;
    }
  },
  components: { Son2 }
};
</script>
