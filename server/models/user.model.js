const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please enter a first name']
    },
    last_name: {
        type: String,
        required: [true, 'Please enter a last name']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        unique: true
    },
    validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a va;id email"
    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minlength: [8, 'Password must be at least 6 characters']
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = User
