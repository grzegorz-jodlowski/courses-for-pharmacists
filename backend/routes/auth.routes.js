const express = require('express');
const router = express.Router();
const passport = require('passport');



router.get('/auth', async (req, res) => {
  try {
    res.json(true);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
