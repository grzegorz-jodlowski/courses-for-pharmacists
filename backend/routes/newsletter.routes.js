const express = require('express');
const router = express.Router();

const Newsletter = require('../models/newsletter.model');

router.post('/newsletter', async (req, res) => {
  try {
    const newNewsletter = new Newsletter(req.body);
    await newNewsletter.save();
    res.json({ message: 'Zapisano do newslettera' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
