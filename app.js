var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mailer = require('express-mailer');
var nodemailer = require('nodemailer');
var compression = require('compression');
var zlib = require('zlib');
var https = require('https');
var fs = require('fs');
var http = require('http');
var responseTime = require('response-time')
var axios = require('axios');
var redis = require('redis');
var robots = require('robots.txt');
var sitemap = require('sitemap.xml');
var psi = require('psi');
// Init App
var app = express();


// Set Robots Folder
app.use(robots(__dirname + '/robots.txt'));


// Set Sitemap Folder
app.use(sitemap(__dirname + '/sitemap.xml'));

//Create a middleware that adds a X-Response-Time header to responses.
app.use(responseTime());


const getCache = (req, res) => {
  let isbn = req.query.isbn;
  //Check the cache data from the server redis
  client.get(isbn, (err, result) => {
    if (result) {
      res.send(result);
    } else {
      getBook(req, res);
    }
  });
}



// Image Exp


app.get('/*', function (req, res, next) {

  if (req.url.indexOf("/images/") === 0 || req.url.indexOf("/stylesheets/") === 0) {
    res.setHeader("Cache-Control", "public, max-age=2592000");
    res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
  }
  next();
});









//Secure Making

var options = {

 key: fs.readFileSync('doc/pki-validation/AC8622A83AF96182CB7D1AF707E3E5EE.txt')

};

//Routes

var num = 0;



//Routes
var routes = require('./routes/index');
var navigation = require('./routes/branding');
var secondnavigation = require('./routes/seo');
var thirdnavigation = require('./routes/marketing');
var fourthnavigation = require('./routes/videos');
var sixnavigation = require('./routes/careers');
var sevennavigation = require('./routes/applications');
var eighthnavigation = require('./routes/ads');


//Compression

app.use(compression());




// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'vendor')));


// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});



app.use('/', routes);
app.use('/branding', navigation);
app.use('/seo', secondnavigation);
app.use('/marketing', thirdnavigation);
app.use('/videos', fourthnavigation);
app.use('/careers', sixnavigation);
app.use('/applications', sevennavigation);
app.use('/ads', eighthnavigation);


//Privacy
app.get('/privacy',function(req,res){
    res.render('privacy');
});

//Site-Map
app.get('/sitemap',function(req,res){
    res.render('sitemap');
});


//Cotact-Promo
app.get('/hello',function(req,res){
    res.render('hello');
});


//Cotact-Promo
app.get('/start-your-project',function(req,res){
    res.render('start-your-project');
});


//Index Mailer

app.post('/send',(req,res) =>{

    var name = req.body.name;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var username  = req.body.subject;
    var comment  = req.body.comment;

        //Validations

    req.checkBody('name', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').isEmail();
    req.checkBody('mobile', 'Mobile is required').notEmpty();
    req.checkBody('subject', 'subject is required').notEmpty();
    req.checkBody('comment', 'comment is required').notEmpty();

    var errors = req.validationErrors();

      if(errors)
       {
           res.render('index',{
               errors:errors
           });

       }

   else{

           var output = `
    <p>You have new Index Contact Request</p>
    <h3>Index Contact Details</h3>
<ul>

    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Mobile: ${req.body.mobile}</li>
    <li>Subject: ${req.body.subject}</li>

</ul>
<h3>Message</h3>
<p>${req.body.comment}</p>

`;
           var fromoutput = `${req.body.email}`;


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
        from: fromoutput, // sender address
        to: 'hello@promo.works', // list of receivers
        subject: 'Main Page Contact ✔', // Subject line
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
        res.render('index', {msg:'Email has been sent'});

    });


}
});






//Contact Mailer

app.post('/sayhello',(req,res) =>{

    var name = req.body.name;
    var email = req.body.email;
    var phone  = req.body.phone;
    var Synopsis  = req.body.Synopsis;
    var comment  = req.body.comment;

        //Validations

    req.checkBody('name', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').isEmail();
    req.checkBody('phone', 'phone is required').notEmpty();
    req.checkBody('Synopsis', 'Synopsis is required').notEmpty();
    req.checkBody('comment', 'comment is required').notEmpty();

    var errors = req.validationErrors();

      if(errors)
       {
           res.render('hello',{
               errors:errors
           });

       }

   else{

           var output = `
    <p>You have new Contact Request</p>
    <h3>Contact Details</h3>
<ul>

    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.Synopsis}</li>
    <li>comment: ${req.body.comment}</li>

</ul>
<h3>Message</h3>
<p>${req.body.phone}</p>

`;
var fromoutput = `${req.body.email}`;


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
        from: fromoutput, // sender address
        to: 'samantony59@gmail.com', // list of receivers
        subject: 'Page Contact ✔', // Subject line
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
        res.render('hello', {msg:'Email has been sent'});

    });


}
});


//Project Send Mailer

app.post('/projectsend',(req,res) =>{

    var name = req.body.name;
    var email = req.body.email;
    var phone  = req.body.phone;
    var Synopsis  = req.body.Synopsis;
    var comment  = req.body.comment;

        //Validations

    req.checkBody('name', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').isEmail();
    req.checkBody('phone', 'phone is required').notEmpty();
    req.checkBody('Synopsis', 'Synopsis is required').notEmpty();
    req.checkBody('comment', 'comment is required').notEmpty();

    var errors = req.validationErrors();

      if(errors)
       {
           res.render('start-your-project',{
               errors:errors
           });

       }

   else{

           var output = `
    <p>You have new Contact Request</p>
    <h3>Contact Details</h3>
<ul>

    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.Synopsis}</li>
    <li>comment: ${req.body.comment}</li>

</ul>
<h3>Message</h3>
<p>${req.body.phone}</p>

`;
var fromoutput = `${req.body.email}`;


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
        from: fromoutput, // sender address
        to: 'hello@promo.works', // list of receivers
        subject: 'Page Contact ✔', // Subject line
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
        res.render('start-your-project', {msg:'Email has been sent'});

    });


}
});



// Set Port
//var server = https.createServer(function(req,res){
//res.writeHead(200);
//});

//app.listen(80,'97.74.237.85');



app.set('port', (process.env.PORT ||8080));

app.listen(app.get('port'), function(){
        console.log('Server started on port '+app.get('port'));
});



