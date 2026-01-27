# ✅ Cómo Verificar que Todo Funciona

Sigue estos pasos para confirmar que tu proyecto está listo para desplegar.

---

## 🔍 Verificación Paso a Paso

### 1. Abre la Terminal

- **Mac**: Presiona `Cmd + Espacio`, escribe "Terminal" y presiona Enter
- O busca "Terminal" en Spotlight

### 2. Ve a tu carpeta del proyecto

```bash
cd /Users/oscargarcia/Documents/app_bebidas_ancestrales
```

### 3. Verifica que Node.js funciona

```bash
node --version
```

**Deberías ver**: `v18.x.x` o `v20.x.x` o similar (cualquier versión 18 o superior está bien)

### 4. Verifica que npm funciona

```bash
npm --version
```

**Deberías ver**: Un número de versión (ej: `10.x.x`)

### 5. Verifica que las dependencias están instaladas

```bash
ls node_modules
```

**Deberías ver**: Una lista larga de carpetas (dependencias instaladas)

### 6. **PRUEBA EL BUILD** (Lo más importante)

```bash
npm run build
```

**¿Qué deberías ver?**

✅ **Si funciona correctamente:**
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    5.2 kB         85 kB
└ ○ /about                               2.1 kB         82 kB
...
```

Y al final debería decir algo como:
```
✓ Build completed successfully
```

❌ **Si hay errores:**
- Verás mensajes en rojo con "Error" o "Failed"
- Anota el error y pídeme ayuda

### 7. Prueba el servidor de desarrollo (opcional)

```bash
npm run dev
```

**Deberías ver:**
```
  ▲ Next.js 15.5.2
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

Luego:
1. Abre tu navegador
2. Ve a: `http://localhost:3000`
3. Deberías ver tu página funcionando

Para detener el servidor, presiona `Ctrl + C` en la terminal.

---

## ✅ Checklist de Verificación

Marca cada punto cuando lo verifiques:

- [ ] Node.js está instalado (`node --version` funciona)
- [ ] npm está instalado (`npm --version` funciona)
- [ ] Dependencias instaladas (`node_modules` existe)
- [ ] Build funciona sin errores (`npm run build` exitoso)
- [ ] Servidor de desarrollo funciona (`npm run dev` abre la página)

---

## 🎯 Si Todo Funciona

Si todos los pasos anteriores funcionan correctamente, **¡estás listo para desplegar!**

Ahora puedes:
1. **Desplegar en Vercel** (recomendado): Sigue `DEPLOY_VERCEL.md`
2. **O preparar para cPanel**: Sigue `GUIA_COMPLETA_DESDE_CERO.md`

---

## 🐛 Si Algo No Funciona

### Error: "command not found: node"
- Node.js no está instalado
- Instálalo desde: https://nodejs.org/

### Error: "Cannot find module"
- Las dependencias no están instaladas
- Ejecuta: `npm install`

### Error en el build
- Revisa el mensaje de error específico
- Puede ser un problema de código o configuración
- Pídeme ayuda con el error específico

### El servidor no inicia
- Verifica que el puerto 3000 no esté en uso
- O usa otro puerto: `npm run dev -- -p 3001`

---

## 💡 Tips

- **Siempre ejecuta `npm install`** después de clonar o descargar el proyecto
- **Si cambias dependencias**, ejecuta `npm install` de nuevo
- **El build puede tardar 1-2 minutos** la primera vez, es normal
- **Si ves warnings** (advertencias) pero no errores, generalmente está bien

---

**¿Todo funcionó?** ¡Excelente! Ahora puedes proceder con el despliegue. 🚀

