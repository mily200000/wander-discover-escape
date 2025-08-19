import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Calendar as CalendarIcon, Users } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState<Date>();
  const [travelers, setTravelers] = useState("");

  const handleSearch = () => {
    console.log("Recherche:", { destination, date, travelers });
  };

  return (
    <div className="bg-card shadow-card rounded-2xl p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Destination */}
        <div className="relative">
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Destination
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Où voulez-vous aller ?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Date */}
        <div className="relative">
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Date de départ
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "dd MMM yyyy", { locale: fr }) : "Choisir une date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Voyageurs */}
        <div className="relative">
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            Voyageurs
          </label>
          <Select value={travelers} onValueChange={setTravelers}>
            <SelectTrigger>
              <Users className="mr-2 h-4 w-4" />
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

        {/* Bouton de recherche */}
        <div className="flex items-end">
          <Button 
            onClick={handleSearch}
            className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-smooth"
            size="lg"
          >
            <Search className="w-4 h-4 mr-2" />
            Rechercher
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;