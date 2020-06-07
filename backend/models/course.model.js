const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title required'], minlength: 10 },
  text: { type: String, required: [true, 'Description required'], minlength: 20 },
  image: { type: String },
  length: { type: String },
  price: { type: Number },
  chapters: { type: Number },
  gallery: { type: Array },
});

module.exports = mongoose.model('Course', courseSchema);
