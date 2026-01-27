import Image from 'next/image';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Cliente frecuente",
      content: "El Guarapo Aborigen es delicioso y me encanta que sea probiótico natural. Se nota la calidad artesanal en cada sorbo.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      role: "Amante de lo tradicional",
      content: "El Viche Curado me recordó a mi infancia en el Pacífico. Auténtico sabor, perfecta preparación. ¡Altamente recomendado!",
      rating: 5
    },
    {
      name: "Andrea Ruiz",
      role: "Promotora de salud",
      content: "Excelente alternativa saludable. Las bebidas fermentadas son lo mejor para la flora intestinal. Aborigen es mi favorito.",
      rating: 5
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[--background] to-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[--foreground] sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-[--secondary]">
            Calidad y tradición reconocida por quienes ya probaron nuestras bebidas
          </p>
        </div>

        {/* Reconocimientos */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-r from-yellow-50 to-yellow-100 border-4 border-yellow-400 p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-6xl shadow-lg">
                  🏆
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-yellow-900 mb-2">
                  1er Lugar - Festival del Guarapo 2024
                </h3>
                <p className="text-yellow-800 text-lg">
                  Nuestro <strong>Guarapo Aborigen</strong> ganó entre <strong>23 competidores</strong> en Bogotá. 
                  Reconocido como el mejor guarapo por su sabor, calidad y propiedades probióticas.
                </p>
                <div className="mt-4 flex items-center justify-center sm:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">⭐</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonios de clientes */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="rounded-2xl border-2 border-[--border] bg-white p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-[--secondary] italic leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="border-t border-[--border] pt-4">
                <p className="font-bold text-[--foreground]">{testimonial.name}</p>
                <p className="text-sm text-[--accent]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Galería de reconocimientos */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="text-2xl font-bold text-center text-[--foreground] mb-8">
            Nuestros Reconocimientos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden border-2 border-[--border] shadow-md hover:shadow-xl transition-all">
              <Image
                src="/images/reconocimiento primer puesto.png"
                alt="Reconocimiento 1er Puesto Festival del Guarapo 2024"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border-2 border-[--border] shadow-md hover:shadow-xl transition-all">
              <Image
                src="/images/reconocimiento tercer puesto.png"
                alt="Reconocimiento 3er Puesto"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

