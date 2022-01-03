const express = require('express');

const app = express();

// use inbuilt bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// init routes
const mpesapay = require('./routes/lipa');

// use routes
app.use(mpesapay);

module.exports = app;