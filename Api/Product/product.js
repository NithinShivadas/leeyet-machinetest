const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  productName: { type: String, required: true },
  images:{type:String},
  Description: { type: String, required: true },
  Price: { type: String, required: true },
  Discount: { type: String, required: true },
  ShippingCharge: { type: String, required: true },
  
  
});

module.exports=Product