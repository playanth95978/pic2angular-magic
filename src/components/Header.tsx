import { Button } from "@/components/ui/button";
import { Phone, Menu, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Phone size={14} />
              3643 (Nouvelle-Calédonie)
            </span>
            <span>Actualités & Évn.</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span>Assistance</span>
            <div className="flex items-center gap-2">
              <Search size={16} />
              <input type="text" placeholder="Rechercher" className="border rounded px-2 py-1 text-sm w-32" />
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-primary">
              Helia
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Mobile</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Internet & TV</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Boutique</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Assistance</a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
              <User size={16} />
              Mon compte
            </Button>
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu size={16} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;