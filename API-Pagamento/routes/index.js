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

RegistraConsul();

//Registra a API no service Discovery Consul
function RegistraConsul() {
  var request = require('request');

  var headers = {
    'Content-Type': 'text/plain'
  };

  // Definição do serviço a ser registrado no Consul
  var dataString = JSON.stringify({
    "id": "API-Pagamentos1",
    "name": "API-Pagamentos",
    "tags": [
      "node.js"
    ],
    "address": "http://localhost",
    "port": 3000,
    "checks": [
      {
        "id": "Checagem da API-Pagamentos",
        "http": "http://localhost:3004/pagamentos/health",
        "interval": "5s"
      }
    ]
  });

  var options = {
    url: 'http://localhost:8500/v1/agent/service/register',
    method: 'PUT',
    headers: headers,
    body: dataString
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  }

  request(options, callback);
}

module.exports = router;

