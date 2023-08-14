const { model, Schema } = require('../Connection');

const myschema = new Schema({

    name: String,
    title: String,
    category: String,
    price: Number,
    description: String,
    material:String,
    image: String

});

module.exports = model('product', myschema);


