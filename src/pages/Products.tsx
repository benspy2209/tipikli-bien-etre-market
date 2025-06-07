
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { getCategoryConfig } from "@/data/categories";
import { ProductCategory } from "@/types/product";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const categories: Array<ProductCategory | "all"> = ["all", "grater", "ebook", "brush", "peeler"];

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

  const getCategoryName = (category: ProductCategory | "all") => {
    if (category === "all") return "Tous";
    return getCategoryConfig(category).name;
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* En-tête */}
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-tipikli-sage-dark">
              Tous nos produits
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de produits testés et approuvés dans les marchés belges
            </p>
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-tipikli-sage hover:bg-tipikli-sage-dark text-white" 
                  : "border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white"
                }
              >
                {category !== "all" && getCategoryConfig(category as ProductCategory).icon} {getCategoryName(category)}
              </Button>
            ))}
          </div>

          {/* Grille des produits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const categoryConfig = getCategoryConfig(product.category);
              
              return (
                <Card 
                  key={product.id} 
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-tipikli-beige bg-white"
                >
                  <CardContent className="p-6">
                    {/* Image du produit */}
                    <div className="relative mb-6">
                      <div className="w-full h-48 bg-gradient-to-br from-tipikli-sage/10 to-tipikli-wood/10 rounded-2xl flex items-center justify-center overflow-hidden">
                        {product.image ? (
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              // Fallback vers l'icône si l'image ne charge pas
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                        ) : null}
                        <div className="hidden text-6xl">{categoryConfig.icon}</div>
                      </div>
                      
                      {product.badge && (
                        <Badge 
                          className={`absolute -top-2 -right-2 text-xs ${getBadgeColor(product.badge)} text-white`}
                        >
                          {product.badge}
                        </Badge>
                      )}

                      {/* Icône catégorie */}
                      <div className="absolute -bottom-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-lg">{categoryConfig.icon}</span>
                      </div>
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
                          {product.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-xs text-muted-foreground flex items-center">
                              <span className="w-1.5 h-1.5 bg-tipikli-sage rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Variantes résumé */}
                      {product.variants && product.variants.length > 0 && (
                        <div className="bg-tipikli-cream rounded-lg p-3">
                          <p className="text-xs font-medium text-tipikli-sage-dark mb-1">
                            {product.variants.length} variantes disponibles
                          </p>
                          <div className="text-xs text-muted-foreground">
                            {product.category === "grater" && "Disponible dans différentes villes"}
                            {product.category === "ebook" && "Disponible en plusieurs langues"}
                          </div>
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
                        <Button 
                          className="w-full bg-tipikli-sage hover:bg-tipikli-sage-dark text-white transition-all duration-300"
                          onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                        >
                          {selectedProduct === product.id ? "Masquer détails" : "Voir détails"}
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white text-xs"
                        >
                          ❤️ Ajouter aux favoris
                        </Button>
                      </div>

                      {/* Détails extensibles avec TOUTES les variantes */}
                      {selectedProduct === product.id && (
                        <div className="mt-4 p-4 bg-tipikli-cream rounded-lg space-y-4">
                          {product.longDescription && (
                            <div className="text-sm text-muted-foreground">
                              {product.longDescription}
                            </div>
                          )}
                          
                          {/* Affichage de TOUTES les variantes */}
                          {product.variants && product.variants.length > 0 && (
                            <div>
                              <h4 className="font-medium text-sm text-tipikli-sage-dark mb-3">
                                Toutes les variantes disponibles :
                              </h4>
                              <div className="grid gap-2 max-h-60 overflow-y-auto">
                                {product.variants.map((variant) => (
                                  <div 
                                    key={variant.id} 
                                    className="flex justify-between items-center p-2 bg-white rounded border text-xs"
                                  >
                                    <span className="font-medium">
                                      {variant.location || variant.language || variant.name}
                                    </span>
                                    <span className="text-tipikli-sage-dark font-bold">
                                      {variant.price}€
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Statistiques */}
          <div className="mt-16 text-center bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold text-tipikli-sage-dark">{products.length}</div>
                <div className="text-sm text-muted-foreground">Produits</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-tipikli-sage-dark">
                  {products.reduce((acc, p) => acc + (p.variants?.length || 1), 0)}
                </div>
                <div className="text-sm text-muted-foreground">Variantes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-tipikli-sage-dark">27</div>
                <div className="text-sm text-muted-foreground">Villes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-tipikli-sage-dark">3</div>
                <div className="text-sm text-muted-foreground">Langues</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
