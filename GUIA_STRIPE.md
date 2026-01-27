# 💳 Guía Completa de Stripe para Aborigen

## 📖 ¿Qué es Stripe?

**Stripe** es una plataforma de pagos en línea que permite a tu tienda web aceptar pagos con tarjetas de crédito y débito de forma segura. Es una de las soluciones más populares y confiables del mundo.

### ¿Por qué usar Stripe?

✅ **Seguridad**: Stripe maneja toda la información sensible de las tarjetas, tú nunca tocas datos bancarios  
✅ **Facilidad**: Solo necesitas unas líneas de código (ya implementadas en tu página)  
✅ **Global**: Acepta tarjetas de todo el mundo  
✅ **Confiable**: Usado por millones de negocios (Amazon, Shopify, Uber, etc.)  
✅ **Rápido**: Los pagos se depositan en tu cuenta bancaria en 2-7 días  

---

## 🔍 ¿Cómo funciona Stripe?

Imagina este flujo:

```
1. Cliente → Ve productos en tu página
2. Cliente → Agrega productos al carrito
3. Cliente → Hace clic en "Pagar"
4. Stripe → Abre ventana de pago segura (checkout)
5. Cliente → Ingresa datos de tarjeta en Stripe
6. Stripe → Procesa el pago
7. Stripe → Te notifica "¡Pago exitoso!"
8. Tú → Preparas y envías el pedido
9. Stripe → Deposita el dinero en tu cuenta (2-7 días)
```

**Lo importante**: Tú nunca manejas datos de tarjetas, Stripe lo hace por ti cumpliendo con todas las normas de seguridad internacionales (PCI-DSS).

---

## 💰 Costos de Stripe en Colombia

### Comisión por Transacción
- **2.9% + $900 COP** por cada pago exitoso
- Ejemplo: Si vendes una botella de $25,000:
  - Comisión: $725 (2.9%) + $900 = $1,625
  - Recibes: $23,375

### Sin Costos Mensuales
- ✅ No hay cuota mensual
- ✅ No hay cuota de activación
- ✅ Solo pagas cuando vendes

### Retiros a tu Cuenta Bancaria
- ✅ Gratis (sin costo)
- ⏰ Cada 2-7 días hábiles automáticamente

---

## 🚀 Cómo Configurar Stripe (Paso a Paso)

### Paso 1: Crear Cuenta en Stripe

