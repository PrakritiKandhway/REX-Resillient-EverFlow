const express = require("express");
const cors = require("cors");
const ensureAuthenticated = require("./middlewares/authMiddleware");

require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const supplierRoutes = require("./routes/supplierRoutes");
app.use("/api/suppliers", ensureAuthenticated, supplierRoutes);

const inventoryRoutes = require("./routes/inventoryRoutes");
app.use("/api/inventory", ensureAuthenticated, inventoryRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", ensureAuthenticated, productRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", ensureAuthenticated, orderRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// DB connection
const connectDB = require("./config/db");

const startServer = async () => {
  try {
    await connectDB();

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    console.log("Error starting server:", error);
  }
};

startServer();