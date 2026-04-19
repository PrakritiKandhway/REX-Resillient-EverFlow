const mongoose=require("mongoose")
const inventorySchema=new mongoose.Schema({
  productId: {
    type:ObjectId,
    required:true
},
  stock: {
    type:Number,
    required:true
  },
  threshold: {
    type:Number,
    required:true
  }

},{timestamps:true});
module.exports = mongoose.model("Inventory", inventorySchema);