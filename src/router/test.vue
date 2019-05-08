<template>
  <div class="page" :style="this.untils.pageTopStyle">111</div>
</template>


<style>
.page{
  width: 200px;
  height: 200px;
  border: 1px solid #000;
}
</style>

<script>
export default {
  data(){
    return{

    }
  },
  created(){
    // this.get()
    let random = this.untils.getRandom()
    console.log( random);
  },
  methods:{

  }
}
</script>
