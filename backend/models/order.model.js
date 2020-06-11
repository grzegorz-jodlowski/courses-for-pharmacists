const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  status: { type: String, required: [true, 'Status required'], enum: ['draft', 'ordered', 'closed'] },
  products: { type: Array },
  contact: {
    email: {
      type: String,
      required: [true, 'Wymagany adres email'],
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Nieprawidłowy adres email'],
    },
    name: { type: String, required: [true, 'Imię wymagane'], minlength: 5, maxlength: 50 },
    privacy: { type: Boolean, required: [true, 'Wymagane zaakceptowanie przetwarzania danych'] },
    terms: { type: Boolean, required: [true, 'Wymagane zaakceptowanie regulaminu'] },
  },
});

module.exports = mongoose.model('Order', orderSchema);
