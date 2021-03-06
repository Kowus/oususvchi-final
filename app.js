var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var uploader = require('./routes/uploader');
var login = require('./routes/login')
var app = express();


var mg_api_key = 'key-e774c82158868b11dfe76f08e06bfe82';
var mg_domain = 'app7059ee7b80fd478393c9cdeb43c39163.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: mg_api_key, domain: mg_domain});


var date = new Date();

var API_Key = '1bf1a4c3a29abbb2f3d9c8c0ce6b872f5e65dabd1f2541c6ab9c8f995a1d';

var quickemailverification = require('quickemailverification').client(API_Key).quickemailverification();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/uploader', uploader);
app.use('/admin', login);


app.post('/myapi', function (req, res) {
    var bodyJson = {
        name: req.body.name,
        mail: req.body.mail,
        mess: req.body.message

    };

    var dta = date.getUTCHours() + ':' + date.getUTCMinutes() + 'UTC';
    var data = {
        from: bodyJson.name + " <" + bodyJson.mail + ">",
        to: 'oususvchi@gmail.com',
        subject: 'New Web Contact' + dta,
        text: bodyJson.mess
    };
    quickemailverification.verify(bodyJson.mail, function (err, response) {
        // console.log("Error: " + err);
        var smess = 0;
        var mstus = 0;

        if (err)
            smess = err;
        else {
            if (response.body.result == 'valid') {
                smess = 'Message Sent';
                mailgun.messages().send(data, function (error, body) {
                    console.log(body);
                });
            }
            else {
                smess = 'Message not sent invalid Email:' + bodyJson.mail;
                mstus = 1;
            }
        }
        console.log(response.body.result);

        var billy = bodyJson;


        res.render('index', {
            title: 'Ousu Svchi',
            about: "Creative, Fun, energetic, and dedicated photographer with 4 years in custom and specialized experience. Capturing moments, items, and actions, gives a great feeling of satisfaction to the photographic man inside. I'm conversant with a few types of photography; Wedding, Nature, Architectural, product and design advertising. Vest with advanced photography tools and equipment.",
            stat: smess,
            name: billy.name,
            email: billy.mail,
            message: billy.mess,
            mstus: mstus
        });

        console.log(smess);
        console.log(mstus);
    });
});
/*
app.post('/new', function (req, res) {
    var dtb = date.getUTCHours() + ':' + date.getUTCMinutes() + 'UTC';
    var name = req.body.name;
    var password = req.body.password;
    if (name === 'Joe' && password === 'sakyi') {
        res.render('uploader', {
            title: 'Ousu Svchi '
        });
        console.log("login successful: "+ dtb);
    }
    else {
        console.log('invalid login attempt.{ \n\tUsername: ' + name + ',\n\tPassword: ' + password+ ',\n\tTime: '+dtb);
        res.render('login', {
            title: 'Admin Login',
            name: name,
            password: password
        });
    }

});*/


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
