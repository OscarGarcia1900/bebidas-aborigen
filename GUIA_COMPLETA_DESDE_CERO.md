# 🚀 Guía Completa de Despliegue - Desde Cero
## Para bebidasaborigen.com en cPanel

Esta guía te enseñará TODO desde el principio, paso a paso, como si nunca hubieras hecho esto antes.

---

## 📚 Primero: Entendamos la Diferencia

### Lo que hacías antes (HTML estático):
- Subías archivos HTML, CSS, imágenes
- Todo funcionaba inmediatamente
- No necesitabas instalar nada

### Lo que necesitas ahora (Next.js):
- Es una aplicación que necesita **Node.js** para funcionar
- Necesita "construirse" antes de funcionar
- Necesita un servidor corriendo constantemente
- Es como tener un motor que debe estar encendido

**¿Por qué?** Porque tu página tiene funciones especiales como:
- Procesar pagos con Stripe
- API routes (rutas especiales que procesan información)
- Funcionalidades dinámicas

---

## ✅ PASO 1: Verificar que tu Hosting Soporte Node.js

**ANTES de comprar o configurar nada**, necesitas saber si tu hosting puede ejecutar Node.js.

### Cómo verificar:

1. **Accede a tu cPanel**
   - Ve a la URL que te dio tu proveedor de hosting
   - Ejemplo: `https://tudominio.com:2083` o `https://cpanel.tudominio.com`
   - Ingresa tu usuario y contraseña

2. **Busca "Node.js Selector" o "Setup Node.js App"**
   - En la barra de búsqueda de cPanel, escribe: `node`
   - Deberías ver algo como:
     - "Node.js Selector" ✅
     - "Setup Node.js App" ✅
     - O algo similar relacionado con Node.js

3. **Si NO encuentras Node.js:**
   - ⚠️ **PROBLEMA**: Tu hosting no soporta aplicaciones Node.js
   - **SOLUCIÓN**: Necesitas cambiar a un hosting que sí lo tenga
   - Hostings recomendados que SÍ tienen Node.js:
     - Hostinger (plan Business o superior)
     - Namecheap (plan Stellar Plus o superior)
     - SiteGround (plan GrowBig o superior)
     - A2 Hosting
     - O cualquier hosting que mencione "Node.js" en sus características

### ¿Qué hacer si tu hosting NO tiene Node.js?

**Opción A**: Cambiar de hosting (recomendado)
- Busca un hosting que mencione "Node.js" o "Node.js Selector"
- Compra el plan
- Configura tu dominio `bebidasaborigen.com` allí

**Opción B**: Usar un servicio gratuito para la parte técnica
- Vercel (gratis para proyectos pequeños)
- Railway
- Render
- Pero esto es más complicado y requiere conocimientos técnicos

**Recomendación**: Si puedes, cambia a un hosting con Node.js. Es más fácil.

---

## ✅ PASO 2: Preparar tu Computadora (Local)

Antes de subir nada, necesitas preparar los archivos correctamente.

### 2.1: Abre la Terminal/Consola

**En Mac:**
- Presiona `Cmd + Espacio`
- Escribe "Terminal"
- Presiona Enter

**En Windows:**
- Presiona `Windows + R`
- Escribe `cmd` y presiona Enter
- O busca "Símbolo del sistema" en el menú inicio

**En Linux:**
- Presiona `Ctrl + Alt + T`

### 2.2: Ve a la carpeta de tu proyecto

En la terminal, escribe:

```bash
cd /Users/oscargarcia/Documents/app_bebidas_ancestrales
```

(Presiona Enter después de escribir cada comando)

### 2.3: Verifica que Node.js esté instalado

Escribe:

```bash
node --version
```

**Si ves un número** (ej: `v18.17.0`): ✅ Perfecto, continúa

**Si ves "command not found"**: 
- Necesitas instalar Node.js primero
- Ve a: https://nodejs.org/
- Descarga la versión LTS (Long Term Support)
- Instálala siguiendo las instrucciones
- Reinicia la terminal
- Vuelve a verificar con `node --version`

