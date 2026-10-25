@echo off
REM Build Study Match: validates data\data.json, writes dist\study-match.html and dist\app\
cd /d "%~dp0"
where py >nul 2>nul && (py -3 build.py %*) || (python build.py %*)
if errorlevel 1 pause
