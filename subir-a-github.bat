@echo off
REM Script para subir Lili Organic a GitHub (Windows)

echo ====================================================================
echo    Subiendo Lili Organic a GitHub
echo ====================================================================
echo.

REM Agregar todos los archivos
echo Agregando archivos...
git add .

REM Hacer commit
echo Creando commit...
git commit -m "Proyecto inicial Lili Organic - Sistema e-commerce multipagina completo"

REM Push al repositorio
echo Subiendo a GitHub...
git push origin main

REM Si falla, intentar con master
if errorlevel 1 (
    echo Intentando con branch master...
    git push origin master
)

echo.
echo ====================================================================
echo Proyecto subido exitosamente!
echo.
echo Ver en: https://github.com/jjoanz/Web-Lili-organic
echo.
echo Para activar GitHub Pages:
echo 1. Ir a Settings - Pages
echo 2. Seleccionar branch main
echo 3. Tu web estara en: https://jjoanz.github.io/Web-Lili-organic/
echo ====================================================================
echo.

pause
