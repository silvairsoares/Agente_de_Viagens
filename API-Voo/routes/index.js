var express = require('express');
var router = express.Router();

var voos = [
    {
      id:1, 
      cidadeOrigem: 'Goiânia', 
      cidadeDestino: 'Florianópolis',
      valor:290.00,
      datahora:'2019-11-25T11:30:00.000'
    },
    {
      id:3, 
      cidadeOrigem: 'Goiânia', 
      cidadeDestino: 'Florianópolis',
      valor:150.00,
      datahora:'2019-12-02T21:05:0.000'
    },
    {
      id:4, 
      cidadeOrigem: 'Goiânia', 
      cidadeDestino: 'Ubatuba - SP',
      valor:260.00,
      datahora:'2019-11-25T17:00:00.000'
    },
    {
      id:5, 
      cidadeOrigem: 'Ubatuba - SP', 
      cidadeDestino: 'Goiânia',
      valor:200.00,
      datahora:'2019-12-02T13:00:00.000'
    },
    {
      id:6, 
      cidadeOrigem: 'Goiânia', 
      cidadeDestino: 'Fortaleza',
      valor:160.00,
      datahora:'2019-11-25T12:00:00.000'
    },
    {
      id:7, 
      cidadeOrigem: 'Fortaleza', 
      cidadeDestino: 'Goiânia',
      valor:230.00,
      datahora:'2019-12-02T14:00:00.000'
    },
    {
      id:8, 
      cidadeOrigem: 'Goiânia', 
      cidadeDestino: 'João Pessoa',
      valor:260.00,
      datahora:'2019-11-25T06:00:00.000'
    },
    {
      id:9, 
      cidadeOrigem: 'João Pessoa', 
      cidadeDestino: 'Goiânia',
      valor:190.00,
      datahora:'2019-12-02T21:00:00.000'
    }
  ];

// Retorna o estado de saúde da API
router.get('/voos/health', (req, res, next) => {
  res.json({status: 'UP'});
})

/* GET home page. */

router.get('/voos', function(req, res, next) {
  res.json(voos);
});

router.get('/voos/:id', function(req, res, next) 
{
  voos.forEach(function(item){
    if(item.id == parseInt(req.params.id, 10)){
      res.json(item);
    }
  });
});

router.get('/voos/busca/:string', function(req, res, next) 
{
  var result = [];
  voos.forEach(function(item)
  {
    if (item.cidadeOrigem.toLowerCase().includes(req.params.string.toLowerCase())) 
    { 
       result.push(item);
    }
    if (item.cidadeDestino.toLowerCase().includes(req.params.string.toLowerCase())) 
    { 
       result.push(item);
    }
    if (item.datahora.toLowerCase().includes(req.params.string.toLowerCase())) 
    { 
       result.push(item);
    }
  });
  res.json(result);
});

module.exports = router;
