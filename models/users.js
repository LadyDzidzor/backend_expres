const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   username: {
    require: true,
    type: String,
    minlength: 3
    },

    email: {
        required: true,
        type: String,

    }, 
    passwordHash: {
        required: true,
        type: String
    },
    phoneNumber: {
        required: true,
        type: Number 
    }

})

module.exports = mongoose.model('User', userSchema);