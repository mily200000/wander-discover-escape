import { TravelCard } from "@/components/ui/travel-card";

const featuredTravels = [
  {
    title: "Escapade Romantique à Santorini",
    destination: "Grèce, Îles Cyclades",
    duration: "7 jours",
    price: "1,299€",
    originalPrice: "1,599€",
    rating: 4.8,
    reviewCount: 127,
    image: "/placeholder.svg",
    category: "Romantique",
    maxPeople: 2
  },
  {
    title: "Safari Aventure au Kenya",
    destination: "Kenya, Masai Mara",
    duration: "10 jours",
    price: "2,899€",
    rating: 4.9,
    reviewCount: 89,
    image: "/placeholder.svg",
    category: "Aventure",
    maxPeople: 8
  },
  {
    title: "Découverte du Marrakech",
    destination: "Maroc, Marrakech",
    duration: "5 jours",
    price: "699€",
    originalPrice: "899€",
    rating: 4.6,
    reviewCount: 203,
    image: "/placeholder.svg",
    category: "Culture",
    maxPeople: 6
  }
];

export function FeaturedTravels() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Offres Spéciales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profitez de nos meilleures offres avec des réductions exceptionnelles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTravels.map((travel, index) => (
            <TravelCard key={index} {...travel} />
          ))}
        </div>
      </div>
    </section>
  );
}