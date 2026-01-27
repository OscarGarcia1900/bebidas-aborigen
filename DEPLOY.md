# Guía de Despliegue - Hosting Propio

Esta guía te ayudará a desplegar tu aplicación Next.js en un servidor propio (VPS, servidor dedicado, etc.).

## Requisitos Previos

- Servidor con Ubuntu/Debian (o similar Linux)
- Node.js 18.x o superior instalado
- NPM o Yarn instalado
- Acceso SSH al servidor
- Dominio configurado (opcional pero recomendado)

## Opción 1: Despliegue con PM2 (Recomendado)

PM2 es un gestor de procesos para Node.js que mantiene tu aplicación corriendo y la reinicia automáticamente si falla.

### Paso 1: Preparar el servidor

```bash
# Conectarse al servidor via SSH
ssh usuario@tu-servidor.com

# Actualizar el sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 18.x (si no está instalado)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Instalar PM2 globalmente
sudo npm install -g pm2

# Instalar Nginx (para reverse proxy)
sudo apt install -y nginx
```

### Paso 2: Subir el código al servidor

```bash
# En tu máquina local, comprimir el proyecto (excluyendo node_modules)
tar --exclude='node_modules' --exclude='.next' --exclude='.git' -czf app.tar.gz .

# Subir al servidor
scp app.tar.gz usuario@tu-servidor.com:/home/usuario/

# En el servidor, descomprimir
cd /home/usuario
mkdir -p app_bebidas_ancestrales
cd app_bebidas_ancestrales
tar -xzf ../app.tar.gz
```

**Alternativa con Git:**

```bash
# En el servidor
cd /home/usuario
git clone https://github.com/tu-usuario/app_bebidas_ancestrales.git
cd app_bebidas_ancestrales
```

### Paso 3: Configurar variables de entorno

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar con tus valores reales
nano .env
```

Asegúrate de configurar:
- `STRIPE_SECRET_KEY`: Tu clave secreta de Stripe
- `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`: Tu clave pública de Stripe
- `NEXT_PUBLIC_WOMPI_PUBLIC_KEY`: Tu clave pública de Wompi
- `NEXT_PUBLIC_APP_URL`: La URL de tu sitio (ej: https://tudominio.com)
- `NODE_ENV=production`

### Paso 4: Instalar dependencias y construir

```bash
# Instalar dependencias
npm install

# Construir la aplicación para producción
npm run build
```

### Paso 5: Iniciar con PM2

```bash
# Iniciar la aplicación con PM2
pm2 start npm --name "bebidas-ancestrales" -- start

# O usar el archivo de configuración
pm2 start ecosystem.config.js

# Guardar la configuración de PM2
pm2 save

# Configurar PM2 para iniciar al arrancar el servidor
pm2 startup
# Seguir las instrucciones que aparecen
```

### Paso 6: Configurar Nginx como Reverse Proxy

```bash
# Crear configuración de Nginx
sudo nano /etc/nginx/sites-available/bebidas-ancestrales
```

Contenido del archivo:

```nginx
server {
    listen 80;
    server_name tudominio.com www.tudominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Habilitar el sitio
sudo ln -s /etc/nginx/sites-available/bebidas-ancestrales /etc/nginx/sites-enabled/

# Probar configuración
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

### Paso 7: Configurar SSL con Let's Encrypt (Recomendado)

```bash
# Instalar Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtener certificado SSL
sudo certbot --nginx -d tudominio.com -d www.tudominio.com

# El certificado se renovará automáticamente
```

## Opción 2: Despliegue con Docker (Alternativa)

Si prefieres usar Docker, puedes crear un `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Instalar dependencias solo cuando sea necesario
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Construir la aplicación
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Imagen de producción
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

## Comandos Útiles de PM2

```bash
# Ver estado de la aplicación
pm2 status

# Ver logs
pm2 logs bebidas-ancestrales

# Reiniciar aplicación
pm2 restart bebidas-ancestrales

# Detener aplicación
pm2 stop bebidas-ancestrales

# Eliminar aplicación de PM2
pm2 delete bebidas-ancestrales

# Monitoreo en tiempo real
pm2 monit
```

## Actualizar la Aplicación

Cuando necesites actualizar:

```bash
# En el servidor
cd /home/usuario/app_bebidas_ancestrales

# Si usas Git
git pull origin main

# Instalar nuevas dependencias (si las hay)
npm install

# Reconstruir
npm run build

# Reiniciar con PM2
pm2 restart bebidas-ancestrales
```

## Solución de Problemas

### La aplicación no inicia
```bash
# Ver logs detallados
pm2 logs bebidas-ancestrales --lines 100

# Verificar que el puerto 3000 esté libre
sudo netstat -tulpn | grep 3000
```

### Error de permisos
```bash
# Asegurar permisos correctos
sudo chown -R $USER:$USER /home/usuario/app_bebidas_ancestrales
```

### Nginx no funciona
```bash
# Ver logs de Nginx
sudo tail -f /var/log/nginx/error.log

# Verificar configuración
sudo nginx -t
```

## Seguridad

1. **Firewall**: Configura un firewall (UFW)
```bash
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```

2. **Variables de entorno**: Nunca subas el archivo `.env` a Git

3. **Actualizaciones**: Mantén el sistema y Node.js actualizados

## Recursos Adicionales

- [Documentación de Next.js - Despliegue](https://nextjs.org/docs/deployment)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [Nginx Documentation](https://nginx.org/en/docs/)

