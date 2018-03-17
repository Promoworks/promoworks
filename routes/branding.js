var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//Logo-Design
router.get('/logoDesign',function(req,res){
   res.render('logoDesign'); 
});

//Logo-Design
router.get('/stationeryDesign',function(req,res){
   res.render('stationeryDesign'); 
});

//Brochure-Design
router.get('/brochureDesign',function(req,res){
   res.render('brochureDesign'); 
});

//Menu-Design
router.get('/menuCardDesign',function(req,res){
   res.render('menuCardDesign'); 
});

//Landing-Design
router.get('/landingPageDesign',function(req,res){
   res.render('landingPageDesign'); 
});

//Pacakage-Design
router.get('/packageDesign',function(req,res){
   res.render('packageDesign'); 
});

//Banner-Design
router.get('/bannerDesign',function(req,res){
   res.render('bannerDesign'); 
});

//Newspaper Ads Ads
router.get('/newspaperAds',function(req,res){
   res.render('newspaperAds'); 
});

//T-Shirt-Design
router.get('/T-Shirt',function(req,res){
   res.render('T-Shirt'); 
});

//In-shop
router.get('/In-shop',function(req,res){
   res.render('In-shop'); 
});

module.exports = router;