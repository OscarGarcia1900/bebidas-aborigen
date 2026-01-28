# 🔑 Obtener Claves de Stripe - Guía Rápida

## Para Desplegar en Vercel (Puedes Usar Claves de Prueba)

Puedes usar claves de **PRUEBA** (test) para desplegar ahora. Después las cambias a producción cuando estés listo para recibir pagos reales.

---

## 🚀 PASO 1: Crear Cuenta en Stripe (Si No La Tienes)

1. Ve a: **https://dashboard.stripe.com/register**
2. Completa el formulario:
   - Email
   - Contraseña
   - Nombre
   - País (Colombia)
3. Confirma tu email

---

## 🔍 PASO 2: Obtener las Claves de Prueba

### 2.1: Entrar al Dashboard

1. Ve a: **https://dashboard.stripe.com/login**
2. Inicia sesión con tu cuenta

### 2.2: Ir a las Claves de API

1. En el menú lateral izquierdo, busca **"Developers"** (Desarrolladores)
2. Haz clic en **"Developers"**
3. En el submenú, haz clic en **"API keys"** (Claves de API)

### 2.3: Ver las Claves

Verás dos tipos de claves:

#### 🔵 Modo Test (Prueba) - Usa estas por ahora:

**Publishable key (Clave pública):**
- Empieza con: `pk_test_...`
- Ejemplo: `pk_test_51Q1234567890abcdefghijklmnopqrstuvwxyz...`
- Esta es la que necesitas para: `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`

**Secret key (Clave secreta):**
- Empieza con: `sk_test_...`
- Ejemplo: `sk_test_51Q1234567890abcdefghijklmnopqrstuvwxyz...`
- Esta es la que necesitas para: `STRIPE_SECRET_KEY`
- ⚠️ **IMPORTANTE**: Haz clic en "Reveal test key" (Revelar clave de prueba) para verla completa

#### 🟢 Modo Live (Producción) - Para después:

- Solo las verás cuando actives tu cuenta de Stripe
- Empiezan con `pk_live_...` y `sk_live_...`
- Las usarás cuando estés listo para recibir pagos reales

---

## 📋 PASO 3: Copiar las Claves

### Clave 1: Secret Key (Clave Secreta)

1. En la sección "Test mode" (Modo prueba)
2. Busca "Secret key"
3. Haz clic en "Reveal test key" (Revelar clave de prueba)
4. Copia toda la clave (empieza con `sk_test_...`)
5. Esta va en Vercel como: `STRIPE_SECRET_KEY`

### Clave 2: Publishable Key (Clave Pública)

1. En la misma sección "Test mode"
2. Busca "Publishable key"
3. Copia toda la clave (empieza con `pk_test_...`)
4. Esta va en Vercel como: `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`

---

## ✅ PASO 4: Agregar en Vercel

Vuelve a Vercel y agrega:

**Variable 1:**
- Llave: `STRIPE_SECRET_KEY`
- Valor: `sk_test_xxxxxxxxxxxxx` (la que copiaste)
- Entorno: Marca todas

**Variable 2:**
- Llave: `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`
- Valor: `pk_test_xxxxxxxxxxxxx` (la que copiaste)
- Entorno: Marca todas

---

## 🧪 Probar Pagos (Con Claves de Prueba)

Cuando uses claves de prueba, puedes probar pagos con estas tarjetas:

**Tarjeta exitosa:**
- Número: `4242 4242 4242 4242`
- Fecha: Cualquier fecha futura (ej: 12/25)
- CVC: Cualquier 3 dígitos (ej: 123)

**Más tarjetas de prueba:** https://stripe.com/docs/testing

---

## 🔄 Cambiar a Producción (Cuando Estés Listo)

Cuando quieras recibir pagos reales:

1. En Stripe Dashboard, activa tu cuenta (completa la verificación)
2. Ve a Developers → API keys
3. Cambia a modo "Live" (arriba del dashboard)
4. Copia las nuevas claves (empiezan con `pk_live_` y `sk_live_`)
5. En Vercel, actualiza las variables de entorno con las nuevas claves

---

## ⚠️ Importante

- **NUNCA** compartas tu Secret Key (`sk_test_...` o `sk_live_...`)
- Solo la Publishable Key (`pk_test_...` o `pk_live_...`) puede estar en el código del frontend
- La Secret Key solo va en variables de entorno del servidor (Vercel)

---

## 📞 Si Tienes Problemas

- **No encuentras las claves:** Asegúrate de estar en Developers → API keys
- **No puedes revelar la Secret Key:** Haz clic en "Reveal test key"
- **No tienes cuenta:** Crea una en https://dashboard.stripe.com/register

---

**💡 Tip:** Usa las claves de prueba para desplegar ahora. Son gratis y te permiten probar todo sin riesgo. Cuando estés listo para recibir pagos reales, cambia a las claves de producción.

