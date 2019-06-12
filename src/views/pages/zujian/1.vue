<template>
<div>
    <div class="demo1">
      <div>父组件向子组件传值</div>
      <son1 :users='users'></son1>
      <son1 v-bind:users='users'></son1>
    </div>
     
</div>
</template>


<script>
import Son1 from "./components/son1";

export default {
  data(){
    return{
      users:['USA' , 'UK' , 'Japan' , 'Koren']
    }
  },
  components: { Son1 }
};
</script>
