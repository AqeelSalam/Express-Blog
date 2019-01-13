const express = require('express');
const router = express.Router();

//add code here

router.get('/', function(req, res) {
  res.render('index', { header: 'index!'});
});

router.get('/contact', function(req, res) {
  res.render('index', { header: 'contact!'});
});

router.get('/about', function(req, res) {
  res.render('index', { header: 'about!'});
});

module.exports = router;
