const Order = require("../models/Order");
const {checkRisk,suggestSupplier}=require("../services/riskServices")
const Inventory=require("../models/Inventory");
const Supplier=require("../models/Supplier");
const Alert = require("../models/Alert");

// CREATE order
exports.addOrder = async (req, res) => {
  try {
    const {productId,supplierId,quantity} = req.body;

    const order = await Order.create({
      productId,
      supplierId,
      quantity
    });
    const inventory=await Inventory.findOne({productId});
    const supplier=await Supplier.findById(supplierId);
    const allSuppliers=await Supplier.find();

    const risks=checkRisk(order,inventory,supplier);
    const suggestion=suggestSupplier(allSuppliers);
    
    // CREATE ALERTS
    for (let risk of risks) {
      await Alert.create({
        type: risk.type,
        message: risk.message,
        severity: risk.severity,
        orderId: order._id
      });
    }

    res.status(201).json({
      order,
      risks,
      suggestedSupplier: suggestion
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
    .populate("productId")
    .populate("supplierId");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};