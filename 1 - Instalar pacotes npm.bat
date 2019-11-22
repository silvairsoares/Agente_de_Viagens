@echo off
echo Instalando pacotes NPM em todos os projetos...

start "" /B /D"%~dp0API-Carro" npm install
start "" /B /D"%~dp0API-Cliente" npm install
start "" /B /D"%~dp0API-Gateway" npm install
start "" /B /D"%~dp0API-Hotel" npm install
start "" /B /D"%~dp0API-Pagamento" npm install
start "" /B /D"%~dp0API-Viagem" npm install
start "" /B /D"%~dp0API-Voo" npm install
start "" /B /D"%~dp0mooydgrygoob.angular" npm install
