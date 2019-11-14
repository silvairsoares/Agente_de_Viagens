var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/clientes', function (req, res, next) {
  res.json(
    [
      { id: 1, nome: 'Silvair Leite Soares', idade: 29 }, 
      { id: 2, nome: 'Fernando', idade: 29 },
      { id: 3, nome: 'Luiz', idade: 29 }, 
      { id: 4, nome: 'Fernando', idade: 29 },
      { id: 5, nome: 'Luiz', idade: 29 }, 
      { id: 6, nome: 'Fernando', idade: 29 },
      { id: 7, nome: 'Luiz', idade: 29 }, 
      { id: 8, nome: 'Fernando', idade: 29 },
      { id: 9, nome: 'Luiz', idade: 29 }, 
      { id: 10, nome: 'Fernando', idade: 29 }
    ]
  );
});

module.exports = router;
