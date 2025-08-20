import { SearchBar } from "@/components/ui/search-bar";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Explorez le Monde
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez des destinations extraordinaires avec nos forfaits voyage sur mesure. 
            De l'aventure à la détente, nous créons vos souvenirs inoubliables.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}