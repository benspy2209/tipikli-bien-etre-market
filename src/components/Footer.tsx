
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Tipikli",
      links: [
        { name: "À propos", href: "#about" },
        { name: "Notre histoire", href: "#story" },
        { name: "L'équipe", href: "#team" },
        { name: "Presse", href: "#press" }
      ]
    },
    {
      title: "Le Marché",
      links: [
        { name: "Voir le live", href: "#live" },
        { name: "Programme", href: "#schedule" },
        { name: "Nos experts", href: "#experts" },
        { name: "Replay", href: "#replay" }
      ]
    },
    {
      title: "Produits",
      links: [
        { name: "Les essentiels", href: "#essentials" },
        { name: "Nouveautés", href: "#new" },
        { name: "Meilleures ventes", href: "#bestsellers" },
        { name: "Avis clients", href: "#reviews" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Centre d'aide", href: "#help" },
        { name: "Contact", href: "#contact" },
        { name: "Livraison", href: "#shipping" },
        { name: "Retours", href: "#returns" }
      ]
    }
  ];

  const socialLinks = [
    { name: "YouTube", icon: "📺", href: "#youtube" },
    { name: "Instagram", icon: "📷", href: "#instagram" },
    { name: "Facebook", icon: "👥", href: "#facebook" },
    { name: "TikTok", icon: "🎵", href: "#tiktok" }
  ];

  return (
    <footer className="bg-tipikli-sage-dark text-white">
      {/* Section principale */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Colonne principale avec logo et description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-tipikli-sage font-bold text-lg">T</span>
              </div>
              <span className="font-display font-bold text-2xl">Tipikli</span>
            </div>
            
            <p className="text-tipikli-sage-light leading-relaxed">
              Le marché du bien-être, à vivre chaque jour. Découvrez des produits 
              authentiques, des démonstrations en live et une communauté passionnée 
              par le bien-être au quotidien.
            </p>

            {/* Newsletter CTA */}
            <div className="space-y-3">
              <h4 className="font-semibold">Rejoignez nos habitués du marché</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 rounded-lg text-tipikli-sage-dark border-0 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button 
                  className="bg-white text-tipikli-sage-dark hover:bg-tipikli-beige font-semibold"
                >
                  S'inscrire
                </Button>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="space-y-3">
              <h4 className="font-semibold">Suivez-nous</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-tipikli-sage rounded-full flex items-center justify-center hover:bg-white hover:text-tipikli-sage transition-all duration-300 transform hover:scale-110"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Colonnes de navigation */}
          <div className="lg:col-span-3 grid md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="font-semibold text-lg">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-tipikli-sage-light hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section de fin */}
      <div className="border-t border-tipikli-sage">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-tipikli-sage-light">
              <span>© 2024 Tipikli. Tous droits réservés.</span>
              <div className="flex space-x-4">
                <a href="#privacy" className="hover:text-white transition-colors">
                  Confidentialité
                </a>
                <a href="#terms" className="hover:text-white transition-colors">
                  CGU
                </a>
                <a href="#cookies" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <span className="text-tipikli-sage-light">
                Fait avec ❤️ en France
              </span>
              <div className="flex space-x-2">
                <span className="w-6 h-4 bg-white rounded-sm flex items-center justify-center text-xs">
                  🇫🇷
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
