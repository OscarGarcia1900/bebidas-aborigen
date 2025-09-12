import { Product } from '@/types/product';
import Image from 'next/image';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={400}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-[--foreground]">
            <a href={`/product/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-[--secondary]">{product.region}</p>
        </div>
        <p className="text-sm font-medium text-[--foreground]">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
