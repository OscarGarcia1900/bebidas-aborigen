# 🚀 Desplegar en Vercel - Guía Paso a Paso

Vercel es la forma MÁS FÁCIL de desplegar tu aplicación Next.js. Es gratis y está hecho específicamente para Next.js.

---

## ✅ Ventajas de Vercel

- ✅ **100% GRATIS** para proyectos pequeños
- ✅ Configuración automática de Next.js
- ✅ SSL/HTTPS incluido
- ✅ Despliegue automático desde Git
- ✅ Puedes usar tu dominio `bebidasaborigen.com`
- ✅ Muy fácil de usar

---

## 📋 Requisitos Previos

- [ ] Cuenta de GitHub (gratis) - https://github.com
- [ ] Cuenta de Vercel (gratis) - https://vercel.com
- [ ] Tu proyecto funcionando localmente

---

## 🚀 PASO 1: Preparar tu Proyecto

### 1.1: Verificar que funciona localmente

```bash
cd /Users/oscargarcia/Documents/app_bebidas_ancestrales
npm install
npm run build
```

Si funciona sin errores, continúa.

### 1.2: Crear archivo .env.local (para referencia)

Crea un archivo `.env.local` con tus variables (este NO se sube a Git):

```bash
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_xxxxxxxxxxxxx
NEXT_PUBLIC_WOMPI_PUBLIC_KEY=pub_prod_xxxxxxxxxxxxx
NEXT_PUBLIC_APP_URL=https://bebidasaborigen.com
NODE_ENV=production
```

**⚠️ IMPORTANTE**: Este archivo es solo para referencia. Las variables las configurarás en Vercel.

---

## 📤 PASO 2: Subir tu Proyecto a GitHub

### 2.1: Crear cuenta en GitHub (si no la tienes)

1. Ve a: https://github.com/signup
2. Crea una cuenta (es gratis)
3. Confirma tu email

### 2.2: Crear un repositorio nuevo

1. En GitHub, haz clic en el botón "+" (arriba derecha)
2. Selecciona "New repository"
3. Nombre: `bebidas-ancestrales` (o el que quieras)
4. Descripción: "Tienda de bebidas ancestrales"
5. Selecciona "Private" (privado) o "Public" (público)
6. **NO** marques "Initialize with README"
7. Haz clic en "Create repository"

### 2.3: Subir tu código a GitHub

**Opción A - Desde la Terminal (Recomendado):**

```bash
# En tu computadora, ve a la carpeta del proyecto
cd /Users/oscargarcia/Documents/app_bebidas_ancestrales

# Inicializar Git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Primer commit - Proyecto inicial"

# Conectar con GitHub (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/bebidas-ancestrales.git

# Subir el código
git branch -M main
git push -u origin main
```

Te pedirá usuario y contraseña de GitHub. Úsalos.

**Opción B - Desde GitHub Desktop (Más Fácil):**

1. Descarga GitHub Desktop: https://desktop.github.com/
2. Instálalo
3. Inicia sesión con tu cuenta de GitHub
4. File → Add Local Repository
5. Selecciona tu carpeta del proyecto
6. Haz clic en "Publish repository"
7. Selecciona "Private" y haz clic en "Publish"

### 2.4: Verificar que se subió

Ve a tu repositorio en GitHub. Deberías ver todos tus archivos ahí.

---

## 🎯 PASO 3: Crear Cuenta en Vercel

1. Ve a: https://vercel.com/signup
2. Haz clic en "Continue with GitHub"
3. Autoriza a Vercel a acceder a tus repositorios
4. Confirma tu email si te lo piden

---

## 🚀 PASO 4: Desplegar tu Proyecto

### 4.1: Importar proyecto

1. En Vercel, haz clic en "Add New Project"
2. Verás una lista de tus repositorios de GitHub
3. Busca `bebidas-ancestrales` (o el nombre que le pusiste)
4. Haz clic en "Import"

### 4.2: Configurar el proyecto

Vercel detectará automáticamente que es Next.js. Verás una pantalla de configuración:

**Framework Preset:**
- Debería decir "Next.js" automáticamente ✅

**Root Directory:**
- Déjalo vacío (si tu proyecto está en la raíz)
- O pon la carpeta si está en una subcarpeta

**Build Command:**
- Déjalo como está: `npm run build` ✅

**Output Directory:**
- Déjalo como está: `.next` ✅

**Install Command:**
- Déjalo como está: `npm install` ✅

### 4.3: Configurar Variables de Entorno

**⚠️ MUY IMPORTANTE**: Antes de hacer clic en "Deploy", configura las variables:

