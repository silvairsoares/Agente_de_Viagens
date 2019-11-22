@echo off
echo Iniciando frontend Angular


start "" /B /D"%~dp0mooydgrygoob.angular" npm start


start chrome.exe http://localhost:4200/