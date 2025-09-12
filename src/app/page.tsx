import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        {/* Aquí irán las próximas secciones: Sobre Nosotros, etc. */}
      </main>
    </>
  );
}
