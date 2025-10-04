import { Gallery } from '@/components/Gallery';
import { galleryImages } from '@/data/gallery';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[--foreground]">Quiénes Somos</h1>
        <p className="mt-3 text-lg text-[--accent]">
          Bebidas Ancestrales Aborigen
        </p>
      </div>

      <section className="mt-8 prose prose-lg max-w-none">
        <div className="bg-white rounded-xl border-2 border-[--border] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[--primary] mb-6">👋 Nuestra Historia</h2>
          
          <div className="mb-8 flex justify-center">
            <div className="rounded-lg overflow-hidden border-2 border-[--border] max-w-md">
              <Image 
                src="/images/angelica y oscar.png"
                alt="Angélica y Óscar - Fundadores de Bebidas Ancestrales Aborigen"
                width={900}
                height={1276}
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-[--secondary] leading-relaxed mb-4">
            ¡Hola! Somos <strong>Angélica y Óscar</strong>. Desde el año 2020, hemos estado 
            explorando el arte de las bebidas fermentadas y destiladas.
          </p>
          <p className="text-[--secondary] leading-relaxed">
            Esta tradición, que entrelaza sabor, herencia ancestral y creatividad, nos ha 
            brindado la oportunidad de deleitarnos con elixires artesanales de espíritus alegres, 
            al tiempo que nos conectamos con más almas para compartir esta pasión.
          </p>
        </div>
      </section>

      <section className="mt-10 prose prose-lg max-w-none">
        <div className="bg-white rounded-xl border-2 border-[--border] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[--primary] mb-4">🎯 Nuestra Misión</h2>
          <p className="text-[--secondary] leading-relaxed mb-4">
            Apostamos por la <strong>soberanía etílica</strong>, rescatando tradiciones y 
            conocimientos ancestrales para reivindicar las bebidas que consumimos. Nuestro 
            propósito es restaurar el valor sagrado y medicinal de cada sorbo, ofreciendo 
            elixires que celebran nuestra identidad y nutren el cuerpo y el espíritu.
          </p>
          <p className="text-[--secondary] leading-relaxed">
            Promovemos un <strong>consumo consciente</strong>, el respeto por la tierra y la 
            conexión con nuestras raíces a través de bebidas vivas, artesanales y llenas de historia.
          </p>
        </div>
      </section>

      <section className="mt-10 prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-[--accent]/10 to-[--primary]/10 rounded-xl border-2 border-[--primary]/30 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[--primary] mb-6">🏆 Reconocimientos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-lg overflow-hidden border-2 border-[--border] bg-white">
              <Image 
                src="/images/reconocimiento tercer puesto.png"
                alt="3er Puesto Festival del Guarapo 2023"
                width={738}
                height={534}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden border-2 border-[--border] bg-white">
              <Image 
                src="/images/reconocimiento primer puesto.png"
                alt="1er Puesto Festival del Guarapo 2024"
                width={742}
                height={524}
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-[--secondary] leading-relaxed mb-4">
            Estamos orgullosos de haber obtenido el <strong>3er puesto en el Festival del Guarapo 
            2023</strong> y el <strong>1er puesto en 2024</strong>, siendo reconocidos como el 
            <strong> mejor guarapo de Bogotá</strong> entre 23 concursantes.
          </p>
          <p className="text-[--secondary] leading-relaxed">
            La experiencia de ver a muchos disfrutar de nuestro producto es increíble y este 
            reconocimiento valida nuestro esfuerzo, inspirándonos a seguir innovando. Agradecemos 
            el apoyo recibido y miramos con emoción hacia el futuro.
          </p>
        </div>
      </section>

      <section className="mt-10 prose prose-lg max-w-none">
        <div className="bg-white rounded-xl border-2 border-[--border] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[--primary] mb-4">📞 Contacto</h2>
          <div className="space-y-3 text-[--secondary]">
            <p className="flex items-center gap-2">
              <span className="font-semibold">📧 Email:</span>
              <a 
                className="text-[--primary] hover:underline" 
                href="mailto:bebidasancestralesaborigen@gmail.com"
              >
                bebidasancestralesaborigen@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">📱 WhatsApp:</span>
              <a 
                className="text-[--primary] hover:underline" 
                href="https://wa.me/573115035991" 
                target="_blank" 
                rel="noreferrer"
              >
                +57 311 503 5991
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">📷 Instagram:</span>
              <a 
                className="text-[--primary] hover:underline" 
                href="https://instagram.com/casa_aborigen" 
                target="_blank" 
                rel="noreferrer"
              >
                @casa_aborigen
              </a>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-[--border]">
            <a
              href="/docs/catalogo-bebidas-aborigen.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#d4a574] px-8 py-4 font-bold text-white hover:bg-[#c49564] transition-all shadow-lg hover:shadow-xl text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar Catálogo Completo (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <Gallery images={galleryImages} />
      </section>
    </main>
  );
}