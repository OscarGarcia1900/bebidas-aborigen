# ✅ Lista de Pruebas Después del Deployment

## 🎯 Verificación del Deployment

### Paso 1: Verificar que el Deployment Terminó

1. Ve a: https://vercel.com
2. Selecciona tu proyecto `bebidas-aborigen`
3. Ve a "Deployments"
4. Busca el deployment más reciente
5. Debe tener un **checkmark verde** ✅ y decir "Ready"

---

## 🧪 Pruebas de Navegación

### ✅ Prueba 1: Header Visible en Todas las Páginas

**Desde la página principal:**
- [ ] Verifica que el Header aparece arriba con el logo "🏺 Aborigen"
- [ ] Verifica que el menú muestra: "Inicio", "Tienda", "Historias", "Distribuidores", "Nosotros", "Contacto"
- [ ] Verifica que el ícono del carrito aparece a la derecha

**Desde la página de Tienda (`/store`):**
- [ ] Verifica que el Header sigue visible
- [ ] Verifica que puedes hacer clic en "Inicio" para volver a la página principal
- [ ] Verifica que el ícono del carrito sigue visible

**Desde otras páginas:**
- [ ] Prueba desde `/about` (Nosotros)
- [ ] Prueba desde `/contact` (Contacto)
- [ ] Prueba desde `/stories` (Historias)
- [ ] Verifica que el Header está visible en todas

---

## 🛒 Pruebas del Carrito

### ✅ Prueba 2: Agregar Productos al Carrito

**Desde la página de Tienda:**
1. [ ] Haz clic en "🛒 Agregar al carrito" en cualquier producto
2. [ ] Verifica que el número en el ícono del carrito aumenta (ej: "1", "2", etc.)
3. [ ] Agrega otro producto diferente
4. [ ] Verifica que el número se actualiza correctamente

### ✅ Prueba 3: Ir al Carrito desde Cualquier Página

**Desde la página de Tienda:**
- [ ] Haz clic en el ícono del carrito (arriba a la derecha)
- [ ] Debe llevarte a `/cart`
- [ ] Verifica que ves los productos que agregaste

**Desde la página principal:**
- [ ] Haz clic en el ícono del carrito
- [ ] Debe llevarte a `/cart`
- [ ] Verifica que los productos siguen ahí

**Desde otras páginas:**
- [ ] Prueba desde `/about`
- [ ] Prueba desde `/contact`
- [ ] Verifica que el carrito funciona desde todas las páginas

---

## 🔄 Pruebas de Navegación Completa

### ✅ Prueba 4: Navegación entre Páginas

**Flujo completo:**
1. [ ] Empieza en la página principal (`/`)
2. [ ] Haz clic en "Tienda" → Debe ir a `/store`
3. [ ] Haz clic en "Inicio" → Debe volver a `/`
4. [ ] Haz clic en "Historias" → Debe ir a `/stories`
5. [ ] Haz clic en "Inicio" → Debe volver a `/`
6. [ ] Haz clic en "Nosotros" → Debe ir a `/about`
7. [ ] Haz clic en "Inicio" → Debe volver a `/`
8. [ ] Haz clic en "Contacto" → Debe ir a `/contact`
9. [ ] Haz clic en "Inicio" → Debe volver a `/`

**Verifica que:**
- [ ] El Header siempre está visible
- [ ] El carrito siempre está visible
- [ ] La navegación funciona correctamente
- [ ] No hay errores en la consola del navegador (F12 → Console)

---

## 📱 Pruebas en Móvil (Opcional)

### ✅ Prueba 5: Menú Móvil

1. [ ] Abre el sitio en un dispositivo móvil o reduce el ancho del navegador
2. [ ] Verifica que aparece un botón de menú (☰) en lugar del menú completo
3. [ ] Haz clic en el botón de menú
4. [ ] Verifica que se despliega un menú con todas las opciones
5. [ ] Haz clic en "🏠 Inicio" → Debe cerrar el menú y llevarte a la página principal
6. [ ] Verifica que el ícono del carrito sigue visible

---

## 🐛 Si Encuentras Problemas

### Problema: El Header no aparece en alguna página
- **Solución**: Verifica que el deployment terminó correctamente
- **Solución**: Refresca la página (Ctrl+F5 o Cmd+Shift+R)

### Problema: El carrito no funciona
- **Solución**: Verifica que no hay errores en la consola del navegador (F12)
- **Solución**: Limpia la caché del navegador

### Problema: Los cambios no se ven
- **Solución**: Espera 2-3 minutos después del deployment
- **Solución**: Refresca la página con Ctrl+F5 (Windows) o Cmd+Shift+R (Mac)

---

## ✅ Checklist Final

- [ ] Header visible en todas las páginas
- [ ] Menú "Inicio" funciona correctamente
- [ ] Carrito visible en todas las páginas
- [ ] Agregar productos al carrito funciona
- [ ] Ir al carrito desde cualquier página funciona
- [ ] Navegación entre páginas funciona
- [ ] No hay errores en la consola del navegador

---

## 🎉 ¡Listo!

Si todas las pruebas pasan, tu sitio está funcionando correctamente con:
- ✅ Navegación completa
- ✅ Carrito accesible desde todas las páginas
- ✅ Header visible en todas las páginas

---

**URL de tu sitio:** `https://bebidas-aborigen-xxxxx.vercel.app` (reemplaza con tu URL real)

¿Encontraste algún problema? Compártelo y lo solucionamos juntos.
