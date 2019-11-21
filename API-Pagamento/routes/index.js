var express = require('express');
var router = express.Router();
var dados = [];

// Retorna o estado de saúde da API
router.get('/pagamentos/health', (req, res, next) => {
  res.json({status: 'UP'});
})

/* GET listas Pagamentos. */
router.get('/pagamentos', function(req, res, next) {
  res.json(dados);
});

/* GET Pagamentos by ID. */
router.get('/pagamentos/:id', function(req, res, next) {
  let el = [];
  dados.filter( function( elem, i, array ) {
    if (elem.id == req.params.id)  {
      el.push(elem);
    }
  });
  res.json(el[0]);
});

/* Formato dos dados para o POST
{
	"id": 21,
	"id_reserva":[
		{"id": 5},
		{"id":13}
	],
	"subtotal": 1.800,
	"desconto": 200,
	"valor": 1.600
} */

/* POST dos dados de Pagamento. */
router.post('/pagamentos', function(req, res, next) {
  dados.push(req.body);
  res.json(dados);
});

module.exports = router;

