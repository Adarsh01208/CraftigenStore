const express = require('express');
const router = express.Router();
const Model = require('../models/productModel')

router.post('/add', (req, res) => {
    console.log(req.body);
    //saving the data to mongodb
    new Model(req.body).save()
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

//getall
router.get('/getall', (req, res) => {

    Model.find({})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    //  res.send('response from user getall');
});

//getid
router.get('/getid', (req, res) => {
    Model.find({})
        .then((result) => {
            res.json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

    //res.send('response from user getid');
});

//colon denotes url parameter
router.get('/getid/:id', (req, res) => {
    console.log(req.params.id);
    // res.send('response from product getid');
    Model.findById(req.params.id)

        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

//getting data by title
router.get('/getbytitle/:title', (req, res) => {
    Model.find({ title: req.params.title })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Deleting Data by id
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//updating data by id
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;