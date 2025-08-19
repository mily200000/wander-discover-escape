import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Waves, Building, Compass, TreePine, Camera } from "lucide-react";

const categories = [
  {
    id: "mountain",
    name: "Montagne",
    icon: Mountain,
    description: "Sommets et randonnées",
    color: "text-primary",
    bgColor: "bg-primary/10",
    count: "120+ voyages"
  },
  {
    id: "beach",
    name: "Plage & Mer",
    icon: Waves,
    description: "Côtes et îles paradisiaques",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    count: "200+ voyages"
  },
  {
    id: "cultural",
    name: "Culturel",
    icon: Building,
    description: "Histoire et patrimoine",
    color: "text-soft-foreground",
    bgColor: "bg-soft/30",
    count: "150+ voyages"
  },
  {
    id: "adventure",
    name: "Aventure",
    icon: Compass,
    description: "Sensations fortes",
    color: "text-primary",
    bgColor: "bg-primary/10",
    count: "80+ voyages"
  },
  {
    id: "nature",
    name: "Nature",
    icon: TreePine,
    description: "Parcs et réserves",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    count: "90+ voyages"
  },
  {
    id: "photography",
    name: "Photo",
    icon: Camera,
    description: "Spots photographiques",
    color: "text-soft-foreground",
    bgColor: "bg-soft/30",
    count: "60+ voyages"
  }
];

const Categories = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explorez par <span className="text-primary">Catégorie</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trouvez le type d'aventure qui correspond à vos envies et découvrez
            des expériences uniques dans chaque destination.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group cursor-pointer transition-smooth hover:shadow-card hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {category.description}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {category.count}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            Voir toutes les catégories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;