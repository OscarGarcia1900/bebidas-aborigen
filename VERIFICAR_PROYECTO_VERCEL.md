# 🔍 Verificar y Crear Proyecto en Vercel

## Situación Actual

No ves el proyecto `bebidas-ancestrales` en tu dashboard de Vercel. Vamos a verificar y crearlo.

---

## ✅ PASO 1: Verificar si el Proyecto Existe

### Opción A: Buscar en Todos los Proyectos

1. En el sidebar izquierdo de Vercel, busca **"All Projects"** (Todos los Proyectos)
2. Haz clic en el dropdown
3. Busca si aparece `bebidas-ancestrales` en la lista

### Opción B: Buscar con la Barra de Búsqueda

1. En la parte superior, hay una barra de búsqueda que dice "Q Search Projects..."
2. Escribe: `bebidas`
3. Ve si aparece algún resultado

### Opción C: Verificar en Deployments

1. En el sidebar izquierdo, haz clic en **"Deployments"**
2. Ve si hay algún deployment relacionado con `bebidas-ancestrales`

---

## ✅ PASO 2: Si NO Encuentras el Proyecto - Crearlo Ahora

Si no encuentras el proyecto, vamos a crearlo:

### 2.1: Ir a Import Project

1. En la pantalla principal de Vercel (Overview)
2. Busca la sección **"Deploy your first project"** o **"Import Project"**
3. Haz clic en el botón **"Import"** que está al lado de "Import Project"

**O también puedes:**

1. Haz clic en el botón **"Add New..."** (arriba a la derecha)
2. Selecciona **"Project"** o **"Import Project"**

### 2.2: Seleccionar tu Repositorio

1. Verás una lista de tus repositorios de GitHub
2. Busca: **`bebidas-ancestrales`** o **`OscarGarcia1900/bebidas-ancestrales`**
3. Si no lo ves, verifica:
   - ¿Estás conectado con la cuenta correcta de GitHub?
   - ¿El repositorio existe en GitHub?
   - Haz clic en "Configure GitHub App" si es necesario

### 2.3: Importar el Repositorio

1. Una vez que encuentres `bebidas-ancestrales`, haz clic en **"Import"**
2. Verás la pantalla de configuración del proyecto

---

## ✅ PASO 3: Configurar el Proyecto

Una vez que hagas clic en "Import", verás una pantalla de configuración:

### Configuración Automática (Vercel lo detecta):

- **Framework Preset:** Debería decir "Next.js" automáticamente ✅
- **Root Directory:** Déjalo vacío (si tu proyecto está en la raíz)
- **Build Command:** `npm run build` (ya viene configurado)
- **Output Directory:** `.next` (ya viene configurado)
- **Install Command:** `npm install` (ya viene configurado)

**⚠️ NO hagas clic en "Deploy" todavía.** Primero configura las variables de entorno.

---

## ✅ PASO 4: Configurar Variables de Entorno

### 4.1: Ir a Environment Variables

1. En la misma pantalla de configuración, busca la sección **"Environment Variables"**
2. Haz clic en **"Environment Variables"** o busca el botón para agregarlas

### 4.2: Agregar Variables

Agrega estas variables **UNA POR UNA**:

**Variable 1:**
- **Name:** `STRIPE_SECRET_KEY`
- **Value:** `sk_live_xxxxxxxxxxxxx` (tu clave secreta de Stripe)
- **Environment:** Marca todas las casillas (Production, Preview, Development)

**Variable 2:**
- **Name:** `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`
- **Value:** `pk_live_xxxxxxxxxxxxx` (tu clave pública de Stripe)
- **Environment:** Marca todas

**Variable 3:**
- **Name:** `NEXT_PUBLIC_WOMPI_PUBLIC_KEY`
- **Value:** `pub_prod_xxxxxxxxxxxxx` (tu clave de Wompi)
- **Environment:** Marca todas

**Variable 4:**
- **Name:** `NEXT_PUBLIC_APP_URL`
- **Value:** `https://bebidasaborigen.com`
- **Environment:** Marca todas

**Variable 5:**
- **Name:** `NODE_ENV`
- **Value:** `production`
- **Environment:** Solo Production ✅

### 4.3: Guardar

Después de agregar cada variable, haz clic en **"Add"** o **"Save"**

---

## ✅ PASO 5: Desplegar

1. Una vez configuradas todas las variables
2. Haz clic en el botón **"Deploy"** (abajo a la derecha)
3. Espera 2-3 minutos mientras Vercel construye y despliega
4. Cuando termine, verás una URL tipo `bebidas-ancestrales-xxxxx.vercel.app`

---

## 🐛 Si No Ves el Repositorio en la Lista

### Problema: El repositorio no aparece

**Solución:**

1. Verifica que el repositorio existe en GitHub:
   - Ve a: https://github.com/OscarGarcia1900/bebidas-ancestrales
   - ¿Existe? ¿Puedes verlo?

2. Verifica la conexión de Vercel con GitHub:
   - En Vercel, ve a **Settings** → **Integrations**
   - Verifica que GitHub esté conectado
   - Si no está, conéctalo

3. Verifica permisos:
   - El repositorio debe ser público O
   - Debes darle permisos a Vercel para acceder a repositorios privados

---

## 📝 Resumen Rápido

1. **Buscar proyecto:** ¿Existe en Vercel?
2. **Si NO existe:** Import → Buscar `bebidas-ancestrales` → Import
3. **Configurar:** Variables de entorno (5 variables)
4. **Desplegar:** Click en Deploy
5. **Esperar:** 2-3 minutos
6. **¡Listo!** Tu sitio estará funcionando

---

¿Qué ves cuando haces clic en "Import Project"? ¿Aparece tu repositorio `bebidas-ancestrales` en la lista?

