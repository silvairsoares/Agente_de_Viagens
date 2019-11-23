var express = require('express');
var router = express.Router();

var carros = [
    {
      id:1, 
      cor: 'Branco', 
      modelo:'Fiat Novo Uno 1.0',
      valor:67.27
    },
    {
      id:2, 
      cor: 'Branco',
      modelo:'Novo Ford Ka Hatch SE 1.0 ou similar',
      valor:69.05
    },
    {
      id:3, 
      cor: 'Branco',
      modelo:'GM Prisma 1.0 ou similar',
      valor:77.98
    },
    {
      id:4, 
      cor: 'Branco', 
      modelo:'Renault Sandero 1.6 ou similar',
      valor:77.98
    },
    {
      id:5, 
      cor: 'Branco', 
      modelo:'Novo Ford Ka Sedan 1.5 ou similar',
      valor:79.77
    },
    {
      id:6, 
      cor: 'Branco',
      modelo:'Novo Hyundai HB20S 1.6 ou similar',
      valor:111.63
    },
    {
      id:7, 
      cor: 'Branco',
      modelo:'Jeep Renegade Sport 1.8 ou similar',
      valor:111.63
    },
    {
      id:8, 
      cor: 'Branco',
      modelo:'Jeep Compass Longitude',
      valor:243.41
    },
    {
      id:9, 
      cor: 'Branco',
      modelo:'Volvo XC60 Turbo',
      valor:301.98
    },
    {
      id:10, 
      cor: 'Branco',
      modelo:'GM S10 2.8 ou similar',
      valor:360.73
    }

  ];
// Retorna o estado de saúde da API
router.get('/carros/health', (req, res, next) => {
  res.json({status: 'UP'});
})

/* GET home page. */
router.get('/carros', function(req, res, next) {
  res.json(carros);
});

router.get('/carros/:id', function(req, res, next) 
{
  carros.forEach(function(item){
    if(item.id == parseInt(req.params.id, 10)){
      res.json(item);
    }
  });
});

router.get('/carros/busca/:string', function(req, res, next) 
{
  var result = [];
  carros.forEach(function(item)
  {
    if (item.grupo.toLowerCase().includes(req.params.string.toLowerCase())) 
    { 
       result.push(item);
    }
    if (item.modelo.toLowerCase().includes(req.params.string.toLowerCase())) 
    { 
       result.push(item);
    }
  });
  res.json(result);
});



module.exports = router;
