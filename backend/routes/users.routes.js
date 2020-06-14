const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.get('/users', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      console.log(' : user', user);
    } else {
      console.log(' : req.body', req.body);
    }


    // if (!result) res.status(404).json({ course: 'Not found' });
    // else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/users', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      console.log(' : user', user);
    } else {
      console.log(' : req.body', req.body);
    }


    // if (!result) res.status(404).json({ course: 'Not found' });
    // else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
