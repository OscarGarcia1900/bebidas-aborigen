import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { WhyAborigenSection } from '@/components/WhyAborigensSection';
import { ShippingBanner } from '@/components/ShippingBanner';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <>
      <Header />
      <ShippingBanner />
      <main>
        <HeroSection />
        <WhyAborigenSection />
        <FeaturedProducts />
        <TestimonialsSection />
      </main>
    </>
  );
}
