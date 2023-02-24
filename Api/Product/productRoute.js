const express = require("express");
const routeProduct = express.Router();
const upload = require("../middleware/uploads");
const {
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} = require("./productController");

routeProduct.get("/", getProduct);
routeProduct.post("/addproduct", upload.single("images"), addProduct);
routeProduct.put("/update/:id", updateProduct);
routeProduct.delete("/:id", deleteProduct);
routeProduct.get("/:id", getProductById);

module.exports = routeProduct;
