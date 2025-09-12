import Image from 'next/image';

export function Gallery({ images }: { images: string[] }) {
  if (!images.length) return null;
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-semibold">Galería</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-md">
              <Image src={src} width={600} height={600} alt={`Foto ${idx + 1}`} className="h-32 w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
