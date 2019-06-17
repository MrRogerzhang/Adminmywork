<template>
  <ve-line
    :data="chartData"
    width="600px"
  ></ve-line>
</template>

<script>
export default {
  data: function() {
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户"],
        rows: [
          { 日期: "1", 访问用户: 0, 下单用户: 0 },
          { 日期: "2", 访问用户: 0, 下单用户: 0 },
          { 日期: "3", 访问用户: 0, 下单用户: 0 },
          { 日期: "4", 访问用户: 0, 下单用户: 0 },
          { 日期: "5", 访问用户: 0, 下单用户: 0 },
          { 日期: "6", 访问用户: 0, 下单用户: 0 },
          { 日期: "7", 访问用户: 0, 下单用户: 0 }
        ]
      }
    };
  }
};
</script>