const Order = require("../models/Order");
<<<<<<< Updated upstream:Backend/controllers/orderController.js
const {checkRisk,suggestSupplier}=require("../services/riskServices")
const Inventory=require("../models/Inventory");
const Supplier=require("../models/Supplier");
=======
const { checkRisk, suggestSupplier } = require("../services/riskServices");
const Supplier = require("../models/Supplier");
const Alert = require("../models/Alert");
>>>>>>> Stashed changes:everflow-backend/controllers/orderController.js

const { getWeatherRisk } = require("../services/weatherServices");
const { calculateRisk } = require("../services/riskEngine");
const { calculateImpact } = require("../services/impactEngine");
const { getRecommendations } = require("../services/recommendationServices");

// CREATE order
exports.addOrder = async (req, res) => {
  try {
    const { productId, supplierId, quantity } = req.body;

    // Data from middleware
    const supplier = req.supplier;
    const product = req.product;
    const inventory = req.inventory;

    // Create Order
    const order = await Order.create({
      productId,
      supplierId,
      quantity
    });

<<<<<<< Updated upstream:Backend/controllers/orderController.js
    const risks=checkRisk(order,inventory,supplier);
    const suggestion=suggestSupplier(allSuppliers);
=======
    // Get all suppliers (for suggestion)
    const allSuppliers = await Supplier.find();

    // Detect risks (rule-based)
    const risks = checkRisk(order, inventory, supplier);

    // Weather data
    const weatherData = await getWeatherRisk(supplier.location);

    // Risk score
    const riskData = calculateRisk(supplier, weatherData.risk);

    // Impact analysis (dynamic)
    const impact = calculateImpact(
      supplier.supplyVolumePerDay,
      supplier.avgDelayDays,
      product.profitPerUnit
    );

    // Recommendations
    const recommendations = getRecommendations(
      riskData.riskLevel,
      supplier.avgDelayDays
    );

    // Suggest supplier
    const suggestion = suggestSupplier(allSuppliers);

    // Create alerts
    for (let risk of risks) {
      await Alert.create({
        type: risk.type,
        message: risk.message,
        severity: risk.severity,
        orderId: order._id
      });
    }

    // Final response
>>>>>>> Stashed changes:everflow-backend/controllers/orderController.js
    res.status(201).json({
      order,
      supplier,
      weather: weatherData,
      risks,
      riskAnalysis: riskData,
      impact,
      recommendations,
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