var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Examen Final',subtitle:'Avances en Computación' });
});
router.get('/login',function(req, res, next) {res.render('login')});
router.post('/recibido',function(req, res, next) {res.render('recibido')});
module.exports = router;
