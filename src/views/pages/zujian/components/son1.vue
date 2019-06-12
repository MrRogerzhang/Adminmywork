<template>
  <div>
    <div class="demo1">
      <ul style="display:flex;flex-direction:row;margin-top:10px;margin-left:10px;">
        <li
          style="margin-right:10px;border:1px solid #ccc;padding:5px 10px;"
          v-for="item in users"
          :key="item"
        >{{item}}</li>
      </ul>
    </div>
     
  </div>
</template>


<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data(){
      return{
          
      }
  }
};
</script>
