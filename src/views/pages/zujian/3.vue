<template>
  <div>
    <div>组件间传值</div>
    <div>
      $attrs / $listeners
      1.简介
      多级组件嵌套需要传递数据时，通常使用的方法是通过vuex。但如果仅仅是传递数据，而不做中间处理，使用 vuex 处理，未免有点大材小用。为此Vue2.4 版本提供了另一种方法---- $attrs/ $listeners
      $attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 interitAttrs 选项一起使用。
      $listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件
    </div>
    <son3a style="margin-top:220px;" :foo="foo" :boo="boo" :coo="coo" :doo="doo" title="前端工匠"></son3a>
  </div>
</template>


<script>
import Son3a from "./components/son3a";

export default {
  data() {
    return {
      foo: "Javascript",
      boo: "HTML",
      coo: "CSS",
      doo: "Vue"
    };
  },
  components: {
    Son3a
  }
};
</script>
