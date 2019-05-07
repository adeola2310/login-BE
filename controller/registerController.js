const express = require ('express');
var router =  express.Router();
var { Register } = require ('../models/register');


var ObjectId = require ('mongoose').Types.ObjectId;


//localhost://3000/register



router.post('/', (req, res)=>
    {
        var user = new Register ({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        user.save((err, doc)=>{
            if (!err){
                res.send(doc);
            }
            else{
                console.log('there is an error in saving user' + JSON.stringify(err, undefined, 2));
            }
        });


    }
);


module.exports = router;
