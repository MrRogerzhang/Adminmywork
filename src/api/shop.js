/**
 * Mocking client-server processing
 */
const _products = [
  { 'id': 1, 'title': '苹果', 'price': 500, 'inventory': 2 },
  { 'id': 2, 'title': '华为', 'price': 10, 'inventory': 10 },
  { 'id': 3, 'title': '小米', 'price': 20, 'inventory': 5 }
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  }
}
