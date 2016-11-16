var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', {
        title: 'Admin Login',
        name: '',
        password: ''
    });

});

module.exports = router;
