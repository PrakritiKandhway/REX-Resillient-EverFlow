const express=require("express");
const router=express.Router();
const {addOrder, getOrders}=require("../controllers/orderController");
const validateOrder = require("../middlewares/validateOrders");

router.post("/", validateOrder, addOrder);
router.post("/",addOrder);
router.get("/",getOrders);

module.exports=router;