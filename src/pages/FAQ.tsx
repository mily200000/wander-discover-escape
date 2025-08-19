import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MessageCircle, HelpCircle, CreditCard, Calendar, Shield, Plane } from "lucide-react";

const faqData = [
  {
    category: "Réservation",
    icon: Calendar,
    questions: [
      {
        question: "Comment puis-je réserver un voyage ?",
        answer: "Vous pouvez réserver directement sur notre site en sélectionnant votre destination, vos dates et le nombre de voyageurs. Suivez ensuite les étapes de réservation et procédez au paiement sécurisé."
      },
      {
        question: "Puis-je modifier ma réservation ?",
        answer: "Oui, vous pouvez modifier votre réservation jusqu'à 48h avant le départ, sous réserve de disponibilité. Des frais de modification peuvent s'appliquer selon les conditions du voyage."
      },
      {
        question: "Comment puis-je annuler ma réservation ?",
        answer: "L'annulation est possible selon les conditions générales. Généralement, l'annulation gratuite est possible jusqu'à 48h avant le départ. Au-delà, des frais d'annulation s'appliquent."
      }
    ]
  },
  {
    category: "Paiement",
    icon: CreditCard,
    questions: [
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer: "Nous acceptons les cartes de crédit (Visa, Mastercard, American Express), PayPal, et les virements bancaires. Tous les paiements sont sécurisés."
      },
      {
        question: "Puis-je payer en plusieurs fois ?",
        answer: "Oui, nous proposons des facilités de paiement en 3 ou 4 fois sans frais pour les commandes supérieures à 300€. Cette option est disponible lors du processus de commande."
      },
      {
        question: "Quand dois-je payer ?",
        answer: "Un acompte de 30% est demandé lors de la réservation. Le solde doit être réglé 30 jours avant le départ. Pour les réservations effectuées moins de 30 jours avant le départ, le paiement intégral est requis."
      }
    ]
  },
  {
    category: "Voyage",
    icon: Plane,
    questions: [
      {
        question: "Que comprend le prix du voyage ?",
        answer: "Le prix comprend généralement l'hébergement, certains repas, les transports mentionnés, les visites guidées et l'assistance d'un guide local. Les détails sont spécifiés pour chaque voyage."
      },
      {
        question: "Ai-je besoin d'un visa ?",
        answer: "Les exigences de visa dépendent de votre nationalité et de la destination. Nous vous informons des formalités nécessaires lors de votre réservation et vous assistons dans les démarches si besoin."
      },
      {
        question: "Que se passe-t-il en cas de maladie ou d'accident ?",
        answer: "Nous recommandons fortement de souscrire une assurance voyage qui couvre les frais médicaux et le rapatriement. Notre équipe locale vous assistera en cas d'urgence."
      }
    ]
  },
  {
    category: "Assurance",
    icon: Shield,
    questions: [
      {
        question: "L'assurance voyage est-elle obligatoire ?",
        answer: "L'assurance n'est pas obligatoire mais fortement recommandée. Elle couvre les annulations, les frais médicaux, les bagages perdus et le rapatriement d'urgence."
      },
      {
        question: "Que couvre votre assurance ?",
        answer: "Notre assurance couvre l'annulation de voyage, les frais médicaux à l'étranger, le rapatriement, la perte de bagages, et les retards de transport. Les détails complets sont fournis lors de la souscription."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <HelpCircle className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Questions Fréquentes
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Trouvez rapidement les réponses à vos questions
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Content */}
          <div className="lg:col-span-2">
            {faqData.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex} className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{category.category}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-6">
                          <span className="font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>

          {/* Contact Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick contacts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                    Besoin d'aide ?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-smooth cursor-pointer">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Téléphone</p>
                      <p className="text-sm text-muted-foreground">+33 1 23 45 67 89</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-smooth cursor-pointer">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-sm text-muted-foreground">contact@wanderescape.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-smooth cursor-pointer">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Chat en direct</p>
                      <p className="text-sm text-muted-foreground">Disponible 24h/7j</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Posez votre question</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Votre nom" />
                    <Input type="email" placeholder="Votre email" />
                    <Input placeholder="Sujet" />
                    <Textarea 
                      placeholder="Votre message"
                      rows={4}
                    />
                    <Button className="w-full gradient-primary text-primary-foreground">
                      Envoyer
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Help resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Ressources utiles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="#" className="block text-sm text-primary hover:underline">
                    Guide du voyageur
                  </a>
                  <a href="#" className="block text-sm text-primary hover:underline">
                    Conditions générales
                  </a>
                  <a href="#" className="block text-sm text-primary hover:underline">
                    Politique d'annulation
                  </a>
                  <a href="#" className="block text-sm text-primary hover:underline">
                    Assurance voyage
                  </a>
                  <a href="#" className="block text-sm text-primary hover:underline">
                    Conseils de sécurité
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;