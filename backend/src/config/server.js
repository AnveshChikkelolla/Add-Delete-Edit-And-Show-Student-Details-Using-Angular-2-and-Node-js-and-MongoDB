var express = require('express');
require('dotenv').config({path:'mean_crud_api/.env'});
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

mongoose.connect('mongodb://localhost:27017/employees')
    .connection
        .on('connected',function(){
            console.log("successfully connected ")
        })
        .on('error',function(err){
            console.log("database error "+ err)
        })
var app = express();
var port = 3000 ;
app.get('/', function(req, res){
    res.send("Hello Ashish...");
});
var router = require('../routes/routes.js');
//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/students', router);
app.listen(port, function(){
    console.log("server is running on port  "+ port);
})