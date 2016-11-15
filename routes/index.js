var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Ousu Svchi',
      about: "Creative, Fun, energetic, and dedicated photographer with 4 years in custom and specialized experience. Capturing moments, items, and actions, gives a great feeling of satisfaction to the photographic man inside. I'm conversant with a few types of photography; Wedding, Nature, Architectural, product and design advertising. Vest with advanced photography tools and equipment.",
      stat: '',
      name: '',
      email: '',
      message: '',
      mstus: ''

  });
});

module.exports = router;
