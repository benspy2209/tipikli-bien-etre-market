
import { Product } from "@/types/product";
import { createProduct, type ProductTemplate } from "@/config/productConfig";

/**
 * Valide et ajoute un produit au système
 * Utilise la configuration centralisée pour générer automatiquement
 * les champs manquants et valider la cohérence
 */
export const addProduct = (template: ProductTemplate): Product => {
  try {
    return createProduct(template);
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit:", error);
    throw error;
  }
};

/**
 * Valide une liste de produits et retourne les erreurs éventuelles
 */
export const validateProducts = (products: Product[]): string[] => {
  const errors: string[] = [];
  const ids = new Set<string>();
  
  products.forEach((product, index) => {
    // Vérifier les IDs dupliqués
    if (ids.has(product.id)) {
      errors.push(`Produit ${index + 1}: ID dupliqué "${product.id}"`);
    } else {
      ids.add(product.id);
    }
    
    // Vérifier les champs obligatoires
    if (!product.name?.trim()) {
      errors.push(`Produit ${index + 1}: Nom manquant`);
    }
    
    if (!product.description?.trim()) {
      errors.push(`Produit ${index + 1}: Description manquante`);
    }
    
    if (product.price < 0) {
      errors.push(`Produit ${index + 1}: Prix invalide`);
    }
  });
  
  return errors;
};

/**
 * Helper pour créer rapidement des produits The Grater par ville
 */
export const createGraterByCity = (cityName: string, size: "large" | "small" = "large"): Product => {
  const template: ProductTemplate = {
    name: `The Grater${size === "small" ? " Small" : ""} ${cityName}`,
    description: `The Grater${size === "small" ? " Small" : ""} – L'outil ultime pour râper avec précision !`,
    longDescription: size === "large" 
      ? "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité..."
      : "Découvrez The Grater Small, une assiette de 13 cm de diamètre...",
    price: size === "large" ? 39 : 19,
    category: size === "large" ? "grater-large" : "grater-small",
    type: "physical",
    features: size === "large" 
      ? [
          "Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur",
          "Design ergonomique",
          "Matériau durable : Céramique de haute qualité",
          "Râpe efficace",
          "Entretien facile : Passe au lave-vaisselle"
        ]
      : [
          "Format compact : 13 cm de diamètre et 3 cm de profondeur",
          "Ergonomique et pratique",
          "Céramique durable",
          "Râpe fine et efficace",
          "Entretien facile"
        ]
  };
  
  return createProduct(template);
};

/**
 * Helper pour créer rapidement des e-books
 */
export const createEbook = (title: string, language: string, flag: string): Product => {
  const template: ProductTemplate = {
    name: `💻 ${title}`,
    description: `Guide complet - E-book en ${language}`,
    price: 5,
    category: "grater-cookbooks",
    type: "digital",
    badge: `${flag} ${language}`,
    features: ["Format PDF", "Téléchargement instantané", "Recettes exclusives"]
  };
  
  return createProduct(template);
};