### 2.4: Instala las dependencias del proyecto

En la terminal, escribe:

```bash
npm install
```

Esto puede tardar 2-5 minutos. Espera a que termine.

**¿Qué hace esto?** Descarga todas las "piezas" que tu aplicación necesita para funcionar.

### 2.5: Crea el archivo de configuración (.env)

Necesitas crear un archivo llamado `.env` en la carpeta del proyecto.

**Opción A - Desde la terminal:**

```bash
# En Mac/Linux:
touch .env

# En Windows:
type nul > .env
```

Luego abre el archivo `.env` con un editor de texto (Notepad, TextEdit, VS Code, etc.) y pega esto:

```bash
# Variables de entorno para producción

# Stripe - Pagos con tarjeta
# IMPORTANTE: Reemplaza con tus claves REALES de Stripe
STRIPE_SECRET_KEY=sk_live_TU_CLAVE_SECRETA_AQUI
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_TU_CLAVE_PUBLICA_AQUI

# Wompi - Pagos PSE y otros métodos
# IMPORTANTE: Reemplaza con tu clave REAL de Wompi
NEXT_PUBLIC_WOMPI_PUBLIC_KEY=pub_prod_TU_CLAVE_AQUI

# URL de la aplicación (IMPORTANTE: usa tu dominio real)
NEXT_PUBLIC_APP_URL=https://bebidasaborigen.com

# Node Environment
NODE_ENV=production

# Puerto (cPanel lo asignará automáticamente, pero ponemos 3000 por defecto)
PORT=3000
```

**⚠️ IMPORTANTE**: 
- Reemplaza `TU_CLAVE_SECRETA_AQUI` con tus claves REALES de Stripe
- Reemplaza `TU_CLAVE_PUBLICA_AQUI` con tus claves REALES
- Si aún no tienes las claves de Stripe/Wompi, déjalas así por ahora pero **deberás configurarlas después**

### 2.6: Prueba que todo funciona localmente

```bash
npm run build
```

Esto construye tu aplicación. Debe terminar sin errores.

Si ves errores, escríbeme qué dice el error y te ayudo a solucionarlo.

---

## ✅ PASO 3: Preparar Archivos para Subir

Ahora necesitas preparar qué archivos vas a subir y cuáles NO.

### 3.1: Archivos que SÍ debes subir:

- ✅ `src/` (toda la carpeta)
- ✅ `public/` (toda la carpeta)
- ✅ `package.json`
- ✅ `package-lock.json`
- ✅ `next.config.ts`
- ✅ `tsconfig.json`
- ✅ `postcss.config.mjs`
- ✅ `eslint.config.mjs`
- ✅ `.htaccess.example` (si lo necesitas)
- ✅ Cualquier archivo `.md` (documentación)

### 3.2: Archivos que NO debes subir:

- ❌ `node_modules/` (carpeta muy pesada, se instala en el servidor)
- ❌ `.next/` (se genera en el servidor)
- ❌ `.env` (contiene información sensible, se configura en cPanel)
- ❌ `.git/` (opcional, solo si usas Git)

### 3.3: Crear un archivo ZIP

**Opción A - Desde Finder/Explorador:**

1. Abre la carpeta del proyecto
2. Selecciona todos los archivos EXCEPTO:
   - `node_modules`
   - `.next`
   - `.env`
   - `.git` (si existe)
3. Click derecho → "Comprimir" o "Crear ZIP"

**Opción B - Desde la terminal:**

```bash
# En Mac/Linux:
zip -r proyecto.zip . -x "node_modules/*" -x ".next/*" -x ".env" -x ".git/*"

# En Windows (PowerShell):
Compress-Archive -Path * -DestinationPath proyecto.zip -Exclude node_modules,.next,.env,.git
```

Esto creará un archivo `proyecto.zip` con todo lo necesario.

---

