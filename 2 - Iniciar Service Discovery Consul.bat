CD Consul\
cls

@echo off
echo Iniciando O Consul Service Discovery

start chrome.exe http://127.0.0.1:8500/ui/dc1/services


consul.exe agent -dev -bootstrap-expect=1 -data-dir=consul.d -ui -bind=127.0.0.1