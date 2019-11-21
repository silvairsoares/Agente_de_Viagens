**Repositório contendo os microserviços para o trabalho final da disciplina "Arquitetura Orientada a Serviços"**

========================= **BACK-END** =========================

Contendo as seguintes APIs desenvolvidas em Node.JS

**API-Gateway** http://localhost:3000/

**API-Carro** http://localhost:3001/carros

**API-Cliente** http://localhost:3002/clientes

**API-Hotel** http://localhost:3003/hoteis

**API-Pagamento** http://localhost:3004/pagamentos

**API-Viagem** http://localhost:3005/viagens

**API-Voo** http://localhost:3006/voos


**Todos os microserviços devem ser acessados através da API-Gateway**


**API-Carro** http://localhost:3000/carros

**API-Cliente** http://localhost:3000/clientes

**API-Hotel** http://localhost:3000/hoteis

**API-Pagamento** http://localhost:3000/pagamentos

**API-Viagem** http://localhost:3000/viagens

**API-Voo** http://localhost:3000/voos


========================= **FRONT-END** =========================

Passos para executar o frontend:

1 - Acesse o diretório do projeto "mooydgrygoob.angular";

2 - No console, digite o comando: "npm install -g json-server";

3 - Digite o comando: "npm install";

4 - Digite o comando: "json-server --watch src/assets/data/db.json";

Seu console deverá exibir a mensagem:

\{^_^}/ hi!

  Loading src/assets/data/db.json
  Done

  Resources
  
  http://localhost:3000/carros
  
  http://localhost:3000/clientes
  
  http://localhost:3000/hoteis
  
  http://localhost:3000/voos
  
  http://localhost:3000/pagamentos
  
  http://localhost:3000/reservas

  Home
  
  http://localhost:3000

5 - Em outra janela do console, digite o comando: "npm start"

6 - Acesse o front end no endereço: http://localhost:4200/
