const Order = require("../models/Order");

// CREATE order
exports.addOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
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