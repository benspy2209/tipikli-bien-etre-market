
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react";

interface OrderData {
  id: string;
  items: any[];
  total: number;
  customerInfo: any;
  status: string;
  createdAt: string;
}

const OrderSuccess = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    if (orderId) {
      const storedOrder = localStorage.getItem(`order-${orderId}`);
      if (storedOrder) {
        setOrderData(JSON.parse(storedOrder));
      }
    }
  }, [orderId]);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-tipikli-cream">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Commande non trouvée</h1>
            <Link to="/products">
              <Button>Retour aux produits</Button>
            </Link>
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
          <div className="max-w-2xl mx-auto">
            {/* Success Header */}
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-tipikli-sage-dark mb-2">
                Commande confirmée !
              </h1>
              <p className="text-lg text-muted-foreground">
                Merci pour votre achat. Votre commande #{orderData.id} a été traitée avec succès.
              </p>
            </div>

            {/* Order Details */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Détails de votre commande</h2>
                
                <div className="space-y-4">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Quantité: {item.quantity} × {item.price}€
                        </p>
                      </div>
                      <p className="font-medium">
                        {(item.price * item.quantity).toFixed(2)}€
                      </p>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total TTC</span>
                      <span>{(orderData.total * 1.21).toFixed(2)}€</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Prochaines étapes</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-tipikli-sage mt-0.5" />
                    <div>
                      <p className="font-medium">Confirmation par email</p>
                      <p className="text-sm text-muted-foreground">
                        Un email de confirmation a été envoyé à {orderData.customerInfo.email}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Package className="w-5 h-5 text-tipikli-sage mt-0.5" />
                    <div>
                      <p className="font-medium">Préparation et expédition</p>
                      <p className="text-sm text-muted-foreground">
                        Votre commande sera préparée et expédiée dans les 2-3 jours ouvrables
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Adresse de livraison</h2>
                <div className="text-muted-foreground">
                  <p>{orderData.customerInfo.firstName} {orderData.customerInfo.lastName}</p>
                  <p>{orderData.customerInfo.address}</p>
                  <p>{orderData.customerInfo.postalCode} {orderData.customerInfo.city}</p>
                  <p>{orderData.customerInfo.country}</p>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button variant="outline" className="w-full sm:w-auto">
                  Continuer mes achats
                </Button>
              </Link>
              <Link to="/">
                <Button className="w-full sm:w-auto bg-tipikli-sage hover:bg-tipikli-sage-dark">
                  Retour à l'accueil
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderSuccess;
