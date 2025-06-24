import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "grater-large-namur",
    name: "The Grater Large - Namur",
    description: "La râpe multifonction ultime, édition limitée Namur.",
    price: 39.99,
    image: "/images/Namur.jpeg",
    category: "grater-large",
    type: "physical",
    badge: "Nouveau",
    features: ["Acier inoxydable", "Design ergonomique", "Facile à nettoyer"],
    variants: [
      {
        id: "grater-large-namur-1",
        name: "The Grater Large - Namur",
        price: 39.99,
        image: "/images/Namur.jpeg",
        location: "Namur"
      }
    ]
  },
  {
    id: "grater-large-brugges",
    name: "The Grater Large - Bruges",
    description: "Découvrez la saveur authentique de Bruges avec cette râpe.",
    price: 39.99,
    image: "/images/Brugges.jpeg",
    category: "grater-large",
    type: "physical",
    badge: "Populaire",
    features: ["Lames affûtées", "Matériaux durables", "Prise en main confortable"],
    variants: [
      {
        id: "grater-large-brugges-1",
        name: "The Grater Large - Bruges",
        price: 39.99,
        image: "/images/Brugges.jpeg",
        location: "Brugges"
      }
    ]
  },
  {
    id: "grater-small-ath",
    name: "The Grater Small - Ath",
    description: "La petite râpe idéale pour les utilisations quotidiennes à Ath.",
    price: 24.99,
    image: "/images/Ath.jpeg",
    category: "grater-small",
    type: "physical",
    badge: "Pratique",
    features: ["Compacte", "Facile à ranger", "Pour petites quantités"],
    variants: [
      {
        id: "grater-small-ath-1",
        name: "The Grater Small - Ath",
        price: 24.99,
        image: "/images/Ath.jpeg",
        location: "Ath"
      }
    ]
  },
  {
    id: "grater-small-waterloo",
    name: "The Grater Small - Waterloo",
    description: "Une râpe compacte pour les essentiels de cuisine à Waterloo.",
    price: 24.99,
    image: "/images/Waterloo.jpeg",
    category: "grater-small",
    type: "physical",
    badge: "Économique",
    features: ["Légère", "Manche ergonomique", "Résistante à la rouille"],
    variants: [
      {
        id: "grater-small-waterloo-1",
        name: "The Grater Small - Waterloo",
        price: 24.99,
        image: "/images/Waterloo.jpeg",
        location: "Waterloo"
      }
    ]
  },
  {
    id: "grater-brush-small",
    name: "Small Brush",
    description: "Petite brosse de nettoyage pour râpe",
    price: 9.99,
    image: "/images/Small_Brush.png",
    category: "grater-brush",
    type: "physical",
    badge: "Best-seller",
    features: ["Poils résistants", "Manche antidérapant", "Facile à nettoyer"],
    variants: [
      {
        id: "grater-brush-small-1",
        name: "Small Brush",
        price: 9.99,
        image: "/images/Small_Brush.png"
      }
    ]
  },
  {
    id: "grater-brush-lot",
    name: "Lot de 2 Small Brush",
    description: "Lot de 2 petites brosses de nettoyage pour râpe",
    price: 17.99,
    originalPrice: 19.99,
    image: "/images/Lot_de_2_Small_Brush.png",
    category: "grater-brush",
    type: "physical",
    badge: "Économique",
    features: ["Poils résistants", "Manche antidérapant", "Facile à nettoyer"],
    variants: [
      {
        id: "grater-brush-lot-1",
        name: "Lot de 2 Small Brush",
        price: 17.99,
        image: "/images/Lot_de_2_Small_Brush.png"
      }
    ]
  },
  {
    id: "grater-peeler-silicon",
    name: "Silicon Peeler",
    description: "Éplucheur en silicone",
    price: 12.99,
    image: "/images/Silicon_Peeler.png",
    category: "grater-peeler",
    type: "physical",
    badge: "Innovation",
    features: ["Silicone de qualité alimentaire", "Lame en acier inoxydable", "Prise en main confortable"],
    variants: [
      {
        id: "grater-peeler-silicon-1",
        name: "Silicon Peeler",
        price: 12.99,
        image: "/images/Silicon_Peeler.png"
      }
    ]
  },
  {
    id: "grater-cookbooks-ail",
    name: "L'ail dans tous ses états, l'ebook",
    description: "Découvrez toutes les recettes à base d'ail",
    price: 7.99,
    image: "/images/ail.png",
    category: "grater-cookbooks",
    type: "digital",
    badge: "Numérique",
    features: ["Format PDF", "Téléchargement immédiat", "Compatible tous supports"],
    variants: [
      {
        id: "grater-cookbooks-ail-1",
        name: "L'ail dans tous ses états, l'ebook",
        price: 7.99,
        image: "/images/ail.png",
        language: "🇫🇷 Français"
      }
    ]
  },
   {
    id: "grater-cookbooks-gingembre",
    name: "Le gingembre dans tous ses états - l'e book",
    description: "Découvrez toutes les recettes à base de gingembre",
    price: 7.99,
    image: "/images/Le_gingembre_png",
    category: "grater-cookbooks",
    type: "digital",
    badge: "Numérique",
    features: ["Format PDF", "Téléchargement immédiat", "Compatible tous supports"],
    variants: [
      {
        id: "grater-cookbooks-gingembre-1",
        name: "Le gingembre dans tous ses états - l'e book",
        price: 7.99,
        image: "/images/Le_gingembre_png",
        language: "🇫🇷 Français"
      }
    ]
  },
  {
    id: "milk-frother-dark",
    name: "Milk Frother dark",
    description: "Mousseur de lait rechargeable USB",
    price: 29.99,
    image: "/images/frotherdark.png",
    category: "milk-frother",
    type: "physical",
    badge: "Référence",
    features: ["Rechargeable USB", "Silencieux", "Facile à nettoyer"],
    variants: [
      {
        id: "milk-frother-dark-1",
        name: "Foncé",
        price: 29.99,
        image: "/images/frotherdark.png"
      },
      {
        id: "milk-frother-dark-2",
        name: "Argenté",
        price: 29.99,
        image: "/images/frothersilver.png"
      },
      {
        id: "milk-frother-dark-3",
        name: "Blanc",
        price: 29.99,
        image: "/images/frrotherwhite.png"
      }
    ]
  },
  {
    id: "pocket-shot-usb-c",
    name: "Pocket Shot USB-C",
    description: "Batterie externe USB-C",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1609592806047-beb5e8d030be?w=400&h=400&fit=crop",
    category: "pocket-shot",
    type: "physical",
    badge: "Nouveau",
    features: ["USB-C", "Compact", "Recharge rapide"],
    variants: [
      {
        id: "pocket-shot-usb-c-1",
        name: "Pocket Shot USB-C",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1609592806047-beb5e8d030be?w=400&h=400&fit=crop"
      }
    ]
  },
  {
    id: "pocket-shot-lightning",
    name: "Pocket Shot Lightning",
    description: "Batterie externe Lightning",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1609592806047-beb5e8d030be?w=400&h=400&fit=crop",
    category: "pocket-shot",
    type: "physical",
    badge: "Nouveau",
    features: ["Lightning", "Compact", "Recharge rapide"],
    variants: [
      {
        id: "pocket-shot-lightning-1",
        name: "Pocket Shot Lightning",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1609592806047-beb5e8d030be?w=400&h=400&fit=crop"
      }
    ]
  },
  {
    id: "pocket-shot-pack-4",
    name: "Pack de 4 Pocket Shot",
    description: "Pack de 4 batteries externes",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1607731734133-bb087b17ea67?w=400&h=400&fit=crop",
    category: "pocket-shot",
    type: "physical",
    badge: "Économique",
    features: ["4 batteries", "USB-C et Lightning", "Recharge rapide"],
    variants: [
      {
        id: "pocket-shot-pack-4-1",
        name: "Pack de 4 Pocket Shot",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1607731734133-bb087b17ea67?w=400&h=400&fit=crop"
      }
    ]
  },
];

export const getFeaturedProducts = () => {
  // Get 2 existing featured products (excluding Pocket Shot)
  const existingFeatured = products
    .filter(p => p.category !== "pocket-shot")
    .slice(0, 2);
  
  // Get 2 Pocket Shot products to feature
  const pocketShotProducts = products
    .filter(p => p.category === "pocket-shot")
    .slice(0, 2);
  
  // Combine them
  return [...existingFeatured, ...pocketShotProducts];
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
