import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Search, Filter, X, Heart, MapPin, Calendar } from "lucide-react";

// Mock data for gallery
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    destination: "Santorin, Grèce",
    category: "Plage",
    date: "Septembre 2024",
    title: "Coucher de soleil à Oia",
    likes: 127
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    destination: "Masai Mara, Kenya",
    category: "Safari",
    date: "Août 2024",
    title: "Safari au coucher du soleil",
    likes: 89
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    destination: "Tokyo, Japon",
    category: "Culturel",
    date: "Juillet 2024",
    title: "Temple traditionnel",
    likes: 203
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    destination: "Chamonix, France",
    category: "Montagne",
    date: "Juin 2024",
    title: "Pics enneigés des Alpes",
    likes: 156
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1539650116574-75c0c6930311?auto=format&fit=crop&w=800&q=80",
    destination: "Marrakech, Maroc",
    category: "Culturel",
    date: "Mai 2024",
    title: "Médina de Marrakech",
    likes: 134
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80",
    destination: "Maldives",
    category: "Plage",
    date: "Avril 2024",
    title: "Lagon turquoise",
    likes: 67
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    destination: "Reykjavik, Islande",
    category: "Nature",
    date: "Mars 2024",
    title: "Aurores boréales",
    likes: 92
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    destination: "Phuket, Thaïlande",
    category: "Plage",
    date: "Février 2024",
    title: "Plage paradisiaque",
    likes: 178
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    destination: "Pérou",
    category: "Aventure",
    date: "Janvier 2024",
    title: "Machu Picchu",
    likes: 245
  }
];

const categories = ["Toutes", "Plage", "Montagne", "Culturel", "Safari", "Nature", "Aventure"];

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = galleryImages.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Toutes" || image.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Galerie Photos
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Découvrez la beauté de nos destinations à travers les yeux de nos voyageurs
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          {/* Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher dans la galerie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "gradient-primary text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Active Filters */}
          {(selectedCategory !== "Toutes" || searchTerm) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {searchTerm && (
                <Badge variant="secondary" className="flex items-center gap-2">
                  Recherche: "{searchTerm}"
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchTerm("")} />
                </Badge>
              )}
              {selectedCategory !== "Toutes" && (
                <Badge variant="secondary" className="flex items-center gap-2">
                  {selectedCategory}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory("Toutes")} />
                </Badge>
              )}
            </div>
          )}

          <p className="text-muted-foreground">
            {filteredImages.length} photo{filteredImages.length > 1 ? 's' : ''} trouvée{filteredImages.length > 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden transition-smooth hover:shadow-card hover:-translate-y-1">
                      <div className="relative">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                        
                        {/* Overlay Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-smooth opacity-0 group-hover:opacity-100">
                          <h3 className="font-semibold mb-1">{image.title}</h3>
                          <div className="flex items-center text-sm mb-2">
                            <MapPin className="w-3 h-3 mr-1" />
                            <span>{image.destination}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              <span>{image.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-3 h-3 mr-1" />
                              <span>{image.likes}</span>
                            </div>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <Badge className="absolute top-2 left-2 bg-primary/80 text-primary-foreground">
                          {image.category}
                        </Badge>
                      </div>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-auto max-h-[80vh] object-contain"
                      />
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h2 className="text-2xl font-bold mb-2">{image.title}</h2>
                            <div className="flex items-center text-muted-foreground mb-2">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span>{image.destination}</span>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>{image.date}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2">
                              {image.category}
                            </Badge>
                            <div className="flex items-center justify-end text-muted-foreground">
                              <Heart className="w-4 h-4 mr-1" />
                              <span>{image.likes} likes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">Aucune photo trouvée</h3>
              <p className="text-muted-foreground mb-4">
                Essayez de modifier vos critères de recherche
              </p>
              <Button onClick={() => {setSearchTerm(""); setSelectedCategory("Toutes");}}>
                Voir toutes les photos
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;