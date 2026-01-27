# 🔐 Configurar Git Personal - Guía Rápida

## ✅ Estado Actual

Tu proyecto tiene Git inicializado **LOCALMENTE**, pero **NO está conectado** a ningún repositorio remoto (ni personal ni de empresa). Esto significa que:

- ✅ Puedes hacer commits locales
- ✅ Tienes control de versiones
- ❌ NO está conectado a GitHub/GitLab
- ❌ NO puedes hacer push/pull

---

## 🎯 Opciones Disponibles

### Opción 1: Crear Repositorio Personal en GitHub (Recomendado)

Si quieres tener tu código en GitHub para:
- Hacer backup
- Desplegar en Vercel fácilmente
- Compartir el código si lo necesitas

**Pasos:**

#### 1. Crear cuenta en GitHub (si no la tienes)

1. Ve a: https://github.com/signup
2. Crea una cuenta personal (gratis)
3. Confirma tu email

#### 2. Crear un nuevo repositorio

1. En GitHub, haz clic en el botón "+" (arriba derecha)
2. Selecciona "New repository"
3. Nombre: `bebidas-ancestrales` (o el que prefieras)
4. Descripción: "Tienda de bebidas ancestrales"
5. Selecciona **"Private"** (privado) - así solo tú puedes verlo
6. **NO** marques "Initialize with README"
7. Haz clic en "Create repository"

#### 3. Conectar tu proyecto local con GitHub

En tu terminal, ejecuta estos comandos:

```bash
cd /Users/oscargarcia/Documents/app_bebidas_ancestrales

# Configurar tu nombre y email (si no lo has hecho)
git config user.name "Tu Nombre"
git config user.email "tu-email-personal@gmail.com"

# Agregar el repositorio remoto (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/bebidas-ancestrales.git

# Verificar que se agregó correctamente
git remote -v
```

Deberías ver algo como:
```
origin  https://github.com/TU_USUARIO/bebidas-ancestrales.git (fetch)
origin  https://github.com/TU_USUARIO/bebidas-ancestrales.git (push)
```

#### 4. Hacer tu primer commit y push

```bash
# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Proyecto inicial - Bebidas Ancestrales"

# Subir a GitHub
git push -u origin main
```

Te pedirá usuario y contraseña de GitHub. Úsalos.

**¡Listo!** Tu código ahora está en tu repositorio personal de GitHub.

---

### Opción 2: Trabajar Solo Localmente (Sin GitHub)

Si prefieres NO usar GitHub:

- ✅ Puedes seguir haciendo commits locales
- ✅ Tienes control de versiones
- ❌ No tienes backup en la nube
- ❌ No puedes desplegar fácilmente en Vercel

**No necesitas hacer nada**, tu repositorio local funciona perfectamente así.

---

### Opción 3: Usar GitLab o Bitbucket

Si prefieres otra plataforma:

- **GitLab**: https://gitlab.com
- **Bitbucket**: https://bitbucket.org

El proceso es similar, solo cambia la URL del repositorio.

---

## 🔍 Verificar tu Configuración Actual

Ejecuta estos comandos para ver tu configuración:

```bash
# Ver si hay remotes configurados
git remote -v

# Ver tu nombre y email configurados
git config user.name
git config user.email

# Ver el estado del repositorio
git status
```

---

## ⚠️ Importante: Archivos que NO Debes Subir

**NUNCA** subas estos archivos a Git:

- `.env` o `.env.local` (contiene claves secretas)
- `node_modules/` (muy pesado, se instala en cada máquina)
- `.next/` (se genera al hacer build)

Estos archivos ya están en `.gitignore`, así que Git los ignorará automáticamente.

---

## 🚀 Para Desplegar en Vercel

Si creas un repositorio en GitHub, puedes:

1. Conectar Vercel con GitHub
2. Vercel detectará automáticamente los cambios
3. Cada vez que hagas `git push`, Vercel desplegará automáticamente

Es mucho más fácil que subir archivos manualmente.

---

## 📝 Resumen de Comandos Útiles

```bash
# Ver estado
git status

# Agregar archivos
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Ver remotes
git remote -v

# Agregar remote
git remote add origin https://github.com/USUARIO/REPO.git

# Subir cambios
git push origin main

# Bajar cambios
git pull origin main
```

---

## ❓ ¿Qué Opción Elegir?

**Recomendación**: Opción 1 (GitHub Personal)

**Por qué:**
- ✅ Backup automático de tu código
- ✅ Fácil despliegue en Vercel
- ✅ Puedes hacerlo privado (solo tú lo ves)
- ✅ Gratis
- ✅ Puedes trabajar desde cualquier computadora

**Si tienes dudas**, puedes trabajar localmente primero y crear el repositorio en GitHub después cuando estés listo para desplegar.

---

## 🆘 Si Necesitas Ayuda

Si tienes problemas:
1. Verifica que tu cuenta de GitHub esté creada
2. Verifica que el repositorio esté creado en GitHub
3. Verifica que la URL del remote sea correcta
4. Si te da error de autenticación, puede que necesites un token de acceso personal

---

**💡 Tip**: Si trabajas en una empresa, asegúrate de usar tu cuenta **personal** de GitHub, no la de la empresa, para proyectos personales.

