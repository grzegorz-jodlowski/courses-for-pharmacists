const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Wymagany adres email'],
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Nieprawidłowy adres email'],
  },
  courses: { type: Array },
  cart: { type: Array },
});

module.exports = mongoose.model('User', userSchema);
