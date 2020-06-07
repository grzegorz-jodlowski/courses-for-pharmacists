const express = require('express');
const router = express.Router();

const Course = require('../models/course.model');

router.get('/courses', async (req, res) => {
  try {
    const result = await Course
      .find()
      .select('title image price');
    if (!result) res.status(404).json({ course: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/courses/:id', async (req, res) => {
  try {
    const result = await Course
      .findById(req.params.id);
    if (!result) res.status(404).json({ course: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
