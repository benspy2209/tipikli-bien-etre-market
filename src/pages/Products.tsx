
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/data/products";
import { getCategoryConfig } from "@/data/categories";
import { getProductImage } from "@/utils/imageUtils";
import { ProductCategory, ProductFilter } from "@/types/product";
import { Search, Filter } from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<ProductFilter>({});

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search filter
      const matchesSearch = !searchTerm || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory = !filters.category || product.category === filters.category;

      // Type filter
      const matchesType = !filters.type || product.type === filters.type;

      // Price filter
      const matchesPrice = !filters.priceRange || 
        (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]);

      return matchesSearch && matchesCategory && matchesType && matchesPrice;
    });
  }, [searchTerm, filters]);

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Best-seller": return "bg-red-500";
      case "Nouveau": return "bg-green-500";
      case "Artisanal": return "bg-tipikli-terre";
      case "Populaire": return "bg-blue-500";
      case "Pratique": return "bg-purple-500";
      case "Économique": return "bg-tipikli-orange";
      case "Innovation": return "bg-pink-500";
      default: return "bg-tipikli-noir";
    }
  };

  return (
    <div className="min-h-screen bg-tipikli-cream">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-tipikli-noir mb-4">
              La gamme The Grater
            </h1>
            <p className="text-lg text-tipikli-noir/70 max-w-2xl mx-auto">
              Découvrez nos 5 gammes de produits The Grater, testés et approuvés
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tipikli-noir/50 w-4 h-4" />
              <Input
                placeholder="Rechercher un produit The Grater..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-tipikli-beige-dark focus:border-tipikli-jaune"
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Select onValueChange={(value) => setFilters(prev => ({ ...prev, category: value === 'all' ? undefined : value as ProductCategory }))}>
                <SelectTrigger className="w-[200px] border-tipikli-beige-dark">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Gamme The Grater" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les gammes</SelectItem>
                  <SelectItem value="grater-large">The Grater Large</SelectItem>
                  <SelectItem value="grater-small">The Grater Small</SelectItem>
                  <SelectItem value="grater-brush">The Grater Brush</SelectItem>
                  <SelectItem value="grater-peeler">The Grater Peeler</SelectItem>
                  <SelectItem value="grater-cookbooks">The Grater Cookbooks</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => setFilters(prev => ({ ...prev, type: value === 'all' ? undefined : value as any }))}>
                <SelectTrigger className="w-[180px] border-tipikli-beige-dark">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous types</SelectItem>
                  <SelectItem value="physical">Physique</SelectItem>
                  <SelectItem value="digital">Numérique</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => {
                const ranges = {
                  "0-15": [0, 15],
                  "15-30": [15, 30],
                  "30+": [30, 100]
                };
                setFilters(prev => ({ 
                  ...prev, 
                  priceRange: value === 'all' ? undefined : ranges[value as keyof typeof ranges] as [number, number] 
                }));
              }}>
                <SelectTrigger className="w-[180px] border-tipikli-beige-dark">
                  <SelectValue placeholder="Prix" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous prix</SelectItem>
                  <SelectItem value="0-15">0€ - 15€</SelectItem>
                  <SelectItem value="15-30">15€ - 30€</SelectItem>
                  <SelectItem value="30+">30€+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-tipikli-noir/70">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const categoryConfig = getCategoryConfig(product.category);
              const productImageSrc = getProductImage(product.name);
              
              return (
                <Card key={product.id} className="group hover-lift border-tipikli-beige-dark bg-white shadow-natural">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <div className="w-full h-48 bg-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                        {productImageSrc !== "/images/test.png" ? (
                          <img 
                            src={productImageSrc} 
                            alt={product.name}
                            className="w-full h-full object-cover rounded-2xl"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<span class="text-6xl text-tipikli-orange">${categoryConfig.icon}</span>`;
                              }
                            }}
                          />
                        ) : (
                          <span className="text-6xl text-tipikli-orange">{categoryConfig.icon}</span>
                        )}
                      </div>
                      
                      {product.badge && (
                        <Badge className={`absolute -top-2 -right-2 text-xs ${getBadgeColor(product.badge)} text-white`}>
                          {product.badge}
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-xs text-tipikli-orange font-medium mb-1">
                          {categoryConfig.name}
                        </p>
                        <h3 className="font-semibold text-lg text-tipikli-noir leading-tight">
                          {product.name}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-tipikli-noir/70 line-clamp-2 text-center">
                        {product.description}
                      </p>

                      {product.variants && product.variants.length > 0 && (
                        <div className="text-xs text-tipikli-noir/60 text-center">
                          <span className="font-medium">{product.variants.length} variantes disponibles</span>
                        </div>
                      )}

                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-xl font-bold text-tipikli-noir">
                          {product.price}€
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-tipikli-noir/50 line-through">
                            {product.originalPrice}€
                          </span>
                        )}
                      </div>

                      <Link to={`/product/${product.id}`} className="block">
                        <Button className="w-full bg-gradient-to-r from-tipikli-jaune to-tipikli-orange hover:from-tipikli-jaune/90 hover:to-tipikli-orange/90 text-tipikli-noir font-medium transition-all duration-300 shadow-warm hover-lift">
                          Voir le produit
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-tipikli-noir/70">Aucun produit ne correspond à vos critères de recherche.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
