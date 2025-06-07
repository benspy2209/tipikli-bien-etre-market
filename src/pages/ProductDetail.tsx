
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { getCategoryConfig } from "@/data/categories";
import { ArrowLeft, Heart, ShoppingCart, MapPin, Globe, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-tipikli-sage-dark mb-4">Produit non trouvé</h1>
          <Link to="/products">
            <Button className="bg-tipikli-sage hover:bg-tipikli-sage-dark">
              Retour aux produits
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryConfig = getCategoryConfig(product.category);

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
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-tipikli-sage">Accueil</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-tipikli-sage">Produits</Link>
            <span>/</span>
            <span className="text-tipikli-sage-dark">{product.name}</span>
          </div>

          {/* Bouton retour */}
          <Link to="/products">
            <Button variant="outline" className="mb-8 border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux produits
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image et galerie */}
            <div className="space-y-6">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-tipikli-sage/10 to-tipikli-wood/10 rounded-2xl flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-8xl">{categoryConfig.icon}</div>
                  )}
                </div>
                
                {product.badge && (
                  <Badge 
                    className={`absolute top-4 right-4 text-sm ${getBadgeColor(product.badge)} text-white`}
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>

              {/* Variantes avec images (pour les graters par ville) */}
              {product.variants && product.variants.length > 0 && product.category === "grater" && (
                <div className="grid grid-cols-4 gap-4">
                  {product.variants.slice(0, 8).map((variant) => (
                    <div key={variant.id} className="relative group cursor-pointer">
                      <div className="w-full h-20 bg-gradient-to-br from-tipikli-sage/10 to-tipikli-wood/10 rounded-lg overflow-hidden">
                        {variant.image ? (
                          <img 
                            src={variant.image} 
                            alt={variant.location}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-2xl">{categoryConfig.icon}</div>
                        )}
                      </div>
                      <p className="text-xs text-center mt-1 text-muted-foreground">{variant.location}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Informations produit */}
            <div className="space-y-8">
              {/* En-tête */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-tipikli-sage/20 rounded-full flex items-center justify-center">
                    <span className="text-xl">{categoryConfig.icon}</span>
                  </div>
                  <span className="text-sm font-medium text-tipikli-sage">{categoryConfig.name}</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-display font-bold text-tipikli-sage-dark">
                  {product.name}
                </h1>

                <p className="text-lg text-muted-foreground">
                  {product.description}
                </p>

                {product.longDescription && (
                  <p className="text-muted-foreground">
                    {product.longDescription}
                  </p>
                )}
              </div>

              {/* Prix */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-tipikli-sage-dark">
                  {product.price}€
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice}€
                  </span>
                )}
                {product.originalPrice && (
                  <Badge className="bg-red-500 text-white">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>

              {/* Caractéristiques */}
              {product.features && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-tipikli-sage-dark">Caractéristiques</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="w-4 h-4 mr-3 text-tipikli-sage" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Boutons d'action */}
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Button className="flex-1 bg-tipikli-sage hover:bg-tipikli-sage-dark text-white">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Ajouter au panier
                  </Button>
                  <Button variant="outline" className="border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button variant="outline" className="w-full border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white">
                  📹 Voir la démo
                </Button>
              </div>

              {/* Type de produit */}
              <div className="bg-tipikli-cream rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  {product.type === "digital" ? (
                    <>
                      <Globe className="w-5 h-5 text-tipikli-sage" />
                      <span className="font-medium text-tipikli-sage-dark">Produit numérique</span>
                    </>
                  ) : (
                    <>
                      <MapPin className="w-5 h-5 text-tipikli-sage" />
                      <span className="font-medium text-tipikli-sage-dark">Produit physique</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {product.type === "digital" 
                    ? "Livraison instantanée par email"
                    : "Disponible dans nos marchés partenaires"
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Section variantes détaillées */}
          {product.variants && product.variants.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-display font-bold text-tipikli-sage-dark mb-8">
                Toutes les variantes disponibles ({product.variants.length})
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.variants.map((variant) => (
                  <Card key={variant.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-tipikli-sage-dark">
                          {variant.location || variant.language || variant.name}
                        </h3>
                        <span className="text-lg font-bold text-tipikli-sage-dark">
                          {variant.price}€
                        </span>
                      </div>
                      
                      {variant.image && (
                        <div className="w-full h-32 bg-gradient-to-br from-tipikli-sage/10 to-tipikli-wood/10 rounded-lg overflow-hidden mb-4">
                          <img 
                            src={variant.image} 
                            alt={variant.location || variant.language || variant.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <Button className="w-full bg-tipikli-sage hover:bg-tipikli-sage-dark text-white">
                        Choisir cette variante
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Section recommandations */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-bold text-tipikli-sage-dark mb-8">
              Produits recommandés
            </h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter(p => p.id !== product.id && p.category === product.category)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4">
                      <Link to={`/product/${relatedProduct.id}`}>
                        <div className="w-full h-32 bg-gradient-to-br from-tipikli-sage/10 to-tipikli-wood/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                          <span className="text-3xl">{getCategoryConfig(relatedProduct.category).icon}</span>
                        </div>
                        <h3 className="font-semibold text-tipikli-sage-dark mb-2 group-hover:text-tipikli-sage">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {relatedProduct.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-tipikli-sage-dark">
                            {relatedProduct.price}€
                          </span>
                          {relatedProduct.badge && (
                            <Badge className={`text-xs ${getBadgeColor(relatedProduct.badge)} text-white`}>
                              {relatedProduct.badge}
                            </Badge>
                          )}
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
