
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EssentialsSection = () => {
  const products = [
    {
      id: 1,
      name: "Râpe en céramique japonaise",
      description: "La révolution en cuisine : râpez sans effort ail, gingembre et zestes",
      price: "29€",
      originalPrice: "39€",
      image: "🧄",
      badge: "Best-seller",
      features: ["Lame ultra-tranchante", "Facile à nettoyer", "Design ergonomique"]
    },
    {
      id: 2,
      name: "Mousquet traditionnel",
      description: "L'outil authentique des marchés pour une expérience culinaire unique",
      price: "45€",
      originalPrice: "55€",
      image: "⚒️",
      badge: "Artisanal",
      features: ["Fait main", "Bois noble", "Finition premium"]
    },
    {
      id: 3,
      name: "Kit découverte bien-être",
      description: "Sélection d'huiles essentielles et accessoires pour débuter",
      price: "67€",
      originalPrice: "89€",
      image: "🌿",
      badge: "Nouveau",
      features: ["5 huiles bio", "Guide d'utilisation", "Diffuseur inclus"]
    },
    {
      id: 4,
      name: "Carnet de recettes saisonnières",
      description: "60 recettes adaptées aux produits frais du marché",
      price: "19€",
      originalPrice: "25€",
      image: "📖",
      badge: "Exclusif",
      features: ["Reliure artisanale", "Photos HD", "Conseils de chef"]
    }
  ];

  return (
    <section id="essentials" className="py-20 bg-tipikli-cream">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-tipikli-sage-dark">
            Les essentiels Tipikli
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de produits authentiques, testés et approuvés 
            par nos experts du marché. Chaque produit raconte une histoire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-tipikli-beige bg-white"
            >
              <CardContent className="p-6">
                {/* Badge et image */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-tipikli-sage/20 to-tipikli-wood/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{product.image}</span>
                  </div>
                  
                  <Badge 
                    className={`absolute -top-2 -right-2 text-xs ${
                      product.badge === "Best-seller" ? "bg-red-500" :
                      product.badge === "Nouveau" ? "bg-green-500" :
                      product.badge === "Artisanal" ? "bg-tipikli-wood" :
                      "bg-tipikli-sage"
                    } text-white`}
                  >
                    {product.badge}
                  </Badge>
                </div>

                {/* Contenu */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-tipikli-sage-dark leading-tight">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>

                  {/* Caractéristiques */}
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-tipikli-sage rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Prix */}
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-tipikli-sage-dark">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Boutons */}
                  <div className="space-y-2 pt-4">
                    <Button 
                      className="w-full bg-tipikli-sage hover:bg-tipikli-sage-dark text-white transition-all duration-300"
                    >
                      Voir la démo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white text-xs"
                    >
                      ❤️ Ajouter aux favoris
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-display font-semibold text-xl text-tipikli-sage-dark">
                Pas sûr de votre choix ?
              </h3>
              <p className="text-muted-foreground">
                Regardez nos démonstrations en live ou consultez les avis de nos habitués du marché
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-tipikli-sage hover:bg-tipikli-sage-dark text-white">
                  📹 Voir les démos
                </Button>
                <Button variant="outline" className="border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white">
                  ⭐ Lire les avis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssentialsSection;
