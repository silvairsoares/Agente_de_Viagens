@echo off
echo Iniciando O Back-end...

start "" /B /D"%~dp0API-Carro" npm start
start "" /B /D"%~dp0API-Cliente" npm start
start "" /B /D"%~dp0API-Gateway" npm start
start "" /B /D"%~dp0API-Hotel" npm start
start "" /B /D"%~dp0API-Pagamento" npm start
start "" /B /D"%~dp0API-Viagem" npm start
start "" /B /D"%~dp0API-Voo" npm start
