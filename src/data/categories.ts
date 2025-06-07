
import { ProductCategory } from "@/types/product";

export const categoryConfig = {
  grater: {
    name: "Râpes",
    icon: "⚒️",
    color: "bg-tipikli-wood"
  },
  ebook: {
    name: "E-books",
    icon: "📖",
    color: "bg-tipikli-sage"
  },
  brush: {
    name: "Brosses",
    icon: "🧽",
    color: "bg-green-500"
  },
  peeler: {
    name: "Éplucheurs",
    icon: "🔪",
    color: "bg-red-500"
  }
} as const;

export const getCategoryConfig = (category: ProductCategory) => {
  return categoryConfig[category];
};
