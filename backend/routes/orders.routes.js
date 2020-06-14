const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');
const User = require('../models/user.model');


router.post('/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();

    const user = await User.findOne({ email: req.body.contact.email });

    if (user) {
      //update user


      console.log(' : user', user);
    } else {
      //add new user
      const email = req.body.contact.email;
      const courses = req.body.products.map(({ courseId }) => courseId);
      const newUser = new User({ email, courses });
      await newUser.save();
    }
    res.json(newOrder);

  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
