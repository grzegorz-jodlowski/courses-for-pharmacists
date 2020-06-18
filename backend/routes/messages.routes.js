const express = require('express');
const router = express.Router();

const Message = require('../models/message.model');

router.post('/messages', async (req, res) => {
  try {
    const { email, name, message } = req.body;

    if (!email || !name || !message) {
      throw new Error('Dane nieprawidłowe');
    } else {
      const newMessage = new Message(req.body);
      await newMessage.save();
      res.json({ message: 'Wysłano wiadomość' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
