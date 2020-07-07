const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Float = require("mongoose-float").loadType(mongoose);

const BookingSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Float,
        required: true
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item'
    },
}, { timestamps: true })

module.exports = Booking = mongoose.model('Booking', BookingSchema);