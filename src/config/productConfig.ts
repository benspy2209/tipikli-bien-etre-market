
import { ProductCategory } from "@/types/product";

export interface CategoryConfig {
  name: string;
  icon: string;
  description: string;
  defaultPrice?: number;
  defaultBadge?: string;
}

export interface ProductTemplate {
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  category: string;
  type: "physical" | "digital";
  badge?: string;
  features?: string[];
  variants?: Array<{
    name: string;
    price: number;
    image?: string;
    language?: string;
    location?: string;
  }>;
}

// Configuration des catégories avec leurs paramètres par défaut
export const categoryDefaults: Record<string, CategoryConfig> = {
  "grater-large": {
    name: "The Grater Large",
    icon: "🥒",
    description: "Grandes râpes multifonctions",
    defaultPrice: 39,
    defaultBadge: "Best-seller"
  },
  "grater-small": {
    name: "The Grater Small", 
    icon: "🧄",
    description: "Petites râpes spécialisées",
    defaultPrice: 19,
    defaultBadge: "Compact"
  },
  "grater-brush": {
    name: "The Grater Brush",
    icon: "🧽", 
    description: "Brosses de nettoyage pour râpes",
    defaultPrice: 5,
    defaultBadge: "Pratique"
  },
  "grater-peeler": {
    name: "The Grater Peeler",
    icon: "🥕",
    description: "Éplucheurs en silicone", 
    defaultPrice: 5,
    defaultBadge: "Innovation"
  },
  "grater-cookbooks": {
    name: "The Grater Cookbooks",
    icon: "📚",
    description: "Livres de recettes et e-books",
    defaultPrice: 20,
    defaultBadge: "Référence"
  },
  "milk-frother": {
    name: "Mousseur de Lait",
    icon: "☕",
    description: "Mousseurs de lait rechargeables USB",
    defaultPrice: 40,
    defaultBadge: "Nouveau"
  }
};

// Fonction pour générer un ID unique basé sur le nom et la catégorie
export const generateProductId = (name: string, category: string): string => {
  const cleanName = name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
  
  return `${category}-${cleanName}`;
};

// Fonction pour obtenir l'image par défaut basée sur la catégorie et le nom
export const getDefaultImage = (category: string, name: string): string => {
  // Pour les produits avec localisation (comme The Grater Large/Small)
  if (category === "grater-large" || category === "grater-small") {
    const cityMatch = name.match(/\b([A-Z][a-z]+(?:-[A-Z][a-z]+)*)\b/);
    if (cityMatch) {
      return `/images/${cityMatch[1]}.jpeg`;
    }
  }
  
  // Pour les autres catégories, utiliser le nom nettoyé
  const cleanName = name.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '_');
  return `/images/${cleanName}.png`;
};

// Fonction principale pour ajouter un produit facilement
export const createProduct = (template: ProductTemplate) => {
  const category = template.category as ProductCategory;
  const categoryConfig = categoryDefaults[category];
  
  if (!categoryConfig) {
    throw new Error(`Catégorie inconnue: ${category}. Catégories disponibles: ${Object.keys(categoryDefaults).join(', ')}`);
  }

  return {
    id: generateProductId(template.name, category),
    name: template.name,
    description: template.description,
    longDescription: template.longDescription || template.description,
    price: template.price || categoryConfig.defaultPrice || 0,
    originalPrice: template.originalPrice,
    image: getDefaultImage(category, template.name),
    category: category,
    type: template.type,
    badge: template.badge || categoryConfig.defaultBadge,
    features: template.features || [],
    variants: template.variants
  };
};

// Templates pré-configurés pour faciliter l'ajout
export const productTemplates = {
  graterLarge: (cityName: string) => createProduct({
    name: `The Grater ${cityName}`,
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité...",
    price: 39,
    category: "grater-large",
    type: "physical",
    features: [
      "Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur",
      "Design ergonomique", 
      "Matériau durable : Céramique de haute qualité",
      "Râpe efficace",
      "Entretien facile : Passe au lave-vaisselle"
    ]
  }),
  
  graterSmall: (cityName: string) => createProduct({
    name: `The Grater Small ${cityName}`,
    description: "The Grater Small – Le râpeur compact pour des préparations précises !",
    price: 19,
    category: "grater-small", 
    type: "physical",
    features: [
      "Format compact : 13 cm de diamètre et 3 cm de profondeur",
      "Ergonomique et pratique",
      "Céramique durable",
      "Râpe fine et efficace",
      "Entretien facile"
    ]
  }),

  ebook: (title: string, language: string, flag: string) => createProduct({
    name: `💻 ${title}`,
    description: `Guide complet - E-book en ${language}`,
    price: 5,
    category: "grater-cookbooks",
    type: "digital",
    badge: `${flag} ${language}`,
    features: ["Format PDF", "Téléchargement instantané", "Recettes exclusives"]
  })
};
