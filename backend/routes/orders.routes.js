const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');
const User = require('../models/user.model');


router.post('/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();

    // const user = await User.findOne({ email: req.body.contact.email });

    // if (user) {
    //   console.log(' : user', user);
    // } else {
    //   console.log(' : req.body', req.body);
    // }

    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
