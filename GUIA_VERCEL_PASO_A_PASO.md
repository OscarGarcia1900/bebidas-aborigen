# 🚀 Guía Paso a Paso: Desplegar en Vercel

Esta guía te llevará paso a paso desde cero hasta tener tu sitio funcionando en Vercel.

---

## ✅ Lo que Ya Tienes

- ✅ Cuenta de GitHub
- ✅ Código en GitHub: `OscarGarcia1900/bebidas-ancestrales`
- ✅ Proyecto funcionando localmente

---

## 🎯 PASO 1: Crear Cuenta en Vercel

### 1.1: Ir a Vercel

1. Abre tu navegador
2. Ve a: **https://vercel.com/signup**
3. Haz clic en **"Continue with GitHub"** (o "Continuar con GitHub")

### 1.2: Autorizar Vercel

1. GitHub te pedirá autorizar a Vercel
2. Haz clic en **"Authorize Vercel"** (o "Autorizar Vercel")
3. Puede pedirte tu contraseña de GitHub

### 1.3: Completar Registro

1. Vercel puede pedirte confirmar tu email
2. Revisa tu email y confirma si es necesario
3. Una vez dentro, verás el dashboard de Vercel

**✅ Listo cuando veas:** El dashboard de Vercel con opciones para crear proyectos

---

## 🎯 PASO 2: Conectar GitHub y Vercel

### 2.1: Importar Proyecto

1. En Vercel, haz clic en el botón **"Add New Project"** (o "Agregar Nuevo Proyecto")
2. Verás una lista de tus repositorios de GitHub
3. Busca: **`bebidas-ancestrales`** (o `OscarGarcia1900/bebidas-ancestrales`)
4. Haz clic en **"Import"** (o "Importar") al lado de tu repositorio

### 2.2: Configurar el Proyecto

Vercel detectará automáticamente que es Next.js. Verás una pantalla de configuración:

**Framework Preset:**
- Debería decir **"Next.js"** automáticamente ✅
- Si no, selecciónalo manualmente

**Root Directory:**
- Déjalo **vacío** (si tu proyecto está en la raíz del repositorio)
- O pon la carpeta si está en una subcarpeta

**Build Command:**
- Déjalo como está: `npm run build` ✅

**Output Directory:**
- Déjalo como está: `.next` ✅

**Install Command:**
- Déjalo como está: `npm install` ✅

**⚠️ IMPORTANTE:** NO hagas clic en "Deploy" todavía. Primero necesitas configurar las variables de entorno.

---

## 🎯 PASO 3: Configurar Variables de Entorno

**⚠️ MUY IMPORTANTE:** Antes de hacer clic en "Deploy", configura las variables.

### 3.1: Ir a Variables de Entorno

1. En la misma pantalla de configuración, busca la sección **"Environment Variables"**
2. Haz clic en **"Environment Variables"** o busca el botón para agregarlas

### 3.2: Agregar Cada Variable

Agrega estas variables **UNA POR UNA**:

**Variable 1:**
- **Name (Nombre):** `STRIPE_SECRET_KEY`
- **Value (Valor):** `sk_live_xxxxxxxxxxxxx` (tu clave secreta de Stripe de PRODUCCIÓN)
- **Environment:** Selecciona todas las casillas:
  - ✅ Production
  - ✅ Preview  
  - ✅ Development

**Variable 2:**
- **Name:** `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`
- **Value:** `pk_live_xxxxxxxxxxxxx` (tu clave pública de Stripe de PRODUCCIÓN)
- **Environment:** Selecciona todas (Production, Preview, Development)

**Variable 3:**
- **Name:** `NEXT_PUBLIC_WOMPI_PUBLIC_KEY`
- **Value:** `pub_prod_xxxxxxxxxxxxx` (tu clave de Wompi de PRODUCCIÓN)
- **Environment:** Selecciona todas

**Variable 4:**
- **Name:** `NEXT_PUBLIC_APP_URL`
- **Value:** `https://bebidasaborigen.com`
- **Environment:** Selecciona todas

**Variable 5:**
- **Name:** `NODE_ENV`
- **Value:** `production`
- **Environment:** Solo Production ✅

### 3.3: Guardar Variables

1. Después de agregar cada variable, haz clic en **"Save"** o **"Add"**
2. Verifica que todas las variables estén en la lista
3. **⚠️ IMPORTANTE:** Si aún no tienes las claves de PRODUCCIÓN, puedes usar claves de TEST temporalmente, pero deberás cambiarlas después

