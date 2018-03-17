var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var nodemailer = require('nodemailer');


//Orbit
router.get('/orbit',function(req,res){
   res.render('orbit'); 
});


//Creative Producer
router.get('/creative-director',function(req,res){
   res.render('creative-director'); 
});



//Creative Producer POST

router.post('/creative-director',(req,res) =>{
    
    var name = req.body.name;
    var email = req.body.email;
    var phone  = req.body.phone;
    var comment  = req.body.comment;
    
        //Validations
    
    req.checkBody('name', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').isEmail();
    req.checkBody('phone', 'phone is required').notEmpty();
    req.checkBody('comment', 'comment is required').notEmpty();
    
    var errors = req.validationErrors();
    
      if(errors)
       {
           res.render('creative-director',{
               errors:errors
           });
       
       }
    
   else{      

           var output = `
    <p>You have new Creative Director</p>
    <h3>Creative Director</h3>
<ul>

    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.role}</li>
    <li>Comment: ${req.body.comment}</li>

</ul>
<h3>Message</h3>
<p>${req.body.phone}</p>

`;
    

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.promo.works',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'hello@promo.works', // generated ethereal user
            pass: 'Novelsoft@098'  // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Promo.works 🤳" <hello@promo.works>', // sender address
        to: 'hello@promo.works', // list of receivers
        subject: 'Creative Director Request ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('creative-director', {msg:'Email has been sent'});

    });
       
    
}
});




//Social-media-strategist
router.get('/social-media-strategist',function(req,res){
   res.render('social-media-strategist'); 
});





//Social-media-strategist POST

router.post('/social-media-strategist',(req,res) =>{
    
    var name = req.body.name;
    var email = req.body.email;
    var phone  = req.body.phone;
    var comment  = req.body.comment;
    
        //Validations
    
    req.checkBody('name', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').isEmail();
    req.checkBody('phone', 'phone is required').notEmpty();
    req.checkBody('comment', 'comment is required').notEmpty();
    
    var errors = req.validationErrors();
    
      if(errors)
       {
           res.render('social-media-strategist',{
               errors:errors
           });
       
       }
    
   else{      

           var output = `
    <p>You have new Media Strategist</p>
    <h3>Social Media Strategist</h3>
<ul>

    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.role}</li>
    <li>Comment: ${req.body.comment}</li>

</ul>
<h3>Message</h3>
<p>${req.body.phone}</p>

`;
    

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.promo.works',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'hello@promo.works', // generated ethereal user
            pass: 'Novelsoft@098'  // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Promo.works 🤳" <hello@promo.works>', // sender address
        to: 'hello@promo.works', // list of receivers
        subject: 'Social-media-strategist Request ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('social-media-strategist', {msg:'Email has been sent'});

    });
       
    
}
});





//Content-strategist
router.get('/content-strategist',function(req,res){
   res.render('content-strategist'); 
});






//Content-strategist POST

router.post('/content-strategist',(req,res) =>{
    
    var name = req.body.name;
    var email = req.body.email;
    var phone  = req.body.phone;
    var comment  = req.body.comment;
    
        //Validations
    
    req.checkBody('name', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').isEmail();
    req.checkBody('phone', 'phone is required').notEmpty();
    req.checkBody('comment', 'comment is required').notEmpty();
    
    var errors = req.validationErrors();
    
      if(errors)
       {
           res.render('content-strategist',{
               errors:errors
           });
       
       }
    
   else{      

           var output = `
    <p>You have new Content Strategist</p>
    <h3>Content Strategist</h3>
<ul>

    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.role}</li>
    <li>Comment: ${req.body.comment}</li>

</ul>
<h3>Message</h3>
<p>${req.body.phone}</p>

`;
    

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.promo.works',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'hello@promo.works', // generated ethereal user
            pass: 'Novelsoft@098'  // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Promo.works 🤳" <hello@promo.works>', // sender address
        to: 'hello@promo.works', // list of receivers
        subject: 'Content-strategist Request ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('content-strategist', {msg:'Email has been sent'});

    });
       
    
}
});





