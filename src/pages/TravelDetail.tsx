import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Clock, Users, Calendar, Heart, Share2, CheckCircle, X } from "lucide-react";

const TravelDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data for travel detail
  const travelData = {
    id: "1",
    title: "Escapade Romantique à Santorin",
    destination: "Santorin, Grèce",
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1539650116574-75c0c6930311?auto=format&fit=crop&w=1200&q=80"
    ],
    price: 899,
    originalPrice: 1199,
    duration: "5 jours / 4 nuits",
    rating: 4.9,
    reviewCount: 127,
    maxGuests: 2,
    category: "Romantique",
    isSpecialOffer: true,
    description: "Découvrez la magie de Santorin avec cette escapade romantique inoubliable. Admirez les couchers de soleil légendaires d'Oia, explorez les villages blancs perchés sur les falaises et dégustez les vins locaux avec vue sur la mer Égée.",
    highlights: [
      "Couchers de soleil spectaculaires à Oia",
      "Visite des villages de Fira et Imerovigli",
      "Dégustation de vins dans les vignobles locaux",
      "Croisière au coucher du soleil",
      "Hébergement en hôtel boutique avec vue mer"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrivée à Santorin",
        activities: ["Arrivée à l'aéroport", "Installation à l'hôtel", "Dîner de bienvenue"]
      },
      {
        day: 2,
        title: "Découverte d'Oia",
        activities: ["Visite du village d'Oia", "Déjeuner avec vue", "Coucher de soleil légendaire"]
      },
      {
        day: 3,
        title: "Fira et Imerovigli",
        activities: ["Exploration de Fira", "Musée préhistorique", "Promenade à Imerovigli"]
      },
      {
        day: 4,
        title: "Dégustation et détente",
        activities: ["Visite de vignobles", "Dégustation de vins", "Temps libre à la piscine"]
      },
      {
        day: 5,
        title: "Départ",
        activities: ["Petit-déjeuner", "Derniers achats", "Transfert aéroport"]
      }
    ],
    included: [
      "Vols aller-retour",
      "Hébergement 4 nuits en hôtel 4*",
      "Petit-déjeuner quotidien",
      "2 dîners",
      "Transferts aéroport-hôtel",
      "Guide francophone",
      "Assurance voyage"
    ],
    notIncluded: [
      "Déjeuners (sauf mention)",
      "Boissons",
      "Pourboires",
      "Dépenses personnelles",
      "Excursions optionnelles"
    ],
    reviews: [
      {
        name: "Marie & Pierre",
        rating: 5,
        comment: "Un voyage absolument magique ! Santorin est encore plus beau en réalité. L'organisation était parfaite.",
        date: "Il y a 2 semaines"
      },
      {
        name: "Sophie L.",
        rating: 5,
        comment: "Les couchers de soleil d'Oia sont à couper le souffle. L'hôtel était parfait et très romantique.",
        date: "Il y a 1 mois"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Accueil</Link>
            <span>/</span>
            <Link to="/destinations" className="hover:text-primary">Destinations</Link>
            <span>/</span>
            <span className="text-foreground">{travelData.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {travelData.isSpecialOffer && (
                    <Badge className="gradient-secondary text-secondary-foreground">
                      Offre spéciale
                    </Badge>
                  )}
                  <Badge variant="outline">{travelData.category}</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-2">{travelData.title}</h1>
              
              <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{travelData.destination}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-secondary text-secondary" />
                  <span className="font-medium">{travelData.rating}</span>
                  <span className="ml-1">({travelData.reviewCount} avis)</span>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-8">
              <div className="mb-4">
                <img
                  src={travelData.images[selectedImage]}
                  alt={travelData.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {travelData.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${travelData.title} ${index + 1}`}
                    className={`h-24 object-cover rounded cursor-pointer transition-smooth ${
                      selectedImage === index ? "ring-2 ring-primary" : "hover:opacity-80"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Aperçu</TabsTrigger>
                <TabsTrigger value="itinerary">Itinéraire</TabsTrigger>
                <TabsTrigger value="included">Inclus</TabsTrigger>
                <TabsTrigger value="reviews">Avis</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {travelData.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Points forts</h3>
                    <ul className="space-y-2">
                      {travelData.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="itinerary" className="mt-6">
                <div className="space-y-4">
                  {travelData.itinerary.map((day) => (
                    <Card key={day.day}>
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2">
                          Jour {day.day}: {day.title}
                        </h4>
                        <ul className="space-y-1">
                          {day.activities.map((activity, index) => (
                            <li key={index} className="text-muted-foreground">
                              • {activity}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="included" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-4 text-secondary">
                        Inclus dans le prix
                      </h4>
                      <ul className="space-y-2">
                        {travelData.included.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-4 text-destructive">
                        Non inclus
                      </h4>
                      <ul className="space-y-2">
                        {travelData.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <X className="w-4 h-4 text-destructive mr-2" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {travelData.reviews.map((review, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">{review.name}</h4>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-2">{review.comment}</p>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-floating">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    {travelData.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {travelData.originalPrice}€
                      </span>
                    )}
                    <span className="text-3xl font-bold text-primary">
                      {travelData.price}€
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">par personne</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Durée</span>
                    </div>
                    <span className="text-sm font-medium">{travelData.duration}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Max voyageurs</span>
                    </div>
                    <span className="text-sm font-medium">{travelData.maxGuests}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Prochains départs</span>
                    </div>
                    <span className="text-sm font-medium">Disponible</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link to={`/booking/${travelData.id}`}>
                    <Button className="w-full gradient-primary text-primary-foreground" size="lg">
                      Réserver maintenant
                    </Button>
                  </Link>
                  
                  <Button variant="outline" className="w-full">
                    Demander un devis
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-xs text-muted-foreground text-center">
                    Annulation gratuite jusqu'à 48h avant le départ
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TravelDetail;