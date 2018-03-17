var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//On-Page
router.get('/on-page',function(req,res){
   res.render('on-page'); 
});

//Off-Page
router.get('/off-page',function(req,res){
   res.render('off-page'); 
});


module.exports = router;