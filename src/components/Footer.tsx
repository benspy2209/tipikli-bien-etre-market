
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-tipikli-sage-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">Tipikli</h3>
            <p className="text-tipikli-cream mb-4">
              Votre destination pour des ustensiles de cuisine innovants et des produits culinaires d'exception.
            </p>
            <p className="text-tipikli-cream">
              Découvrez notre gamme The Grater et bien plus encore pour révolutionner votre cuisine.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-tipikli-cream hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-tipikli-cream hover:text-white transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-tipikli-cream hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Informations légales</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-tipikli-cream hover:text-white transition-colors">
                  CGV
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-tipikli-cream hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <a href="mailto:contact@tipikli.be" className="text-tipikli-cream hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tipikli-sage mt-8 pt-8 text-center">
          <p className="text-tipikli-cream">
            &copy; {new Date().getFullYear()} Tipikli. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
