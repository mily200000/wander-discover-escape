import { Card, CardContent } from "@/components/ui/card";
import { Waves, Mountain, TreePine, Building, Camera, Plane } from "lucide-react";

const categories = [
  {
    icon: Waves,
    title: "Voyages Maritimes",
    description: "Croisières et destinations côtières",
    color: "text-blue-500"
  },
  {
    icon: Mountain,
    title: "Montagne",
    description: "Randonnées et sports d'hiver",
    color: "text-green-500"
  },
  {
    icon: TreePine,
    title: "Nature & Aventure",
    description: "Safaris et écotourisme",
    color: "text-emerald-500"
  },
  {
    icon: Building,
    title: "Historique & Culture",
    description: "Monuments et sites patrimoniaux",
    color: "text-amber-500"
  },
  {
    icon: Camera,
    title: "Loisirs & Détente",
    description: "Spa et destinations wellness",
    color: "text-pink-500"
  },
  {
    icon: Plane,
    title: "Voyages à l'étranger",
    description: "Destinations internationales",
    color: "text-purple-500"
  }
];

export function CategoriesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explorez par Catégorie
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez le type d'aventure qui vous correspond et découvrez nos offres spécialisées
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <IconComponent className={`h-12 w-12 mx-auto ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}