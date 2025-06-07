
import { ProductCategory } from "@/types/product";

export const categoryConfig = {
  "grater-brush": {
    name: "The Grater Brush",
    icon: "🧽",
    color: "bg-green-500",
    description: "Brosses de nettoyage pour vos râpes"
  },
  "grater-peeler": {
    name: "The Grater Peeler",
    icon: "🔪",
    color: "bg-red-500",
    description: "Éplucheurs en silicone révolutionnaires"
  },
  "grater-large": {
    name: "The Grater Large",
    icon: "⚒️",
    color: "bg-tipikli-wood",
    description: "Grandes râpes testées dans les marchés"
  },
  "grater-small": {
    name: "The Grater Small",
    icon: "🔧",
    color: "bg-blue-500",
    description: "Petites râpes compactes et efficaces"
  },
  "grater-cookbooks": {
    name: "The Grater Cookbooks",
    icon: "📖",
    color: "bg-tipikli-sage",
    description: "E-books et guides culinaires"
  }
} as const;

export const getCategoryConfig = (category: ProductCategory) => {
  return categoryConfig[category];
};
