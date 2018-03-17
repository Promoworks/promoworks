var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;



//Email Marketing
router.get('/emailmarketing',function(req,res){
   res.render('emailmarketing'); 
});




//Social Marketing
router.get('/socialmediamarketing',function(req,res){
   res.render('socialmediamarketing'); 
});




//Google Marketing
router.get('/googleplacesmarketing',function(req,res){
   res.render('googleplacesmarketing'); 
});




//Content Marketing
router.get('/contentmarketing',function(req,res){
   res.render('contentmarketing'); 
});



module.exports = router;