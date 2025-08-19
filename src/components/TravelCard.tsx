import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface TravelCardProps {
  id: string;
  title: string;
  destination: string;
  image: string;
  price: number;
  duration: string;
  rating: number;
  reviewCount: number;
  maxGuests: number;
  category: string;
  isSpecialOffer?: boolean;
}

const TravelCard = ({
  id,
  title,
  destination,
  image,
  price,
  duration,
  rating,
  reviewCount,
  maxGuests,
  category,
  isSpecialOffer = false,
}: TravelCardProps) => {
  return (
    <Card className="group overflow-hidden transition-smooth hover:shadow-floating">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
        />
        {isSpecialOffer && (
          <Badge className="absolute top-3 left-3 gradient-secondary text-secondary-foreground">
            Offre spéciale
          </Badge>
        )}
        <Badge variant="outline" className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm">
          {category}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
        </div>

        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{destination}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>Max {maxGuests}</span>
          </div>
        </div>

        <div className="text-right">
          <span className="text-2xl font-bold text-primary">{price}€</span>
          <span className="text-sm text-muted-foreground"> / personne</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link to={`/travel/${id}`} className="w-full">
          <Button className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-smooth">
            Voir les détails
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TravelCard;