//3D-animator
router.get('/3D-animator',function(req,res){
   res.render('3D-animator'); 
});







//3D-animator POST

router.post('/3D-animator',(req,res) =>{
    
    var name = req.body.name;
    var email = req.body.email;
    var phone  = req.body.phone;
    var comment  = req.body.comment;
    
        //Validations
    
    req.checkBody('name', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').isEmail();
    req.checkBody('phone', 'phone is required').notEmpty();
    req.checkBody('comment', 'comment is required').notEmpty();
    
    var errors = req.validationErrors();
    
      if(errors)
       {
           res.render('3D-animator',{
               errors:errors
           });
       
       }
    
   else{      

           var output = `
    <p>You have new 3D-animator</p>
    <h3>3D-animator</h3>
<ul>

    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.role}</li>
    <li>Comment: ${req.body.comment}</li>

</ul>
<h3>Message</h3>
<p>${req.body.phone}</p>

`;
    

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.promo.works',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'hello@promo.works', // generated ethereal user
            pass: 'Novelsoft@098'  // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Promo.works 🤳" <hello@promo.works>', // sender address
        to: 'hello@promo.works', // list of receivers
        subject: '3D-animator Request ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('3D-animator', {msg:'Email has been sent'});

    });
       
    
}
});






//Graphic-designer
router.get('/graphic-designer',function(req,res){
   res.render('graphic-designer'); 
});





//Graphic-designer POST

router.post('/graphic-designer',(req,res) =>{
    
    var name = req.body.name;
    var email = req.body.email;
    var phone  = req.body.phone;
    var comment  = req.body.comment;
    
        //Validations
    
    req.checkBody('name', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').isEmail();
    req.checkBody('phone', 'phone is required').notEmpty();
    req.checkBody('comment', 'comment is required').notEmpty();
    
    var errors = req.validationErrors();
    
      if(errors)
       {
           res.render('graphic-designer',{
               errors:errors
           });
       
       }
    
   else{      

           var output = `
    <p>You have new Graphic-designer</p>
    <h3>Graphic-designer</h3>
<ul>

    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.role}</li>
    <li>Comment: ${req.body.comment}</li>

</ul>
<h3>Message</h3>
<p>${req.body.phone}</p>

`;
    

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.promo.works',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'hello@promo.works', // generated ethereal user
            pass: 'Novelsoft@098'  // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Promo.works 🤳" <hello@promo.works>', // sender address
        to: 'hello@promo.works', // list of receivers
        subject: 'Graphic-designer Request ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('graphic-designer', {msg:'Email has been sent'});

    });
       
    
}
});







//Business-account
router.get('/business-account',function(req,res){
   res.render('business-account'); 
});






//Business-Account POST

router.post('/business-account',(req,res) =>{
    
    var name = req.body.name;
    var email = req.body.email;
    var phone  = req.body.phone;
    var comment  = req.body.comment;
    
        //Validations
    
    req.checkBody('name', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').isEmail();
    req.checkBody('phone', 'phone is required').notEmpty();
    req.checkBody('comment', 'comment is required').notEmpty();
    
    var errors = req.validationErrors();
    
      if(errors)
       {
           res.render('business-account',{
               errors:errors
           });
       
       }
    
   else{      

           var output = `
    <p>You have new Business-Account</p>
    <h3>Business-Account</h3>
<ul>

    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.role}</li>
    <li>Comment: ${req.body.comment}</li>

</ul>
<h3>Message</h3>
<p>${req.body.phone}</p>

`;
    

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.promo.works',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'hello@promo.works', // generated ethereal user
            pass: 'Novelsoft@098'  // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Promo.works 🤳" <hello@promo.works>', // sender address
        to: 'hello@promo.works', // list of receivers
        subject: 'Business-Account Request ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('business-account', {msg:'Email has been sent'});

    });
       
    
}
});






module.exports = router;