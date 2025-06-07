import { Product } from "@/types/product";
import { getProductImage } from "@/utils/imageUtils";

export const products: Product[] = [
  // The Grater Large - Grandes râpes par ville
  {
    id: "grater-large",
    name: "The Grater Large",
    description: "Râpe révolutionnaire testée dans les marchés de Belgique",
    longDescription: "La râpe qui révolutionne votre cuisine. Testée et approuvée dans plus de 25 marchés belges, elle vous permettra de râper ail, gingembre et zestes sans effort.",
    price: 29,
    originalPrice: 39,
    image: getProductImage("The Grater Large", "Bruxelles"),
    category: "grater-large",
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

  // The Grater Cookbooks - E-books ail
  {
    id: "ebook-garlic",
    name: "Guide complet de l'ail",
    description: "Tout savoir sur l'ail avec The Grater Cookbooks",
    longDescription: "Découvrez tous les secrets de l'ail avec ce guide complet. Recettes, techniques, bienfaits santé et astuces de conservation.",
    price: 15,
    originalPrice: 20,
    image: getProductImage("L'ail dans tous ses états, l'ebook"),
    category: "grater-cookbooks",
    type: "digital",
    badge: "Nouveau",
    features: ["70+ recettes", "Guide santé", "Format PDF"],
    variants: [
      { id: "ebook-garlic-fr", name: "Français", price: 15, language: "fr" },
      { id: "ebook-garlic-en", name: "English", price: 15, language: "en" },
      { id: "ebook-garlic-nl", name: "Nederlands", price: 15, language: "nl" }
    ]
  },

  // The Grater Cookbooks - E-books gingembre
  {
    id: "ebook-ginger",
    name: "Guide complet du gingembre",
    description: "Maîtrisez le gingembre avec The Grater Cookbooks",
    longDescription: "Guide complet du gingembre : culture, bienfaits, recettes traditionnelles et modernes pour exploiter toute la richesse de cette racine exceptionnelle.",
    price: 15,
    originalPrice: 20,
    image: getProductImage("Le gingembre dans tous ses états - l'e book"),
    category: "grater-cookbooks",
    type: "digital",
    badge: "Populaire",
    features: ["60+ recettes", "Bienfaits santé", "Techniques de culture"],
    variants: [
      { id: "ebook-ginger-fr", name: "Français", price: 15, language: "fr" },
      { id: "ebook-ginger-en", name: "English", price: 15, language: "en" },
      { id: "ebook-ginger-nl", name: "Nederlands", price: 15, language: "nl" }
    ]
  },

  // The Grater Brush - Brosse simple
  {
    id: "small-brush",
    name: "Small Brush",
    description: "Petite brosse de nettoyage pour râpe – L'outil pratique pour rassembler vos ingrédients fraîchement râpés",
    longDescription: "Cette petite brosse est l'accessoire indispensable pour rassembler facilement les ingrédients râpés avec The Grater. Conçue avec des poils doux mais résistants, elle permet de récupérer chaque particule d'ail, de gingembre, de zestes ou de chocolat sans effort et sans laisser de résidus sur la râpe. Sa taille compacte la rend idéale pour nettoyer les coins difficiles d'accès et pour éviter le gaspillage d'ingrédients.",
    price: 5,
    image: getProductImage("Small Brush"),
    category: "grater-brush",
    type: "physical",
    badge: "Pratique",
    features: ["Utilisation facile", "Pratique et compacte", "Poignée ergonomique"]
  },

  // The Grater Brush - Lot de 2
  {
    id: "small-brush-lot",
    name: "Lot de 2 Small Brush",
    description: "Petite brosse de nettoyage pour râpe – L'outil pratique pour rassembler vos ingrédients fraîchement râpés",
    longDescription: "Cette petite brosse est l'accessoire indispensable pour rassembler facilement les ingrédients râpés avec The Grater. Conçue avec des poils doux mais résistants, elle permet de récupérer chaque particule d'ail, de gingembre, de zestes ou de chocolat sans effort et sans laisser de résidus sur la râpe. Sa taille compacte la rend idéale pour nettoyer les coins difficiles d'accès et pour éviter le gaspillage d'ingrédients.",
    price: 9,
    image: getProductImage("Lot de 2 Small Brush"),
    category: "grater-brush",
    type: "physical",
    badge: "Économique",
    features: ["Pack de 2", "Utilisation facile", "Pratique et compacte"]
  },

  // The Grater Peeler
  {
    id: "silicon-peeler",
    name: "The Grater Peeler",
    description: "Silicone Peeler – Éplucheur d'ail en silicone, simple et pratique",
    longDescription: "Éplucher l'ail n'a jamais été aussi facile ! Avec notre Silicone Peeler, retirez la peau des gousses d'ail en quelques secondes sans odeur sur les mains. Fabriqué en silicone de haute qualité, cet accessoire souple et durable vous permet d'éplucher l'ail en un tour de main : il suffit de glisser la gousse à l'intérieur, de rouler doucement et de laisser la magie opérer !",
    price: 5,
    image: getProductImage("Silicon Peeler"),
    category: "grater-peeler",
    type: "physical",
    badge: "Innovation",
    features: ["Rapide et sans effort", "Hygiénique", "Facile à nettoyer", "Design compact"]
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.slice(0, 4);
};
