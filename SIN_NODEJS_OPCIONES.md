# ⚠️ Mi Hosting NO Tiene Node.js - ¿Qué Hago?

Si tu cPanel tiene Softaculous pero NO tiene Node.js Selector, tienes varias opciones. Te explico cada una.

---

## 🔍 Primero: Verifica si Tienes Acceso SSH

Antes de decidir qué hacer, verifica si tienes acceso SSH:

1. En cPanel, busca "Terminal" o "SSH Access"
2. Si lo encuentras y puedes acceder → **Opción 1** (Instalar Node.js manualmente)
3. Si NO lo encuentras o no tienes acceso → **Opción 2 o 3** (Servicios externos o cambiar hosting)

---

## ✅ OPCIÓN 1: Instalar Node.js Manualmente (Si Tienes SSH)

Si tu hosting te da acceso SSH, puedes instalar Node.js tú mismo.

### Ventajas:
- ✅ Todo queda en tu hosting
- ✅ No necesitas servicios externos
- ✅ Control total

### Desventajas:
- ⚠️ Requiere conocimientos técnicos
- ⚠️ Puede ser complicado si nunca lo has hecho

### Pasos:

#### 1. Conectarte por SSH

**En Mac/Linux:**
```bash
ssh usuario@bebidasaborigen.com
```

**En Windows:**
- Usa PuTTY o Windows Terminal
- Conéctate a: `bebidasaborigen.com`
- Puerto: `22`
- Usuario y contraseña: Los de tu cPanel

#### 2. Instalar Node.js usando NVM

```bash
# Instalar NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Recargar la configuración
source ~/.bashrc

# Instalar Node.js 18 (versión LTS)
nvm install 18
nvm use 18

# Verificar que funciona
node --version
npm --version
```

#### 3. Continuar con el despliegue normal

Una vez instalado Node.js, sigue la guía normal:
- Sube tus archivos
- Instala dependencias: `npm install --production`
- Construye: `npm run build`
- Inicia con PM2: `pm2 start npm --name "bebidas-ancestrales" -- start`

**⚠️ IMPORTANTE**: Algunos hostings bloquean la instalación de Node.js manualmente. Si te da error, prueba las otras opciones.

---

## ✅ OPCIÓN 2: Usar Vercel (GRATIS) - Recomendado para Principiantes

Vercel es un servicio GRATUITO creado por los mismos que hicieron Next.js. Es perfecto para tu caso.

### Ventajas:
- ✅ **100% GRATIS** para proyectos pequeños
- ✅ Muy fácil de usar
- ✅ Configuración automática
- ✅ SSL incluido
- ✅ Despliegue automático desde Git

### Desventajas:
- ⚠️ Tu sitio estará en `bebidasaborigen.vercel.app` (pero puedes usar tu dominio)
- ⚠️ Límites en el plan gratuito (pero suficientes para empezar)

### Pasos para Desplegar en Vercel:

#### 1. Crear cuenta en Vercel

1. Ve a: https://vercel.com/signup
2. Crea cuenta con GitHub (recomendado) o email
3. Confirma tu email

#### 2. Conectar tu proyecto

**Opción A - Desde GitHub (Recomendado):**

1. Sube tu proyecto a GitHub:
   ```bash
   # En tu computadora
   cd /Users/oscargarcia/Documents/app_bebidas_ancestrales
   git init
   git add .
   git commit -m "Primer commit"
   # Crea un repositorio en GitHub y sigue las instrucciones
   ```

2. En Vercel:
   - Haz clic en "Add New Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará automáticamente que es Next.js

**Opción B - Subir directamente:**

1. En Vercel, haz clic en "Add New Project"
2. Selecciona "Upload" o "Deploy"
3. Arrastra la carpeta de tu proyecto (sin `node_modules` ni `.next`)

#### 3. Configurar variables de entorno

En Vercel, antes de desplegar:

1. Ve a "Environment Variables"
2. Agrega:
   - `STRIPE_SECRET_KEY` = `sk_live_...`
   - `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` = `pk_live_...`
   - `NEXT_PUBLIC_WOMPI_PUBLIC_KEY` = `pub_prod_...`
   - `NEXT_PUBLIC_APP_URL` = `https://bebidasaborigen.com`

#### 4. Desplegar

1. Haz clic en "Deploy"
2. Espera 2-3 minutos
3. ¡Listo! Tu sitio estará en `tu-proyecto.vercel.app`

#### 5. Conectar tu dominio

1. En Vercel, ve a tu proyecto → Settings → Domains
2. Agrega `bebidasaborigen.com`
3. Sigue las instrucciones para configurar DNS
4. En tu proveedor de dominio, cambia los DNS a los que te da Vercel

**📚 Guía completa de Vercel**: Ver archivo `DEPLOY_VERCEL.md` (lo crearemos si necesitas)

---

