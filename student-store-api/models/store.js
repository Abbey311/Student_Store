const { storage } = require("../data/storage")

class Store {
  static async listProducts() {
    return storage.get("products").value()
  }

  

  static async fetchProductsById(productId) {
    const product = storage
    .get("products")
    .find({ id: Number(productId) })
    .value()
    return product
  }
}


module.exports = Store  