## ✅ PASO 4: Subir Archivos a cPanel

### 4.1: Acceder a File Manager

1. Entra a tu cPanel
2. Busca "File Manager" o "Administrador de Archivos"
3. Haz clic

### 4.2: Ir a la carpeta correcta

1. En el panel izquierdo, busca `public_html`
2. Haz clic en `public_html`
3. **IMPORTANTE**: Si tu dominio `bebidasaborigen.com` está en una subcarpeta, ve a esa carpeta
   - Ejemplo: `public_html/bebidasaborigen.com/`

### 4.3: Subir el archivo ZIP

1. En la parte superior, busca el botón "Upload" o "Subir"
2. Arrastra tu archivo `proyecto.zip` o selecciónalo
3. Espera a que termine de subir (puede tardar varios minutos)

### 4.4: Extraer el ZIP

1. Una vez subido, deberías ver `proyecto.zip` en la lista
2. Click derecho en `proyecto.zip`
3. Selecciona "Extract" o "Extraer"
4. Confirma la extracción
5. Espera a que termine

### 4.5: Verificar que los archivos están ahí

Deberías ver carpetas como:
- `src/`
- `public/`
- `package.json`

Si los ves, ¡perfecto! Continúa.

---

## ✅ PASO 5: Configurar Node.js en cPanel

Este es el paso MÁS IMPORTANTE.

### 5.1: Abrir Node.js Selector

1. En cPanel, busca "Node.js Selector" o "Setup Node.js App"
2. Haz clic

### 5.2: Crear una nueva aplicación

1. Busca el botón "Create Application" o "Crear Aplicación"
2. Haz clic

### 5.3: Llenar el formulario

Te pedirá varios campos. Aquí te explico cada uno:

**Node.js version:**
- Selecciona la versión más reciente de la lista
- Preferiblemente 18.x o 20.x
- Si solo hay una opción, selecciona esa

**Application mode:**
- Selecciona "Production" (Producción)

**Application root:**
- Aquí debes poner la ruta donde subiste tus archivos
- Si subiste a `public_html`, pon: `public_html`
- Si subiste a `public_html/bebidasaborigen.com`, pon: `public_html/bebidasaborigen.com`
- **IMPORTANTE**: Debe ser la carpeta donde está tu `package.json`

**Application URL:**
- Si tu dominio es la raíz: deja vacío o pon `/`
- Si está en subcarpeta: pon `/bebidasaborigen.com` (o como corresponda)

**Application startup file:**
- Pon: `server.js`
- (Next.js lo generará automáticamente)

**Application URL (otro campo que puede aparecer):**
- Si te pregunta por una URL específica, déjala vacía o pon `/`

### 5.4: Crear la aplicación

1. Revisa que todo esté correcto
2. Haz clic en "Create" o "Crear"
3. Espera unos segundos

**¿Qué deberías ver?**
- Un mensaje de éxito
- Información sobre tu aplicación
- Un número de puerto (ej: 3000, 3001, etc.) - **ANÓTALO, lo necesitarás**

---

## ✅ PASO 6: Configurar Variables de Entorno

Las variables de entorno son como "configuraciones secretas" que tu aplicación necesita.

### 6.1: Encontrar la sección de Variables de Entorno

En la misma página de Node.js Selector, busca tu aplicación creada y haz clic en:
- "Edit" (Editar)
- O "Environment Variables" (Variables de Entorno)
- O un ícono de engranaje ⚙️

### 6.2: Agregar cada variable

Necesitas agregar estas variables UNA POR UNA:

1. **NODE_ENV**
   - Nombre: `NODE_ENV`
   - Valor: `production`

2. **PORT**
   - Nombre: `PORT`
   - Valor: El número de puerto que te dio cPanel (ej: `3000`)

3. **STRIPE_SECRET_KEY**
   - Nombre: `STRIPE_SECRET_KEY`
   - Valor: Tu clave secreta de Stripe (empieza con `sk_live_...`)

