import { HeroSection } from "@/components/sections/hero-section";
import { CategoriesSection } from "@/components/sections/categories-section";
import { FeaturedTravels } from "@/components/sections/featured-travels";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <FeaturedTravels />
    </div>
  );
};

export default Index;
