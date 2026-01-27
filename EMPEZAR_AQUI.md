# 🎯 EMPIEZA AQUÍ - Guía de Inicio Rápido

¡Bienvenido! Esta es tu guía de inicio para desplegar tu aplicación en cPanel.

---

## 📚 ¿Qué Documento Debes Leer?

### 🆕 Si es tu PRIMERA VEZ desplegando una aplicación Next.js:

👉 **LEE ESTE PRIMERO**: **[GUIA_COMPLETA_DESDE_CERO.md](./GUIA_COMPLETA_DESDE_CERO.md)**

Esta guía te explica TODO paso a paso, desde cómo verificar que tu hosting tiene Node.js hasta cómo probar que todo funciona.

### ⚡ Si ya sabes qué hacer y solo necesitas un recordatorio:

👉 **USA ESTE**: **[PASOS_RAPIDOS.md](./PASOS_RAPIDOS.md)**

Un resumen ejecutivo con los pasos principales.

---

## 🗺️ Mapa de Documentación

### 📖 Guías Principales

1. **[GUIA_COMPLETA_DESDE_CERO.md](./GUIA_COMPLETA_DESDE_CERO.md)**
   - Guía paso a paso para principiantes
   - Explica cada concepto
   - Incluye solución de problemas

2. **[DEPLOY_CPANEL.md](./DEPLOY_CPANEL.md)**
   - Guía técnica para cPanel
   - Para usuarios con más experiencia
   - Opciones avanzadas

3. **[DEPLOY.md](./DEPLOY.md)**
   - Guía para VPS/servidor propio
   - Configuración con PM2 y Nginx
   - Si tienes acceso root al servidor

### 🔧 Guías de Configuración

4. **[OBTENER_CLAVES.md](./OBTENER_CLAVES.md)**
   - Cómo obtener claves de Stripe
   - Cómo obtener claves de Wompi
   - Seguridad y mejores prácticas

5. **[VARIABLES_ENTORNO.md](./VARIABLES_ENTORNO.md)**
   - Qué variables necesitas
   - Cómo configurarlas
   - Ejemplos

### ✅ Listas de Verificación

6. **[CHECKLIST_DESPLIEGUE.md](./CHECKLIST_DESPLIEGUE.md)**
   - Checklist completo paso a paso
   - Para asegurarte de no olvidar nada
   - Úsalo mientras despliegas

### 🛠️ Scripts y Herramientas

7. **Scripts disponibles:**
   - `preparar-para-cpanel.sh` - Prepara archivos para subir
   - `deploy.sh` - Script de despliegue (para VPS)

---

## 🚀 Proceso Recomendado (Primera Vez)

### Paso 0: ¿Tu Hosting Tiene Node.js?
- [ ] Lee: **[SIN_NODEJS_OPCIONES.md](./SIN_NODEJS_OPCIONES.md)** - Si tu hosting NO tiene Node.js
- [ ] Si tu hosting NO tiene Node.js Selector → **Usa Vercel** (es gratis y más fácil)
- [ ] Si tu hosting SÍ tiene Node.js Selector → Continúa con el Paso 1

### Paso 1: Verificar tu Hosting
- [ ] Lee: **[GUIA_COMPLETA_DESDE_CERO.md](./GUIA_COMPLETA_DESDE_CERO.md)** - Sección "PASO 1"
- [ ] Verifica que tu hosting tenga Node.js Selector
- [ ] Si NO lo tiene → Ve a **[SIN_NODEJS_OPCIONES.md](./SIN_NODEJS_OPCIONES.md)**

### Paso 2: Obtener las Claves
- [ ] Lee: **[OBTENER_CLAVES.md](./OBTENER_CLAVES.md)**
- [ ] Crea cuenta en Stripe (si no la tienes)
- [ ] Crea cuenta en Wompi (si no la tienes)
- [ ] Obtén las claves de TEST primero

