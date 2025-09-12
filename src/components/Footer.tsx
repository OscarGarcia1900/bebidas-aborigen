import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Bebidas Ancestrales</h3>
            <p className="mt-2 text-sm text-[--secondary] max-w-xs">
              Tradición, territorio y sabor. Elaboraciones artesanales con historia.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Explora</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/store" className="hover:underline">Tienda</Link></li>
              <li><Link href="/stories" className="hover:underline">Historias</Link></li>
              <li><Link href="/about" className="hover:underline">Nosotros</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contacto</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="mailto:hola@bebidasancestrales.co" className="hover:underline">hola@bebidasancestrales.co</a></li>
              <li><a href="https://wa.me/573001112233" target="_blank" rel="noreferrer" className="hover:underline">WhatsApp +57 300 111 2233</a></li>
              <li>Bogotá, Colombia</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Síguenos</h4>
            <div className="mt-3 flex gap-4">
              <a href="#" aria-label="Instagram" className="text-[--secondary] hover:text-[--foreground]">IG</a>
              <a href="#" aria-label="Facebook" className="text-[--secondary] hover:text-[--foreground]">FB</a>
              <a href="#" aria-label="TikTok" className="text-[--secondary] hover:text-[--foreground]">TT</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-6 text-xs text-[--secondary]">
          © {new Date().getFullYear()} Bebidas Ancestrales. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
