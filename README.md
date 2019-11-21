**Repositório contendo os microserviços para o trabalho final da disciplina "Arquitetura Orientada a Serviços"**

===========================================================================

**1 - Back-End** 

O projeto back-end é composto das seguintes APIs desenvolvidas em Node.JS


**1.1 - Endereços do Back-End** 

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


**1.2 - Executando o back-end:**

**Para iniciar o back-end execute os seguintes passos:**

 - Acesse o diretório de cada um dos microserviços;
 
 - Digite o comando "npm install" (apenas na primeira vez);
 
 - Digite o comando "npm start".

**1.3 - Executando o service discovery Consul:**

 - Baixe o executável do Consul no endereço: https://www.consul.io/downloads.html";

 - Salve o executável no seguinte diretório: "root_dir\Consul\Consul.exe";

 - Execute o arquivo "root_dir\Consul\Iniciar Consul.bat";

 - Acesse o endereço "http://127.0.0.1:8500/ui/dc1/services" para ver o painel administrativo do Consul.

===========================================================================

**2 - Front-End** 


**2.1 - Executando o Front-end:**

 - Acesse o diretório do projeto "mooydgrygoob.angular";

 - Digite o comando: "npm install"(apenas na primeira vez);

 - Em outra janela do console, digite o comando: "npm start"

 - Acesse o front end no endereço: http://localhost:4200/
