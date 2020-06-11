const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');

router.post('/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
