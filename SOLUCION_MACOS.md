# 🍎 Solución: Error de Seguridad en macOS

Si ves este mensaje:
> "next-swc.darwin-arm64.node" Not Opened. Apple could not verify...

## ✅ Solución Rápida

### Paso 1: NO muevas el archivo a la papelera

Haz clic en **"Done"** (Hecho) o cierra la ventana. **NO** hagas clic en "Move to Trash".

### Paso 2: Permitir el archivo en Preferencias del Sistema

1. Abre **Preferencias del Sistema** (System Preferences)
   - Haz clic en el ícono de Apple (arriba izquierda)
   - Selecciona "Preferencias del Sistema"

2. Ve a **Seguridad y Privacidad** (Security & Privacy)
   - Busca el ícono de candado 🔒

3. En la pestaña **General**, busca un mensaje que diga algo como:
   > "next-swc.darwin-arm64.node" was blocked from use because it is not from an identified developer

4. Haz clic en **"Allow Anyway"** (Permitir de todas formas)

5. Si no ves el mensaje, intenta ejecutar el comando de nuevo:
   ```bash
   npm run build
   ```
   
   El mensaje debería aparecer de nuevo, y esta vez podrás hacer clic en "Allow" o "Open" cuando aparezca.

### Paso 3: Verificar que funciona

Después de permitir el archivo, ejecuta:

```bash
npm run build
```

Debería funcionar sin problemas.

---

## 🔧 Solución Alternativa (Si la anterior no funciona)

### Opción 1: Ejecutar desde Terminal con permisos

```bash
# Ir a la carpeta del proyecto
cd /Users/oscargarcia/Documents/app_bebidas_ancestrales

# Dar permisos de ejecución
chmod +x node_modules/.bin/next
chmod +x node_modules/next/dist/compiled/@next/swc-darwin-arm64/next-swc.darwin-arm64.node

# Intentar de nuevo
npm run build
```

### Opción 2: Quitar el atributo de cuarentena

```bash
# Ir a la carpeta del proyecto
cd /Users/oscargarcia/Documents/app_bebidas_ancestrales

# Quitar el atributo de cuarentena de macOS
xattr -d com.apple.quarantine node_modules/next/dist/compiled/@next/swc-darwin-arm64/next-swc.darwin-arm64.node 2>/dev/null || true

# Intentar de nuevo
npm run build
```

### Opción 3: Reinstalar dependencias

```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules
npm install

# Intentar de nuevo
npm run build
```

---

## ❓ ¿Por qué pasa esto?

macOS tiene una función de seguridad llamada "Gatekeeper" que verifica que los programas sean seguros. A veces, archivos compilados (como los de Next.js) no tienen la firma digital de Apple, por lo que macOS los bloquea por seguridad.

**Es completamente normal y seguro** permitir este archivo. Next.js es un proyecto de código abierto muy conocido y confiable.

---

## ✅ Verificación Final

Después de seguir los pasos, deberías poder ejecutar:

```bash
npm run build
```

Sin ver el mensaje de error.

---

## 🆘 Si Nada Funciona

Si después de intentar todo sigue sin funcionar:

1. Asegúrate de tener la última versión de Node.js:
   ```bash
   node --version
   ```
   Debería ser 18.x o superior.

2. Actualiza npm:
   ```bash
   npm install -g npm@latest
   ```

3. Reinstala todo desde cero:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

---

**💡 Tip**: Este es un problema común en Mac y no afecta la funcionalidad de tu aplicación. Una vez que lo permitas, no volverá a aparecer.

