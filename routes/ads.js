var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//Magazine-Design
router.get('/magazineAds',function(req,res){
   res.render('magazineAds'); 
});


//Digital Ads
router.get('/digitalAds',function(req,res){
   res.render('digitalAds'); 
});


//TV Ads
router.get('/tvAds',function(req,res){
   res.render('tvAds'); 
});


//Theatre Ads
router.get('/theatreAds',function(req,res){
   res.render('theatreAds'); 
});


//Newspaper Ads
router.get('/newspaperAds',function(req,res){
   res.render('newspaperAds'); 
});


module.exports = router;