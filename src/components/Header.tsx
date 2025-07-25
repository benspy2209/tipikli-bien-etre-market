
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Produits", href: "/products" },
    { name: "Le Marché Live", href: "#live" },
    { name: "Les Essentiels", href: "#essentials" },
    { name: "Tipikli Me", href: "#tipikli-me" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-tipikli-beige">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-tipikli-sage to-tipikli-sage-dark rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-display font-semibold text-xl text-tipikli-sage-dark">
              Tipikli
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-foreground hover:text-tipikli-sage transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tipikli-sage transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon - Plus visible et à droite */}
            <Link to="/cart" className="relative">
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-tipikli-sage text-white hover:bg-tipikli-sage-dark border-tipikli-sage p-3 shadow-lg"
              >
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 p-0 flex items-center justify-center text-xs font-bold border-2 border-white">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            
            {/* CTA Button */}
            <Button 
              className="hidden md:block bg-tipikli-sage hover:bg-tipikli-sage-dark text-white transition-all duration-300 transform hover:scale-105"
            >
              Rejoindre Tipikli Me
            </Button>

            {/* Menu Mobile */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-tipikli-sage-dark transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-tipikli-sage-dark transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-tipikli-sage-dark transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Menu Mobile Ouvert */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-effect border-b border-tipikli-beige animate-fade-in-up">
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-tipikli-sage transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/cart" className="flex items-center space-x-2 text-sm font-medium text-foreground hover:text-tipikli-sage transition-colors duration-200">
                <ShoppingCart className="w-4 h-4" />
                <span>Panier ({itemCount})</span>
              </Link>
              <Button className="bg-tipikli-sage hover:bg-tipikli-sage-dark text-white mt-4">
                Rejoindre Tipikli Me
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
