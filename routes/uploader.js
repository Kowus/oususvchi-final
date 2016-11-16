var express = require('express');

var date = new Date();
var dta = date.getUTCHours() + ':' + date.getUTCMinutes() + 'UTC';
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if(req.body.name === undefined || req.body.name === ''|| req.body.password === '' || req.body.password === undefined){
        res.render('login', {
            title: 'Admin Login',
            name: '',
            password: ''
        });
    }else {
        console.log("login successful: "+ dta);
        res.render('uploader', {title: 'Ousu Svchi'});
    }
});

module.exports = router;
