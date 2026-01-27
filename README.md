This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🚀 Despliegue

### 👋 ¿Es tu primera vez desplegando una aplicación Next.js?

**👉 EMPIEZA AQUÍ**: **[EMPEZAR_AQUI.md](./EMPEZAR_AQUI.md)**

Este documento te guiará paso a paso y te dirá qué leer según tu nivel de experiencia.

### 📚 Guías Disponibles

- **[Guía Completa Desde Cero](./GUIA_COMPLETA_DESDE_CERO.md)** - Tutorial paso a paso para principiantes
- **[Mi Hosting NO Tiene Node.js](./SIN_NODEJS_OPCIONES.md)** - ⚠️ **LEE ESTO PRIMERO** si tu hosting no tiene Node.js
- **[Desplegar en Vercel](./DEPLOY_VERCEL.md)** - Guía paso a paso para Vercel (gratis y fácil)
- **[Guía de Despliegue en cPanel](./DEPLOY_CPANEL.md)** - Guía técnica para cPanel con Node.js
- **[Cómo Obtener las Claves](./OBTENER_CLAVES.md)** - Stripe y Wompi
- **[Checklist de Despliegue](./CHECKLIST_DESPLIEGUE.md)** - Lista de verificación completa

### Opción 1: cPanel (Hosting Compartido) - bebidasaborigen.com

Si ya sabes qué hacer, consulta la **[Guía de Despliegue en cPanel](./DEPLOY_CPANEL.md)** que incluye:

- Instrucciones paso a paso para cPanel
- Configuración con Node.js Selector
- Configuración de variables de entorno
- Configuración de SSL/HTTPS
- Solución de problemas comunes

**Requisitos:**
- Hosting con cPanel que soporte Node.js (Node.js Selector)
- Dominio: `bebidasaborigen.com`
- Variables de entorno configuradas (ver [VARIABLES_ENTORNO.md](./VARIABLES_ENTORNO.md))

### Opción 2: Hosting Propio (VPS/Servidor)

Para desplegar en tu propio servidor VPS, consulta la [Guía de Despliegue](./DEPLOY.md) que incluye:

- Instrucciones paso a paso para servidor Linux
- Configuración con PM2
- Configuración de Nginx como reverse proxy
- Configuración de SSL con Let's Encrypt
- Script de despliegue automatizado

**Requisitos:**
- Node.js 18.x o superior
- Servidor con Ubuntu/Debian (o similar)
- Variables de entorno configuradas (ver [VARIABLES_ENTORNO.md](./VARIABLES_ENTORNO.md))

**Despliegue rápido:**
```bash
# Configurar variables de entorno
# Crear archivo .env basado en VARIABLES_ENTORNO.md
# Editar .env con tus valores

# Desplegar
npm run deploy
```

### Opción 2: Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Variables de Entorno

Antes de desplegar, asegúrate de configurar las variables de entorno necesarias. Consulta [VARIABLES_ENTORNO.md](./VARIABLES_ENTORNO.md) para más detalles.
