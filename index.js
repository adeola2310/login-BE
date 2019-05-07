const express = require ('express');
const bodyParser = require ('body-parser');

const {mongoose} = require ('./db.js');
var registerController = require ('./controller/registerController.js');
var loginController = require ('./controller/loginController.js');

var app = express();
app.use(bodyParser.json());

app.listen(3000, ()=>console.log('server started on port 3000'));
app.use('/register', registerController);
app.use('/login', loginController);

