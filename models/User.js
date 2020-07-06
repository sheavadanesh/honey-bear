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
        cardNumber: { type: Integer, required: false }
    }
}, { timestamps: true })

module.exports = User = mongoose.model('User', UserSchema);