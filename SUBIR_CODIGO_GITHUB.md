# 📤 Subir Código a GitHub - bebidas-aborigen

## Situación Actual

- ✅ Repositorio existe: `bebidas-aborigen` (pero está vacío)
- ✅ Remote actualizado a: `https://github.com/OscarGarcia1900/bebidas-aborigen.git`
- ⚠️ Necesitas subir el código

---

## 🚀 Opción 1: Usar GitHub Desktop (Más Fácil)

### Paso 1: Descargar GitHub Desktop

1. Ve a: https://desktop.github.com/
2. Descarga e instala GitHub Desktop
3. Inicia sesión con tu cuenta de GitHub (`OscarGarcia1900`)

### Paso 2: Abrir el Repositorio

1. En GitHub Desktop, haz clic en **"File"** → **"Add Local Repository"**
2. Busca y selecciona: `/Users/oscargarcia/Documents/app_bebidas_ancestrales`
3. Haz clic en **"Add"**

### Paso 3: Publicar

1. En GitHub Desktop, verás todos tus archivos listos para commit
2. Abajo a la izquierda, escribe un mensaje: `"Proyecto inicial - Bebidas Ancestrales"`
3. Haz clic en **"Commit to main"**
4. Luego haz clic en **"Publish repository"** o **"Push origin"**
5. Selecciona **"Private"** si quieres que sea privado
6. Haz clic en **"Publish"**

**¡Listo!** Tu código estará en GitHub.

---

## 🚀 Opción 2: Usar Terminal con Token

### Paso 1: Crear Token de Acceso Personal

1. Ve a: https://github.com/settings/tokens
2. Haz clic en **"Generate new token"** → **"Generate new token (classic)"**
3. Nombre: `bebidas-aborigen`
4. Scope: Marca **`repo`** (toda la casilla)
5. Haz clic en **"Generate token"**
6. **Copia el token** (empieza con `ghp_...`)

### Paso 2: Subir el Código

Ejecuta estos comandos (reemplaza `TU_TOKEN` con el token que copiaste):

```bash
cd /Users/oscargarcia/Documents/app_bebidas_ancestrales

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Proyecto inicial - Bebidas Ancestrales"

# Subir usando el token
git push https://TU_TOKEN@github.com/OscarGarcia1900/bebidas-aborigen.git main
```

O actualiza el remote con el token:

```bash
git remote set-url origin https://TU_TOKEN@github.com/OscarGarcia1900/bebidas-aborigen.git
git push origin main
```

---

## ✅ Verificar que Funcionó

1. Ve a: https://github.com/OscarGarcia1900/bebidas-aborigen
2. Deberías ver todos tus archivos ahí
3. Deberías ver el commit "Proyecto inicial - Bebidas Ancestrales"

---

## 🎯 Después de Subir el Código

Una vez que el código esté en GitHub:

1. Vuelve a Vercel
2. Crea un nuevo proyecto o actualiza el existente
3. Selecciona el repositorio: `bebidas-aborigen` (ahora debería funcionar)
4. Configura las variables de entorno
5. Despliega

---

**💡 Recomendación:** Usa GitHub Desktop si es tu primera vez. Es más visual y fácil.

