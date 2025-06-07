
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { getCategoryConfig } from "@/data/categories";
import { ArrowLeft, ShoppingCart, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, items } = useCart();
  const { toast } = useToast();
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});

  const selectedProduct = products.find(p => p.id === id);

  if (!selectedProduct) {
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

  const handleAddToCart = (product: any, variant?: string) => {
    const qty = quantities[`${product.id}-${variant || 'main'}`] || 1;
    for (let i = 0; i < qty; i++) {
      addToCart(product, variant);
    }
    toast({
      title: "Produit ajouté au panier",
      description: `${product.name}${variant ? ` (${variant})` : ''} x${qty}`,
    });
  };

  const updateQuantity = (productId: string, variant: string, delta: number) => {
    const key = `${productId}-${variant}`;
    const current = quantities[key] || 1;
    const newQty = Math.max(1, current + delta);
    setQuantities(prev => ({ ...prev, [key]: newQty }));
  };

  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* En-tête avec panier */}
          <div className="flex justify-between items-center mb-8">
            <Link to="/products">
              <Button variant="outline" className="border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux produits
              </Button>
            </Link>
            
            <div className="flex items-center space-x-2 bg-tipikli-cream rounded-lg px-4 py-2">
              <ShoppingCart className="h-5 w-5 text-tipikli-sage" />
              <span className="font-medium text-tipikli-sage-dark">
                Panier ({getCartCount()})
              </span>
            </div>
          </div>

          {/* Titre principal */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-tipikli-sage-dark mb-4">
              Tous nos produits disponibles
            </h1>
            <p className="text-lg text-muted-foreground">
              Découvrez notre gamme complète et ajoutez vos produits favoris au panier
            </p>
          </div>

          {/* Grille de tous les produits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const categoryConfig = getCategoryConfig(product.category);
              
              return (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-tipikli-beige bg-white">
                  <CardContent className="p-6">
                    {/* Image du produit */}
                    <div className="relative mb-6">
                      <div className="w-full h-48 bg-gradient-to-br from-tipikli-sage/10 to-tipikli-wood/10 rounded-2xl flex items-center justify-center overflow-hidden">
                        {product.image ? (
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="text-6xl">{categoryConfig.icon}</div>
                        )}
                      </div>
                      
                      {product.badge && (
                        <Badge className={`absolute -top-2 -right-2 text-xs ${getBadgeColor(product.badge)} text-white`}>
                          {product.badge}
                        </Badge>
                      )}

                      <div className="absolute -bottom-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-lg">{categoryConfig.icon}</span>
                      </div>
                    </div>

                    {/* Informations produit */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg text-tipikli-sage-dark leading-tight">
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground">
                        {product.description}
                      </p>

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

                      {/* Contrôles quantité pour produit principal */}
                      <div className="flex items-center justify-between bg-tipikli-cream rounded-lg p-3">
                        <span className="text-sm font-medium text-tipikli-sage-dark">Quantité:</span>
                        <div className="flex items-center space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updateQuantity(product.id, 'main', -1)}
                            className="w-8 h-8 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">
                            {quantities[`${product.id}-main`] || 1}
                          </span>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updateQuantity(product.id, 'main', 1)}
                            className="w-8 h-8 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      {/* Bouton ajouter au panier principal */}
                      <Button 
                        className="w-full bg-tipikli-sage hover:bg-tipikli-sage-dark text-white"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Ajouter au panier
                      </Button>

                      {/* Variantes si disponibles */}
                      {product.variants && product.variants.length > 0 && (
                        <div className="mt-4 p-4 bg-tipikli-cream rounded-lg space-y-3">
                          <h4 className="font-medium text-sm text-tipikli-sage-dark">
                            Variantes disponibles ({product.variants.length}):
                          </h4>
                          <div className="space-y-2 max-h-40 overflow-y-auto">
                            {product.variants.map((variant) => (
                              <div key={variant.id} className="flex items-center justify-between p-2 bg-white rounded border">
                                <div className="flex-1">
                                  <span className="text-xs font-medium">
                                    {variant.location || variant.language || variant.name}
                                  </span>
                                  <div className="text-xs text-tipikli-sage-dark font-bold">
                                    {variant.price}€
                                  </div>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => updateQuantity(product.id, variant.id, -1)}
                                    className="w-6 h-6 p-0"
                                  >
                                    <Minus className="h-2 w-2" />
                                  </Button>
                                  <span className="text-xs w-4 text-center">
                                    {quantities[`${product.id}-${variant.id}`] || 1}
                                  </span>
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => updateQuantity(product.id, variant.id, 1)}
                                    className="w-6 h-6 p-0"
                                  >
                                    <Plus className="h-2 w-2" />
                                  </Button>
                                  <Button 
                                    size="sm"
                                    className="bg-tipikli-sage hover:bg-tipikli-sage-dark text-white text-xs px-2 py-1 ml-2"
                                    onClick={() => handleAddToCart({...product, price: variant.price}, variant.location || variant.language || variant.name)}
                                  >
                                    +
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Récapitulatif panier */}
          {getCartCount() > 0 && (
            <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg border-2 border-tipikli-sage">
              <h2 className="text-2xl font-display font-bold text-tipikli-sage-dark mb-6 text-center">
                Récapitulatif du panier
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-tipikli-sage-dark">{getCartCount()}</div>
                  <div className="text-sm text-muted-foreground">Articles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-tipikli-sage-dark">
                    {items.reduce((total, item) => total + (item.product.price * item.quantity), 0)}€
                  </div>
                  <div className="text-sm text-muted-foreground">Total</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-tipikli-sage-dark">{items.length}</div>
                  <div className="text-sm text-muted-foreground">Types</div>
                </div>
                <div>
                  <Button className="w-full bg-tipikli-sage hover:bg-tipikli-sage-dark text-white">
                    Finaliser
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
