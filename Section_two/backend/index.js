//import express
const express = require('express');
const cors = require('cors');



//initialize express app


const app = express();
const port = 5000;



//import router
const UserRouter = require('./routers/userRouter');
const ProductRouter = require('./routers/productRouter');
const ContactRouter = require('./routers/contactRouter');
const UtilRouter = require('./routers/util');

//middleware to convert jason data to javascript object
app.use(cors({
    origin: ['http://localhost:3000']
}))


app.use(express.json());

// middlewares 
app.use('/user', UserRouter);
app.use('/product', ProductRouter);
app.use('/contact', ContactRouter);
app.use('/util', UtilRouter);

app.use(express.static('./uploads'));

//creating routes
app.get('/', (req, res) => {
    res.send('response from express server')
});

// /home
app.get('/home', (req, res) => {
    res.send('response from Home server')
});

// / add
app.get('/app', (req, res) => {
    res.send('response from Add server')
});


//starting server
app.listen(port, () => {
    console.log('express server started sucessfully')
});

