const express=require("express");
const router=express.Router();

const Alert=require("../models/Alert");
//Get all Alerts
router.get("/",async(req,res)=>{
    const alerts=await Alert.find().populate("orderId");
    res.json(alerts);
});
momdule.exports=router;