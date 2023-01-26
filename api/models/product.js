import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
});

// module.exports = model("Product", productSchema);
const productModel = model("Product", productSchema);
export default productModel;
