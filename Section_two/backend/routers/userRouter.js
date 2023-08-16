const express = require('express');
const router = express.Router();
const Model = require('../models/userModel')

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
    // res.send('response from product getall');
});

//getid
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

router.get('/getbyemail/:email', (req, res) => {
    Model.find({ email: req.params.email })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Deleting data by id
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


router.post('/authenicate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result !== null)
                res.json(result);
            else res.status(401).json({ message: 'login failed' })
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

module.exports = router;
