<template>
  <div>
    <div class="maindate">
      <h1>数据统计</h1>
      <div class="date1">
        <p>当日数据</p>
        <p>{{userList.length}} 登录用户</p>
        <p>{{addOrder}} 新增订单</p>
        <p>{{newSale}} 销售额</p>
      </div>
      <div class="date2">
        <p>总数据</p>
        <p>{{userList.length}} 注册用户</p>
        <p>{{newOder}} 订单</p>
        <p>{{oldSale}} 历史销售额</p>
      </div>
    </div>
    <div class="vcharts">
      <vline></vline>
    </div>
  </div>
</template>


<script>
import Vline from "@/components/Vcharts/vline";

export default {
  data() {
    return {
      addPeo: 0,
      addOrder: 0,
      newSale: 0,
      newPeo: 0,
      newOder: 0,
      oldSale: 0,
      // 用户数据
      userList: [],
      // 订单金额
      orderList: []
    };
  },
  components: { Vline },
  created() {
    this.getAlldata();
  },
  methods: {
    getAlldata() {
      var that = this;
      this.$fetch("http://localhost:9562/admin/AllData")
        .then(res => {
          console.log(res);
          let user = res.find(v => v.type === "user").data;
          let order = res.find(v => v.type === "order").data;
          // 用户数据
          that.userList = user;
          // 订单金额
          that.orderList = order;
        })
        .then(user => {});
    }
  }
};
</script>









 <style scoped>
.maindate {
  width: 100%;
  height: 100%;
}
.date1 {
  display: flex;
  flex-direction: row;
}
.date2 {
  display: flex;
  flex-direction: row;
}
h1 {
  width: 120px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-left: 10px;
  border-radius: 10px;
  background-color: tomato;
}
.date1 p {
  background-color: #ccc;
  text-align: center;
  line-height: 40px;
  width: 120px;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.date2 p {
  background-color: #ccc;
  text-align: center;
  line-height: 40px;
  width: 120px;
  height: 40px;
  margin-left: 10px;
  border-radius: 10px;
  margin-top: 10px;
}
.date1 p:first-child {
  background-color: orange;
  color: #fff;
}
.date2 p:first-child {
  background-color: orange;
  color: #fff;
}
.vcharts {
  /* margin: 0 auto; */
}
</style>
 