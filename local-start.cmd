@echo off

:: Change to the directory where the script is located
cd %~dp0

:: Configure the oracle instant client env variable
set PATH=%PATH%;"C:\Users\perry\OneDrive\Desktop\College\Year 3\T2\CPSC 304\instantclient_19_20"

:: Start Node application
node server.js

exit /b 0
