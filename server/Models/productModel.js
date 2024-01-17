const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        rating: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
);

const productSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        reviews: [reviewSchema],
        price: { type: Number, required: true },
        discountPercentage: { type: Number, default: 0 },
        rating: { type: Number, default: 0 },
        stock: { type: Number, default: 0 },
        brand: { type: String },
        category: { type: String },
        thumbnail: { type: String },
        images: { type: Array },
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
