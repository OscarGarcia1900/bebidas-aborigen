#!/bin/bash

# Script para preparar archivos para subir a cPanel
# Uso: ./preparar-para-cpanel.sh

echo "🚀 Preparando archivos para cPanel..."
echo ""

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: No se encontró package.json${NC}"
    echo "Asegúrate de estar en la carpeta del proyecto"
    exit 1
fi

# Nombre del archivo ZIP
ZIP_NAME="bebidas-ancestrales-$(date +%Y%m%d).zip"

echo -e "${YELLOW}📦 Creando archivo ZIP...${NC}"
echo "Excluyendo: node_modules, .next, .env, .git"

# Crear ZIP excluyendo carpetas y archivos innecesarios
zip -r "$ZIP_NAME" . \
    -x "node_modules/*" \
    -x ".next/*" \
    -x ".env" \
    -x ".git/*" \
    -x "*.zip" \
    -x ".DS_Store" \
    -x "*.log" \
    > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Archivo creado: $ZIP_NAME${NC}"
    echo ""
    echo "📋 Próximos pasos:"
    echo "1. Sube el archivo '$ZIP_NAME' a cPanel"
    echo "2. Extráelo en public_html"
    echo "3. Sigue la guía: GUIA_COMPLETA_DESDE_CERO.md"
else
    echo -e "${RED}❌ Error al crear el archivo ZIP${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}⚠️  Recordatorios importantes:${NC}"
echo "- NO subas node_modules (muy pesado)"
echo "- NO subas .env (contiene información sensible)"
echo "- NO subas .next (se genera en el servidor)"
echo "- Configura las variables de entorno en cPanel Node.js Selector"

