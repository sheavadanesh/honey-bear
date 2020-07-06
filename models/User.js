const mongoose = require('mongoose');
cons Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name: {
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
    }
    // paymentInfo: {

    // }
})

module.exports = User = mongoose.model('User', UserSchema);