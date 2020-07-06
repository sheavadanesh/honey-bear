const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.username = validText(data.username) ? data.username : '';
    data.firstname = validText(data.firstname) ? data.firstname : '';
    data.lastname = validText(data.lastname) ? data.lastname : '';
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';
    data.password2 = validText(data.password2) ? data.password2 : '';
    data.bio = validText(data.bio) ? data.bio : '';

    if (!Validator.isLength(data.username, { min: 6, max: 30 })) {
        errors.username = 'Username must be between 6 and 30 characters';
    }
    
    if (Validator.isEmpty(data.username)) {
        errors.username = 'Username field is required';
    }

    if (Validator.isEmpty(data.firstname)) {
        errors.firstname = 'First Name field is required';
    }

    if (Validator.isEmpty(data.lastname)) {
        errors.lastname = 'Last Name field is required';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm Password field is required';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    if (Validator.isEmpty(data.bio)) {
        errors.bio = "Bio field is required";
    }

    if (!Validator.isLength(data.bio, { min: 1, max: 300 })) {
        errors.password = 'Bio 300 character limit';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};