4. **NEXT_PUBLIC_STRIPE_PUBLIC_KEY**
   - Nombre: `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`
   - Valor: Tu clave pública de Stripe (empieza con `pk_live_...`)

5. **NEXT_PUBLIC_WOMPI_PUBLIC_KEY**
   - Nombre: `NEXT_PUBLIC_WOMPI_PUBLIC_KEY`
   - Valor: Tu clave pública de Wompi

6. **NEXT_PUBLIC_APP_URL**
   - Nombre: `NEXT_PUBLIC_APP_URL`
   - Valor: `https://bebidasaborigen.com`

### 6.3: Guardar

Después de agregar cada variable, haz clic en "Save" o "Guardar"

**⚠️ IMPORTANTE**: 
- Si aún no tienes las claves de Stripe/Wompi, puedes poner valores temporales pero **deberás cambiarlos después**
- Las claves deben ser de PRODUCCIÓN (empiezan con `sk_live_` y `pk_live_`), NO de prueba

---

## ✅ PASO 7: Instalar Dependencias en el Servidor

Ahora necesitas instalar las "piezas" que tu aplicación necesita, pero esta vez EN EL SERVIDOR.

### 7.1: Abrir Terminal en cPanel

1. En cPanel, busca "Terminal" o "SSH Access"
2. Haz clic
3. Si te pide permisos, acepta

**Si NO tienes Terminal/SSH:**
- Algunos hostings no lo tienen en planes básicos
- En ese caso, Node.js Selector debería tener un botón "Run NPM Install"
- Úsalo y salta al Paso 8

### 7.2: Navegar a tu carpeta

En la terminal, escribe:

```bash
cd public_html
```

(Si tu proyecto está en otra carpeta, cambia `public_html` por la ruta correcta)

### 7.3: Verificar que estás en la carpeta correcta

```bash
ls
```

Deberías ver `package.json` en la lista. Si lo ves, estás en el lugar correcto.

### 7.4: Instalar dependencias

```bash
npm install --production
```

Esto puede tardar 5-10 minutos. Espera pacientemente.

**¿Qué hace esto?** Instala todas las "piezas" que tu aplicación necesita, pero solo las de producción (no las de desarrollo).

---

## ✅ PASO 8: Construir la Aplicación

Ahora necesitas "construir" tu aplicación para que esté lista para producción.

### 8.1: En la Terminal (si tienes acceso)

```bash
npm run build
```

Esto puede tardar 2-5 minutos. Espera a que termine.

**Si ves errores**, escríbeme qué dice el error.

### 8.2: Si NO tienes Terminal

Algunos Node.js Selectors tienen un botón "Build Application" o similar. Úsalo.

---

## ✅ PASO 9: Iniciar la Aplicación

### 9.1: En Node.js Selector

1. Busca tu aplicación en la lista
2. Deberías ver un botón que dice:
   - "Start" (Iniciar)
   - "Restart" (Reiniciar)
   - O un botón de play ▶️

3. Haz clic en ese botón

### 9.2: Verificar que está corriendo

Deberías ver que el estado cambia a:
- "Running" (Corriendo)
- "Active" (Activo)
- O un indicador verde 🟢

**Si ves errores**, haz clic en "View Logs" o "Ver Logs" para ver qué pasó.

---

## ✅ PASO 10: Configurar SSL/HTTPS

Para que tu sitio sea seguro y tenga el candado 🔒.

### 10.1: Ir a SSL/TLS Status

1. En cPanel, busca "SSL/TLS Status" o "Estado SSL/TLS"
2. Haz clic

### 10.2: Activar AutoSSL

1. Deberías ver una lista de tus dominios
2. Busca `bebidasaborigen.com`
3. Selecciónalo
4. Haz clic en "Run AutoSSL" o "Ejecutar AutoSSL"
5. Espera 5-10 minutos

### 10.3: Verificar

Después de unos minutos:
1. Ve a `https://bebidasaborigen.com`
2. Deberías ver un candado 🔒 en la barra de direcciones
3. Si lo ves, ¡perfecto!

