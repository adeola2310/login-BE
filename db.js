const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/MyApp', (err) => {
    if (!err)
    {
        console.log('mongodb connection successful..');
    }
    else{
        console.log('error in db connection', +  JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;
