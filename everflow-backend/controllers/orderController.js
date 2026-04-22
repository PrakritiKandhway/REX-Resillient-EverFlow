const Order = require("../models/Order");
const { checkRisk, suggestSupplier } = require("../services/riskServices");
const Supplier = require("../models/Supplier");
const Alert = require("../models/Alert");

const { getWeatherRisk } = require("../services/weatherServices");
const { calculateRisk } = require("../services/riskEngine");
const { calculateImpact } = require("../services/impactEngine");
const { getRecommendations } = require("../services/recommendationServices");

// CREATE order
exports.addOrder = async (req, res) => {
  try {
    const { productId, supplierId, quantity } = req.body;

    const supplier = req.supplier;
    const product = req.product;
    const inventory = req.inventory;

    const order = await Order.create({
      productId,
      supplierId,
      quantity
    });

    const allSuppliers = await Supplier.find();

    const risks = checkRisk(order, inventory, supplier);

    const weatherData = await getWeatherRisk(supplier.location);

    const riskData = calculateRisk(supplier, weatherData.risk);

    const impact = calculateImpact(
      supplier.supplyVolumePerDay,
      supplier.avgDelayDays,
      product.profitPerUnit
    );

    const recommendations = getRecommendations(
      riskData.riskLevel,
      supplier.avgDelayDays
    );

    const suggestion = suggestSupplier(allSuppliers);

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