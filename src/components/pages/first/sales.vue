<template>
  <div class="sale_client">
    <div class="title">
      <span class="cli_tit">销售简报</span>
      <div>
        <span class="widget-tab widget-tab-post hover-tip">陈少天</span>
        <span class="widget-tab widget-tab-time">本月</span>
      </div>
    </div>

    <div class="client">
      <div class="salekit-content">
        <img class="client_img" src="../../../assets/img/img.jpg" alt>
        <div class="all_client">
          <span>新增客户</span>
          <span>0个</span>
        </div>
      </div>
      <div class="salekit-content">
        <img class="client_img" src="../../../assets/img/img.jpg" alt>
        <div class="all_client">
          <span>新增联系人</span>
          <span>0个</span>
        </div>
      </div>
      <div class="salekit-content">
        <img class="client_img" src="../../../assets/img/img.jpg" alt>
        <div class="all_client">
          <span>新增商机</span>
          <span>0个</span>
        </div>
      </div>
      <div class="salekit-content">
        <img class="client_img" src="../../../assets/img/img.jpg" alt>
        <div class="all_client">
          <span>阶段变化商机</span>
          <span>0个</span>
        </div>
      </div>
      <div class="salekit-content">
        <img class="client_img" src="../../../assets/img/img.jpg" alt>
        <div class="all_client">
          <span>客户拜访(高级外勤)</span>
          <span>0个</span>
        </div>
      </div>
      <div class="salekit-content">
        <img class="client_img" src="../../../assets/img/img.jpg" alt>
        <div class="all_client">
          <span>新增销售记录</span>
          <span>0个</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.sale_client {
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  justify-content: space-between;
  line-height: 48px;
  font-size: 16px;
  font-weight: 700;
  padding-top: 6px;
}
.cli_tit {
  line-height: 48px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 700;
}
.widget-tab {
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
  background-color: #f0f1f7;
  font-size: 14px;
  font-weight: 400;
  color: #2a304d;
}
.widget-tab-post {
  margin-right: 5px;
}
.client {
  display: flex;
  flex-wrap: wrap-reverse;
  padding-bottom: 16px;
  width: 100%;
  justify-content: space-between;
}

.salekit-content {
  display: flex;
  min-width: 50%;
  height: 56px;
  line-height: 56px;
  padding-right: 10px;
  box-sizing: border-box;
  margin-top: 8px;

}
.salekit-content:hover{
  background-color: #ccc;
}
.all_client {
  margin-left: 10px;
  border-bottom: 1px solid #ccc;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.client_img {
  margin-top: 10px;
  margin-left: 10px;
  width: 32px;
  height: 32px;
  border-radius: 10%;
}
</style>
