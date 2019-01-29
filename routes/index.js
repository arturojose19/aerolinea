var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/aviones', function(req, res, next){
  res.render('aviones');
});

router.get('/caracteristicas_Del_Avion', function(req, res, next){
  res.render('caracteristicas_Del_Avion');
});

router.get('/', function(req, res, next){
  res.render('index');
});

module.exports = router;
