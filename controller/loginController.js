const express = require ('express');
var router =  express.Router();

var ObjectId = require ('mongoose').Types.ObjectId;

var {Register} = require ('../models/register');



//localhost://3000/login

router.post('/', (req, res) => {
    /*var user = new Register ({
        email: req.body.email
    });*/
    console.log('Req ', req.body);
    deola(2, 6, () => {
        console.log('Deola is here');
    });

    try {
      /* Register.find({}).exec((err, users) => {
           console.log('Users ', users); //
       });*/
       Register.findOne({$and: [{email: req.body.email}, {password: req.body.password}]}, '_id name email status').exec((err, user) => {
           if(err || user ===  null) {
               console.log('User 1', user);
               res.status(400).send({msg: 'Error while fetching user 1!', code: 401, status: 'FAILURE', data: {}});
           }
           // const data = user;
           console.log('User ', user);
           // todo : Implement JWT
           res.status(200).send({msg: 'Login Successful!', status: 'SUCCESS', data: user});
           //
       });
   }
   catch (err) {
        console.log(err);
        res.status(400).send({msg: 'Error while fetching user 2!', code: 401, status: 'FAILURE', data: {}});
   }
});


router.get('/:id', (req, res)=> {
    if (!ObjectId.isValid(req.params.id)){

        Register.findById(req.params.id ,(err, doc) => {
            if (!err){
                res.send(doc);
            }
            else{
                return res.status(400).send(`No record for this id: ${req.params.id}`);
                console.log('Error in retriebing id' +JSON.stringify(err, undefined, 2));
            }

        })
    }
    else{
        return res.status(400).send(`pls provide email and password`);
    }


});

router.put('/:id', (req, res) =>{
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record for this id: ${req.params.id}`);
    var user = new Register ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,

    });

    Register.findByIdAndUpdate(req.params.id, { $set: user}, {new: true}, (err, doc)=>{
        if (!err){
            res.send(doc);
        }
        else {
            console.log('Error in user update' + JSON.stringify(err, undefined, 2));
        }
    });


});



module.exports = router;

function deola(a, b, callback) {
    console.log(a + b);
    if(a + b === 8) {
        callback();
    }
}