---

## ✅ PASO 11: Probar tu Sitio

### 11.1: Página principal

1. Abre tu navegador
2. Ve a `https://bebidasaborigen.com`
3. Deberías ver tu página funcionando

**Si NO carga:**
- Espera 2-3 minutos (a veces tarda en activarse)
- Verifica que la aplicación esté "Running" en Node.js Selector
- Revisa los logs en Node.js Selector

### 11.2: Probar funcionalidades

1. **Navegación**: Haz clic en los enlaces del menú
2. **Carrito**: Agrega un producto al carrito
3. **Pago**: Intenta hacer un pago de prueba (con tarjeta de prueba de Stripe)

### 11.3: Tarjeta de prueba de Stripe

Para probar pagos sin gastar dinero real:

- **Número**: `4242 4242 4242 4242`
- **Fecha**: Cualquier fecha futura (ej: 12/25)
- **CVC**: Cualquier 3 dígitos (ej: 123)
- **Nombre**: Cualquier nombre

---

## 🐛 Solución de Problemas Comunes

### Problema 1: "Cannot find module"

**Solución:**
```bash
# En la terminal del servidor:
cd public_html  # o tu carpeta
npm install
```

### Problema 2: "Port already in use"

**Solución:**
- En Node.js Selector, cambia el puerto en las variables de entorno
- O reinicia la aplicación

### Problema 3: La página carga pero está en blanco

**Solución:**
- Revisa los logs en Node.js Selector
- Verifica que `npm run build` se ejecutó correctamente
- Asegúrate de que todas las variables de entorno estén configuradas

### Problema 4: Error 502 Bad Gateway

**Solución:**
- La aplicación Node.js no está corriendo
- Ve a Node.js Selector y haz clic en "Start" o "Restart"
- Revisa los logs para ver el error específico

### Problema 5: Las imágenes no cargan

**Solución:**
- Verifica que la carpeta `public/` se subió correctamente
- Verifica los permisos de los archivos (deben ser 644 para archivos, 755 para carpetas)

---

## 📞 ¿Necesitas Ayuda?

Si en cualquier paso te quedas atascado:

1. **Toma una captura de pantalla** del error
2. **Anota exactamente** qué estabas haciendo cuando pasó
3. **Revisa los logs** en Node.js Selector → "View Logs"
4. **Escríbeme** con toda esa información

---

## ✅ Checklist Final

Antes de considerar que todo está listo:

- [ ] Hosting tiene Node.js Selector ✅
- [ ] Archivos subidos a cPanel ✅
- [ ] Node.js aplicación creada ✅
- [ ] Variables de entorno configuradas ✅
- [ ] Dependencias instaladas (`npm install`) ✅
- [ ] Aplicación construida (`npm run build`) ✅
- [ ] Aplicación iniciada y corriendo ✅
- [ ] SSL/HTTPS configurado ✅
- [ ] Sitio carga en `https://bebidasaborigen.com` ✅
- [ ] Carrito funciona ✅
- [ ] Pagos funcionan (probar con tarjeta de prueba) ✅

---

## 🎉 ¡Felicidades!

Si llegaste hasta aquí y todo funciona, ¡has desplegado exitosamente tu primera aplicación Next.js!

**Próximos pasos:**
- Monitorea los logs periódicamente
- Haz backups regularmente
- Mantén las dependencias actualizadas
- Usa claves de PRODUCCIÓN (no test) cuando estés listo para recibir pagos reales

---

## 📝 Notas Importantes

1. **Nunca subas el archivo `.env`** a cPanel. Contiene información sensible.
2. **Usa claves de PRODUCCIÓN** solo cuando estés listo para recibir pagos reales.
3. **Haz backups** antes de hacer cambios importantes.
4. **Los logs son tu amigo**: Si algo falla, siempre revisa los logs primero.

---

¡Mucha suerte con tu despliegue! 🚀

