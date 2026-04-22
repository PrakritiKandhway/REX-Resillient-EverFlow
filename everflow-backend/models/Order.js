const mongoose=require("mongoose")
const orderSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    supplierId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Supplier",
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:1
    },
    status:{
        type:String,
        enum:["pending","shipped","delayed"],
        default:"pending"
    },
    expectedDelivery:{
        type:Date,
    },
    actualDelivery:{
        type:Date
    }
},{timestamps:true});
module.exports=mongoose.model("Order",orderSchema) ;