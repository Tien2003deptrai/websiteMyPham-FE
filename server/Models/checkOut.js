const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema(
    {
        products: [{
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

const CheckOut = mongoose.model('CheckOut', checkoutSchema);

module.exports = CheckOut;
