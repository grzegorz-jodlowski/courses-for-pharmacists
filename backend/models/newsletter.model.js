const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Wymagany adres email'],
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Nieprawidłowy adres email'],
  },
  name: { type: String, required: [true, 'Imię wymagane'], minlength: 20, maxlength: 50 },
});

module.exports = mongoose.model('Newsletter', newsletterSchema);
