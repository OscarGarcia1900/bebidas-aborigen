import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[#d4a574] bg-[#d4a574] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Aborigen</h3>
            <p className="mt-2 text-sm text-white/90 max-w-xs">
              Fabricación y distribución de bebidas ancestrales. Tradición, territorio y sabor en cada botella.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Explora</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li><Link href="/store" className="hover:underline hover:text-white">Tienda</Link></li>
              <li><Link href="/stories" className="hover:underline hover:text-white">Historias</Link></li>
              <li><Link href="/about" className="hover:underline hover:text-white">Nosotros</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contacto</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li><a href="mailto:bebidasancestralesaborigen@gmail.com" className="hover:underline hover:text-white">bebidasancestralesaborigen@gmail.com</a></li>
              <li><a href="https://wa.me/573115035991" target="_blank" rel="noreferrer" className="hover:underline hover:text-white">WhatsApp +57 311 503 5991</a></li>
              <li><a href="https://www.instagram.com/casa_aborigen" target="_blank" rel="noreferrer" className="hover:underline hover:text-white">Instagram @casa_aborigen</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Síguenos</h4>
            <div className="mt-3 flex gap-4">
              <a href="https://www.instagram.com/casa_aborigen" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white/90 hover:text-white text-xl">📷</a>
              <a href="https://wa.me/573115035991" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-white/90 hover:text-white text-xl">💬</a>
              <a href="mailto:bebidasancestralesaborigen@gmail.com" aria-label="Email" className="text-white/90 hover:text-white text-xl">📧</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/30 pt-6 text-xs text-white/90">
          © {new Date().getFullYear()} Aborigen. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
