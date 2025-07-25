@echo off
title Portfolio Development Server
echo.
echo 🚀 Starting Portfolio Development Server...
echo.
echo This server will allow GitHub API integration to work properly
echo by serving the portfolio from http://localhost:8000
echo.
echo Opening portfolio in your browser...
echo Press Ctrl+C to stop the server when done.
echo.

py serve.py

pause
