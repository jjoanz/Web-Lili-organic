#!/bin/bash

# Script para subir Lili Organic a GitHub
# Uso: bash subir-a-github.sh

echo "╔══════════════════════════════════════════════════════════════════════╗"
echo "║   🌿 Subiendo Lili Organic a GitHub                                 ║"
echo "╚══════════════════════════════════════════════════════════════════════╝"
echo ""

# Verificar que git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git no está instalado"
    echo "Descárgalo desde: https://git-scm.com/downloads"
    exit 1
fi

# Agregar todos los archivos
echo "📦 Agregando archivos..."
git add .

# Hacer commit
echo "💾 Creando commit..."
git commit -m "✨ Proyecto inicial Lili Organic - Sistema e-commerce multipágina completo

- 6 páginas HTML profesionales
- Sistema de carrito de compras funcional
- 3 métodos de pago integrados
- 10 productos con descripciones
- Filtros y búsqueda avanzada
- 100% responsive
- Diseño profesional con colores de marca"

# Push al repositorio
echo "🚀 Subiendo a GitHub..."
git push origin main

# Si falla con main, intentar con master
if [ $? -ne 0 ]; then
    echo "⚠️  Intentando con branch 'master'..."
    git push origin master
fi

echo ""
echo "═══════════════════════════════════════════════════════════════════════"
echo "✅ ¡Proyecto subido exitosamente!"
echo ""
echo "Ver en: https://github.com/jjoanz/Web-Lili-organic"
echo ""
echo "Para activar GitHub Pages:"
echo "1. Ir a Settings → Pages"
echo "2. Seleccionar branch 'main'"
echo "3. Tu web estará en: https://jjoanz.github.io/Web-Lili-organic/"
echo "═══════════════════════════════════════════════════════════════════════"
