const { model, Schema } = require('../Connection');

const myschema = new Schema({

    name: String,
    email: String,
    password: String,
    age: Number,
    message: String,
    avatar: String

});

module.exports = model('users', myschema);


