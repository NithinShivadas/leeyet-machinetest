const mongoose = require("mongoose");
const Product = require("./product");

//---------get product------------
const getProduct = async (req, res, next) => {
  let products;
  try {
    products = await Product.find();
  } catch (err) {
    console.log(err);
  }
  if (!products) {
    return res.status(404).json({ message: "No product Found" });
  }
  return res.status(200).json({ products });
};

//-----------------Add Product-------------
const addProduct = async (req, res, next) => {
  const { productName,images, Description, Price, Discount,ShippingCharge  } = req.body;
  let products;
  try {
    products = await Product.findOne({
      productName: productName,
      images:images,
      Description: Description,
      Price: Price,
      Discount: Discount,
      ShippingCharge:ShippingCharge
      
    });
  } catch (err) {
    console.log(err);
  }
  if (products) {
    return res.status(404).json({ message: "This Product Already Exist" });
  }
  const prodect = new Product({
    productName,
    images,
    Description,
    Price,
    Discount,
    ShippingCharge
  });
  try {
    if(req.file){
        Product.images=req.file.path 
    }
    await prodect.save();
  } catch (err) {
    console.log(err);
  }
  return res
    .status(200)
    .json({ prodect, message: "Product Added Successfully" });
};

//-------------update Product-----------------

const updateProduct = async (req, res, next) => {
  const { productName,images, Description, Price, Discount,ShippingCharge } = req.body;
  const productId = req.params.id;
  let products;
  try {
    products = await Product.findByIdAndUpdate(productId, {
      productName,
      images,
      Description,
      Price,
      Discount,
      ShippingCharge
    });
  } catch (err) {
    console.log(err);
  }
  if (!products) {
    return res.status(500).json({ message: "Unable to update the Product" });
  }
  return res.status(200).json({ products, message: "Updated Successfully" });
};

//------------------Delete products---------------
const deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  let products;
  try {
    products = await Product.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!products) {
    return res.status(404).json({ message: "Unable to delete" });
  }
  return res
    .status(200)
    .json({ products, message: "Product Removed Successfully" });
};

//-------------------get product by id---------
const getProductById = async (req, res, next) => {
  let products;
  const id = req.params.id;
  try {
    products = await Product.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!products) {
    return res.status(404).json({ message: "No product Found" });
  }
  return res.status(200).json({ products });
};

module.exports = {
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById
};