1. Ve a [stripe.com/es-co](https://stripe.com/es-co)
2. Haz clic en "Empezar ahora" o "Registrarse"
3. Ingresa tu email y crea una contraseña
4. Stripe te pedirá:
   - Nombre del negocio: **Bebidas Ancestrales Aborigen**
   - Tipo de negocio: **Empresa individual** o **Sociedad** (según tu caso)
   - Información fiscal: **NIT** o **Cédula**
   - Información bancaria: **Cuenta donde quieres recibir el dinero**

### Paso 2: Verificación

Stripe necesita verificar tu identidad para cumplir con regulaciones:
- Te pedirá foto de tu cédula
- Puede pedirte documentos adicionales (registro mercantil si aplica)
- Este proceso toma 1-3 días hábiles

### Paso 3: Obtener las Claves API

Una vez verificada tu cuenta:

1. Inicia sesión en [dashboard.stripe.com](https://dashboard.stripe.com)
2. Ve a la sección **"Desarrolladores"** → **"Claves API"**
3. Verás dos tipos de claves:

#### 🧪 Claves de Prueba (Test Keys)
Para hacer pruebas sin dinero real:
- `pk_test_...` (Clave pública de prueba)
- `sk_test_...` (Clave secreta de prueba)

#### 💰 Claves en Producción (Live Keys)
Para aceptar pagos reales:
- `pk_live_...` (Clave pública real)
- `sk_live_...` (Clave secreta real)

**⚠️ IMPORTANTE**: Nunca compartas tu clave secreta (`sk_...`) públicamente.

### Paso 4: Configurar tu Página Web

1. En tu proyecto, crea un archivo `.env.local` en la raíz (si no existe)
2. Agrega estas líneas:

```bash
# Claves de Stripe (modo prueba)
STRIPE_SECRET_KEY=sk_test_TU_CLAVE_SECRETA_AQUI
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_TU_CLAVE_PUBLICA_AQUI

# URL de tu sitio
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

3. Cuando estés listo para aceptar pagos reales, cambia a claves `live`:

```bash
# Claves de Stripe (modo producción)
STRIPE_SECRET_KEY=sk_live_TU_CLAVE_SECRETA_AQUI
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_TU_CLAVE_PUBLICA_AQUI

# URL de tu sitio en producción
NEXT_PUBLIC_BASE_URL=https://tu-dominio.com
```

### Paso 5: Probar el Flujo de Pago

#### En Modo Prueba:

1. Ejecuta tu página: `npm run dev`
2. Agrega productos al carrito
3. Haz clic en "Ir a pagar"
4. Usa una tarjeta de prueba de Stripe:
   - **Número**: `4242 4242 4242 4242`
   - **Fecha**: Cualquier fecha futura (ej: 12/25)
   - **CVC**: Cualquier 3 dígitos (ej: 123)
   - **Nombre**: Cualquier nombre

5. Si todo funciona, verás "Pago exitoso"

#### En Modo Producción:

Cuando actives las claves `live`, los pagos serán reales y se depositarán en tu cuenta bancaria.

---

## 🎯 ¿Qué está Implementado en tu Página?

Tu código ya tiene Stripe integrado. Específicamente:

### 1. API de Checkout (`/api/create-checkout-session`)
- Crea sesiones de pago seguras
- Calcula el total del carrito
- Redirige a Stripe para procesar el pago

### 2. Página de Carrito (`/cart`)
- Botón "Ir a pagar" que activa Stripe
- Muestra el total a pagar

### 3. Flujo Completo
```
Cliente en /cart → Click "Pagar" → API crea sesión → Stripe procesa → Éxito/Error
```

---

## 📊 Panel de Control de Stripe (Dashboard)

Una vez que empieces a recibir pagos, en [dashboard.stripe.com](https://dashboard.stripe.com) podrás:

### Ver Pagos
- Lista de todas las transacciones
- Monto, fecha, estado (exitoso, fallido, reembolsado)
- Detalles del cliente (email, últimos 4 dígitos de tarjeta)

### Gestionar Reembolsos
- Si un cliente lo solicita, puedes reembolsar desde el dashboard
- Clic en el pago → "Reembolsar"

### Reportes
- Gráficos de ventas
- Productos más vendidos
- Exportar a Excel

### Depósitos (Payouts)
- Ver cuándo recibirás el dinero en tu cuenta
- Historial de depósitos

---

## 🔒 Seguridad y Mejores Prácticas

### ✅ Hacer

- Mantén tu clave secreta (`sk_...`) privada
- Usa el archivo `.env.local` (no subas este archivo a GitHub)
- Prueba exhaustivamente en modo test antes de ir a producción
- Configura notificaciones por email en Stripe

### ❌ No Hacer

- No compartas tu clave secreta
- No subas `.env.local` a repositorios públicos
- No uses claves de prueba en producción

---

## 📧 ¿Qué Pasa Después de un Pago Exitoso?

### Automáticamente:
1. Stripe te envía un email confirmando el pago
2. El cliente recibe un recibo por email
3. El dinero se marca para depósito (2-7 días)

### Manualmente (tú debes hacerlo):
1. Ver el pedido en tu dashboard de Stripe
2. Preparar los productos
3. Contactar al cliente para coordinar envío
4. Enviar el pedido
5. Confirmar al cliente que fue enviado

### Automatización Futura (opcional):
- Enviar email automático con detalles del pedido
- Integrar con Shopify, WooCommerce u otro CRM
- Notificaciones a WhatsApp cuando haya un pago

---

## 🛠️ Solución de Problemas Comunes

### "No me aparece el botón de pago"
**Causa**: Las claves de Stripe no están configuradas  
**Solución**: Verifica que `.env.local` tenga las claves correctas y reinicia el servidor (`npm run dev`)

### "Error al procesar el pago"
**Causa**: Clave secreta incorrecta o expirada  
**Solución**: Revisa que las claves en `.env.local` estén actualizadas desde tu dashboard de Stripe

### "El pago fue exitoso pero no veo el dinero"
**Causa**: Los depósitos toman 2-7 días hábiles  
**Solución**: Espera, y verifica en "Depósitos" del dashboard

### "Cliente dice que le cobraron pero no veo el pago"
**Causa**: Puede estar en modo prueba  
**Solución**: Verifica que estés usando claves `live`, no `test`

---

## 📱 Configuración Adicional Recomendada

### 1. Activar Notificaciones por Email

En el Dashboard de Stripe:
- Ve a **Configuración** → **Notificaciones por email**
- Activa:
  - ✅ Pagos exitosos
  - ✅ Pagos fallidos
  - ✅ Disputas/Contracargos
  - ✅ Depósitos

### 2. Personalizar Recibos

En **Configuración** → **Recibos por email**:
- Agrega tu logo
- Personaliza mensaje de bienvenida
- Agrega información de contacto

### 3. Configurar URL de Devolución

Después del pago, redirigir al cliente a una página de "Gracias":
- URL de éxito: `https://tu-sitio.com/pago-exitoso`
- URL de cancelación: `https://tu-sitio.com/cart`

---

## 🌎 Stripe en Colombia - Consideraciones

### ¿Necesito RUT o NIT?
- Si eres persona natural: **Cédula** es suficiente
- Si eres empresa: Necesitarás **NIT** y registro mercantil

### ¿Qué bancos acepta Stripe en Colombia?
La mayoría de bancos principales:
- Bancolombia
- Davivienda
- Banco de Bogotá
- Banco Popular
- BBVA
- Scotiabank
- Y más...

### ¿Los clientes pueden pagar con tarjetas colombianas?
Sí, Stripe acepta:
- Tarjetas de crédito (Visa, MasterCard, Amex)
- Tarjetas débito con función de compra en línea

### ¿Qué pasa con PSE?
Stripe en Colombia no soporta PSE directamente, solo tarjetas. Para PSE necesitarías un gateway local como:
- PayU
- ePayco
- Wompi

**Recomendación**: Empieza con Stripe (tarjetas) y si tus clientes piden PSE, evalúa agregar otro gateway.

---

## 📈 Alternativas a Stripe

Si Stripe no te convence, otras opciones en Colombia:

### PayU
- ✅ Soporta PSE
- ✅ Tarjetas de crédito/débito
- ❌ Comisiones un poco más altas (3.49% + IVA)

### Wompi (Bancolombia)
- ✅ PSE y tarjetas
- ✅ Bajo costo
- ❌ Menos flexible que Stripe

### ePayco
- ✅ PSE, tarjetas, efectivo (Baloto, Efecty)
- ✅ Buena opción local
- ❌ Interfaz menos moderna

### Mercado Pago
- ✅ Conocido y confiable
- ✅ Tarjetas y transferencias
- ❌ Comisiones similares a Stripe

**Mi recomendación**: Empieza con Stripe por su facilidad y luego considera agregar PSE si lo necesitas.

---

## ✅ Checklist de Implementación

- [ ] Crear cuenta en Stripe
- [ ] Completar verificación de identidad
- [ ] Obtener claves API de prueba
- [ ] Configurar `.env.local` con claves de prueba
- [ ] Probar flujo de pago con tarjeta de prueba
- [ ] Verificar que se crea la sesión de checkout
- [ ] Personalizar recibos en Stripe Dashboard
- [ ] Activar notificaciones por email
- [ ] Obtener claves API en producción
- [ ] Cambiar a claves de producción en `.env.local`
- [ ] Hacer una compra real de prueba ($5,000)
- [ ] Verificar que el dinero llegue a tu cuenta (2-7 días)
- [ ] ¡Lanzar oficialmente! 🚀

---

## 📞 Soporte

### Stripe
- **Centro de ayuda**: [support.stripe.com](https://support.stripe.com)
- **Email**: Desde el dashboard
- **Chat en vivo**: Disponible 24/7 (en inglés, soporte en español limitado)

### Tu Desarrollador (IA - Cursor)
Si tienes problemas técnicos con la implementación, pregúntame aquí.

---

## 🎓 Recursos Adicionales

- [Documentación oficial de Stripe](https://stripe.com/docs)
- [Tarjetas de prueba](https://stripe.com/docs/testing)
- [API Reference](https://stripe.com/docs/api)
- [Video tutorial (YouTube)](https://www.youtube.com/results?search_query=stripe+tutorial+español)

---

**Última actualización**: Octubre 2025  
**Creado para**: Bebidas Ancestrales Aborigen

---

## 💡 Próximos Pasos Sugeridos

Una vez domines Stripe:

1. **Agregar PSE** (para clientes que no usan tarjetas)
2. **Sistema de órdenes** (guardar pedidos en base de datos)
3. **Email automático** al cliente con detalles del pedido
4. **Integración con WhatsApp** (notificación de nuevos pedidos)
5. **Panel de administración** (ver todos los pedidos en un solo lugar)
6. **Suscripciones** (para clientes recurrentes con descuento)

¡Pero todo a su tiempo! Primero domina el flujo básico de Stripe. 🚀

