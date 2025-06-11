
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { ShoppingCart, Minus, Plus, Trash2, ArrowLeft, CreditCard } from "lucide-react";

const Cart = () => {
  const { items, total, itemCount, updateQuantity, removeFromCart, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-tipikli-cream">
        <Header />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto text-center">
              <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-6" />
              <h1 className="text-3xl font-bold text-tipikli-sage-dark mb-4">
                Votre panier est vide
              </h1>
              <p className="text-muted-foreground mb-8">
                Découvrez nos produits et ajoutez-les à votre panier pour commencer vos achats.
              </p>
              <Link to="/products">
                <Button className="bg-tipikli-sage hover:bg-tipikli-sage-dark text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voir nos produits
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tipikli-cream">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-tipikli-sage-dark">
                Mon panier ({itemCount} article{itemCount > 1 ? 's' : ''})
              </h1>
              <Link to="/products">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continuer mes achats
                </Button>
              </Link>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Articles du panier */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Articles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {items.map((item, index) => (
                      <div key={item.id}>
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-tipikli-sage/20 to-tipikli-wood/20 rounded-lg flex items-center justify-center overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = '<span class="text-lg">📦</span>';
                                }
                              }}
                            />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <p className="text-muted-foreground">{item.price}€ l'unité</p>
                          </div>

                          <div className="flex items-center space-x-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="text-lg font-medium min-w-[30px] text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <p className="font-semibold text-lg">
                              {(item.price * item.quantity).toFixed(2)}€
                            </p>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 mt-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        {index < items.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Vider le panier
                  </Button>
                </div>
              </div>

              {/* Résumé de la commande */}
              <div>
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Résumé de la commande</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Sous-total</span>
                      <span>{total.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TVA (21%)</span>
                      <span>{(total * 0.21).toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Livraison</span>
                      <span className="text-green-600 font-medium">Gratuite</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-xl font-bold text-tipikli-sage-dark">
                      <span>Total</span>
                      <span>{(total * 1.21).toFixed(2)}€</span>
                    </div>
                    
                    <div className="space-y-3 mt-8">
                      <Link to="/checkout" className="w-full block">
                        <Button className="w-full bg-tipikli-sage hover:bg-tipikli-sage-dark text-white text-lg py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                          <CreditCard className="w-5 h-5 mr-2" />
                          Passer commande
                        </Button>
                      </Link>
                      <Link to="/products" className="w-full block">
                        <Button variant="outline" className="w-full py-3">
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Continuer mes achats
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
