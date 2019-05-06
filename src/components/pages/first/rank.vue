<template>
  <div class="rank">
    <div class="title">
      <div>
        <span class="cli_tit">线索转换</span>
        <span class="cli_tile">设为默认</span>
      </div>
      <div>
        <span class="speac">
          <el-dropdown>
            <el-button type="primary">
              年
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>日</el-dropdown-item>
              <el-dropdown-item>周</el-dropdown-item>
              <el-dropdown-item>月</el-dropdown-item>
              <el-dropdown-item>季度</el-dropdown-item>
              <el-dropdown-item>年</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
        <span class="speac">
          <el-date-picker v-model="value2" type="month" placeholder="选择月" style="width:60px"></el-date-picker>
        </span>
      </div>
    </div>

    <div class="bi-rank-table">
      <div class="table-head">
        <div class="col1">排名</div>
        <div class="col2">
          <el-dropdown>
            <span class="el-dropdown-link">
              前10名
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>前3名</el-dropdown-item>
              <el-dropdown-item>前10名</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="col3">
          <el-dropdown>
            <span class="el-dropdown-link">
              已确认的订单金额
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>商机金额</el-dropdown-item>
              <el-dropdown-item>赢单商机金额</el-dropdown-item>
              <el-dropdown-item>已确认的订单金额</el-dropdown-item>
              <el-dropdown-item>已确认的回款金额</el-dropdown-item>
              <el-dropdown-item>合同金额</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="table-body">
        <div class="empty">
          <div class="no-data">暂无订单</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <span class="bi-icon-rank-remind"></span>
      仅统计截止到前一天23:59:59的数据，当天的数据不参与排行
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "value1",
          label: "日"
        },
        {
          value: "value2",
          label: "周"
        },
        {
          value: "value3",
          label: "月"
        },
        {
          value: "value4",
          label: "季度"
        },
        {
          value: "value5",
          label: "年"
        }
      ],
      value: ""
    };
  },
  watch: {
    handclick: function() {
      console.log(this.$refs.eloption);
    }
  }
};
</script>



<style scoped>
/* #f0f1f7 */
.rank {
  background-color: #fff;
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.title {
  display: flex;
  justify-content: space-between;
  line-height: 48px;
  font-size: 16px;
  font-weight: 700;
  padding-top: 6px;
}
.cli_tile {
  font-size: 12px;
  line-height: 40px;
  font-weight: 300;
  margin-left: 10px;
  color: #3487e2;
}
.cli_tit {
  line-height: 48px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 700;
}
.el-button--primary{
  color: #000;
  background-color: #f0f1f7;
  border: #f0f1f7;
}
.speac {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 10px;
  margin-top: 10px;
  margin-right: 15px;
  vertical-align: middle;
  height: 24px;
  line-height: 24px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
}

.table-head {
  display: flex;
  border-bottom: 2px solid #eaeaea;
  line-height: 34px;
  color: #717587;
  text-align: center;
}
.col1 {
  flex: 1;
  display: flex;
  padding-left: 20px;
}
.col2 {
  flex: 2;
}
.col3 {
  flex: 6;
}
.table-body {
  height: 205px;
  overflow: auto;
}
.empty {
  position: relative;
  width: 100%;
  height: 100%;
}
.no-data {
  font-size: 14px;
  width: 125px;
  height: 85px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  font-size: 16px;
  color: #999;
}

.footer {
  height: 56px;
  line-height: 56px;
  font-size: 12px;
  color: #2a304d;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
