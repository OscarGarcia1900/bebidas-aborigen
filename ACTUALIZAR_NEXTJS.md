# 🔧 Actualizar Next.js para Corregir Vulnerabilidad

## Problema

Vercel detectó una vulnerabilidad en Next.js 15.5.2 (CVE-2025-6647) y está bloqueando el deployment.

## ✅ Solución

He actualizado `package.json` para usar versiones más seguras:
- `next`: `^15.1.5` (versión estable sin vulnerabilidad)
- `react`: `^19.0.0`
- `react-dom`: `^19.0.0`
- `eslint-config-next`: `^15.1.5`

---

## 📋 Pasos para Aplicar los Cambios

### Paso 1: Instalar las Nuevas Versiones

En tu terminal, ejecuta:

```bash
cd /Users/oscargarcia/Documents/app_bebidas_ancestrales
npm install
```

Esto instalará las versiones actualizadas.

### Paso 2: Verificar que Funciona Localmente

```bash
npm run build
```

Si el build funciona sin errores, continúa.

### Paso 3: Hacer Commit y Push

1. En GitHub Desktop:
   - Verás cambios en `package.json` y `package-lock.json`
   - Escribe el mensaje: `Actualizar Next.js para corregir vulnerabilidad`
   - Haz clic en "Commit to main"
   - Haz clic en "Push origin"

### Paso 4: Hacer Redeploy en Vercel

1. Ve a Vercel
2. En la página de "Vulnerable Dependencies" o "Deployments"
3. Haz clic en **"Redeploy"**
4. Espera 2-3 minutos
5. El deployment debería funcionar ahora

---

## 🎯 Alternativa: Ver Pull Request de Vercel

Vercel mencionó que creó un Pull Request para arreglar esto automáticamente:

1. Haz clic en **"View Pull Request"** en la página de vulnerabilidades
2. Esto te llevará a GitHub
3. Revisa los cambios
4. Haz merge del PR
5. Vercel desplegará automáticamente

---

## ✅ Verificación

Después del redeploy, verifica:
- ✅ El deployment es exitoso (checkmark verde)
- ✅ La URL funciona
- ✅ El sitio carga correctamente

---

¿Prefieres actualizar manualmente o ver el Pull Request de Vercel?
