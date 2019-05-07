<template>
  <div class="dataAnalysis">
    <!-- 报表头部区域 -->
    <div class="dataAnalysis_head">
      <div class="dataAnalysis_tit">
        <span>信息报表</span>
        <img class="dataAnalysis_icon" src="../../../assets/icon/mark.png" alt>
      </div>
      <!-- <div class="dataAnalysis_sea">
        <el-input placeholder="搜索图表" prefix-icon="el-icon-search" v-model="input2"></el-input>
      </div>
      <div class="dataAnalysis_setting">
        <span></span>
        <el-dropdown>
          <el-button type="primary">
            新建
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>新建报表</el-dropdown-item>
            <el-dropdown-item>新建统计图</el-dropdown-item>
            <el-dropdown-item>新建报表分类</el-dropdown-item>
            <el-dropdown-item>新建全部报表</el-dropdown-item>
            <el-dropdown-item>新建全部统计图</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>-->
    </div>

    <!-- 二级头部----if--需要变化的 -->
    <!-- <div class="dataAnalysis_content" v-if="show">
      <span class="bi-detail__select__label">筛选</span>
      <el-dropdown>
        <span class="el-dropdown-link">
          全部
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>全部</el-dropdown-item>
          <el-dropdown-item>我创建的</el-dropdown-item>
          <el-dropdown-item>我编辑的</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="dataAnalysis_spe">|</span>
      <span class="dataAnalysis_chart">图表类型:</span>
      <el-dropdown class="dataAnalysis_need">
        <el-button type="primary">
          全部
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>全部</el-dropdown-item>
          <el-dropdown-item>报表</el-dropdown-item>
          <el-dropdown-item>统计图</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>-->
    <!-- 二级头部----if--需要变化的 -->
    <!-- <div class="dataAnalysis_content" v-else>
      <span class="dataAnalysis_spe">|</span>
      <span class="dataAnalysis_batch">批量:</span>
      <span class="dataAnalysis_delete" @click="deleit">删除</span>
      <span class="dataAnalysis_export">导出</span>
      <span class="dataAnalysis_Mergeexport">合并导出</span>
    </div>-->

    <!-- <div class="dataAnalysis_content">
        <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
        <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="湖南省" value="湖南省"></el-option>
        </el-select>
        <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
        <el-button type="primary" icon="search" @click="search">搜索</el-button>
    </div>-->
    <!-- 内容区域 -->
    <div class="dataAnalysis_main">
      <div class="oneData">
        <el-table
          class="table"
          @select="select"
          @select-all="select"
          :data="tableData1.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          border
          ref="multipleTable"
          @selection-change="handleSelectionChange"
          row-key="id"
        >
          <!-- check -->
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="csentence" label="信息" sortable width="250"></el-table-column>
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

    <!-- 编辑弹出框 -->
    <el-dialog title="重命名" :visible.sync="editVisible" width="30%">
      <el-form ref="form" :model="from" label-width="100px">
        <!-- 调整日期 -->
        <el-form-item label="日期">
          <el-date-picker
            type="datetime"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
            v-model="from.date"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <!-- 调整修改人 -->
        <el-form-item label="修改人">
          <el-input v-model="from.name"></el-input>
        </el-form-item>
        <!-- 调整描述 -->
        <el-form-item label="修改地址">
          <el-input v-model="from.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 删除提示框 -->
    <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
      <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteRow">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 分页--------------------------- -->
    <el-footer>
      <template>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData1.length"
          ></el-pagination>
        </div>
      </template>
    </el-footer>
  </div>
</template>


<script>
export default {
  //分页数据

  data() {
    return {
      total: "0",
      currentPage: 1,
      pagesize: 10,
      show: true,
      editVisible: false,
      delVisible: false,
      tableData1: [],
      input2: "",
      from: {
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
  methods: {
    gettableData() {
      this.$fetch("/userDetail", {}).then(response => {
        if (response.state == 0) {
          // console.log(response.data.result);
          this.tableData1 = response.data.result;
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
      this.idx = index;
      this.delVisible = true;
    },
    // 点击编辑
    handleEdit(index, row) {
      this.idx = index;
      const item = this.tableData1[index];
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
      this.$set(this.tableData1, this.idx, this.from);
      this.editVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
    },
    // 确定删除
    deleteRow() {
      this.tableData1.splice(this.idx, 1);
      this.$message.success("删除成功");
      this.delVisible = false;
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

.dataAnalysis_spe {
  margin-left: 10px;
  margin-right: 10px;
}
.dataAnalysis_chart {
  margin-right: 10px;
}
.el-button--primary {
  background-color: #fff;
  color: #ccc;
  border: 1px solid #ccc;
}
.dataAnalysis_need {
  position: relative;
  top: -3px;
}
.dataAnalysis_batch {
  margin-left: 10px;
  margin-right: 10px;
}
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
