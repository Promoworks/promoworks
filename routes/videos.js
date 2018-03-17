var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//On-Page
router.get('/2d-videos',function(req,res){
   res.render('2d-videos'); 
});

//Off-Page
router.get('/3d-videos',function(req,res){
   res.render('3d-videos'); 
});

//Explainer-Page
router.get('/explainer-videos',function(req,res){
   res.render('explainer-videos'); 
});

//Greeting-Page
router.get('/greeting-videos',function(req,res){
   res.render('greeting-videos'); 
});


//Dubbing-voiceover
router.get('/voiceover',function(req,res){
   res.render('voiceover'); 
});


module.exports = router;