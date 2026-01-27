# Variables de Entorno Requeridas

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```bash
# Variables de entorno para producción

# Stripe - Pagos con tarjeta
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx

# Wompi - Pagos PSE y otros métodos
NEXT_PUBLIC_WOMPI_PUBLIC_KEY=pub_test_xxxxxxxxxxxxxxxxxxxxx

# URL de la aplicación (sin barra final)
# En desarrollo:
NEXT_PUBLIC_APP_URL=http://localhost:3000
# En producción (cPanel):
NEXT_PUBLIC_APP_URL=https://bebidasaborigen.com

# Node Environment
NODE_ENV=production

# Puerto (opcional, por defecto 3000)
PORT=3000
```

## Cómo obtener las claves:

### Stripe
1. Ve a https://dashboard.stripe.com/
2. Inicia sesión o crea una cuenta
3. Ve a "Developers" > "API keys"
4. Copia la "Secret key" para `STRIPE_SECRET_KEY`
5. Copia la "Publishable key" para `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`

### Wompi
1. Ve a https://wompi.co/
2. Crea una cuenta o inicia sesión
3. Ve a la sección de API keys
4. Copia la clave pública para `NEXT_PUBLIC_WOMPI_PUBLIC_KEY`

## Importante

- **NUNCA** subas el archivo `.env` a Git
- En producción, usa las claves de producción (no las de test)
- Asegúrate de que `NEXT_PUBLIC_APP_URL` apunte a tu dominio real en producción

