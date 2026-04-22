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
        max:1
    },
    cost:{
        type:Number,
        required:true
    },
    available:{
        type:Boolean,
        default:true
    },
    avgDelayDays: {
    type: Number,
    default: 0
    },
    supplyVolumePerDay: {
    type: Number,
    default: 0
    }

},{timestamps:true});
module.exports = mongoose.model("Supplier", supplierSchema);