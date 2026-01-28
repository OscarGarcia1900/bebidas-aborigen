# 🎫 Ticket de Soporte - Preguntas sobre Node.js en cPanel

## Información para el Ticket

**Asunto:** Consulta sobre soporte de Node.js para aplicación Next.js

**Mensaje para soporte:**

---

Hola,

Tengo un hosting con ustedes y necesito desplegar una aplicación web desarrollada con **Next.js 15** que requiere **Node.js** para funcionar.

Mi aplicación necesita:
- Node.js versión 18.x o superior
- Ejecutar un servidor Node.js de forma persistente
- Acceso a variables de entorno
- Puerto para ejecutar la aplicación (ej: 3000)

**Preguntas específicas:**

1. **¿Tienen Node.js Selector disponible en cPanel?**
   - Si la respuesta es SÍ: ¿Qué versión de Node.js está disponible? (necesito 18.x o superior)
   - Si la respuesta es NO: Continúo con las siguientes preguntas.

2. **Si NO tienen Node.js Selector, ¿permiten instalar Node.js manualmente?**
   - ¿Tengo acceso SSH habilitado en mi plan?
   - ¿Puedo instalar Node.js usando nvm (Node Version Manager)?
   - ¿Hay alguna restricción o política que impida instalar Node.js manualmente?

3. **Si puedo instalar Node.js manualmente:**
   - ¿Qué permisos tengo para instalar paquetes globales (como PM2)?
   - ¿Puedo ejecutar procesos Node.js de forma persistente (24/7)?
   - ¿Hay límites de recursos (CPU, memoria) para aplicaciones Node.js?

4. **Configuración de dominio:**
   - ¿Puedo configurar un proxy reverso para que mi dominio apunte a una aplicación Node.js corriendo en un puerto específico?
   - ¿Cómo configuro esto? (¿vía .htaccess, configuración de Apache, o necesito ayuda de ustedes?)

5. **SSL/HTTPS:**
   - Si instalo Node.js manualmente, ¿puedo usar AutoSSL de cPanel para el certificado SSL?
   - ¿O necesito configurar SSL de otra manera?

**Información adicional:**
- Dominio: bebidasaborigen.com
- Tipo de aplicación: Next.js (framework de React)
- Requisitos: Node.js 18+ y npm

Agradezco su ayuda para determinar la mejor forma de desplegar mi aplicación.

Saludos,
[Tu nombre]

---

## 📋 Resumen de lo que Necesitas

### Mínimo Requerido:
- ✅ Node.js 18.x o superior
- ✅ npm (viene con Node.js)
- ✅ Capacidad de ejecutar procesos Node.js persistentes
- ✅ Acceso a variables de entorno

### Ideal (pero no esencial):
- ✅ Node.js Selector en cPanel (más fácil)
- ✅ Acceso SSH (para instalar manualmente si no hay selector)
- ✅ Permisos para instalar PM2 (gestor de procesos)
- ✅ Capacidad de configurar proxy reverso

---

## 🔍 Cómo Verificar en tu cPanel (Antes de Enviar el Ticket)

1. **Buscar Node.js Selector:**
   - Entra a tu cPanel
   - En la barra de búsqueda, escribe: `node`
   - ¿Aparece algo relacionado con Node.js?

2. **Verificar SSH:**
   - En cPanel, busca "Terminal" o "SSH Access"
   - ¿Aparece alguna opción relacionada?

3. **Anotar tu plan de hosting:**
   - ¿Qué plan tienes? (ej: Plan Básico, Plan Pro, etc.)
   - Esto ayuda a soporte a darte información específica

---

## 💡 Respuestas Posibles y Qué Hacer

### Escenario 1: "Sí, tenemos Node.js Selector"
✅ **Perfecto!** Puedes usar la guía `GUIA_COMPLETA_DESDE_CERO.md` que ya tienes.

### Escenario 2: "No tenemos Node.js Selector, pero puedes instalar manualmente"
✅ **Bien!** Necesitarás:
- Acceso SSH
- Instalar Node.js con nvm
- Instalar PM2
- Configurar proxy en .htaccess
- Te puedo ayudar con una guía específica

### Escenario 3: "No permitimos Node.js en tu plan"
❌ **Opción:** Usar Vercel (gratis) para desplegar tu aplicación
- Tu hosting cPanel lo puedes usar para otra cosa
- Vercel es gratis y muy fácil
- Te ayudo con la guía `DEPLOY_VERCEL.md`

### Escenario 4: "Necesitas actualizar tu plan"
💰 **Considera:**
- ¿Cuánto cuesta el plan superior?
- Compara con usar Vercel (gratis)
- Decide qué es mejor para ti

---

## 📝 Información Técnica Adicional (Si la Piden)

**Especificaciones de la aplicación:**
- Framework: Next.js 15.5.2
- Node.js requerido: 18.x o superior
- Lenguaje: TypeScript
- Dependencias: React, Stripe SDK, Tailwind CSS
- Puerto: 3000 (o el que asignen)
- Proceso: Necesita correr 24/7

**Comandos que necesitaré ejecutar:**
```bash
npm install --production
npm run build
npm start
# O con PM2:
pm2 start npm --name "bebidas-ancestrales" -- start
```

---

## ✅ Después de Recibir la Respuesta

Una vez que tengas la respuesta de soporte:

1. **Si SÍ tienen Node.js:**
   - Te preparo una guía específica paso a paso
   - Te ayudo a configurar todo

2. **Si NO tienen Node.js:**
   - Te guío para desplegar en Vercel (es gratis y más fácil)
   - Tu hosting cPanel lo puedes usar para otra cosa

---

**💡 Tip:** Sé específico en tu pregunta. Mientras más detalles des, mejor podrán ayudarte.

