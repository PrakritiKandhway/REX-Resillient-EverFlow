const mongoose=require("mongoose")
const supplierSchema=new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    reliabilityScore:{
        type:Number,
        required:true,
        min:0,
        max:100
    },
    cost:{
        type:Number,
        required:true
    },
    available:{
        type:Boolean,
        default:true
    }

},{timestamps:true});
module.exports = mongoose.model("Supplier", supplierSchema);