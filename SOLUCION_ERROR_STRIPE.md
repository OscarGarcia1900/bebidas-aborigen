# 🔧 Solución: Error de Pago con Stripe

## Problema

Cuando se intenta pagar con tarjeta, aparece el error:
**"No se pudo iniciar el pago con Stripe. Por favor usa otro método de pago."**

---

## ✅ Cambios Realizados

### 1. Mejorado el Manejo de Errores
- Ahora se muestran mensajes de error más específicos
- Se registran los errores en la consola para debugging
- Se valida que los productos tengan todos los datos necesarios

### 2. Corregida la Moneda
- **Antes**: `currency: 'usd'` (dólares)
- **Ahora**: `currency: 'cop'` (pesos colombianos)
- Los precios ya están en pesos colombianos, así que no necesitan conversión

---

## 🔍 Posibles Causas del Error

### Causa 1: Variables de Entorno No Configuradas en Vercel

**Solución:**
1. Ve a Vercel → Tu proyecto → Settings → Environment Variables
2. Verifica que tengas estas variables:
   - `STRIPE_SECRET_KEY` (clave secreta de Stripe)
   - `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` (clave pública de Stripe)
3. Si faltan, agrégalas y haz redeploy

### Causa 2: Clave de Stripe Inválida o de Prueba

**Solución:**
1. Ve a tu cuenta de Stripe: https://dashboard.stripe.com
2. Verifica que estés usando las claves correctas:
   - **Test Mode**: Claves que empiezan con `sk_test_` y `pk_test_`
   - **Live Mode**: Claves que empiezan con `sk_live_` y `pk_live_`
3. Si quieres aceptar pagos reales, necesitas activar tu cuenta y usar claves de Live Mode

### Causa 3: Cuenta de Stripe No Activada

**Solución:**
1. Ve a Stripe Dashboard
2. Completa la verificación de tu cuenta
3. Agrega información bancaria para recibir pagos
4. Activa el modo Live cuando estés listo

---

## 🧪 Cómo Probar

### Paso 1: Verificar Variables de Entorno

En Vercel:
1. Settings → Environment Variables
2. Verifica que `STRIPE_SECRET_KEY` esté configurada
3. Si no está, agrégalas y haz redeploy

### Paso 2: Probar con Tarjeta de Prueba

Si estás en modo Test:
- **Número**: `4242 4242 4242 4242`
- **Fecha**: Cualquier fecha futura (ej: `12/25`)
- **CVC**: Cualquier 3 dígitos (ej: `123`)
- **ZIP**: Cualquier código postal (ej: `12345`)

### Paso 3: Revisar los Logs

1. En Vercel, ve a "Logs"
2. Intenta hacer un pago
3. Revisa los logs para ver el error específico
4. Comparte el error si necesitas ayuda

---

## 📋 Checklist de Verificación

- [ ] Variables de entorno configuradas en Vercel
- [ ] `STRIPE_SECRET_KEY` tiene un valor válido
- [ ] `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` tiene un valor válido
- [ ] Cuenta de Stripe verificada
- [ ] Modo Test o Live configurado correctamente
- [ ] Código actualizado con moneda COP

---

## 🐛 Si el Error Persiste

1. **Abre la consola del navegador** (F12 → Console)
2. **Intenta hacer un pago**
3. **Copia el error** que aparece en la consola
4. **Revisa los logs de Vercel** para ver el error del servidor
5. **Comparte ambos errores** para diagnosticar mejor

---

## 💡 Nota Importante

Si estás usando **claves de prueba** (`sk_test_`), solo funcionarán con tarjetas de prueba. Para aceptar pagos reales, necesitas:
1. Activar tu cuenta de Stripe
2. Completar la verificación
3. Usar claves de producción (`sk_live_`)

---

¿Qué error específico ves en la consola del navegador o en los logs de Vercel?
