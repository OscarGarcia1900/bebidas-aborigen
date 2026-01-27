# 🔧 Actualizar Remote de Git

## Paso 1: Eliminar el remote actual

```bash
git remote remove origin
```

## Paso 2: Agregar el remote correcto

Reemplaza `TU_USUARIO_DE_GITHUB` con tu usuario real de GitHub:

```bash
git remote add origin https://github.com/TU_USUARIO_DE_GITHUB/bebidas-ancestrales.git
```

## Paso 3: Verificar

```bash
git remote -v
```

Deberías ver tu usuario real en lugar de `TU_USUARIO`.

## Paso 4: Subir tu código

```bash
git add .
git commit -m "Proyecto inicial - Bebidas Ancestrales"
git push -u origin main
```

---

## ¿Cómo saber tu usuario de GitHub?

1. Ve a https://github.com
2. Haz clic en tu foto de perfil (arriba derecha)
3. Tu usuario aparece en la URL: `https://github.com/TU_USUARIO`
4. O simplemente mira la URL cuando estás en tu perfil

---

## Ejemplo

Si tu usuario es `oscargarcia123`, el comando sería:

```bash
git remote remove origin
git remote add origin https://github.com/oscargarcia123/bebidas-ancestrales.git
git remote -v
```

