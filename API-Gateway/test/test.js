let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

// Nossa suite de teste relacionada a artigos
describe('Testes de integração com as APIs', () =>

    describe('/GET API-Carro/health', () => {
        it('Testando integração com a API-Carro', (done) => {
            // Endereço do servidor
            chai.request('http://localhost:3001') 
            // endpoint que vamos testar    
            .get('/carros/health') 
                // testes a serem realizados
                .end((err, res) => { 
                    // verificando se o retorno é um status code 200
                    res.should.have.status(200); 
                    // verificando existe a propriedade 'status' e se o seu valor é 'UP'
                    res.body.should.have.property('status').eql("UP")
                    done();
                });
        });
    }),

    describe('/GET API-Cliente/health', () => {
        it('Testando integração com a API-Cliente', (done) => {
            // Endereço do servidor
            chai.request('http://localhost:3002') 
            // endpoint que vamos testar    
            .get('/clientes/health') 
                // testes a serem realizados
                .end((err, res) => { 
                    // verificando se o retorno é um status code 200
                    res.should.have.status(200); 
                    // verificando existe a propriedade 'status' e se o seu valor é 'UP'
                    res.body.should.have.property('status').eql("UP")
                    done();
                });
        });
    }),
    
    describe('/GET API-Hotel/health', () => {
        it('Testando integração com a API-Hotel', (done) => {
            // Endereço do servidor
            chai.request('http://localhost:3003') 
            // endpoint que vamos testar    
            .get('/hoteis/health') 
                // testes a serem realizados
                .end((err, res) => { 
                    // verificando se o retorno é um status code 200
                    res.should.have.status(200); 
                    // verificando existe a propriedade 'status' e se o seu valor é 'UP'
                    res.body.should.have.property('status').eql("UP")
                    done();
                });
        });
    }),

    describe('/GET API-Pagamento/health', () => {
        it('Testando integração com a API-Pagamento', (done) => {
            // Endereço do servidor
            chai.request('http://localhost:3004') 
            // endpoint que vamos testar    
            .get('/pagamentos/health') 
                // testes a serem realizados
                .end((err, res) => { 
                    // verificando se o retorno é um status code 200
                    res.should.have.status(200); 
                    // verificando existe a propriedade 'status' e se o seu valor é 'UP'
                    res.body.should.have.property('status').eql("UP")
                    done();
                });
        });
    }),

    describe('/GET API-Viagem/health', () => {
        it('Testando integração com a API-Viagem', (done) => {
            // Endereço do servidor
            chai.request('http://localhost:3005') 
            // endpoint que vamos testar    
            .get('/viagens/health') 
                // testes a serem realizados
                .end((err, res) => { 
                    // verificando se o retorno é um status code 200
                    res.should.have.status(200); 
                    // verificando existe a propriedade 'status' e se o seu valor é 'UP'
                    res.body.should.have.property('status').eql("UP")
                    done();
                });
        });
    }),

    describe('/GET API-Voo/health', () => {
        it('Testando integração com a API-Voo', (done) => {
            // Endereço do servidor
            chai.request('http://localhost:3006') 
            // endpoint que vamos testar    
            .get('/voos/health') 
                // testes a serem realizados
                .end((err, res) => { 
                    // verificando se o retorno é um status code 200
                    res.should.have.status(200); 
                    // verificando existe a propriedade 'status' e se o seu valor é 'UP'
                    res.body.should.have.property('status').eql("UP")
                    done();
                });
        });
    }),

)