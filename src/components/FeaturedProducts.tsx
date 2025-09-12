import { mockProducts } from '@/data/products';
import { ProductCard } from './ProductCard';

export function FeaturedProducts() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[--foreground] sm:text-4xl">
            Nuestra Selección Ancestral
          </h2>
          <p className="mt-2 text-lg leading-8 text-[--secondary]">
            Cada bebida es una historia. Empieza la tuya aquí.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
