const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  status: { type: String, required: [true, 'Status required'], enum: ['draft', 'ordered', 'closed'] },
  products: { type: Array },
  contact: { type: Object },
  // email: {
  //   type: String,
  //   required: [true, 'Email required'],
  //   match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  // },

  // contact: new mongoose.Schema({
  //   email: {
  //     type: String,
  //     required: [true, 'Email required'],
  //     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  //   },
  //   name: { type: String, required: [true, 'Name required'], minlength: 5, maxlength: 50 },
  //   privacy: { type: Boolean, required: [true, 'Privacy required'] },
  //   terms: { type: Boolean, required: [true, 'Terms required'] },
  // }),
});

module.exports = mongoose.model('Order', orderSchema);
