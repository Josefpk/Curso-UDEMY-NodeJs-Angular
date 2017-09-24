'use strict'

const express = require('express');

//BODY PARSER, convierto todo lo que llegue como parametro a JSON
const bodyParser = require('body-parser');

var app = express();
var api = require('./routes/favorito');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', api);
//function () va ahcer igua a () =>


module.exports = app;