---

## 🎯 PASO 4: Desplegar

### 4.1: Iniciar Despliegue

1. Una vez configuradas todas las variables de entorno
2. Haz clic en el botón **"Deploy"** (o "Desplegar")
3. Espera 2-3 minutos mientras Vercel:
   - Instala las dependencias
   - Construye tu aplicación
   - Despliega

### 4.2: Ver el Progreso

Verás una pantalla con el progreso:
- "Installing dependencies..." (Instalando dependencias)
- "Building..." (Construyendo)
- "Deploying..." (Desplegando)

### 4.3: Despliegue Exitoso

Cuando termine, verás:
- ✅ **"Deployment successful"** o **"Despliegue exitoso"**
- Una URL tipo: `bebidas-ancestrales-xxxxx.vercel.app`
- Haz clic en esa URL para ver tu sitio

**🎉 ¡Tu sitio está funcionando!**

---

## 🎯 PASO 5: Ver tu Sitio

1. Haz clic en la URL que te dio Vercel (ej: `bebidas-ancestrales.vercel.app`)
2. Deberías ver tu página funcionando
3. Prueba:
   - Navegar por las páginas
   - Agregar productos al carrito
   - Probar el checkout (con tarjeta de prueba de Stripe)

---

## 🎯 PASO 6: Conectar tu Dominio Personalizado

Para usar `bebidasaborigen.com` en lugar de la URL de Vercel:

### 6.1: Agregar Dominio en Vercel

1. En Vercel, ve a tu proyecto
2. Haz clic en **"Settings"** (Configuración)
3. Ve a la pestaña **"Domains"** (Dominios)
4. Haz clic en **"Add Domain"** (Agregar Dominio)
5. Escribe: `bebidasaborigen.com`
6. Haz clic en **"Add"**

### 6.2: Configurar DNS

Vercel te dará instrucciones específicas. Generalmente necesitas:

**Opción A - Usar Nameservers de Vercel (Recomendado):**
1. Ve a donde compraste tu dominio (ej: Namecheap, GoDaddy, etc.)
2. Ve a la configuración de DNS
3. Cambia los **nameservers** a los que te da Vercel
4. Ejemplo: `ns1.vercel-dns.com` y `ns2.vercel-dns.com`

**Opción B - Agregar Registro CNAME:**
1. En tu proveedor de dominio, agrega un registro CNAME:
   - **Tipo:** CNAME
   - **Nombre:** `@` o `www`
   - **Valor:** `cname.vercel-dns.com`

### 6.3: Esperar Propagación DNS

- Puede tardar desde minutos hasta 24 horas
- Generalmente tarda 1-2 horas
- Puedes verificar el estado en Vercel Dashboard

### 6.4: Verificar

Una vez configurado, visita `https://bebidasaborigen.com` y debería funcionar.

---

## 🔄 Actualizar tu Sitio (Cuando Hagas Cambios)

Cada vez que hagas cambios:

1. Haz los cambios en tu código local
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
2. Haz clic en **"Deployments"** (Despliegues)
3. Haz clic en el deployment fallido
4. Revisa los **logs** para ver el error
5. Corrige el error y vuelve a desplegar

### Las Variables de Entorno No Funcionan

1. Ve a Settings → Environment Variables
2. Verifica que estén todas configuradas
3. Verifica que el nombre sea EXACTO (mayúsculas/minúsculas importan)
4. Despliega de nuevo después de agregar variables

### El Dominio No Funciona

1. Espera más tiempo (puede tardar hasta 24 horas)
2. Verifica que los DNS estén configurados correctamente
3. Usa una herramienta como https://dnschecker.org para verificar

---

## ✅ Checklist Final

- [ ] Cuenta de Vercel creada
- [ ] Repositorio de GitHub conectado
- [ ] Proyecto importado en Vercel
- [ ] Variables de entorno configuradas:
  - [ ] STRIPE_SECRET_KEY
  - [ ] NEXT_PUBLIC_STRIPE_PUBLIC_KEY
  - [ ] NEXT_PUBLIC_WOMPI_PUBLIC_KEY
  - [ ] NEXT_PUBLIC_APP_URL
  - [ ] NODE_ENV
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
- Monitorea las estadísticas en Vercel

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas en cualquier paso:
1. Revisa los logs en Vercel
2. Verifica que las variables de entorno estén correctas
3. Asegúrate de que el build funciona localmente (`npm run build`)

¡Mucha suerte! 🚀