## ✅ OPCIÓN 3: Usar Railway (Alternativa a Vercel)

Railway es otro servicio similar a Vercel, también tiene plan gratuito.

### Pasos:

1. Ve a: https://railway.app/
2. Crea cuenta con GitHub
3. Crea nuevo proyecto
4. Conecta tu repositorio de GitHub
5. Railway detectará Next.js automáticamente
6. Configura variables de entorno
7. Despliega

Railway te da un dominio gratis tipo `tu-proyecto.railway.app`

---

## ✅ OPCIÓN 4: Cambiar de Hosting (Más Costoso pero Más Simple)

Si prefieres tener todo en un solo lugar, puedes cambiar a un hosting que SÍ tenga Node.js.

### Hostings Recomendados con Node.js:

1. **Hostinger** (desde $2.99/mes)
   - Plan Business o superior
   - Tiene Node.js Selector
   - Muy fácil de usar

2. **Namecheap** (desde $1.98/mes)
   - Plan Stellar Plus o superior
   - Tiene Node.js Selector

3. **SiteGround** (desde $2.99/mes)
   - Plan GrowBig o superior
   - Tiene Node.js

4. **A2 Hosting** (desde $2.99/mes)
   - Todos los planes tienen Node.js

### Proceso:

1. Compra el nuevo hosting
2. Configura tu dominio `bebidasaborigen.com` allí
3. Sigue la guía normal de despliegue en cPanel con Node.js

---

## ✅ OPCIÓN 5: Híbrida - Frontend en tu Hosting + API en Vercel

Si quieres mantener tu hosting actual pero mover solo las partes que necesitan Node.js:

### Cómo funciona:

1. **Frontend (páginas HTML/CSS/JS)**: Se queda en tu hosting actual
2. **API Routes (pagos)**: Se mueven a Vercel

### Pasos:

1. Despliega la API en Vercel (solo la carpeta `src/app/api`)
2. Modifica tu código para que las llamadas a la API apunten a Vercel
3. El resto de la página queda en tu hosting

**⚠️ COMPLICADO**: Esta opción requiere modificar código. Solo si tienes experiencia.

---

## 🎯 ¿Cuál Opción Elegir?

### Si eres principiante:
👉 **OPCIÓN 2: Vercel** - Es la más fácil y gratis

### Si quieres aprender:
👉 **OPCIÓN 1: Instalar Node.js manualmente** - Si tienes SSH

### Si prefieres pagar un poco más:
👉 **OPCIÓN 4: Cambiar de hosting** - Todo en un solo lugar

### Si quieres algo intermedio:
👉 **OPCIÓN 3: Railway** - Similar a Vercel

---

## 📋 Comparación Rápida

| Opción | Costo | Dificultad | Tiempo |
|--------|-------|------------|--------|
| Instalar Node.js manualmente | Gratis | ⭐⭐⭐⭐ Difícil | 2-3 horas |
| Vercel | Gratis | ⭐ Fácil | 30 minutos |
| Railway | Gratis | ⭐⭐ Medio | 45 minutos |
| Cambiar hosting | $2-5/mes | ⭐⭐ Medio | 1-2 horas |
| Híbrida | Gratis | ⭐⭐⭐⭐⭐ Muy difícil | 4+ horas |

---

## 🚀 Mi Recomendación Personal

**Para ti, que eres principiante:**

1. **Empieza con Vercel** (Opción 2)
   - Es gratis
   - Muy fácil
   - Funciona perfecto con Next.js
   - Puedes usar tu dominio

2. **Si después quieres cambiar**, siempre puedes migrar a otro hosting más adelante

---

## 📞 ¿Necesitas Ayuda con Vercel?

Si decides usar Vercel, puedo crear una guía paso a paso específica para ti. Solo dime y la preparo.

---

## ❓ Preguntas Frecuentes

### ¿Vercel es realmente gratis?
Sí, para proyectos pequeños. Tiene límites pero son generosos:
- 100GB de ancho de banda/mes
- Despliegues ilimitados
- SSL incluido

### ¿Puedo usar mi dominio en Vercel?
Sí, completamente gratis. Solo configuras los DNS.

### ¿Qué pasa si supero los límites de Vercel?
Te avisan antes. Puedes actualizar a un plan de pago o migrar a otro servicio.

### ¿Puedo cambiar después?
Sí, siempre puedes migrar tu proyecto a otro hosting cuando quieras.

---

## ✅ Próximos Pasos

1. **Decide qué opción quieres usar**
2. **Si eliges Vercel**: Dime y creo una guía específica paso a paso
3. **Si eliges instalar Node.js manualmente**: Verifica primero que tengas SSH
4. **Si eliges cambiar de hosting**: Investiga cuál te conviene más

---

**💡 Tip**: La mayoría de personas que empiezan eligen Vercel porque es gratis y muy fácil. Después, si quieren, migran a un hosting propio.

