# 🏦 Guía para Configurar PSE con Wompi

## 📋 ¿Qué es Wompi?

Wompi es la pasarela de pagos de Bancolombia que te permite aceptar:
- **PSE** (todos los bancos colombianos)
- **Nequi**
- **Tarjetas de crédito/débito**

## 💰 Costos

- **Sin cuota mensual**
- **Comisión por transacción**: 2.99% + IVA
- **Ejemplo**: Si vendes $25,000, pagas ~$887 de comisión
- **Depósitos**: Automáticos a tu cuenta en 1-2 días hábiles

---

## 🚀 Paso 1: Crear Cuenta en Wompi

### 1. Registro
1. Ve a [wompi.com/registro](https://wompi.com/registro)
2. Ingresa tu información:
   - Email
   - Teléfono
   - Tipo de negocio: **Persona Natural** o **Empresa**
   - NIT o Cédula

### 2. Verificación
- Te pedirán documentos:
  - Cédula (ambos lados)
  - RUT (si eres empresa)
  - Certificado bancario
- Proceso toma 1-3 días hábiles

### 3. Obtener Claves

Una vez aprobado:

1. Inicia sesión en [comercios.wompi.co](https://comercios.wompi.co)
2. Ve a **Configuración** → **Credenciales API**
3. Encontrarás:

**Modo Pruebas (Test):**
```
Llave Pública: pub_test_xxxxx
Llave Privada: prv_test_xxxxx
```

**Modo Producción (Real):**
```
Llave Pública: pub_prod_xxxxx
Llave Privada: prv_prod_xxxxx
```

---

## 🔧 Paso 2: Configurar en tu Página

### 1. Crear archivo `.env.local`

En la raíz de tu proyecto, crea el archivo `.env.local`:

```bash
# Wompi - Modo Pruebas (para probar)
NEXT_PUBLIC_WOMPI_PUBLIC_KEY=pub_test_TU_LLAVE_PUBLICA_AQUI
WOMPI_PRIVATE_KEY=prv_test_TU_LLAVE_PRIVADA_AQUI

# Wompi - Modo Producción (cuando vayas a vender de verdad)
# NEXT_PUBLIC_WOMPI_PUBLIC_KEY=pub_prod_TU_LLAVE_PUBLICA_AQUI
# WOMPI_PRIVATE_KEY=prv_prod_TU_LLAVE_PRIVADA_AQUI

# Configuración
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 2. Reiniciar servidor

Después de crear `.env.local`:
```bash
# Detén el servidor (Ctrl + C)
# Vuelve a iniciarlo
npm run dev
```

---

## 🧪 Paso 3: Probar PSE en Modo Pruebas

### Bancos de Prueba

En modo test, usa estos bancos ficticios:

| Banco | NIT | Resultado |
|-------|-----|-----------|
| Bancolombia | 1234567890 | ✅ Éxito |
| Banco de Bogotá | 9876543210 | ✅ Éxito |
| Davivienda | 1111111111 | ❌ Falla |

### Flujo de Prueba

1. Agrega productos al carrito
2. Click en "PSE - Débito a Cuentas"
3. Se abre checkout de Wompi
4. Selecciona un banco de prueba
5. Ingresa NIT de prueba
6. Completa transacción

---

## ✅ Paso 4: Activar Modo Producción

Una vez que hayas probado y esté todo funcionando:

### 1. En Wompi
1. Ve a [comercios.wompi.co](https://comercios.wompi.co)
2. Completa **Verificación de cuenta**:
   - Información bancaria
   - Documentos de identidad
   - Información tributaria
3. Activa **Modo Producción**

### 2. En tu código
1. Edita `.env.local`
2. Cambia las claves de `test` a `prod`:

```bash
# Comentar las de prueba
# NEXT_PUBLIC_WOMPI_PUBLIC_KEY=pub_test_...
# WOMPI_PRIVATE_KEY=prv_test_...

# Descomentar las de producción
NEXT_PUBLIC_WOMPI_PUBLIC_KEY=pub_prod_TU_LLAVE_REAL
WOMPI_PRIVATE_KEY=prv_prod_TU_LLAVE_REAL
```

3. Reinicia el servidor

---

## 📊 Panel de Control Wompi

En [comercios.wompi.co](https://comercios.wompi.co) podrás:

- ✅ Ver todas las transacciones
- ✅ Estado de pagos (Exitoso, Pendiente, Fallido)
- ✅ Generar reportes
- ✅ Ver cuánto recibirás en próximo depósito
- ✅ Historial de depósitos
- ✅ Configurar notificaciones

---

## 🔔 Notificaciones de Pago

Wompi te puede enviar:
- **Email** cuando haya un pago exitoso
- **Webhook** (notificación automática a tu página)
- **SMS** cuando recibas un depósito

Configúralas en: **Configuración** → **Notificaciones**

---

## ❓ Preguntas Frecuentes

### ¿Cuánto tarda en llegarme el dinero?
- **PSE**: 1-2 días hábiles
- **Tarjetas**: 2-3 días hábiles
- Los depósitos son automáticos a tu cuenta bancaria

### ¿Qué banco necesito?
Cualquier banco colombiano:
- Bancolombia ✅
- Davivienda ✅
- Banco de Bogotá ✅
- Banco Popular ✅
- BBVA ✅
- Todos los demás ✅

### ¿El cliente necesita tener PSE?
No, PSE funciona con cualquier cuenta bancaria. El cliente solo necesita:
- Cuenta de ahorros o corriente
- Usuario y contraseña del banco online

### ¿Puedo vender sin RUT?
- **Persona Natural**: Solo necesitas cédula
- **Empresa**: Necesitas RUT y cámara de comercio

### ¿Qué pasa si un pago falla?
- El cliente no es cobrado
- Tú no recibes el dinero
- El cliente puede intentar de nuevo
- Wompi te notifica del fallo

---

## 🆘 Soporte

### Wompi
- Email: soporte@wompi.co
- WhatsApp: +57 320 123 4567 (ejemplo)
- Documentación: [docs.wompi.co](https://docs.wompi.co)
- Chat en vivo en el panel de comercios

### Si necesitas ayuda con el código
Puedo ayudarte a:
- Solucionar errores
- Agregar webhooks
- Personalizar el checkout
- Integrar más métodos de pago

---

## 🎯 Checklist de Implementación

- [ ] Crear cuenta en Wompi
- [ ] Completar verificación de identidad
- [ ] Obtener claves de prueba
- [ ] Configurar `.env.local`
- [ ] Probar PSE en modo test
- [ ] Verificar que llegue notificación de pago
- [ ] Obtener claves de producción
- [ ] Cambiar a modo producción
- [ ] ¡Hacer tu primera venta real! 🎉

---

**Próximo paso:** Una vez tengas tus claves de Wompi, avísame y te ayudo a configurarlas en el código.

