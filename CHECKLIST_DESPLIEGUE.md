# ✅ Checklist de Despliegue - bebidasaborigen.com

Usa esta lista para asegurarte de que todo esté configurado correctamente antes de lanzar tu sitio.

## 📋 Antes de Empezar

- [ ] Tienes acceso a cPanel de tu hosting
- [ ] Tu hosting soporta Node.js (verifica en cPanel → Node.js Selector)
- [ ] Dominio `bebidasaborigen.com` está configurado y apunta al servidor
- [ ] Tienes las claves de Stripe (producción, no test)
- [ ] Tienes las claves de Wompi (producción, no test)

## 🔧 Preparación Local

- [ ] Proyecto funciona correctamente en desarrollo (`npm run dev`)
- [ ] Todas las dependencias están instaladas (`npm install`)
- [ ] El build funciona sin errores (`npm run build`)
- [ ] Archivo `.env` creado con todas las variables necesarias
- [ ] `NEXT_PUBLIC_APP_URL=https://bebidasaborigen.com` en `.env`

## 📤 Subida de Archivos

- [ ] Archivos comprimidos (ZIP) excluyendo:
  - [ ] `node_modules/` (NO subir)
  - [ ] `.next/` (NO subir)
  - [ ] `.git/` (opcional)
  - [ ] `.env` (NO subir, configurar en servidor)
- [ ] Archivos subidos a `public_html` en cPanel
- [ ] Archivos extraídos correctamente

## ⚙️ Configuración en cPanel

### Node.js Selector
- [ ] Aplicación Node.js creada
- [ ] Versión Node.js 18.x o superior seleccionada
- [ ] Modo: Production
- [ ] Ruta de aplicación configurada correctamente

### Variables de Entorno
- [ ] `NODE_ENV=production`
- [ ] `PORT=3000` (o el que asigne cPanel)
- [ ] `STRIPE_SECRET_KEY=sk_live_...` (clave de PRODUCCIÓN)
- [ ] `NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...` (clave de PRODUCCIÓN)
- [ ] `NEXT_PUBLIC_WOMPI_PUBLIC_KEY=pub_prod_...` (clave de PRODUCCIÓN)
- [ ] `NEXT_PUBLIC_APP_URL=https://bebidasaborigen.com`

### Instalación y Build
- [ ] Dependencias instaladas (`npm install` ejecutado)
- [ ] Aplicación construida (`npm run build` ejecutado)
- [ ] Sin errores en la construcción

### Inicio de Aplicación
- [ ] Aplicación iniciada/restart desde Node.js Selector
- [ ] Estado: Running/Active
- [ ] Sin errores en los logs

## 🔒 Seguridad y SSL

- [ ] SSL/HTTPS configurado (AutoSSL activado)
- [ ] Certificado SSL válido para `bebidasaborigen.com`
- [ ] Sitio accesible vía `https://bebidasaborigen.com`
- [ ] Redirección HTTP → HTTPS funcionando

## 🧪 Pruebas

### Funcionalidad Básica
- [ ] Página principal carga correctamente
- [ ] Navegación funciona (Header, Footer)
- [ ] Todas las páginas cargan:
  - [ ] `/` (Home)
  - [ ] `/store` (Tienda)
  - [ ] `/about` (Sobre nosotros)
  - [ ] `/stories` (Relatos)
  - [ ] `/cart` (Carrito)
  - [ ] `/contact` (Contacto)

### Carrito y Pagos
- [ ] Agregar productos al carrito funciona
- [ ] Carrito muestra productos correctamente
- [ ] Total se calcula correctamente
- [ ] Botón "Ir a pagar" funciona
- [ ] Stripe Checkout se abre correctamente
- [ ] Proceso de pago funciona (probar con tarjeta de prueba primero)

### Imágenes y Assets
- [ ] Todas las imágenes cargan correctamente
- [ ] CSS/Tailwind funciona correctamente
- [ ] Fuentes cargan correctamente

### Responsive
- [ ] Sitio funciona en móvil
- [ ] Sitio funciona en tablet
- [ ] Sitio funciona en desktop

## 📊 Post-Despliegue

- [ ] Google Analytics configurado (si aplica)
- [ ] Google Search Console configurado
- [ ] `robots.txt` actualizado con dominio correcto
- [ ] `sitemap.xml` actualizado con dominio correcto
- [ ] Pruebas de velocidad realizadas
- [ ] Backup inicial creado

## 🐛 Si Algo Sale Mal

- [ ] Logs revisados (Node.js Selector → View Logs)
- [ ] Variables de entorno verificadas
- [ ] Puerto correcto verificado
- [ ] Contacto con soporte del hosting (si es necesario)

## 📝 Notas

- **Fecha de despliegue**: ___________
- **Versión desplegada**: ___________
- **Hosting**: ___________
- **Problemas encontrados**: ___________
- **Soluciones aplicadas**: ___________

---

## 🎉 ¡Listo para Producción!

Una vez completado este checklist, tu sitio debería estar funcionando correctamente en `https://bebidasaborigen.com`

**Recuerda:**
- Usar claves de PRODUCCIÓN (no test) en producción
- Hacer backups regularmente
- Monitorear los logs periódicamente
- Mantener dependencias actualizadas