### Paso 3: Preparar Archivos Localmente
- [ ] Lee: **[GUIA_COMPLETA_DESDE_CERO.md](./GUIA_COMPLETA_DESDE_CERO.md)** - Sección "PASO 2 y 3"
- [ ] Ejecuta: `npm install`
- [ ] Crea archivo `.env` con tus claves
- [ ] Prueba localmente: `npm run build`
- [ ] Prepara ZIP: `npm run preparar-cpanel` o manualmente

### Paso 4: Subir a cPanel
- [ ] Lee: **[GUIA_COMPLETA_DESDE_CERO.md](./GUIA_COMPLETA_DESDE_CERO.md)** - Sección "PASO 4"
- [ ] Sube el ZIP a cPanel
- [ ] Extráelo en `public_html`

### Paso 5: Configurar Node.js
- [ ] Lee: **[GUIA_COMPLETA_DESDE_CERO.md](./GUIA_COMPLETA_DESDE_CERO.md)** - Sección "PASO 5 y 6"
- [ ] Crea aplicación en Node.js Selector
- [ ] Configura variables de entorno

### Paso 6: Instalar y Construir
- [ ] Lee: **[GUIA_COMPLETA_DESDE_CERO.md](./GUIA_COMPLETA_DESDE_CERO.md)** - Sección "PASO 7 y 8"
- [ ] Instala dependencias: `npm install --production`
- [ ] Construye: `npm run build`

### Paso 7: Iniciar y Probar
- [ ] Lee: **[GUIA_COMPLETA_DESDE_CERO.md](./GUIA_COMPLETA_DESDE_CERO.md)** - Sección "PASO 9, 10 y 11"
- [ ] Inicia la aplicación en Node.js Selector
- [ ] Configura SSL
- [ ] Prueba el sitio

### Paso 8: Verificar Todo
- [ ] Usa: **[CHECKLIST_DESPLIEGUE.md](./CHECKLIST_DESPLIEGUE.md)**
- [ ] Verifica cada punto del checklist
- [ ] Prueba todas las funcionalidades

---

## ❓ Preguntas Frecuentes

### ¿Mi hosting tiene Node.js?
- Busca "Node.js Selector" en tu cPanel
- Si no lo encuentras, probablemente no lo tiene
- Consulta con el soporte de tu hosting

### ¿Necesito saber programar?
- No necesitas saber programar
- Pero necesitas seguir las instrucciones paso a paso
- Si te quedas atascado, pide ayuda

### ¿Cuánto tiempo toma?
- Preparación: 30-60 minutos
- Configuración en cPanel: 30-60 minutos
- Total: 1-2 horas (primera vez)

### ¿Puedo usar claves de prueba?
- Sí, para desarrollar y probar
- Cuando estés listo para recibir pagos reales, cambia a claves de producción

### ¿Qué pasa si algo falla?
- Revisa los logs en Node.js Selector
- Consulta la sección "Solución de Problemas" en la guía
- Pide ayuda con el error específico

---

## 🆘 ¿Necesitas Ayuda?

Si te quedas atascado en algún paso:

1. **Revisa los logs**: Node.js Selector → View Logs
2. **Toma captura de pantalla** del error
3. **Anota** qué estabas haciendo cuando pasó
4. **Consulta** la sección de solución de problemas en la guía
5. **Pide ayuda** con toda esa información

---

## 📝 Notas Importantes

- ⚠️ **NUNCA** subas el archivo `.env` a cPanel
- ⚠️ **USA claves de TEST** mientras desarrollas
- ⚠️ **CAMBIA a claves de PRODUCCIÓN** solo cuando estés listo
- ✅ **HAZ BACKUPS** antes de hacer cambios importantes
- ✅ **REVISA LOS LOGS** si algo no funciona

---

## 🎉 ¡Éxito!

Una vez que completes todos los pasos, tu sitio estará funcionando en:
**https://bebidasaborigen.com**

¡Mucha suerte! 🚀

