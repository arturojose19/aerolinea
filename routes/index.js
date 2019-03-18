var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Guacamaya' });
});

const avionesController = require('../controller/controllerAvion');

router.get('/aviones', function(req, res, next){
  avionesController.getAviones(data => res.render('aviones', {aviones: data}))
});

router.post('/Aviones', (req,res) => {
  console.log("hola")
   console.log(req.body);
   avionesController.createAvion(req.body)
   res.redirect('/aviones');
});

router.get('/', function(req, res, next){
  res.render('index');
});

router.get('/registroAviones', function(req, res, next) {
  res.render('registroAviones');
});

router.get('/listaAvion', (req, res) => {
  avionesController.getAviones(data => res.render('listaAvion', {aviones: data}))
});

router.post("/eliminarAvion/:ID", (req, res) => {
  if (!!req.params.ID) {
    avionesController.deleteAvion(req.params.ID, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to delete product'
        });
      else
        res.redirect('/aviones');
    });
  }
});

router.get('/updateAvion', function(req, res, next) {
  res.render('updateAvion');
});

router.post("/actualizarAvion", (req, res) => {
  let aviones = avionesController.getAviones();
    console.log("Entra");
    avionesController.updateAvion({ID: req.body.ID, Estado: req.body.Estado, modelo: req.body.modelo}, (err) => {
      if (err)
        res.json({
          success: false,
          msg: 'Failed to update product'
        });
      else
        res.redirect('/aviones');
    });
  }
);


module.exports = router;
