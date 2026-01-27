import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      {/* Usaremos un div con background-image para mejor control */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1598282377048-52b80a424b3b?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* Overlay con verde oliva de la marca */}
        <div className="absolute inset-0 bg-[#5a6b3d]/80" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Aborigen
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">
          Fabricación y distribución de bebidas ancestrales. Descubre la tradición y el sabor
          que cuentan la historia de nuestra tierra en cada botella.
        </p>
        <Link 
          href="/store"
          className="mt-8 rounded-md bg-white px-8 py-3 text-lg font-semibold text-[#2c1810] hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          Explorar la Tienda
        </Link>
      </div>
    </section>
  );
}
