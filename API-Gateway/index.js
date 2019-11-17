//index.js
var http = require('http');
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
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

//#region Métodos da API Carros
// Retorna todos os carros
app.get('/carros', (req, res, next) => {
  carrosServiceProxy(req, res, next);
})
//#endregion

//#region Métodos da API Clientes
// Retorna todos os clientes
app.get('/clientes', (req, res, next) => {
  clientesServiceProxy(req, res, next);
})

// Retorna um cliente específico
app.get('/clientes/:id', (req, res, next) => {
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
// Retorna todos os hoteis
app.get('/hoteis', (req, res, next) => {
  hoteisServiceProxy(req, res, next);
})

//#endregion

//#region Métodos da API Pagamentos
// Retorna todos os pagamentos
app.get('/pagamentos', (req, res, next) => {
  pagamentosServiceProxy(req, res, next);
})

// Retorna um pagamentos específico
app.get('/pagamentos/:id', (req, res, next) => {
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
// Retorna todas as viagens
app.get('/viagens', (req, res, next) => {
  viagensServiceProxy(req, res, next);
})

// Retorna uma viagem específica
app.get('/viagem/:id', (req, res, next) => {
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
// Retorna todos os clientes
app.get('/voos', (req, res, next) => {
  voosServiceProxy(req, res, next);
})
//#endregion


app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var server = http.createServer(app);
server.listen(3000);