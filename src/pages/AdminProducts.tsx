
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Copy, Check } from "lucide-react";
import { categoryDefaults, productTemplates, createProduct, type ProductTemplate } from "@/config/productConfig";
import { useToast } from "@/hooks/use-toast";

const AdminProducts = () => {
  const { toast } = useToast();
  const [currentProduct, setCurrentProduct] = useState<ProductTemplate>({
    name: "",
    description: "",
    price: 0,
    category: "grater-large",
    type: "physical"
  });
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const handleInputChange = (field: keyof ProductTemplate, value: any) => {
    setCurrentProduct(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateProductCode = () => {
    try {
      const product = createProduct(currentProduct);
      const codeString = `  {
    id: "${product.id}",
    name: "${product.name}",
    description: "${product.description}",
    longDescription: "${product.longDescription}",
    price: ${product.price},${product.originalPrice ? `\n    originalPrice: ${product.originalPrice},` : ''}
    image: getProductImage("${product.name}"),
    category: "${product.category}",
    type: "${product.type}",
    badge: "${product.badge}",
    features: ${JSON.stringify(product.features, null, 6).replace(/\n/g, '\n    ')}
  },`;
      
      setGeneratedCode(codeString);
      toast({
        title: "Code généré !",
        description: "Le code du produit a été généré avec succès.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Erreur lors de la génération",
        variant: "destructive"
      });
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copié !",
        description: "Le code a été copié dans le presse-papier.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de copier le code.",
        variant: "destructive"
      });
    }
  };

  const useTemplate = (templateName: string) => {
    switch (templateName) {
      case "grater-large":
        const cityName = prompt("Nom de la ville ?");
        if (cityName) {
          const product = productTemplates.graterLarge(cityName);
          setCurrentProduct({
            name: product.name,
            description: product.description,
            longDescription: product.longDescription,
            price: product.price,
            category: product.category,
            type: product.type,
            features: product.features
          });
        }
        break;
      case "grater-small":
        const smallCityName = prompt("Nom de la ville ?");
        if (smallCityName) {
          const product = productTemplates.graterSmall(smallCityName);
          setCurrentProduct({
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            type: product.type,
            features: product.features
          });
        }
        break;
      case "ebook":
        const title = prompt("Titre de l'e-book ?");
        const language = prompt("Langue (ex: Français, English, Nederlands) ?");
        const flag = prompt("Drapeau (ex: 🇫🇷, 🇬🇧, 🇳🇱) ?");
        if (title && language && flag) {
          const product = productTemplates.ebook(title, language, flag);
          setCurrentProduct({
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            type: product.type,
            features: product.features
          });
        }
        break;
    }
  };

  return (
    <div className="min-h-screen bg-tipikli-cream p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-tipikli-noir mb-2">
            Administration des Produits
          </h1>
          <p className="text-tipikli-noir/70">
            Ajoutez facilement de nouveaux produits à la gamme The Grater
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulaire de création */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Nouveau Produit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Templates rapides */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Templates rapides</label>
                <div className="flex gap-2 flex-wrap">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => useTemplate("grater-large")}
                  >
                    The Grater Large
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => useTemplate("grater-small")}
                  >
                    The Grater Small
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => useTemplate("ebook")}
                  >
                    E-book
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Nom du produit</label>
                <Input
                  value={currentProduct.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="ex: The Grater Brussels"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={currentProduct.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Description courte du produit"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Prix (€)</label>
                  <Input
                    type="number"
                    value={currentProduct.price}
                    onChange={(e) => handleInputChange("price", Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Catégorie</label>
                  <Select
                    value={currentProduct.category}
                    onValueChange={(value) => handleInputChange("category", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(categoryDefaults).map(([key, config]) => (
                        <SelectItem key={key} value={key}>
                          {config.icon} {config.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Type</label>
                <Select
                  value={currentProduct.type}
                  onValueChange={(value: "physical" | "digital") => handleInputChange("type", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physical">Physique</SelectItem>
                    <SelectItem value="digital">Numérique</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={generateProductCode} className="w-full">
                Générer le code du produit
              </Button>
            </CardContent>
          </Card>

          {/* Code généré */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Code généré
                {generatedCode && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={copyToClipboard}
                    className="flex items-center gap-2"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied ? "Copié !" : "Copier"}
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {generatedCode ? (
                <div className="space-y-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>{generatedCode}</code>
                    </pre>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium mb-2">Instructions :</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Copiez le code ci-dessus</li>
                      <li>Ouvrez le fichier <code>src/data/products.ts</code></li>
                      <li>Ajoutez le code dans le tableau <code>products</code></li>
                      <li>Sauvegardez le fichier</li>
                    </ol>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  Remplissez le formulaire et cliquez sur "Générer" pour voir le code
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Guide des catégories */}
        <Card>
          <CardHeader>
            <CardTitle>Guide des catégories disponibles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(categoryDefaults).map(([key, config]) => (
                <div key={key} className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{config.icon}</span>
                    <h3 className="font-medium">{config.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{config.description}</p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Prix: {config.defaultPrice}€</Badge>
                    <Badge variant="outline">{config.defaultBadge}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminProducts;
