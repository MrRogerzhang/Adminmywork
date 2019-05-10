<template>
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
        <el-input-number :min="0"  :max="product.inventory" v-model='product.quantoty' @change="handleChange"></el-input-number>
      </div>
    </li>
  </ul>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      theader: ["名称", "价格", "剩余库存", "操作"],
      currentProducts: []
    };
  },
    computed: {
      // 解构对象，  得到allProducts
      ...mapGetters(["allProducts"])
    },
  created() {
    // 页面创建时， 定义一个获取所有的商品方法
    this.getAllProducts();
  },
  methods: {
    handleChange() {
      this.setProducts(this.currentProducts);
    },
    ...mapActions(["getAllProducts", "setProducts"])
  },

  watch: {
    allProducts: {
    // mutations中  handler为回调函数
      handler(val) {
        this.currentProducts = JSON.parse(JSON.stringify(this.allProducts))
      }
    }
  }
};
</script>


<style scoped>
.product-wrapper {
  padding: 0;
  margin: 0;
  max-width: 600px;
}
.row {
  list-style: none;
  display: flex;
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
