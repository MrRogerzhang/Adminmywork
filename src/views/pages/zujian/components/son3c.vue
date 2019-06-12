<template>
  <div>
    <h3 v-on:data1="data1">C组件 : {{name}} , {{age}}</h3>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "",
      age: ""
    };
  },
  methods:{
     data1(e){
         console.log(e)
     } 
  }
};
</script>
