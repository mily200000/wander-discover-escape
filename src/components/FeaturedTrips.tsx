import TravelCard from "./TravelCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Mock data for featured trips
const featuredTrips = [
  {
    id: "1",
    title: "Escapade Romantique à Santorin",
    destination: "Santorin, Grèce",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    price: 899,
    duration: "5 jours",
    rating: 4.9,
    reviewCount: 127,
    maxGuests: 2,
    category: "Romantique",
    isSpecialOffer: true
  },
  {
    id: "2",
    title: "Safari Aventure au Kenya",
    destination: "Masai Mara, Kenya",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    price: 1299,
    duration: "7 jours",
    rating: 4.8,
    reviewCount: 89,
    maxGuests: 8,
    category: "Aventure"
  },
  {
    id: "3",
    title: "Circuit Culturel au Japon",
    destination: "Tokyo & Kyoto, Japon",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    price: 1599,
    duration: "10 jours",
    rating: 4.9,
    reviewCount: 203,
    maxGuests: 6,
    category: "Culturel"
  },
  {
    id: "4",
    title: "Randonnée dans les Alpes",
    destination: "Chamonix, France",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    price: 599,
    duration: "4 jours",
    rating: 4.7,
    reviewCount: 156,
    maxGuests: 12,
    category: "Montagne",
    isSpecialOffer: true
  },
  {
    id: "5",
    title: "Croisière aux Maldives",
    destination: "Maldives",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    price: 2299,
    duration: "8 jours",
    rating: 5.0,
    reviewCount: 67,
    maxGuests: 4,
    category: "Luxe"
  },
  {
    id: "6",
    title: "Découverte du Maroc",
    destination: "Marrakech & Sahara",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6930311?auto=format&fit=crop&w=800&q=80",
    price: 799,
    duration: "6 jours",
    rating: 4.6,
    reviewCount: 134,
    maxGuests: 10,
    category: "Culturel"
  }
];

const FeaturedTrips = () => {
  return (
    <section className="py-16 px-4 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Voyages <span className="text-primary">Populaires</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Découvrez nos destinations les plus appréciées par nos voyageurs
            </p>
          </div>
          <Button 
            variant="outline" 
            className="hidden md:flex items-center hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            Voir tout
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredTrips.map((trip) => (
            <TravelCard key={trip.id} {...trip} />
          ))}
        </div>

        <div className="text-center md:hidden">
          <Button className="gradient-primary text-primary-foreground">
            Voir tous les voyages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrips;