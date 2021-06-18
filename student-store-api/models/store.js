const { BadRequestError } = require("../utils/errors")
const { storage } = require("../data/storage")

class Store {
  static async listProducts() {
    return storage.get("products").value()
  }
}


module.exports = Store