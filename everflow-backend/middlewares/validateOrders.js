const mongoose = require("mongoose");
const Product = require("../models/Product");
const Supplier = require("../models/Supplier");
const Inventory = require("../models/Inventory");

const validateOrder = async (req, res, next) => {
  try {
    const { productId, supplierId, quantity } = req.body;

    // 1. Basic validation
    if (!productId || !supplierId || !quantity) {
      return res.status(400).json({
        message: "productId, supplierId and quantity are required"
      });
    }

    if (quantity <= 0) {
      return res.status(400).json({
        message: "Quantity must be greater than 0"
      });
    }

    // 2. ObjectId validation
    if (
      !mongoose.Types.ObjectId.isValid(productId) ||
      !mongoose.Types.ObjectId.isValid(supplierId)
    ) {
      return res.status(400).json({
        message: "Invalid productId or supplierId"
      });
    }

    // 3. DB validation
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    const supplier = await Supplier.findById(supplierId);
    if (!supplier) {
      return res.status(404).json({
        message: "Supplier not found"
      });
    }

    const inventory = await Inventory.findOne({ productId });
    if (!inventory) {
      return res.status(404).json({
        message: "Inventory not found"
      });
    }

    // 4. Attach to request
    req.product = product;
    req.supplier = supplier;
    req.inventory = inventory;

    next(); // move to controller

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validateOrder;