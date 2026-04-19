const Supplier=require("../models/Supplier")
//Create
exports.addSupplier =async(req,res)=>{
    try {
        const supplier=await Supplier.create(req.body);
        res.json(supplier);
    } catch (err) {
        res.status(500).json({error:err.message});
    }
};
//Read
exports.getSuppliers=async(req,res)=>{
    const suppliers=await Supplier.find();
    res.json(suppliers);
};