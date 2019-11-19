var express = require('express');
var router = express.Router();
var dados = '';

/* GET lista pacote de Viagens. */
router.get('/viagens', function(req, res, next) {
  res.json(dados);
});

/* GET pacote de Viagens by ID. */
router.get('/viagens/:id', function(req, res, next) {
  let el = [];
  dados.filter( function( elem, i, array ) {
    if (elem.id == req.params.id)  {
      el.push(elem);
    }
  });
  res.json(el[0]);
});

/* Exemplo dados enviados via POST
{
  "id": 5,
  "id_cliente": 21, 
  "ReservaCarro":
  {
    "id": 1, 
    "id_carro": 7, 
    "valor": 215, 
    "data_inicio": "10/12/2019", 
    "data_fim": "17/12/2019"
  },
  "ReservaHotel":
  {
    "id": 2, 
    "id_hotel": 1, 
    "valor": 4552, 
    "data_inicio": "10/12/2019", 
    "data_fim": "18/12/2019"
  },
  "Voo":
  {
    "ReservaVooIda":
    {
      "id": 13, 
      "id_voo": 99, 
      "valor":1350, 
      "data":"09/12/2019"
    },
    "ReservaVooVolta":
    {
      "id":4, 
      "id_voo":741, 
      "valor":1330, 
      "data": "18/12/2019"
    }
  }		
}  */

/* POST dos dados do pacte de viagens */
router.post('/viagens', function(req, res, next) {
  dados = req.body
  res.json(dados);
});

module.exports = router;
