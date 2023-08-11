const mongoose = require('mongoose');

const url = "mongodb+srv://adarshsingh01209:radhakrishna@cluster0.zdcb1kz.mongodb.net/mydatabase?retryWrites=true&w=majority";

// asynchronous function - return a promise
mongoose.connect(url)
    .then((result) => {
        console.log('connected to database');
    }).catch((err) => {
        console.log(err);
    });

//console.log('do other stuff')

module.exports = mongoose;
