echo off

CLS


start chrome.exe http://127.0.0.1:8500/ui/dc1/services


echo Iniciando o Consul atraves do arquivo de configuracao: "consul-config.json"


consul.exe agent -dev -bootstrap-expect=1 -data-dir=consul.d -ui -bind=127.0.0.1 -config-file=consul-config.json