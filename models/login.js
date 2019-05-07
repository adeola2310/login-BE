const mongoose = require ('mongoose');


var Login = mongoose.model('Login', {
    email: {type: String},
    password: {type: String}



});

module.exports = { Login };