1. Haz clic en "Environment Variables"
2. Agrega cada variable UNA POR UNA:

   **Variable 1:**
   - Name: `STRIPE_SECRET_KEY`
   - Value: `sk_live_xxxxxxxxxxxxx` (tu clave secreta de Stripe)
   - Environment: Selecciona todas (Production, Preview, Development)

   **Variable 2:**
   - Name: `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`
   - Value: `pk_live_xxxxxxxxxxxxx` (tu clave pública de Stripe)
   - Environment: Selecciona todas

   **Variable 3:**
   - Name: `NEXT_PUBLIC_WOMPI_PUBLIC_KEY`
   - Value: `pub_prod_xxxxxxxxxxxxx` (tu clave de Wompi)
   - Environment: Selecciona todas

   **Variable 4:**
   - Name: `NEXT_PUBLIC_APP_URL`
   - Value: `https://bebidasaborigen.com` (o `https://tu-proyecto.vercel.app` temporalmente)
   - Environment: Selecciona todas

   **Variable 5:**
   - Name: `NODE_ENV`
   - Value: `production`
   - Environment: Solo Production

3. Haz clic en "Save" después de cada variable

### 4.4: Desplegar

1. Una vez configuradas las variables, haz clic en "Deploy"
2. Espera 2-3 minutos mientras Vercel:
   - Instala dependencias
   - Construye tu aplicación
   - Despliega

3. Cuando termine, verás un mensaje de éxito ✅

---

## 🌐 PASO 5: Ver tu Sitio

1. Vercel te dará una URL tipo: `bebidas-ancestrales.vercel.app`
2. Haz clic en esa URL
3. ¡Tu sitio debería estar funcionando! 🎉

---

## 🔗 PASO 6: Conectar tu Dominio Personalizado

Para usar `bebidasaborigen.com` en lugar de `bebidas-ancestrales.vercel.app`:

### 6.1: En Vercel

1. Ve a tu proyecto en Vercel
2. Haz clic en "Settings"
3. Ve a "Domains"
4. Haz clic en "Add Domain"
5. Escribe: `bebidasaborigen.com`
6. Haz clic en "Add"

### 6.2: Configurar DNS

Vercel te dará instrucciones específicas. Generalmente necesitas:

1. Ir a donde compraste tu dominio (ej: Namecheap, GoDaddy, etc.)
2. Ir a la sección de DNS
3. Agregar estos registros:

**Opción A - Usar Nameservers de Vercel (Recomendado):**
- Cambia los nameservers a los que te da Vercel
- Ejemplo: `ns1.vercel-dns.com` y `ns2.vercel-dns.com`

**Opción B - Agregar registros CNAME:**
- Tipo: `CNAME`
- Nombre: `@` o `www`
- Valor: `cname.vercel-dns.com`

### 6.3: Esperar

- Puede tardar desde minutos hasta 24 horas
- Generalmente tarda 1-2 horas

### 6.4: Verificar

Una vez configurado, visita `https://bebidasaborigen.com` y debería funcionar.

---

## 🔄 PASO 7: Actualizar tu Sitio

Cada vez que hagas cambios:

1. Haz los cambios en tu código
2. Sube los cambios a GitHub:
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   git push
   ```
3. Vercel detectará los cambios automáticamente
4. Desplegará una nueva versión automáticamente
5. En 2-3 minutos, tus cambios estarán en vivo

---

## 🐛 Solución de Problemas

### Error: "Build Failed"

1. Ve a tu proyecto en Vercel
2. Haz clic en "Deployments"
3. Haz clic en el deployment fallido
4. Revisa los logs para ver el error
5. Corrige el error y vuelve a desplegar

### Las variables de entorno no funcionan

1. Ve a Settings → Environment Variables
2. Verifica que estén todas configuradas
3. Verifica que el nombre sea EXACTO (mayúsculas/minúsculas importan)
4. Despliega de nuevo después de agregar variables

### El dominio no funciona

1. Espera más tiempo (puede tardar hasta 24 horas)
2. Verifica que los DNS estén configurados correctamente
3. Usa una herramienta como https://dnschecker.org para verificar

---

## 📊 Monitoreo y Estadísticas

En Vercel puedes ver:
- Visitas a tu sitio
- Ancho de banda usado
- Tiempo de respuesta
- Logs de errores

Todo está en el dashboard de Vercel.

---

## 💰 Límites del Plan Gratuito

El plan gratuito de Vercel incluye:
- ✅ 100GB de ancho de banda/mes
- ✅ Despliegues ilimitados
- ✅ SSL/HTTPS incluido
- ✅ Dominios personalizados ilimitados

Para la mayoría de proyectos pequeños, esto es más que suficiente.

---

## ✅ Checklist Final

- [ ] Proyecto funciona localmente
- [ ] Código subido a GitHub
- [ ] Cuenta de Vercel creada
- [ ] Proyecto importado en Vercel
- [ ] Variables de entorno configuradas
- [ ] Despliegue exitoso
- [ ] Sitio funciona en la URL de Vercel
- [ ] Dominio personalizado configurado (opcional)
- [ ] SSL funcionando

---

## 🎉 ¡Felicidades!

Si llegaste hasta aquí, tu sitio está funcionando en Vercel. Es gratis, rápido y fácil de mantener.

**Próximos pasos:**
- Haz cambios y ve cómo se actualizan automáticamente
- Configura tu dominio personalizado
- Monitorea las estadísticas

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:
1. Revisa los logs en Vercel
2. Verifica que las variables de entorno estén correctas
3. Asegúrate de que el build funciona localmente

¡Mucha suerte! 🚀

