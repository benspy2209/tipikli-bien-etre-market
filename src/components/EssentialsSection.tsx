
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { getFeaturedProducts } from "@/data/products";
import { getCategoryConfig } from "@/data/categories";
import { getProductImage } from "@/utils/imageUtils";
import { useState } from "react";

const EssentialsSection = () => {
  const products = getFeaturedProducts();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Best-seller": return "bg-red-500";
      case "Nouveau": return "bg-green-500";
      case "Artisanal": return "bg-tipikli-wood";
      case "Populaire": return "bg-blue-500";
      case "Pratique": return "bg-purple-500";
      case "Économique": return "bg-orange-500";
      case "Innovation": return "bg-pink-500";
      default: return "bg-tipikli-sage";
    }
  };

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
          {products.map((product) => {
            const categoryConfig = getCategoryConfig(product.category);
            const productImageSrc = getProductImage(product.name);
            
            return (
              <Card 
                key={product.id} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-tipikli-beige bg-white"
              >
                <CardContent className="p-6">
                  {/* Badge et image */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-tipikli-sage/20 to-tipikli-wood/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={productImageSrc} 
                        alt={product.name}
                        className="w-full h-full object-cover rounded-2xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="text-3xl">${categoryConfig.icon}</span>`;
                          }
                        }}
                      />
                    </div>
                    
                    {product.badge && (
                      <Badge 
                        className={`absolute -top-2 -right-2 text-xs ${getBadgeColor(product.badge)} text-white`}
                      >
                        {product.badge}
                      </Badge>
                    )}
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
                    {product.features && (
                      <ul className="space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-tipikli-sage rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Variantes */}
                    {product.variants && product.variants.length > 0 && (
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Disponible en {product.variants.length} variantes</span>
                      </div>
                    )}

                    {/* Prix */}
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-tipikli-sage-dark">
                        {product.price}€
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}€
                        </span>
                      )}
                    </div>

                    {/* Boutons */}
                    <div className="space-y-2 pt-4">
                      <Link to={`/product/${product.id}`}>
                        <Button 
                          className="w-full bg-tipikli-sage hover:bg-tipikli-sage-dark text-white transition-all duration-300"
                        >
                          Voir le produit
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        className="w-full border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white text-xs"
                        onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                      >
                        {selectedProduct === product.id ? "Masquer détails" : "❤️ Ajouter aux favoris"}
                      </Button>
                    </div>

                    {/* Détails extensibles */}
                    {selectedProduct === product.id && product.longDescription && (
                      <div className="mt-4 p-4 bg-tipikli-cream rounded-lg text-sm text-muted-foreground">
                        {product.longDescription}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="text-center space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-display font-semibold text-xl text-tipikli-sage-dark">
                Découvrez toute notre gamme
              </h3>
              <p className="text-muted-foreground">
                Plus de 100 produits testés et approuvés par nos experts, disponibles dans nos marchés partenaires
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products">
                  <Button className="bg-tipikli-sage hover:bg-tipikli-sage-dark text-white">
                    🛍️ Voir tous les produits
                  </Button>
                </Link>
                <Button variant="outline" className="border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white">
                  📹 Voir les démos
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
