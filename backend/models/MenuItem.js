// backend/models/MenuItem.js

const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, enum: ['Appetizer', 'Main Course', 'Dessert', 'Beverage'], required: true },
    image: { type: String }, // URL to image
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
