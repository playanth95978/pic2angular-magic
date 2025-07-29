import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const offers = [
  {
    title: "Forfait Mobile",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=300&h=200&fit=crop",
    description: "Appels illimités + 50Go",
    price: "2 990 XPF/mois"
  },
  {
    title: "Go prépayés Liberté",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
    description: "Rechargez selon vos besoins",
    price: "À partir de 500 XPF"
  },
  {
    title: "Téléphonie fixe",
    image: "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?w=300&h=200&fit=crop",
    description: "Ligne fixe + internet",
    price: "1 990 XPF/mois"
  },
  {
    title: "Accès Internet",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
    description: "Fibre très haut débit",
    price: "4 990 XPF/mois"
  }
];

const OffersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Découvrez nos offres
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-pink)] transition-all duration-300 hover:transform hover:scale-105 border-0 shadow-lg">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <CardTitle className="absolute bottom-4 left-4 text-white text-lg">
                    {offer.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-3">{offer.description}</p>
                <p className="font-semibold text-primary mb-4">{offer.price}</p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;