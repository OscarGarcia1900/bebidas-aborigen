# Guía de Despliegue en cPanel - bebidasaborigen.com

Esta guía te ayudará a desplegar tu aplicación Next.js en un hosting con cPanel.

## ⚠️ Requisitos Importantes

Tu aplicación necesita **Node.js** porque tiene API routes (Stripe checkout). Verifica que tu hosting cPanel tenga:

1. **Node.js Selector** disponible (la mayoría de hostings modernos lo tienen)
2. O acceso **SSH** habilitado

Si tu hosting NO tiene Node.js, considera:
- Cambiar a un hosting que sí lo tenga (ej: Hostinger, Namecheap, SiteGround)
- O usar un servicio como Vercel/Railway para las API routes

---

## Opción 1: cPanel con Node.js Selector (Recomendado)

Esta es la forma más fácil si tu hosting tiene Node.js Selector.

### Paso 1: Preparar el proyecto localmente

```bash
# En tu máquina local, construir el proyecto
npm install
npm run build

# Crear archivo .env con tus variables (ver VARIABLES_ENTORNO.md)
# IMPORTANTE: Cambia NEXT_PUBLIC_APP_URL a:
NEXT_PUBLIC_APP_URL=https://bebidasaborigen.com
```

### Paso 2: Subir archivos a cPanel

1. **Accede a cPanel** → **File Manager**
2. Ve a la carpeta `public_html` (o la carpeta de tu dominio)
3. **Sube todos los archivos** del proyecto EXCEPTO:
   - `node_modules/` (no subir)
   - `.next/` (no subir, se genera en el servidor)
   - `.git/` (opcional)

**Formas de subir:**
- **Opción A**: Comprimir en ZIP (excluyendo node_modules y .next) y subir/extraer en cPanel
- **Opción B**: Usar FTP/SFTP (FileZilla, WinSCP, etc.)

### Paso 3: Configurar Node.js en cPanel

1. En cPanel, busca **"Node.js Selector"** o **"Setup Node.js App"**
2. Haz clic en **"Create Application"**
3. Configura:
   - **Node.js version**: 18.x o superior (recomendado 18 LTS)
   - **Application mode**: Production
   - **Application root**: `public_html` (o la carpeta donde subiste los archivos)
   - **Application URL**: `/` (raíz del dominio)
   - **Application startup file**: `server.js` (Next.js lo genera automáticamente)
   - **Application URL**: Dejar vacío o `/`

4. Haz clic en **"Create"**

### Paso 4: Configurar variables de entorno

En la misma sección de Node.js Selector:

1. Busca tu aplicación creada
2. Haz clic en **"Edit"** o **"Environment Variables"**
3. Agrega estas variables:

```
NODE_ENV=production
PORT=3000
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_xxxxxxxxxxxxx
NEXT_PUBLIC_WOMPI_PUBLIC_KEY=pub_prod_xxxxxxxxxxxxx
NEXT_PUBLIC_APP_URL=https://bebidasaborigen.com
```

⚠️ **IMPORTANTE**: Usa las claves de **PRODUCCIÓN** (no test) para Stripe y Wompi.

### Paso 5: Instalar dependencias y construir

**Si tienes acceso SSH:**

```bash
# Conectarte via SSH
ssh usuario@bebidasaborigen.com

# Ir a la carpeta del proyecto
cd public_html  # o la carpeta donde subiste los archivos

# Instalar dependencias
npm install --production

# Construir la aplicación
npm run build
```

**Si NO tienes SSH**, usa el **Terminal** de cPanel:

1. En cPanel, busca **"Terminal"** o **"SSH Access"**
2. Ejecuta los mismos comandos de arriba

### Paso 6: Iniciar la aplicación

En Node.js Selector:

1. Busca tu aplicación
2. Haz clic en **"Run NPM Install"** (si no lo hiciste antes)
3. Haz clic en **"Restart"** o **"Start"**

### Paso 7: Configurar dominio y SSL

1. En cPanel, ve a **"SSL/TLS Status"**
2. Selecciona tu dominio `bebidasaborigen.com`
3. Haz clic en **"Run AutoSSL"** para obtener certificado SSL gratuito
4. Espera unos minutos a que se active

---

## Opción 2: cPanel con SSH (Si Node.js Selector no está disponible)

Si tu hosting tiene SSH pero no Node.js Selector:

### Paso 1: Instalar Node.js manualmente

```bash
# Conectarte via SSH
ssh usuario@bebidasaborigen.com

# Instalar Node.js usando nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc

# Instalar Node.js 18
nvm install 18
nvm use 18

# Verificar instalación
node --version
npm --version
```

