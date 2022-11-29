const express = require('express');
const morgan = require('morgan');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

mongoose.connect("mongodb://localhost:27017/testdb", () => {
    console.log("mongodb connected")
}, e => {
    console.error(e)
})

mongoose.Promise = global.Promise;
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/orders', orderRoutes);


module.exports = app;