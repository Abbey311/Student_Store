const express = require("express")
const Store = require("../models/store")
const { NotFoundError } = require("../utils/errors")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const products = await Store.listProducts()
    res.status(200).json({ products })
  } catch (err) {
    next(err)
  }
})


router.get("/:id", async (req, res, next) => {
  try {
    const productId = req.params.id
    const product = await Store.fetchProductsById(productId)
    if (!product) {
      throw new NotFoundError("No Product Found")
    }
    res.status(200).json({ product })
} catch(err){
  next(err)
}
})



module.exports = router