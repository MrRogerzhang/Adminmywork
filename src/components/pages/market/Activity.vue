<template>
  <div class="shopcar">
    <div>
      <h1>购物车模拟测试</h1>
    </div>
    <div class="middle">
      <h2>Products</h2>
      <ul class="product-wrapper">
        <!-- 名称 -->
        <li class="row">
          <div v-for="(th ,i) in theader" :key="i">{{th}}</div>
        </li>
        <!-- 商品总量 -->
        <li class="row" v-for="product in currentProducts" :key="product.id">
          <div>{{product.title}}</div>
          <div>{{product.price }}</div>
          <div>{{product.inventory - product.quantity }}</div>
          <div>
            <el-input-number
              :min="0"
              :max="product.inventory"
              v-model="product.quantoty"
              @change="handleChange"
            ></el-input-number>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <h2>Your Cart</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theader: ["名称", "价格", "剩余库存", "操作"]
    };
  },
  methods: {
    currentProducts() {
      // 因为数据是要变化的----getters
      return this.$store.getters.currentProducts;
    }
  }
};
</script>



<style scoped>
.shopcar {
  text-align: center;
}
.middle {
  margin-top: 50px;
  margin-bottom: 50px;
}
.product-wrapper {
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
}
.row {
  list-style: none;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
}
.row.header {
  font-size: large;
  font-weight: bold;
}
.row > div {
  flex: 1;
}
.row > div:first-child,
.row > div:last-child {
  flex: 2;
}
</style>