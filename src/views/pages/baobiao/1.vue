<template>
  <div>
    <!-- 把整体看作一个table -->
    <el-col class="el-col">
      <!-- 头部区域 -->
      <div class="colhead">
        <el-tag>信息报表</el-tag>
        <svg-icon icon-class="mark" style="margin-left:10px; "></svg-icon>
        <el-input placeholder="搜索图表" style="width:100px;display:inline-block;margin-left:200px;"></el-input>
      </div>

      <el-main>
        <el-input v-model="select_word" placeholder="姓名" style="display:inline-block;width:150px;"></el-input>
        <el-button type="primary" style="margin-left:10px;" @click="baonewAdd">新增</el-button>
        <el-button type="warning" @click="baodeleteAll">批量删除</el-button>
      </el-main>
      <el-table
        border
        ref="multipleTable"
        tooltip-effect="dark"
        @select="select"
        @select-all="select"
        :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      >
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="name" label="姓名" width="100%"></el-table-column>
        <el-table-column prop="date" label="时间"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.$index,scope.row)"
              icon="el-icon-bottom"
              type="text"
              size="small"
            >查看</el-button>
            <el-button
              @click="handleEdit(scope.$index, scope.row)"
              icon="el-icon-edit"
              type="text"
              size="small"
            >编辑</el-button>
            <el-button
              @click="handleDelete(scope.$index, scope.row)"
              icon="el-icon-circle-close"
              type="text"
              size="small"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- </el-container> -->
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
              :total="data.length"
            ></el-pagination>
          </div>
        </template>
      </el-footer>
    </el-col>

    <!-- ----查看个人信息---- -->
    <el-dialog title="查看个人信息" :visible.sync="bao1look">
      <el-form :model="LookInfo">
        <el-form-item label="姓名">
          <el-input style="display:inline-block;width:33%;" v-model="LookInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker type="date" value-format="yyyy-MM-dd" v-model="LookInfo.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input style="display:inline-block;width:80%;" v-model="LookInfo.address"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 修改个人信息 -->
    <el-dialog title="修改个人信息" :visible.sync="bao1edit">
      <el-form :model="EditInfo" ref="EditInfo">
        <el-form-item label="姓名">
          <el-input style="display:inline-block;width:33%;" v-model="EditInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker type="date" value-format="yyyy-MM-dd" v-model="EditInfo.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input style="display:inline-block;width:80%;" v-model="EditInfo.address"></el-input>
        </el-form-item>
      </el-form>
      <!-- 按钮确定和取消 -->
      <span slot="footer">
        <el-button type="primary" @click.native="bao1editSure">确定</el-button>
        <el-button @click.native="bao1edit = false">取消</el-button>
      </span>
    </el-dialog>
    <!-- 删除确定按钮 -->
    <el-dialog title="是否删除个人信息" :visible.sync="bao1detele">
      <!-- 按钮确定和取消 -->
      <span slot="footer">
        <el-button type="primary" @click.native="bao1DeteleSure">确定</el-button>
        <el-button @click.native="bao1detele = false">取消</el-button>
      </span>
    </el-dialog>

    <!-- ----新增个人信息---- -->
    <el-dialog title="新增个人信息" :visible.sync="bao1newadd">
      <el-form :model="AddInfo" ref="AddInfo">
        <el-form-item label="姓名">
          <el-input style="display:inline-block;width:33%;" v-model="AddInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker value-format="yyyy-MM-dd" type="date" v-model="AddInfo.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input style="display:inline-block;width:80%;" v-model="AddInfo.address"></el-input>
        </el-form-item>
      </el-form>
      <!-- 按钮确定和取消 -->
      <span slot="footer">
        <el-button type="primary" @click.native="bao1AddSure">确定</el-button>
        <el-button @click.native="bao1newadd = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>



<script>
export default {
  data() {
    return {
      biaoData: [],
      currentPage: 1,
      pagesize: 10,
      bao1look: false,
      bao1edit: false,
      bao1detele: false,
      bao1newadd: false,
      idx: null,
      deleteAll: [],
      del_list: [],
      //   通过姓名查询
      select_word: "",
      //   定义初始个人信息
      LookInfo: {
        name: "",
        date: "",
        address: ""
      },
      EditInfo: {
        name: "",
        date: "",
        address: ""
      },
      AddInfo: {
        name: "",
        date: "",
        address: ""
      }
    };
  },
  mounted() {
    this.getbiaoData();
  },
  methods: {
    //   得到所有的数据---------------
    getbiaoData() {
      this.$fetch("/biao1", {}).then(respone => {
        this.biaoData = respone.data.projects;
      });
    },
    // 分页------------------------
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    // 操作界面 ----------- 查看
    // 当点击查看时，让dialog显示,同时赋值数据
    handleClick(index, row) {
      this.bao1look = true;
      this.LookInfo = {
        name: row.name,
        date: row.date,
        address: row.address
      };
    },
    // 操作界面 ----------- 编辑-----通过改变数据并且驱动视图更新$set方法
    handleEdit(index, row) {
      this.idx = index;
      this.bao1edit = true;
      this.EditInfo = {
        name: row.name,
        date: row.date,
        address: row.address
      };
    },
    // 操作界面 ----------- 编辑 -------确定按钮
    bao1editSure() {
      this.$set(this.data, this.idx, this.EditInfo);
      this.bao1edit = false;
      this.$message.success("修改成功");
    },
    // 操作界面 ----------- 删除 -------
    handleDelete(index, row) {
      this.bao1detele = true;
      this.idx = index;
    },
    // 操作界面 ----------- 删除 -------确定按钮
    bao1DeteleSure() {
      this.data.splice(this.idx, 1);
      this.bao1detele = false;
      this.$message.warning("删除成功");
    },
    // 新增按钮-----
    baonewAdd() {
      this.bao1newadd = true;
    },
    // 新增按钮----- 新增 ----确定按钮
    bao1AddSure() {
      //this.$refs.AddInfo 这个数据上有一个validate方法,这个方法可以判断数据是否存在
      this.$refs.AddInfo.validate(valid => {
        if (valid) {
          // 删除尾部数据，并且在头部添加
          this.data.pop();
          this.data.unshift(this.AddInfo);
          this.bao1newadd = false;
          this.$message.success("新增用户成功");
        }
      });
    },
    // 当用户手动勾选数据行的 Checkbox 时触发的事件, 将所有的勾选的数据集中到一个数组中
    select(selection, row) {
      this.deleteAll = selection;
    },
    // 批量删除-----all
    baodeleteAll() {
      // console.log(this.deleteAll);
      if (this.deleteAll.length) {
        this.del_list = this.del_list.concat(this.deleteAll);
        this.deleteAll = [];
        this.$message.success("删除成功");
      } else {
        this.$message.warning("请选择删除目标");
      }
    }
  },
  computed: {
    data() {
      return this.biaoData.filter(item => {
        // return item;
        let is_del = false;
        for (let i = 0; i < this.del_list.length; i++) {
          if (item.name === this.del_list[i].name) {
            is_del = true;
            break;
          }
        }
        if (!is_del) {
          if (
            item.name.indexOf(this.select_word) > -1 ||
            item.address.indexOf(this.select_word) > -1
          ) {
            return item;
          }
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.el-col {
  //   background-color: #fff;
  .colhead {
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
