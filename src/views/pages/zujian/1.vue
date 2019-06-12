<template>
  <div>
    <div class="demo1">
      <div>
        父子通信： 父向子传递数据是通过 props，子向父是通过 events（ $emit）；通过父链 / 子链也可以通信（ $parent / $children）；ref 也可以访问组件实例；provide / inject API； $attrs/$listeners
        <br>兄弟通信： Bus；Vuex
        <br>跨级通信： Bus；Vuex；provide / inject API、 $attrs/$listeners
      </div>
      <div style="margin-top:100px;">父组件向子组件传值</div>
      <son1 :users="users"></son1>
      <son1 v-bind:users="users"></son1>
    </div>
  </div>
</template>


<script>
import Son1 from "./components/son1";

export default {
  data() {
    return {
      users: ["USA", "UK", "Japan", "Koren"]
    };
  },
  components: { Son1 }
};
</script>
