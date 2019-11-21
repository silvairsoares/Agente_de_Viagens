
var DAO = require('../daos/index.js');
var dao = DAO.getInstance('memory');

var express = require('express');
var router = express.Router();

// Retorna o estado de saúde da API
router.get('/clientes/health', (req, res, next) => {
  res.json({status: 'UP'});
})

/* GET home page. */
router.get('/clientes', function(req, res, next)
{
  const response = dao.retrieveAll();
  res.json(response);
});

router.get('/clientes/:id', function(req, res, next) 
{
  try 
  {
    const response = dao.retrieve(parseInt(req.params.id, 10))
    res.json(response);
  } catch (error)
  {
    res.status(500).json({ error: error.toString() });
  }
});

router.post('/clientes', function(req, res, next) 
{
  try
  {
    const response = dao.create(req.body);
    res.json({
      'resultado': 'Cliente salvo com sucesso',
      'dados': req.body
    });
  } catch (error)
  {
    res.status(500).json({ error: error.toString() });
  }
  
});

router.put('/clientes/:id', function(req, res, next) 
{
  try
  {
    const response = dao.update(parseInt(req.params.id, 10), req.body)
    res.json(response);
  } catch (error)
  {
    res.status(500).json({ error: error.toString() });
  }
  
});

router.get('/clientes/busca/:string', function(req, res, next) 
{
  var result = [];
  const clientes = dao.retrieveAll();
  clientes.forEach(function(item)
  {
    if (item.Nome.toLowerCase().includes(req.params.string.toLowerCase())) 
    { 
       result.push(item);
    }
  });
  res.json(result);
});

module.exports = router;
