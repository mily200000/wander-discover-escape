import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Users } from "lucide-react";

interface TravelCardProps {
  title: string;
  destination: string;
  duration: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  maxPeople: number;
}

export function TravelCard({
  title,
  destination,
  duration,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  category,
  maxPeople
}: TravelCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
            {category}
          </Badge>
          {originalPrice && (
            <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
              Promo
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center text-muted-foreground text-sm mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {destination}
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            Max {maxPeople}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground text-sm ml-1">({reviewCount})</span>
          </div>
          
          <div className="text-right">
            {originalPrice && (
              <div className="text-sm text-muted-foreground line-through">{originalPrice}</div>
            )}
            <div className="font-bold text-lg text-primary">{price}</div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Voir les détails
        </Button>
      </CardFooter>
    </Card>
  );
}