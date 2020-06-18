const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Wymagany adres email'],
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Nieprawidłowy adres email'],
  },
  name: { type: String, required: [true, 'Imię wymagane'], minlength: 5, maxlength: 50 },
  message: { type: String, required: [true, 'Wiadomość wymagana'], minlength: 10 },
});

module.exports = mongoose.model('Message', messageSchema);
