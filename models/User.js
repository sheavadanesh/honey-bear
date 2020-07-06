const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    paymentInfo: {
        nameOnCard: { type: String, required: false },
        cardNumber: { type: Number, required: false },
        expirationDate: { type: String, required: false },
        securityCode: { type: Number, required: false },
        zipCode: { type: Number, required: false }
    }
}, { timestamps: true })

module.exports = User = mongoose.model('User', UserSchema);