<template>
  <div>
    <div>子组件向父组件传值(方法二: $emit / $on)</div>
    <div>这种方法通过一个空的Vue实例作为中央事件总线（事件中心），用它来触发事件和监听事件,巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级。当我们的项目比较大时，可以选择更好的状态管理解决方案vuex。</div>
    <div>.具体实现方式：varEvent=newVue();Event.$emit(事件名,数据);Event.$on(事件名,data=>{});</div>

    <son3a></son3a>
    <son3b></son3b>
    <son3c></son3c>
  </div>
</template>


<script>
import Son3a from "./components/son3a";
import Son3b from "./components/son3b";
import Son3c from "./components/son3c";

export default {
  components: {
    Son3a,
    Son3b,
    Son3c
  }
};
</script>
