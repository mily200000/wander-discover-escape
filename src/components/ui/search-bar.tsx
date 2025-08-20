import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Destination" 
            className="pl-10 h-12" 
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            type="date" 
            className="pl-10 h-12" 
          />
        </div>
        
        <div className="relative">
          <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Select>
            <SelectTrigger className="pl-10 h-12">
              <SelectValue placeholder="Nombre de personnes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 personne</SelectItem>
              <SelectItem value="2">2 personnes</SelectItem>
              <SelectItem value="3">3 personnes</SelectItem>
              <SelectItem value="4">4 personnes</SelectItem>
              <SelectItem value="5+">5+ personnes</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground">
          <Search className="h-4 w-4 mr-2" />
          Rechercher
        </Button>
      </div>
    </div>
  );
}