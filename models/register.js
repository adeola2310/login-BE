const mongoose = require ('mongoose');


const Register = mongoose.model('Register', {
    name: {type: String},
    email: {type: String},
    password: {type: String},
    status: {
        type: Boolean,
        default: true
    }



});

module.exports = { Register };
