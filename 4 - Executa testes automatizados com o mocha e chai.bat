@echo off
echo Executando testes com os Frameworks Mocha e Chai...

start "" /B /D"%~dp0API-Gateway" npm test

