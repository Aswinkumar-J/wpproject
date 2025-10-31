const mongoose = require('mongoose');

const eyewearProductSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Eyeglasses', 'Sunglasses', 'Contact Lenses'],
  },
  brand: { type: String, required: [true, 'Brand is required'] },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative'],
  },
  availability: { type: Boolean, default: true },
  frameType: {
    type: String,
    enum: ['Full-Rim', 'Half-Rim', 'Rimless'],
    required: false,
  },
  gender: {
    type: String,
    enum: ['Men', 'Women', 'Unisex'],
    required: false,
  },
  imageUrl: { type: String, required: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('EyewearProduct', eyewearProductSchema);
