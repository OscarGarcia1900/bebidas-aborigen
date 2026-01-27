#!/bin/bash

# Script de despliegue automatizado
# Uso: ./deploy.sh

set -e  # Salir si hay algún error

echo "🚀 Iniciando despliegue..."

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: No se encontró package.json. Asegúrate de estar en el directorio del proyecto.${NC}"
    exit 1
fi

# Verificar que existe .env
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}⚠️  Advertencia: No se encontró archivo .env${NC}"
    echo "¿Deseas crear uno desde .env.example? (s/n)"
    read -r response
    if [[ "$response" =~ ^[Ss]$ ]]; then
        if [ -f ".env.example" ]; then
            cp .env.example .env
            echo -e "${GREEN}✓ Archivo .env creado. Por favor edítalo con tus valores.${NC}"
            echo "Presiona Enter cuando hayas terminado..."
            read -r
        else
            echo -e "${RED}❌ No se encontró .env.example${NC}"
            exit 1
        fi
    else
        echo -e "${RED}❌ Se requiere archivo .env para continuar${NC}"
        exit 1
    fi
fi

# Instalar dependencias
echo -e "${YELLOW}📦 Instalando dependencias...${NC}"
npm install

# Ejecutar linter (opcional, comentar si causa problemas)
# echo -e "${YELLOW}🔍 Ejecutando linter...${NC}"
# npm run lint || true

# Construir la aplicación
echo -e "${YELLOW}🔨 Construyendo aplicación para producción...${NC}"
npm run build

# Verificar si PM2 está instalado
if command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}🔄 Reiniciando aplicación con PM2...${NC}"
    
    # Verificar si la app ya está corriendo
    if pm2 list | grep -q "bebidas-ancestrales"; then
        pm2 restart bebidas-ancestrales
        echo -e "${GREEN}✓ Aplicación reiniciada${NC}"
    else
        pm2 start ecosystem.config.js
        pm2 save
        echo -e "${GREEN}✓ Aplicación iniciada${NC}"
    fi
    
    echo -e "${GREEN}✅ Despliegue completado exitosamente!${NC}"
    echo ""
    echo "Comandos útiles:"
    echo "  pm2 status              - Ver estado"
    echo "  pm2 logs bebidas-ancestrales - Ver logs"
    echo "  pm2 monit               - Monitoreo en tiempo real"
else
    echo -e "${YELLOW}⚠️  PM2 no está instalado. La aplicación está construida pero no iniciada.${NC}"
    echo "Para iniciar manualmente: npm start"
    echo "O instala PM2: npm install -g pm2"
fi

