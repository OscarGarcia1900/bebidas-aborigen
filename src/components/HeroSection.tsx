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
        {/* Capa oscura para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          El Sabor de Nuestras Raíces
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">
          Descubre la tradición y el misticismo en cada botella. Bebidas
          artesanales que cuentan la historia de nuestra tierra.
        </p>
        <button className="mt-8 rounded-md bg-[--primary] px-8 py-3 text-lg font-semibold text-background hover:bg-[--primary]/90">
          Explorar la Tienda
        </button>
      </div>
    </section>
  );
}
