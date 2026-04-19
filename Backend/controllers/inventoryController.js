const Inventory=require("../models/Inventory");
//Add invertory
exports.addInventory=async(req,res)=>{
    try{
        const inventory=await Inventory.create(req.body);
        res.status(201).json(inventory);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};
//Get inventory with product details
exports.getInventory=async(req,res)=>{
    try{
        const data=await Inventory.find().populate("productId");
        res.json(data);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};