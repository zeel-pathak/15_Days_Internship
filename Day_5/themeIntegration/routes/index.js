var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome', txt1: 'You are at the right place', txt2: 'Avenger! Get Ready' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', txt1: 'You know everything about us', txt2: 'Are you illuminati?' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact', txt1: 'We are always with you', txt2: 'you are part of family' });
});

module.exports = router;
