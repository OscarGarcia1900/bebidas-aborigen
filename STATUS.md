# 🍶 Bebidas Ancestrales Aborigen - Status del Proyecto

## 📋 Resumen Ejecutivo

**Bebidas Ancestrales Aborigen** es una tienda web que celebra y comercializa bebidas tradicionales colombianas, rescatando el patrimonio cultural de nuestras comunidades indígenas y afrodescendientes.

### 🎯 Misión
Conectar a las personas con las raíces culturales colombianas a través de bebidas ancestrales auténticas, promoviendo el rescate de tradiciones milenarias y generando valor para comunidades productoras.

---

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + CSS custom properties
- **Gestión de Estado**: React Context API (CartContext)
- **Pagos**: Stripe (checkout session API)
- **Deploy**: Vercel (recomendado)

---

## 📂 Estructura del Proyecto

```
app_bebidas_ancestrales/
├── src/
│   ├── app/                    # App Router (Next.js)
│   │   ├── about/             # Página "Nuestra Historia"
│   │   ├── store/             # Tienda de productos
│   │   ├── cart/              # Carrito de compras
│   │   ├── stories/           # Relatos ancestrales
│   │   │   └── [id]/          # Detalle de cada relato
│   │   └── api/
│   │       └── create-checkout-session/  # Endpoint Stripe
│   ├── components/            # Componentes React
│   │   ├── Header.tsx         # Navegación principal
│   │   ├── Footer.tsx         # Pie de página
│   │   ├── HeroSection.tsx    # Banner principal
│   │   ├── Gallery.tsx        # Galería de imágenes
│   │   ├── ProductCard.tsx    # Tarjeta de producto
│   │   └── FeaturedProducts.tsx  # Productos destacados
│   ├── context/
│   │   └── CartContext.tsx    # Estado global del carrito
│   ├── data/                  # Datos mock
│   │   ├── products.ts        # Catálogo de bebidas
│   │   ├── stories.ts         # Historias culturales
│   │   └── gallery.ts         # Imágenes destacadas
│   ├── types/                 # Tipos TypeScript
│   │   ├── product.ts
│   │   └── story.ts
│   └── lib/
│       └── format.ts          # Utilidades (formateo de precio)
├── public/
│   └── docs/
│       └── catalogo-bebidas-aborigen.pdf  # Catálogo físico
└── STATUS.md                  # Este documento
```

---

## 🎨 Enfoque de Diseño y UX

### Principios de Diseño

1. **Autenticidad Cultural**: Colores tierra, tipografía legible, imágenes que reflejan tradición.
2. **Navegación Intuitiva**: Header fijo, CTAs claros, flujo de compra simplificado.
3. **Contenido de Valor**: Descripciones ricas que educan y conectan emocionalmente.
4. **Responsive First**: Diseño mobile-first optimizado para todos los dispositivos.
5. **Accesibilidad**: Contraste adecuado, estructura semántica HTML5.

### Paleta de Colores

```css
--background: #f8f5f0;      /* Beige suave */
--foreground: #2c1810;      /* Marrón oscuro */
--primary: #8b4513;         /* Terracota */
--secondary: #5c4033;       /* Marrón medio */
--accent: #d4a574;          /* Dorado tierra */
--border: #d4c5b0;          /* Beige cálido */
```

---

## 🚀 Funcionalidades Implementadas

### ✅ Completadas

- [x] **Home**: Hero section + productos destacados + galería
- [x] **Tienda**: Catálogo completo de bebidas con descripciones profesionales
- [x] **Carrito**: Añadir, eliminar productos, persistencia en Context API
- [x] **Relatos**: Historias culturales expandidas con narrativa profunda
- [x] **About**: Página institucional (pendiente personalizar)
- [x] **API Checkout**: Endpoint Stripe configurado (requiere claves)
- [x] **Tipos y Datos**: Productos con campo `description` completo
- [x] **Navegación**: Header responsive con menú y carrito
- [x] **Footer**: Enlaces institucionales y contacto

---

## 🎯 Productos Actuales

| Producto              | Región         | Precio | Descripción                                                                 |
|-----------------------|----------------|--------|-----------------------------------------------------------------------------|
| **Chicha de Maíz**    | Boyacá         | $15    | Bebida ceremonial Muisca con maíz fermentado artesanalmente                |
| **Guarapo de Caña**   | Cundinamarca   | $12    | Refresco campesino de caña de azúcar, ligeramente fermentado               |
| **Masato de Arroz**   | Tolima         | $14    | Bebida dulce de arroz, panela y especias aromáticas                        |
| **Biche del Pacífico**| Pacífico       | $35    | Aguardiente artesanal afrodescendiente, aromatizado con hierbas            |

---

## 📖 Relatos Culturales

Cada bebida tiene su historia completa en `/stories`:

1. **Chicha: Bebida Sagrada de los Muiscas** - Rituales, técnicas ancestrales, mujeres sabedoras.
2. **Guarapo: El Néctar del Campo Colombiano** - Trapiches, jornadas campesinas, fiestas patronales.
3. **Masato: Tradición Dulce del Tolima** - Variantes fermentadas, acompañante gastronómico.
4. **Biche: Resistencia y Cultura del Pacífico** - Patrimonio afro, alambiques tradicionales, identidad.

---

## 🔧 Próximos Pasos

### Prioridad Alta

- [ ] Configurar claves Stripe (`STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`)
- [ ] Probar flujo completo de checkout
- [ ] Personalizar página `/about` con historia de la empresa
- [ ] Añadir imágenes reales de productos (sustituir Unsplash)
- [ ] Mostrar `description` en tarjetas de producto (ProductCard.tsx)

### Prioridad Media

- [ ] Agregar filtros en `/store` (por región, precio)
- [ ] Implementar página de detalle de producto (`/store/[id]`)
- [ ] Añadir testimonios de clientes
- [ ] Newsletter subscription en Footer
- [ ] SEO: meta tags, Open Graph, JSON-LD

### Prioridad Baja

- [ ] Blog de contenido educativo sobre bebidas ancestrales
- [ ] Sistema de reseñas y calificaciones
- [ ] Programa de lealtad / descuentos
- [ ] Integración con envíos (Coordinadora, Servientrega)
- [ ] Panel admin para gestión de productos

---

## 📞 Contacto

- **Email**: bebidasancestralesaborigen@gmail.com
- **Instagram**: @casa_aborigen
- **Teléfono**: 311 503 5991

---

## 💡 Notas de Desarrollo

### Comandos Útiles

```bash
npm run dev          # Levantar servidor local (http://localhost:3000)
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # ESLint
```

### Variables de Entorno

Crear `.env.local`:

```bash
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## 🎨 Filosofía de Contenido

**Bebidas Ancestrales Aborigen** no es solo una tienda, es una experiencia cultural. Cada producto cuenta una historia, cada descripción educa, cada página conecta al usuario con las raíces colombianas.

### Tono de Voz

- **Cálido y cercano**: Hablamos de tradición con orgullo y respeto.
- **Educativo**: Cada texto enseña algo sobre cultura colombiana.
- **Emotivo**: Conectamos con la nostalgia, la identidad, el orgullo.
- **Profesional**: Mantenemos calidad y seriedad en el servicio.

---

**Última actualización**: 29 de septiembre de 2025
**Creado por**: Oscar García con asistencia de Claude (Cursor AI)
