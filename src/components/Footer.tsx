import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">WanderEscape</span>
            </div>
            <p className="text-dark-foreground/80 mb-6 leading-relaxed">
              Votre partenaire de confiance pour des aventures inoubliables.
              Découvrez le monde avec nos experts du voyage.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:bg-primary/20 p-2">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/20 p-2">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/20 p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-primary/20 p-2">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-dark-foreground/80 hover:text-primary transition-smooth">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-dark-foreground/80 hover:text-primary transition-smooth">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-dark-foreground/80 hover:text-primary transition-smooth">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-dark-foreground/80 hover:text-primary transition-smooth">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/booking" className="text-dark-foreground/80 hover:text-primary transition-smooth">
                  Réservation
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-dark-foreground/80 hover:text-primary transition-smooth">
                  Paiement
                </Link>
              </li>
              <li>
                <a href="#" className="text-dark-foreground/80 hover:text-primary transition-smooth">
                  Support Client
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-foreground/80 hover:text-primary transition-smooth">
                  Assurance Voyage
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-dark-foreground/80">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-dark-foreground/80">contact@wanderescape.com</span>
              </div>
            </div>
            
            <h4 className="font-semibold mb-3">Newsletter</h4>
            <div className="flex gap-2">
              <Input 
                placeholder="Votre email" 
                className="bg-dark-foreground/10 border-dark-foreground/20 text-dark-foreground placeholder:text-dark-foreground/60"
              />
              <Button className="gradient-primary text-primary-foreground">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 WanderEscape. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-dark-foreground/60 hover:text-primary transition-smooth">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-dark-foreground/60 hover:text-primary transition-smooth">
                Politique de confidentialité
              </a>
              <a href="#" className="text-dark-foreground/60 hover:text-primary transition-smooth">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;