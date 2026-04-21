const mongoose=require("mongoose");
const alertSchema=new mongoose.Schema({
    type:{
        type: String, // "delay", "low_stock"
        required:true
    },
    message:{
        type:String,
        required:true
    }, 
    severity:{
        type:String, // "low", "medium", "high"
        required:true
    },
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    }
},{timestamps:true});
module.exports=mongoose.model("Alert",alertSchema);