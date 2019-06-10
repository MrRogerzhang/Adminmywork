<template>
  <div class="components-container">
    <el-button type="primary" @click="dialogTableVisible = true">
      打开一个新的Dialog
    </el-button>
    <el-dialog v-el-drag-dialog :visible.sync="dialogTableVisible" title="Dialog标题" @dragDialog="handleDrag">
      <el-select ref="select" v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-table :data="gridData">
        <el-table-column property="date" label="Date" width="150" />
        <el-table-column property="name" label="Name" width="200" />
        <el-table-column property="address" label="Address" />
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui

export default {
  name: 'DragDialogDemo',
  directives: { elDragDialog },
  data() {
    return {
      dialogTableVisible: false,
      options: [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' }
      ],
      value: '',
      gridData: []
    }
  },
   mounted(){
    this.grildData()
  },
  methods: {
    grildData(){
      this.$post('/eldralog' , {
      }).then(response =>{
        if(response.status === 0){
          this.gridData  = response.data.gridData
        }
      })
    },
    // v-el-drag-dialog onDrag callback function
    handleDrag() {
      this.$refs.select.blur()
    }
  }
  
}
</script>
