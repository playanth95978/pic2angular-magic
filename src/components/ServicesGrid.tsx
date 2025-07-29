import { Wifi, MapPin, BarChart3, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Réseau très haut débit",
    description: "Connexion ultra-rapide"
  },
  {
    icon: MapPin,
    title: "Points de vente",
    description: "Nos boutiques en Nouvelle-Calédonie"
  },
  {
    icon: BarChart3,
    title: "Suivi des données",
    description: "Gérez votre consommation"
  },
  {
    icon: HeartHandshake,
    title: "Aide et assistance",
    description: "Support client 24/7"
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center shadow-[var(--shadow-pink)] group-hover:shadow-[var(--shadow-glow)]">
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;