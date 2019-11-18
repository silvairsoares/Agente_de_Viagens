echo off
CLS

start chrome.exe http://127.0.0.1:8500/ui/dc1/services

echo Iniciando o Consul atraves do arquivo de configuracao: "consul-config.json"

consul.exe agent -dev -config-file=consul-config.json
PAUSE