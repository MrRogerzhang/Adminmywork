import shop from '@/api/shop';
import * as types from './mutation-types';

export default {
  // 获取数据后， 加入选取数量quantity ， 以区分是否加入购物车
  getAllProducts({
    commit
  }) {
    shop.getProducts((res) => {
      const newRes = res.map(p => Object.assign({}, p, {
        quantity: 0
      }))
      commit(types.SET_PRODUCTS, newRes)
    })
  },

  setProducts({
    commit
  }, products) {
    commit(types.SET_PRODUCTS, products)
  },

  clearCartProducts({
    commit
  }) {
    commit(types.CLEAR_CART_PRODUCTS)
  }

}
