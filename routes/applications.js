var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//Website-Designing
router.get('/websitedesigning',function(req,res){
   res.render('websitedesigning'); 
});

//Web-applications
router.get('/webapplications',function(req,res){
   res.render('webapplications'); 
});


//Mobile-applications
router.get('/mobileapplications',function(req,res){
   res.render('mobileapplications'); 
});


module.exports = router;