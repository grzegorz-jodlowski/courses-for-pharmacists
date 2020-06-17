const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');
const User = require('../models/user.model');

router.post('/orders', async (req, res) => {
  try {
    const { value, status, products, contact } = req.body;

    if (!value || !status || !products || !contact) {
      throw new Error('Dane nieprawidłowe');
    } else {
      const newOrder = new Order(req.body);
      await newOrder.save();

      const user = await User.findOne({ email: req.body.contact.email });

      if (user) {
        const newCourses = [...user.courses, ...req.body.products.map(({ courseId }) => courseId)];
        await User.updateOne({ email: req.body.contact.email }, { courses: newCourses });
      } else {
        const email = req.body.contact.email;
        const courses = req.body.products.map(({ courseId }) => courseId);
        const newUser = new User({ email, courses });
        await newUser.save();
      }
      res.json(newOrder);
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
