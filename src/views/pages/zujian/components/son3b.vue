<template>
  <div style="margin-top:30px;">
    <p>boo: {{boo}}</p>

    <p>Son3b :{{$attrs}}</p>

    <Son3c v-bind="$attrs"/>
  </div>
</template>


<script>
import Son3c from "./son3c";
export default {
  inheritAttrs: false,
  props: {
    boo: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  created() {
    // console.log(this.$attrs);
  },
  methods: {},
  components: {
    Son3c
  }
};
</script>
