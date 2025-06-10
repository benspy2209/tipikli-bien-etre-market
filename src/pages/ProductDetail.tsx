
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { products } from "@/data/products";
import { getCategoryConfig } from "@/data/categories";
import { useCart } from "@/hooks/useCart";
import { ArrowLeft, Heart, Minus, Plus, ShoppingCart, Play } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-tipikli-cream">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Produit non trouvé</h1>
            <Link to="/products">
              <Button>Retour aux produits</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryConfig = getCategoryConfig(product.category);
  const selectedVariantData = product.variants?.find(v => v.id === selectedVariant);
  const currentPrice = selectedVariantData?.price || product.price;

  const handleAddToCart = () => {
    addToCart({
      id: selectedVariant || product.id,
      name: selectedVariantData?.name ? `${product.name} - ${selectedVariantData.name}` : product.name,
      price: currentPrice,
      image: selectedVariantData?.image || product.image,
      quantity
    });
  };

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

  // Check if this is the milk frother product
  const isMilkFrother = product.category === "milk-frother";

  return (
    <div className="min-h-screen bg-tipikli-cream">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8">
            <Link to="/products" className="flex items-center text-muted-foreground hover:text-tipikli-sage">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Retour aux produits
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-6">
              <Card className="p-4">
                <div className="w-full aspect-square bg-gradient-to-br from-tipikli-beige to-white rounded-3xl flex items-center justify-center mx-auto mb-6 overflow-hidden">
                  <img 
                    src={selectedVariantData?.image || product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-6"
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-8xl">${categoryConfig.icon}</span>`;
                      }
                    }}
                  />
                </div>
                {product.badge && (
                  <div className="text-center">
                    <Badge className={`${getBadgeColor(product.badge)} text-white`}>
                      {product.badge}
                    </Badge>
                  </div>
                )}
              </Card>

              {/* Video Section for Milk Frother */}
              {isMilkFrother && (
                <Card className="p-4">
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-lg flex items-center justify-center mb-2">
                      <Play className="w-5 h-5 mr-2 text-tipikli-orange" />
                      Vidéo de démonstration
                    </h3>
                  </div>
                  <AspectRatio ratio={16 / 9}>
                    <div 
                      style={{ 
                        left: 0, 
                        width: '100%', 
                        height: '100%', 
                        position: 'relative' 
                      }}
                      dangerouslySetInnerHTML={{
                        __html: `<figure style="left: 0; width: 100%; height: 100%; position: relative; margin: 0;"><iframe id="pv_0H2mMze3" src="https://media.publit.io/file/videodemo.html?player=1" scrolling="no" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute; overflow:hidden;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe></figure>`
                      }}
                    />
                  </AspectRatio>
                </Card>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-display font-bold text-tipikli-sage-dark mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {product.description}
                </p>
                {product.longDescription && (
                  <p className="text-muted-foreground">
                    {product.longDescription}
                  </p>
                )}
              </div>

              <Separator />

              {/* Features */}
              {product.features && (
                <div>
                  <h3 className="font-semibold text-lg mb-3">Caractéristiques</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-tipikli-sage rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div>
                  <h3 className="font-semibold text-lg mb-3">Variantes</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.variants.map((variant) => (
                      <Button
                        key={variant.id}
                        variant={selectedVariant === variant.id ? "default" : "outline"}
                        className={`text-sm ${selectedVariant === variant.id ? "bg-tipikli-sage" : ""}`}
                        onClick={() => setSelectedVariant(variant.id)}
                      >
                        {variant.name}
                        {variant.location && ` (${variant.location})`}
                        {variant.language && ` (${variant.language})`}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <Separator />

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-tipikli-sage-dark">
                  {currentPrice}€
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice}€
                  </span>
                )}
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-medium">Quantité:</span>
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="px-4 py-2 min-w-[50px] text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button
                    className="flex-1 bg-tipikli-sage hover:bg-tipikli-sage-dark text-white"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Ajouter au panier
                  </Button>
                  <Button
                    variant="outline"
                    className="border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
                  </Button>
                </div>
              </div>

              {/* Product Type Info */}
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-medium">
                    {product.type === "physical" ? "Produit physique" : "Produit numérique"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
