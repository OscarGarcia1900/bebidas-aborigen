import { Gallery } from '@/components/Gallery';
import { galleryImages } from '@/data/gallery';

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Nosotros</h1>

      <section className="mt-6 space-y-3">
        <h2 className="text-xl font-semibold">Nuestra Marca</h2>
        <p className="text-[--secondary]">
          Bebidas Ancestrales nace del respeto por las tradiciones que nos
          anteceden. Creemos en los procesos artesanales, en el territorio y en
          el poder de las historias que se comparten alrededor de una mesa.
        </p>
        <div className="pt-2">
          <a
            href="/docs/catalogo-bebidas-aborigen.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-[--primary] px-4 py-2 font-semibold text-background hover:bg-[--primary]/90"
          >
            Ver catálogo (PDF)
          </a>
        </div>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Misión</h2>
        <p className="text-[--secondary]">
          Preservar y difundir las bebidas tradicionales de nuestras regiones,
          conectando productores locales con amantes de los sabores auténticos,
          de forma sostenible y justa.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Contacto</h2>
        <p className="text-[--secondary]">
          Escríbenos a <a className="underline" href="mailto:hola@bebidasancestrales.co">hola@bebidasancestrales.co</a> o por WhatsApp: <a className="underline" href="https://wa.me/573001112233" target="_blank" rel="noreferrer">+57 300 111 2233</a>.
        </p>
      </section>

      <Gallery images={galleryImages} />
    </main>
  );
}
