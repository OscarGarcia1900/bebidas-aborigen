# 🔑 Cómo Obtener las Claves Necesarias

Tu aplicación necesita claves de Stripe y Wompi para procesar pagos. Aquí te explico cómo obtenerlas.

---

## 💳 Stripe - Para Pagos con Tarjeta

### Paso 1: Crear cuenta en Stripe

1. Ve a: https://dashboard.stripe.com/register
2. Completa el formulario de registro
3. Verifica tu email

### Paso 2: Completar información de negocio

Stripe te pedirá información sobre tu negocio:
- Nombre del negocio
- País
- Información bancaria (para recibir pagos)
- Documentos de identificación

**⚠️ IMPORTANTE**: Completa TODO el proceso. Stripe necesita verificar tu identidad antes de activar pagos reales.

### Paso 3: Obtener las claves

1. Una vez dentro del dashboard, ve a: **Developers** → **API keys**
2. Verás dos tipos de claves:

#### Modo Test (para probar):
- **Publishable key**: Empieza con `pk_test_...`
- **Secret key**: Empieza con `sk_test_...`
- ✅ Úsalas para PROBAR antes de lanzar

#### Modo Live (para producción):
- **Publishable key**: Empieza con `pk_live_...`
- **Secret key**: Empieza con `sk_live_...`
- ✅ Úsalas cuando estés listo para recibir pagos REALES

### Paso 4: Activar modo Live

Para obtener las claves de producción:
1. En el dashboard, busca "Activate account" o "Activar cuenta"
2. Completa la verificación (puede tardar 1-2 días)
3. Una vez activada, verás las claves "Live" disponibles

### Paso 5: Copiar las claves

**Para desarrollo/pruebas:**
```
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxxxxx
```

**Para producción:**
```
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_xxxxxxxxxxxxx
```

**⚠️ IMPORTANTE**: 
- NUNCA compartas tu Secret Key (`sk_...`)
- Solo la Publishable Key (`pk_...`) puede estar en el código del frontend
- La Secret Key solo va en variables de entorno del servidor

---

## 🌎 Wompi - Para Pagos PSE y Métodos Colombianos

### Paso 1: Crear cuenta en Wompi

1. Ve a: https://wompi.co/
2. Haz clic en "Regístrate" o "Crear cuenta"
3. Completa el formulario

### Paso 2: Completar información comercial

Wompi te pedirá:
- Información de tu empresa/negocio
- Documentos comerciales
- Información bancaria
- Verificación de identidad

### Paso 3: Obtener las claves

1. Una vez dentro del dashboard, busca la sección de **"API"** o **"Integración"**
2. Verás tu clave pública (Public Key)

#### Modo Test:
- Empieza con `pub_test_...`
- Para probar sin pagos reales

#### Modo Producción:
- Empieza con `pub_prod_...`
- Para recibir pagos reales

### Paso 4: Copiar la clave

**Para desarrollo/pruebas:**
```
NEXT_PUBLIC_WOMPI_PUBLIC_KEY=pub_test_xxxxxxxxxxxxx
```

**Para producción:**
```
NEXT_PUBLIC_WOMPI_PUBLIC_KEY=pub_prod_xxxxxxxxxxxxx
```

---

## 📝 Dónde Usar las Claves

### En tu archivo .env (local):
```bash
# Stripe
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxxxxx

# Wompi
NEXT_PUBLIC_WOMPI_PUBLIC_KEY=pub_test_xxxxxxxxxxxxx
```

### En cPanel (producción):
En Node.js Selector → Variables de Entorno, agrega:
- `STRIPE_SECRET_KEY` = `sk_live_xxxxxxxxxxxxx` (clave de PRODUCCIÓN)
- `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` = `pk_live_xxxxxxxxxxxxx` (clave de PRODUCCIÓN)
- `NEXT_PUBLIC_WOMPI_PUBLIC_KEY` = `pub_prod_xxxxxxxxxxxxx` (clave de PRODUCCIÓN)

---

## ⚠️ Seguridad - Reglas de Oro

1. **NUNCA** subas el archivo `.env` a Git o lo compartas
2. **NUNCA** publiques tu Secret Key (`sk_...`) en ningún lugar público
3. **USA claves de TEST** mientras desarrollas y pruebas
4. **CAMBIA a claves de PRODUCCIÓN** solo cuando estés listo para recibir pagos reales
5. **Si alguien ve tu Secret Key**, revócala inmediatamente en el dashboard y crea una nueva

---

## 🧪 Probar Pagos sin Gastar Dinero

### Stripe - Tarjetas de Prueba:

**Tarjeta exitosa:**
- Número: `4242 4242 4242 4242`
- Fecha: Cualquier fecha futura (ej: 12/25)
- CVC: Cualquier 3 dígitos (ej: 123)

**Tarjeta rechazada:**
- Número: `4000 0000 0000 0002`

**Más tarjetas de prueba:** https://stripe.com/docs/testing

### Wompi:
- Usa el modo "Test" para probar sin pagos reales
- Consulta la documentación de Wompi para tarjetas de prueba

---

## 📞 ¿Problemas?

### Stripe:
- Dashboard: https://dashboard.stripe.com/
- Documentación: https://stripe.com/docs
- Soporte: Disponible en el dashboard

### Wompi:
- Dashboard: https://wompi.co/
- Documentación: https://docs.wompi.co/
- Soporte: Contacta desde el dashboard

---

## ✅ Checklist

- [ ] Cuenta de Stripe creada
- [ ] Información comercial completada en Stripe
- [ ] Cuenta verificada en Stripe
- [ ] Claves de TEST obtenidas
- [ ] Claves de PRODUCCIÓN obtenidas (cuando estés listo)
- [ ] Cuenta de Wompi creada
- [ ] Información comercial completada en Wompi
- [ ] Claves de Wompi obtenidas
- [ ] Claves configuradas en `.env` (local)
- [ ] Claves configuradas en cPanel (producción)

---

**💡 Tip**: Empieza con las claves de TEST. Cuando todo funcione perfectamente, cambia a las claves de PRODUCCIÓN.

