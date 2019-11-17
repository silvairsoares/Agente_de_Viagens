var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/voos', function(req, res, next) {
  res.json([
    {
      id:1, 
      cidade_origem: 'Goiânia', 
      cidade_destino: 'Florianópolis',
      valor:'290,00',
      data_hora:'2019-11-25 11:30:00.000'
    },
    {
      id:3, 
      cidade_origem: 'Goiânia', 
      cidade_destino: 'Florianópolis',
      valor:'150,00',
      data_hora:'2019-12-02 21:05:0.000'
    },
    {
      id:4, 
      cidade_origem: 'Goiânia', 
      cidade_destino: 'Ubatuba - SP',
      valor:'260,00',
      data_hora:'2019-11-25 17:00:00.00'
    },
    {
      id:5, 
      cidade_origem: 'Ubatuba - SP', 
      cidade_destino: 'Goiânia',
      valor:'200,00',
      data_hora:'2019-12-02 13:00:00.00'
    },
    {
      id:6, 
      cidade_origem: 'Goiânia', 
      cidade_destino: 'Fortaleza',
      valor:'160,00',
      data_hora:'2019-11-25 12:00:00.00'
    },
    {
      id:7, 
      cidade_origem: 'Fortaleza', 
      cidade_destino: 'Goiânia',
      valor:'230,00',
      data_hora:'2019-12-02 14:00:00.00'
    },
    {
      id:8, 
      cidade_origem: 'Goiânia', 
      cidade_destino: 'João Pessoa',
      valor:'260,00',
      data_hora:'2019-11-25 06:00:00.00'
    },
    {
      id:9, 
      cidade_origem: 'João Pessoa', 
      cidade_destino: 'Goiânia',
      valor:'190,00',
      data_hora:'2019-12-02 21:00:00.00'
    }
  ]);
});

module.exports = router;
