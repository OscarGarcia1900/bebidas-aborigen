# ⚡ Pasos Rápidos - Resumen Ejecutivo

Esta es una versión resumida para cuando ya sepas qué hacer. Si es tu primera vez, usa `GUIA_COMPLETA_DESDE_CERO.md`.

---

## 📋 Checklist Rápido

### 1. Preparación Local
```bash
cd /Users/oscargarcia/Documents/app_bebidas_ancestrales
npm install
npm run build  # Verificar que funciona
```

### 2. Crear ZIP (sin node_modules, .next, .env)
```bash
zip -r proyecto.zip . -x "node_modules/*" -x ".next/*" -x ".env" -x ".git/*"
```

### 3. En cPanel
- [ ] Subir `proyecto.zip` a `public_html`
- [ ] Extraer el ZIP
- [ ] Crear aplicación en Node.js Selector:
  - Node version: 18.x
  - Mode: Production
  - Root: `public_html` (o donde subiste)
  - Startup: `server.js`
- [ ] Configurar variables de entorno:
  - `NODE_ENV=production`
  - `PORT=3000` (o el que asigne cPanel)
  - `STRIPE_SECRET_KEY=sk_live_...`
  - `NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...`
  - `NEXT_PUBLIC_WOMPI_PUBLIC_KEY=pub_prod_...`
  - `NEXT_PUBLIC_APP_URL=https://bebidasaborigen.com`
- [ ] Terminal: `cd public_html && npm install --production`
- [ ] Terminal: `npm run build`
- [ ] Node.js Selector: Start/Restart aplicación
- [ ] SSL: Activar AutoSSL para bebidasaborigen.com

### 4. Verificar
- [ ] https://bebidasaborigen.com carga
- [ ] Carrito funciona
- [ ] Pagos funcionan (probar con tarjeta de prueba)

---

## 🔑 Claves Necesarias

### Stripe (https://dashboard.stripe.com)
- Secret Key: `sk_live_...` (para STRIPE_SECRET_KEY)
- Publishable Key: `pk_live_...` (para NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

### Wompi (https://wompi.co)
- Public Key: `pub_prod_...` (para NEXT_PUBLIC_WOMPI_PUBLIC_KEY)

---

## 🐛 Comandos de Emergencia

```bash
# Ver logs
pm2 logs bebidas-ancestrales

# Reiniciar
pm2 restart bebidas-ancestrales

# Reinstalar dependencias
npm install --production

# Reconstruir
npm run build
```

---

## 📞 Si Algo Falla

1. Revisa logs en Node.js Selector
2. Verifica que aplicación esté "Running"
3. Verifica variables de entorno
4. Verifica que `npm run build` terminó sin errores

