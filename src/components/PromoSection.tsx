import { Button } from "@/components/ui/button";
import promoImage from "@/assets/promo-man.jpg";

const PromoSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-primary-light to-primary rounded-full opacity-30 transform -translate-x-12 translate-y-12"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            {/* Image */}
            <div className="relative">
              <img 
                src={promoImage} 
                alt="Homme avec téléphone" 
                className="w-full h-64 lg:h-80 object-cover rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                NOUVEAU
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Kits prépayés Liberté
              </h2>
              <p className="text-gray-600">
                Des forfaits mobiles sans engagement, rechargeables selon vos besoins. 
                Profitez d'une liberté totale avec nos nouvelles offres prépayées.
              </p>
              <Button variant="gradient" size="lg" className="font-semibold">
                Découvrir
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;