const mongoose=require("mongoose")
const shipmentSchema=new mongoose.Schema({
    
  productId: {
    type:ObjectId,
    required:true
  },
  supplierId: {
    type:ObjectId,
    required:true
  },
  quantity:{
    type: Number,
    required:true
  },
  status:{
    type: String, // "pending", "shipped", "delayed"
    required:true
  },
  expectedDelivery:{
    type: Date,
    required:true
  },
  actualDelivery:{
    type: Date,
    required:true
  }
},{timestamps:true});
module.exports=mongoose.model("Shipment",shipmentSchema);