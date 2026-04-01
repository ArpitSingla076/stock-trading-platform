require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// Middleware
app.use(cors({
  origin: "*"
}));
app.use(bodyParser.json());


// ✅ Root route (IMPORTANT for Render)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


// Routes
app.get('/allHoldings', async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find();
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/allPositions', async (req, res) => {
  try {
    let allPositions = await PositionsModel.find();
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/newOrder', async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order saved");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ Proper DB connection + server start
mongoose.connect(uri)
  .then(() => {
    console.log("Connected to database!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  })
  .catch((err) => {
    console.error("DB connection failed:", err);
  });