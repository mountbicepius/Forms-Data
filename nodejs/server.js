var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser =require('body-parser');
const https = require('https');
//var fs = require('fs');
var Data = require('./data');
var config = require('./config'); // get our config file

app.listen(3000,()=> console.log('App listening on port 3000!'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));
// use morgan to log requests to the console
app.use(morgan('dev'));
mongoose.connect(config.database,{
  useNewUrlParser: true
});
app.get('/',(req,res)=>{
  res.send(express.static('/public/index.html'));
});
app.get('/data', (req,res)=>{
  Data.find({},function(err,data){
    res.json(data);
  });
});
app.post('/data',function(req,res){
  var vals = new Data({
    email: req.body.email,
    dob: req.body.dob,
    phone: req.body.phone,
    addr: req.body.addr
  });
  vals.save(function(err){
    if(err) console.log(err);
    res.json({message : 'success'});
  });
});
