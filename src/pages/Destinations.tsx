import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TravelCard from "@/components/TravelCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SlidersHorizontal, X } from "lucide-react";

// Mock data for destinations
const destinations = [
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
  },
  {
    id: "7",
    title: "Road Trip en Islande",
    destination: "Reykjavik, Islande",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    price: 1199,
    duration: "9 jours",
    rating: 4.8,
    reviewCount: 92,
    maxGuests: 6,
    category: "Aventure"
  },
  {
    id: "8",
    title: "Plages de Thaïlande",
    destination: "Phuket, Thaïlande",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    price: 699,
    duration: "7 jours",
    rating: 4.5,
    reviewCount: 178,
    maxGuests: 8,
    category: "Plage"
  }
];

const categories = ["Tous", "Romantique", "Aventure", "Culturel", "Montagne", "Luxe", "Plage"];
const durations = ["Tous", "1-3 jours", "4-7 jours", "8-14 jours", "15+ jours"];

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedDuration, setSelectedDuration] = useState("Tous");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || dest.category === selectedCategory;
    const matchesPrice = dest.price >= priceRange[0] && dest.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const clearFilters = () => {
    setSelectedCategory("Tous");
    setSelectedDuration("Tous");
    setPriceRange([0, 3000]);
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Explorez Nos Destinations
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Découvrez des expériences uniques à travers le monde
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 px-4 bg-accent/30 border-b">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher une destination..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:w-auto"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filtres
            </Button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="bg-card p-6 rounded-lg shadow-card mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filtrer les résultats</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="w-4 h-4 mr-2" />
                  Effacer
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Catégorie</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Duration Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Durée</label>
                  <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {durations.map(duration => (
                        <SelectItem key={duration} value={duration}>
                          {duration}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Prix: {priceRange[0]}€ - {priceRange[1]}€
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={3000}
                    min={0}
                    step={50}
                    className="mt-4"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Active Filters */}
          {(selectedCategory !== "Tous" || selectedDuration !== "Tous" || searchTerm) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {searchTerm && (
                <Badge variant="secondary" className="flex items-center gap-2">
                  Recherche: "{searchTerm}"
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchTerm("")} />
                </Badge>
              )}
              {selectedCategory !== "Tous" && (
                <Badge variant="secondary" className="flex items-center gap-2">
                  {selectedCategory}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory("Tous")} />
                </Badge>
              )}
            </div>
          )}

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            {filteredDestinations.length} destination{filteredDestinations.length > 1 ? 's' : ''} trouvée{filteredDestinations.length > 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map(destination => (
                <TravelCard key={destination.id} {...destination} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">Aucune destination trouvée</h3>
              <p className="text-muted-foreground mb-4">
                Essayez de modifier vos critères de recherche
              </p>
              <Button onClick={clearFilters}>
                Effacer les filtres
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;