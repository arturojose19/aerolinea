var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const avionesController = require('../controller/controllerAvion');

router.get('/aviones', function(req, res, next){
  res.render('aviones');
});

router.post('/Aviones', (req,res) => {
  console.log(req.body);
  avionesController.createAvion(req.body)
  res.redirect('/aviones');
});

router.get('/caracteristicas_Del_Avion', function(req, res, next){
  res.render('caracteristicas_Del_Avion');
});

router.get('/', function(req, res, next){
  res.render('index');
});

module.exports = router;
