<template>
  <div >
    <p>foo : {{foo}}</p>

    <p>3a的$attrs : {{$attrs}}</p>

    <son3b v-bind="$attrs"></son3b>
  </div>
</template>


<script>
import Son3b from "./son3b";
export default {
  inheritAttrs: false,
  props: {
    foo: {
      type: String,
      required: true
    }
  },
  // 
  created() {
    // console.log(this.$attrs);
  },
  methods: {
    send() {}
  },
  components: {
    Son3b
  }
};
</script>