### Paso 2: Subir archivos y configurar

Sigue los pasos 2-4 de la Opción 1, pero en lugar de usar Node.js Selector:

```bash
# Ir a la carpeta del proyecto
cd ~/public_html  # o donde subiste los archivos

# Instalar dependencias
npm install --production

# Construir
npm run build

# Crear archivo .env
nano .env
# Pegar las variables de entorno (ver Paso 4 de Opción 1)
```

### Paso 3: Usar PM2 para mantener la app corriendo

```bash
# Instalar PM2 globalmente
npm install -g pm2

# Iniciar la aplicación
pm2 start npm --name "bebidas-ancestrales" -- start

# Guardar configuración
pm2 save

# Configurar para iniciar al reiniciar el servidor
pm2 startup
# Seguir las instrucciones que aparecen
```

### Paso 4: Configurar proxy en .htaccess

Crea o edita el archivo `.htaccess` en `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
</IfModule>
```

Esto redirige todas las peticiones a tu aplicación Node.js en el puerto 3000.

---

## Opción 3: Build Estático + API Externa (No recomendado)

Si tu hosting NO soporta Node.js, puedes:

1. **Exportar solo las páginas estáticas** (pero perderás las API routes)
2. **Mover las API routes a otro servicio** (Vercel, Railway, etc.)

Esto requiere cambios en el código y no es ideal. Mejor busca un hosting con Node.js.

---

## Verificar que Funciona

1. Visita `https://bebidasaborigen.com`
2. Deberías ver tu página funcionando
3. Prueba agregar productos al carrito
4. Prueba el proceso de pago (con tarjeta de prueba primero)

---

## Actualizar la Aplicación

Cuando necesites hacer cambios:

### Con Node.js Selector:
1. Sube los archivos nuevos vía File Manager o FTP
2. En Node.js Selector, haz clic en **"Restart"**

### Con SSH:
```bash
# Conectarte
ssh usuario@bebidasaborigen.com

# Ir al proyecto
cd ~/public_html

# Si usas Git
git pull origin main

# Instalar nuevas dependencias
npm install

# Reconstruir
npm run build

# Reiniciar (si usas PM2)
pm2 restart bebidas-ancestrales
```

---

## Solución de Problemas

### Error: "Cannot find module"
- Verifica que `node_modules` esté instalado: `npm install`
- Asegúrate de estar en la carpeta correcta

### Error: "Port 3000 already in use"
- Cambia el puerto en las variables de entorno: `PORT=3001`
- O detén otros procesos usando ese puerto

### La página carga pero las API no funcionan
- Verifica que Node.js esté corriendo
- Revisa los logs en Node.js Selector o `pm2 logs`
- Verifica que las variables de entorno estén configuradas

### Error 502 Bad Gateway
- La aplicación Node.js no está corriendo
- Reinicia desde Node.js Selector o `pm2 restart`

### SSL no funciona
- Espera 10-15 minutos después de activar AutoSSL
- Verifica que el dominio apunte correctamente al servidor
- Contacta al soporte de tu hosting

---

## Comandos Útiles

```bash
# Ver logs de la aplicación (con PM2)
pm2 logs bebidas-ancestrales

# Ver estado
pm2 status

# Reiniciar
pm2 restart bebidas-ancestrales

# Ver logs en tiempo real
pm2 logs --lines 50
```

---

## Checklist de Despliegue

- [ ] Archivos subidos a cPanel (sin node_modules ni .next)
- [ ] Node.js 18+ configurado en cPanel
- [ ] Variables de entorno configuradas (con claves de PRODUCCIÓN)
- [ ] `NEXT_PUBLIC_APP_URL=https://bebidasaborigen.com`
- [ ] Dependencias instaladas (`npm install`)
- [ ] Aplicación construida (`npm run build`)
- [ ] Aplicación iniciada y corriendo
- [ ] SSL/HTTPS configurado
- [ ] Dominio apuntando correctamente
- [ ] Pruebas realizadas (carrito, pagos)

---

## Recursos Adicionales

- [Documentación de Next.js - Despliegue](https://nextjs.org/docs/deployment)
- [cPanel Node.js Selector Guide](https://docs.cpanel.net/knowledge-base/web-services/how-to-set-up-a-node-js-application/)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)

---

## Soporte

Si tienes problemas:
1. Revisa los logs de la aplicación
2. Verifica que todas las variables de entorno estén correctas
3. Contacta al soporte de tu hosting para verificar que Node.js esté disponible
4. Asegúrate de usar las claves de PRODUCCIÓN (no test) en producción

