var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var date = new Date();


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', {
        title: 'Admin Login',
        name: '',
        password: ''
    });

});

router.post('/new', function (req, res) {
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
	
});



module.exports = router;
