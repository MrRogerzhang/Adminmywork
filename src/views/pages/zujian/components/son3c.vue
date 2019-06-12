<template>
  <div style="margin-top:30px;">
    <p>coo : {{coo}}</p>
    <p>attrs:{{$attrs}}</p>
  </div>
</template>


<script>
export default {
  inheritAttrs: false,
  props: {
    coo: {
      type: String,
      required: true
    }
  }
};
</script>
