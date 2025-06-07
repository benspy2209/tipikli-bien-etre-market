
import { Product } from "@/types/product";
import { getProductImage } from "@/utils/imageUtils";

// Données normalisées basées sur votre CSV
export const products: Product[] = [
  // Graters par ville - regroupés en un seul produit avec variantes
  {
    id: "grater-large",
    name: "The Grater Large",
    description: "Râpe révolutionnaire testée dans les marchés de Belgique",
    longDescription: "La râpe qui révolutionne votre cuisine. Testée et approuvée dans plus de 25 marchés belges, elle vous permettra de râper ail, gingembre et zestes sans effort.",
    price: 29,
    originalPrice: 39,
    image: getProductImage("The Grater Large", "Bruxelles"),
    category: "grater",
    type: "physical",
    badge: "Best-seller",
    features: ["Lame ultra-tranchante", "Facile à nettoyer", "Design ergonomique"],
    variants: [
      { id: "grater-ath", name: "Ath", price: 29, image: getProductImage("", "Ath"), location: "Ath" },
      { id: "grater-auderghem", name: "Auderghem", price: 29, image: getProductImage("", "Auderghem"), location: "Auderghem" },
      { id: "grater-bastogne", name: "Bastogne", price: 29, image: getProductImage("", "Bastogne"), location: "Bastogne" },
      { id: "grater-beveren", name: "Beveren", price: 29, image: getProductImage("", "Beveren"), location: "Beveren" },
      { id: "grater-binche", name: "Binche", price: 29, image: getProductImage("", "Binche"), location: "Binche" },
      { id: "grater-brugges", name: "Brugges", price: 29, image: getProductImage("", "Brugges"), location: "Brugges" }
    ]
  },
  
  // E-books ail
  {
    id: "ebook-garlic-fr",
    name: "L'ail dans tous ses états",
    description: "Guide complet pour maîtriser l'ail en cuisine",
    longDescription: "Découvrez tous les secrets de l'ail avec ce guide complet. Recettes, techniques, bienfaits santé et astuces de conservation.",
    price: 15,
    originalPrice: 20,
    image: getProductImage("L'ail dans tous ses états, l'ebook"),
    category: "ebook",
    type: "digital",
    badge: "Nouveau",
    features: ["70+ recettes", "Guide santé", "Format PDF"],
    variants: [
      { id: "ebook-garlic-fr", name: "Français", price: 15, language: "fr" },
      { id: "ebook-garlic-en", name: "English", price: 15, language: "en" },
      { id: "ebook-garlic-nl", name: "Nederlands", price: 15, language: "nl" }
    ]
  },

  // E-books gingembre
  {
    id: "ebook-ginger-fr",
    name: "Le gingembre dans tous ses états",
    description: "Tout savoir sur le gingembre et ses utilisations",
    longDescription: "Guide complet du gingembre : culture, bienfaits, recettes traditionnelles et modernes pour exploiter toute la richesse de cette racine exceptionnelle.",
    price: 15,
    originalPrice: 20,
    image: getProductImage("Le gingembre dans tous ses états - l'e book"),
    category: "ebook",
    type: "digital",
    badge: "Populaire",
    features: ["60+ recettes", "Bienfaits santé", "Techniques de culture"],
    variants: [
      { id: "ebook-ginger-fr", name: "Français", price: 15, language: "fr" },
      { id: "ebook-ginger-en", name: "English", price: 15, language: "en" },
      { id: "ebook-ginger-nl", name: "Nederlands", price: 15, language: "nl" }
    ]
  },

  // Small Brush
  {
    id: "small-brush",
    name: "Small Brush",
    description: "Brosse de nettoyage parfaite pour vos ustensiles",
    longDescription: "Brosse spécialement conçue pour nettoyer en profondeur vos râpes et autres ustensiles de cuisine. Poils résistants et manche ergonomique.",
    price: 8,
    originalPrice: 12,
    image: getProductImage("Small Brush"),
    category: "brush",
    type: "physical",
    badge: "Pratique",
    features: ["Poils résistants", "Manche ergonomique", "Compact"]
  },

  // Lot de 2 Small Brush
  {
    id: "small-brush-lot",
    name: "Lot de 2 Small Brush",
    description: "Pack économique de 2 brosses de nettoyage",
    longDescription: "Lot de 2 brosses Small Brush pour un nettoyage optimal. Parfait pour avoir toujours une brosse propre sous la main.",
    price: 14,
    originalPrice: 20,
    image: getProductImage("Lot de 2 Small Brush"),
    category: "brush",
    type: "physical",
    badge: "Économique",
    features: ["Pack de 2", "Poils résistants", "Économique"]
  },

  // Silicon Peeler
  {
    id: "silicon-peeler",
    name: "Silicon Peeler",
    description: "Éplucheur en silicone révolutionnaire",
    longDescription: "Éplucheur en silicone de qualité alimentaire. Doux pour vos mains, efficace sur tous types de légumes et fruits.",
    price: 12,
    originalPrice: 16,
    image: getProductImage("Silicon Peeler"),
    category: "peeler",
    type: "physical",
    badge: "Innovation",
    features: ["Silicone alimentaire", "Antidérapant", "Facile à nettoyer"]
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.slice(0, 4);
};
