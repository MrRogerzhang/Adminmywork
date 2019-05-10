<template>
  <div id="app">
    <h1>购物车模拟测试</h1>
    <hr>
    <h2>Products</h2>
    <v-productList/>
    <hr>
    <h2>Your Cart</h2>
    <shop-cart/>
  </div>
</template>

<script>
import VProductList from './ProductList.vue'
import ShopCart from './ShoppingCart.vue'

export default {
  components: { VProductList, ShopCart }
}
</script>
