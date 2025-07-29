import { Button } from "@/components/ui/button";

const faqs = [
  "Comment souscrire à un forfait via mes infos ?",
  "Comment déclarer non portée mobile ?",
  "Où acheter un crédit prépayé Liberté ?",
  "Comment identifier ma ligne ?",
  "Comment changer non portée mobile ?",
  "Quelles sont les pièces jointes pour l'ouverture d'une ligne ?",
  "Comment identifier mes forfaits par mail ?",
  "Comment demander mes relevés par mail ?"
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <button 
              key={index}
              className="flex items-center gap-3 text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 hover:text-primary"
            >
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span className="text-sm">{faq}</span>
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="gradient" size="lg">
            Consulter l'assistance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;