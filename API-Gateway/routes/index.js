//index.js

var http = require('http');
const express = require('express')
const httpProxy = require('express-http-proxy')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');

const carrosServiceProxy = httpProxy('http://localhost:3001');
const clientesServiceProxy = httpProxy('http://localhost:3002');
const hoteisServiceProxy = httpProxy('http://localhost:3003');
const pagamentosServiceProxy = httpProxy('http://localhost:3004');
const viagensServiceProxy = httpProxy('http://localhost:3005');
const voosServiceProxy = httpProxy('http://localhost:3006');
var router = express.Router();

//#region Métodos da API Gateway
// Retorna o estado de saúde da API
router.get('/gateway/health', (req, res, next) => {
  res.json({status: 'UP'});
})

//#endregion

//#region Métodos da API Carros
// Retorna o estado de saúde da API
router.get('/carros/health', (req, res, next) => {
  carrosServiceProxy(req, res, next);
})

// Retorna todos os carros
router.get('/carros', (req, res, next) => {
  carrosServiceProxy(req, res, next);
})
//#endregion

//#region Métodos da API Clientes
// Retorna o estado de saúde da API
router.get('/clientes/health', (req, res, next) => {
  clientesServiceProxy(req, res, next);
})

// Retorna todos os clientes
router.get('/clientes', (req, res, next) => {
  clientesServiceProxy(req, res, next);
})

// Retorna um cliente específico
router.get('/clientes/:id', (req, res, next) => {
  clientesServiceProxy(req, res, next);
})

// Cadastra um novo cliente
router.post('/clientes', (req, res, next) => {
  clientesServiceProxy(req, res, next);
})

// Atualiza um cliente específico
router.put('/clientes/:id', (req, res, next) => {
  clientesServiceProxy(req, res, next);
})
//#endregion

//#region Métodos da API Hoteis
// Retorna o estado de saúde da API
router.get('/hoteis/health', (req, res, next) => {
  hoteisServiceProxy(req, res, next);
})

// Retorna todos os hoteis
router.get('/hoteis', (req, res, next) => {
  hoteisServiceProxy(req, res, next);
})

//#endregion

//#region Métodos da API Pagamentos
// Retorna o estado de saúde da API
router.get('/pagamentos/health', (req, res, next) => {
  pagamentosServiceProxy(req, res, next);
})

// Retorna todos os pagamentos
router.get('/pagamentos', (req, res, next) => {
  pagamentosServiceProxy(req, res, next);
})

// Retorna um pagamentos específico
router.get('/pagamentos/:id', (req, res, next) => {
  pagamentosServiceProxy(req, res, next);
})

// Cadastra um novo pagamentos
router.post('/pagamentos', (req, res, next) => {
  pagamentosServiceProxy(req, res, next);
})

// Atualiza um pagamentos específico
router.put('/pagamentos', (req, res, next) => {
  pagamentosServiceProxy(req, res, next);
})
//#endregion

//#region Métodos da API Viagens
// Retorna o estado de saúde da API
router.get('/viagens/health', (req, res, next) => {
  viagensServiceProxy(req, res, next);
})

// Retorna todas as viagens
router.get('/viagens', (req, res, next) => {
  viagensServiceProxy(req, res, next);
})

// Retorna uma viagem específica
router.get('/viagem/:id', (req, res, next) => {
  viagensServiceProxy(req, res, next);
})

// Cadastra um novo pagamentos
router.post('/viagens', (req, res, next) => {
  viagensServiceProxy(req, res, next);
})

// Atualiza uma viagem específica
router.put('/viagens', (req, res, next) => {
  viagensServiceProxy(req, res, next);
})
//#endregion

//#region Métodos da API Voos
// Retorna o estado de saúde da API
router.get('/voos/health', (req, res, next) => {
  voosServiceProxy(req, res, next);
})

// Retorna todos os clientes
router.get('/voos', (req, res, next) => {
  voosServiceProxy(req, res, next);
})
//#endregion


router.use(logger('dev'));
router.use(helmet());
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(cookieParser());

module.exports = router;