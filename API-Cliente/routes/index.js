
var DAO = require('../daos/index.js');
var dao = DAO.getInstance('memory');

var express = require('express');
var router = express.Router();

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

module.exports = router;
