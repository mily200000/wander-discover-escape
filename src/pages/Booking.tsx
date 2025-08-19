import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Users, MapPin, Clock, Shield, CreditCard, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const Booking = () => {
  const { id } = useParams();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [travelers, setTravelers] = useState(2);
  const [addInsurance, setAddInsurance] = useState(false);

  // Mock travel data
  const travelData = {
    id: "1",
    title: "Escapade Romantique à Santorin",
    destination: "Santorin, Grèce",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80",
    price: 899,
    originalPrice: 1199,
    duration: "5 jours / 4 nuits",
    category: "Romantique",
    isSpecialOffer: true
  };

  const insurancePrice = 79;
  const totalPrice = (travelData.price * travelers) + (addInsurance ? insurancePrice * travelers : 0);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-accent/20">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Accueil</Link>
            <span>/</span>
            <Link to="/destinations" className="hover:text-primary">Destinations</Link>
            <span>/</span>
            <Link to={`/travel/${id}`} className="hover:text-primary">{travelData.title}</Link>
            <span>/</span>
            <span className="text-foreground">Réservation</span>
          </div>
        </nav>

        {/* Progress Steps */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              {[
                { number: 1, title: "Détails", active: step >= 1, completed: step > 1 },
                { number: 2, title: "Voyageurs", active: step >= 2, completed: step > 2 },
                { number: 3, title: "Paiement", active: step >= 3, completed: step > 3 }
              ].map((stepItem, index) => (
                <div key={stepItem.number} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    stepItem.completed ? "bg-secondary text-secondary-foreground" :
                    stepItem.active ? "bg-primary text-primary-foreground" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {stepItem.completed ? <CheckCircle className="w-5 h-5" /> : stepItem.number}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    stepItem.active ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {stepItem.title}
                  </span>
                  {index < 2 && (
                    <div className={`mx-4 h-px w-16 ${
                      stepItem.completed ? "bg-secondary" : "bg-muted"
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Détails de votre voyage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Date Selection */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block">
                      Date de départ *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "dd MMMM yyyy", { locale: fr }) : "Choisir une date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Number of Travelers */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block">
                      Nombre de voyageurs *
                    </Label>
                    <Select value={travelers.toString()} onValueChange={(value) => setTravelers(Number(value))}>
                      <SelectTrigger>
                        <Users className="mr-2 h-4 w-4" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} voyageur{num > 1 ? 's' : ''}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Insurance Option */}
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="insurance"
                        checked={addInsurance}
                        onCheckedChange={(checked) => setAddInsurance(checked as boolean)}
                      />
                      <div className="flex-1">
                        <Label htmlFor="insurance" className="text-sm font-medium flex items-center cursor-pointer">
                          <Shield className="w-4 h-4 mr-2 text-primary" />
                          Assurance voyage
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          Protection complète : annulation, frais médicaux, bagages perdus
                        </p>
                        <p className="text-sm font-medium text-primary mt-1">
                          +{insurancePrice}€ par personne
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={nextStep} 
                    className="w-full gradient-primary text-primary-foreground"
                    disabled={!selectedDate}
                  >
                    Continuer
                  </Button>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Informations des voyageurs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Array.from({ length: travelers }, (_, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-medium mb-4">Voyageur {index + 1}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`firstName-${index}`}>Prénom *</Label>
                          <Input id={`firstName-${index}`} placeholder="Prénom" />
                        </div>
                        <div>
                          <Label htmlFor={`lastName-${index}`}>Nom *</Label>
                          <Input id={`lastName-${index}`} placeholder="Nom" />
                        </div>
                        <div>
                          <Label htmlFor={`email-${index}`}>Email *</Label>
                          <Input id={`email-${index}`} type="email" placeholder="email@exemple.com" />
                        </div>
                        <div>
                          <Label htmlFor={`phone-${index}`}>Téléphone *</Label>
                          <Input id={`phone-${index}`} placeholder="+33 6 12 34 56 78" />
                        </div>
                        <div>
                          <Label htmlFor={`passport-${index}`}>Numéro de passeport</Label>
                          <Input id={`passport-${index}`} placeholder="Numéro de passeport" />
                        </div>
                        <div>
                          <Label htmlFor={`birthDate-${index}`}>Date de naissance *</Label>
                          <Input id={`birthDate-${index}`} type="date" />
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={prevStep} className="flex-1">
                      Retour
                    </Button>
                    <Button onClick={nextStep} className="flex-1 gradient-primary text-primary-foreground">
                      Continuer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Paiement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-sm font-medium mb-4 block">Mode de paiement</Label>
                    <div className="space-y-3">
                      <div className="border rounded-lg p-4 cursor-pointer hover:bg-accent/50 transition-smooth">
                        <div className="flex items-center space-x-3">
                          <input type="radio" name="payment" value="card" defaultChecked />
                          <div>
                            <p className="font-medium">Carte bancaire</p>
                            <p className="text-sm text-muted-foreground">Visa, Mastercard, American Express</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 cursor-pointer hover:bg-accent/50 transition-smooth">
                        <div className="flex items-center space-x-3">
                          <input type="radio" name="payment" value="paypal" />
                          <div>
                            <p className="font-medium">PayPal</p>
                            <p className="text-sm text-muted-foreground">Paiement sécurisé avec PayPal</p>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4 cursor-pointer hover:bg-accent/50 transition-smooth">
                        <div className="flex items-center space-x-3">
                          <input type="radio" name="payment" value="transfer" />
                          <div>
                            <p className="font-medium">Virement bancaire</p>
                            <p className="text-sm text-muted-foreground">Paiement par virement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Form */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Numéro de carte *</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Date d'expiration *</Label>
                        <Input id="expiry" placeholder="MM/AA" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Nom sur la carte *</Label>
                      <Input id="cardName" placeholder="Nom Prénom" />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={prevStep} className="flex-1">
                      Retour
                    </Button>
                    <Link to="/booking/confirmation" className="flex-1">
                      <Button className="w-full gradient-primary text-primary-foreground">
                        Confirmer le paiement
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Récapitulatif</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Travel Info */}
                <div className="flex space-x-3">
                  <img
                    src={travelData.image}
                    alt={travelData.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm line-clamp-2">{travelData.title}</h3>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{travelData.destination}</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{travelData.duration}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Booking Details */}
                <div className="space-y-2 text-sm">
                  {selectedDate && (
                    <div className="flex justify-between">
                      <span>Date de départ:</span>
                      <span className="font-medium">
                        {format(selectedDate, "dd/MM/yyyy", { locale: fr })}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Voyageurs:</span>
                    <span className="font-medium">{travelers}</span>
                  </div>
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{travelData.title}</span>
                    <span>{travelData.price}€ × {travelers}</span>
                  </div>
                  {addInsurance && (
                    <div className="flex justify-between">
                      <span>Assurance voyage</span>
                      <span>{insurancePrice}€ × {travelers}</span>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-primary">{totalPrice}€</span>
                </div>

                {travelData.isSpecialOffer && (
                  <Badge className="w-full justify-center gradient-secondary text-secondary-foreground">
                    Économie de {(travelData.originalPrice - travelData.price) * travelers}€
                  </Badge>
                )}

                <div className="text-xs text-muted-foreground text-center pt-4 border-t">
                  <Shield className="w-4 h-4 inline mr-1" />
                  Paiement sécurisé SSL
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

export default Booking;