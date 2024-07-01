import FinalCTASection from '@/components/FinalCTASection';
import HomeAttractionsSection from '@/components/HomeAttractionsSection';
import HomeCuisineSection from '@/components/HomeCuisineSection';
import HomeExperiencesSection from '@/components/HomeExperiencesSection';
import HomeHeroSection from '@/components/HomeHeroSection';
import HomeIntroSection from '@/components/HomeIntroSection';

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <HomeHeroSection />

      {/* intro section */}
      <HomeIntroSection />

      {/* attractions section */}
      <HomeAttractionsSection />

      {/* cuisine section */}
      <HomeCuisineSection />

      {/* experiences section */}
      <HomeExperiencesSection />

      {/* final CTA section */}
      <FinalCTASection />
    </main>
  );
}
