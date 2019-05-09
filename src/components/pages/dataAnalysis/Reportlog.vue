<template>
  <div class="dataAnalysis">
    <!-- 报表头部区域 -->
    <div class="dataAnalysis_head">
      <div class="dataAnalysis_tit">
        <span>文件夹</span>
        <img class="dataAnalysis_icon" src="../../../assets/icon/mark.png" alt>
      </div>
    </div>

    <div class="dataAnalysis_main">
      <div class="oneData">
        <el-table
          class="table"
          @select="select"
          @select-all="select"
          :data="data"
          border
          ref="multipleTable"
          @selection-change="handleSelectionChange"
          row-key="id"
        >
          <!-- check -->
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <!-- 带文件夹信息 -->
          <!-- <el-table-item> -->
          <el-table-column label="文件" sortable width="250">
            <template slot-scope="scope">
              <img v-if="scope.row.children"
                src="https://a9.fspage.com/FSR/frontend/html/bi-dist/assets/images/folder-icon-8c81d960c0.png"
                alt
              >
              <img v-else src="https://a9.fspage.com/FSR/frontend/html/bi-dist/assets/images/item-icon-469b5eb448.png" alt="">
              <span style="margin-left: 5px;font-size:14px;line-height: 23px;">{{ scope.row.csentence }}</span>
            </template>
          </el-table-column>
          <!-- </el-table-item> -->
          <el-table-column prop="name" label="人物" sortable width="150"></el-table-column>
          <el-table-column prop="date" label="时间" sortable width="200"></el-table-column>
          <el-table-column prop="address" label="描述" sortable></el-table-column>
          <!-- ---操作页面--- -->
          <el-table-column label="操作" width="180" align="center">
            <template slot-scope="scope">
              <el-button
                v-if="(scope.row.children)"
                type="text"
                icon="el-icon-edit"
                @click="handleEdit(scope.$index, scope.row)"
              >重命名</el-button>
              <el-button
                v-else
                type="text"
                icon="el-icon-edit"
                @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <el-button
                type="text"
                icon="el-icon-delete"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  //分页数据

  data() {
    return {
      total: "0",
      choseData: [],
      currentPage: 1,
      select_word: "",
      pagesize: 10,
      show: true,
      editVisible: false,
      delVisible: false,
      addVisible: false,
      tableData2: [],
      del_list: [],
      new_list: [],
      input2: "",
      filters: {
        name: ""
      },
      from: {
        csentence: "",
        name: "",
        date: "",
        address: ""
      },
      addfromm: {
        csentence: "",
        name: "",
        date: "",
        address: ""
      }
    };
  },
  params: {
    page: 1
  },

  mounted() {
    this.gettableData();
  },
  computed: {
    data() {
      return this.tableData2.filter(item => {
        // console.log(item);
        return item;
      });
    }
  },
  methods: {
    // 新增用户
    useradd() {
      this.addVisible = true;
      this.addfromm = {
        csentence: "",
        name: "",
        date: "",
        address: ""
      };
    },
    // 新增用户点击确定操作
    saveAddfrom() {
      this.$refs.addfromm.validate(valid => {
        if (valid) {
          this.addVisible = false;
          this.data.pop();
          this.data.unshift(this.addfromm);
          this.$message.success("添加成功");
        }
      });
    },

    gettableData() {
      this.$fetch("/userDetail_many", {}).then(response => {
        if (response.state == 0) {
          this.tableData2 = response.data.result;
        }
      });
    },
    // 分页---------------------------
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    select(selection) {
      this.choseData = selection;

      if (selection.length == 0) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 点击删除
    handleDelete(index, row) {
      console.log(index);
      this.idx = index;
      this.delVisible = true;
    },
    // 点击编辑
    handleEdit(index, row) {
      this.idx = index;
      const item = this.data[index];
      this.from = {
        csentence: item.csentence,
        name: item.name,
        data: item.date,
        address: item.address
      };
      this.editVisible = true;
    },
    // 保存编辑
    saveEdit() {
      this.$set(this.data, this.idx, this.from);
      this.editVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
    },
    // 确定删除
    deleteRow() {
      this.data.splice(this.idx, 1);
      this.$message.success("删除成功");
      this.delVisible = false;
    },
    // 全部删除
    deleteAll() {
      console.log(this.choseData.length);
      if (this.choseData.length == 0) {
        this.$message.warning("请选择删除目标");
      } else {
        this.$message.success("删除成功");
      }
      this.del_list = this.del_list.concat(this.choseData);
      this.choseData = [];
    }
  }
};
</script>

<style scoped>
/* 报表头部区域 */
.dataAnalysis {
  background-color: #fff;
}
.dataAnalysis_head {
  font-size: 18px;
  box-sizing: border-box;
  height: 60px;
  /* line-height: 60px; */
  width: 100%;
  overflow: hidden;
  font-weight: 500;
  padding: 0 20px;
  background-color: #fff;
  position: relative;
  border-bottom: 1px solid #d8dde8;
  display: flex;
  justify-content: space-between;
}
.dataAnalysis_tit {
  line-height: 60px;
}
.dataAnalysis_icon {
  width: 18px;
  height: 18px;
}
.needmodify {
  margin-top: 10px;
  margin-bottom: 10px !important;
}

.el-icon el-icon-arrow-right::after {
  content: url("https://a9.fspage.com/FSR/frontend/html/bi-dist/assets/images/folder-icon-8c81d960c0.png") !important;
  display: inline-block;
  width: 22px;
  height: 22px;
}
/* .el-table__indent::after{
  content: url('https://a9.fspage.com/FSR/frontend/html/bi-dist/assets/images/item-icon-469b5eb448.png');
   width:22px;
  height: 22px;
} */
/* 修改input样式 */
.el-input {
  position: relative;
  /* top: 10px; */
}
.dataAnalysis_setting {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 报表二级头部区域 */
.dataAnalysis_content {
  display: flex;
  height: 40px;
  width: 100%;
  background-color: #fff;
  padding: 10px 0 0 20px;
  margin: 0;
  border: 0;
  line-height: 140%;
  color: #999;
  line-height: 36px;
  /* font: 13px/1.5 tahoma, arial, "Hiragino Sans GB", "Hiragino Sans GB W3",
    "Microsoft Yahei", \5b8b\4f53; */
}
.bi-detail__select__label {
  margin-right: 10px;
  height: 28px;
  float: left;
}
.el-col {
  padding-left: 55px;
  display: flex;
  align-items: center;
  height: 50px;
}
.el-form-item--small.el-form-item {
  margin-bottom: 0;
}

.dataAnalysis_spe {
  margin-left: 10px;
  margin-right: 10px;
}
.dataAnalysis_chart {
  margin-right: 10px;
}
/* .el-button--primary {
  background-color: #fff;
  color: #ccc;
  border: 1px solid #ccc;
} */
.dataAnalysis_need {
  position: relative;
  top: -3px;
}
.dataAnalysis_batch {
  margin-left: 10px;
  margin-right: 10px;
}
/* .el-form-item el-form-item--small{
  margin-bottom: 10px;
} */
.dataAnalysis_delete {
  margin-right: 10px;
  /* display: inline;
  border-radius: 10%;
  background-color: #fff;
  color: #666;
  border: 1px solid #ddd;
  cursor: pointer;
  margin-top: 2px; */
}
.dataAnalysis_export {
  margin-right: 10px;
}
.del-dialog-cnt {
  text-align: center;
}
handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
</style>
