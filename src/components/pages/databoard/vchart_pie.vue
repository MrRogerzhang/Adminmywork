<template>
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
</template>

<script>
  export default {
    data () {
      this.chartSettings = {
        limitShowNum: 10
      }
      return {
        chartData: {
          columns: ['日期', '目标金额'],
          rows: [
            { '日期': '其他', '目标金额': 500},
            { '日期': '1/1', '目标金额': 1393},
            { '日期': '1/2', '目标金额': 3530},
            { '日期': '1/3', '目标金额': 2923},
            { '日期': '1/4', '目标金额': 1723},
            { '日期': '1/5', '目标金额': 3792 },
            { '日期': '1/6', '目标金额': 4593},
            { '日期': '1/7', '目标金额': 4593},

          ]
        }
      }
    }
  }
</script>
