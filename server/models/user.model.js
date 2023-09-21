const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword)
    .set( value => this._confirmPassword = value);

UserSchema.pre('validate', function(next) {
    if (this.password !== this._confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = mongoose.model('User', UserSchema)
module.exports = User
