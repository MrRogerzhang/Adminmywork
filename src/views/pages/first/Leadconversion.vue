<template>
  <div class="conversion">
    <div class="title">
      <div>
        <span class="cli_tit">线索转换</span>
        <span class="cli_tile">所有线索来源</span>
      </div>
      <div>
        <span class="widget-tab widget-tab-post hover-tip">陈少天</span>
        <span class="widget-tab widget-tab-time">本月</span>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="conversion_all">
      <div class="conversion_one">
        <img class="conversion_img" src="../../../assets/img/img.jpg" alt>
        <div class="conversion_font">
          <span>线索总数/转化率</span>
          <span>0个/ 0.00%</span>
        </div>
      </div>

      <div class="conversion_one">
        <img class="conversion_img" src="../../../assets/img/img.jpg" alt>
        <div class="conversion_font">
          <div class="conversion_money">
            <span>转化为客户对线索数/转化率</span>
            <span class="conversion_m">商机金额:0.00元</span>
          </div>
          <span>0个/ 0.00%</span>
        </div>
      </div>

      <div class="conversion_one">
        <img class="conversion_img" src="../../../assets/img/img.jpg" alt>
        <div class="conversion_font">
          <span>转化为商机对线索数/转化率</span>
          <span>0个/ 0.00%</span>
        </div>
      </div>

      <div class="conversion_one">
        <img class="conversion_img" src="../../../assets/img/img.jpg" alt>
        <div class="conversion_font">
          <div class="conversion_money">
            <span>转化为订单对线索数/转化率</span>
            <span class="conversion_m">订单金额:0.00元 | 已回款:0.00元</span>
          </div>
          <span>0个/ 0.00%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.conversion {
  background-color: #fff;
  margin-top: 20px;
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
.conversion_one {
  display: flex;
  padding: 0 15px;
  line-height: 56px;
  height: 56px;
  font-size: 12px;
  color: #1006;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}
.conversion_all {
  display: flex;
  flex-direction: column;
}
.conversion_font {
  font-size: 14px;
  vertical-align: top;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.conversion_money {
  display: flex;
  flex-direction: column;
}
.conversion_m {
  font-size: 12px;
  line-height: 0;
  position: relative;
  top: -10px;
}
.conversion_img {
  margin: 20px 16px 0 1px;
  width: 16px;
  height: 16px;
}
</style>
