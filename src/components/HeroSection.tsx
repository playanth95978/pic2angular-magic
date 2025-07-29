import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Content */}
          <div className="space-y-6 z-10 relative">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Bienvenue chez{" "}
              <span className="text-primary">Helia by OPT-NC</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Votre opérateur télécom privilégié en Nouvelle-Calédonie. 
              Découvrez nos solutions mobiles et internet adaptées à vos besoins.
            </p>
            <Button variant="hero" size="lg" className="font-semibold">
              Découvrir
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[500px] flex items-center justify-center">
            <img 
              src={heroImage} 
              alt="Femme souriante avec téléphone" 
              className="w-full h-full object-cover rounded-2xl shadow-[var(--shadow-pink)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;