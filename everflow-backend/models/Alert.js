const mongoose=require("mongoose");
const alertSchema=new mongoose.Schema({
    alert:{
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
    createdAt:{
        type:Date,
        required:true
    }
},{timestamps:true});
module.exports=mongoose.model("Alert",alertSchema);