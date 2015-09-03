var express = require('express');
var router = express.Router();


router.get('/user', function(req, res, next) {
  res.render('index', { title: 'Node-Translate' });
});

router.post('/user', function(req, res, next) {
  res.render('index', { title: 'Node-Translate' });
});

router.put('/user', function(req, res, next) {
  res.render('index', { title: 'Node-Translate' });
});

// word library
router.get('/wordlibrary', function(req, res, next) {
  res.render('index', { title: 'Node-Translate' });
});

router.post('/wordlibrary', function(req, res, next) {
  res.render('index', { title: 'Node-Translate' });
});




module.exports = router;
