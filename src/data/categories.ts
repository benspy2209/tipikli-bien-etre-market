
import { ProductCategory } from "@/types/product";

export interface CategoryConfig {
  name: string;
  icon: string;
  description: string;
}

export const categoryConfigs: Record<ProductCategory, CategoryConfig> = {
  "grater-brush": {
    name: "The Grater Brush",
    icon: "🧽",
    description: "Brosses de nettoyage pour râpes"
  },
  "grater-peeler": {
    name: "The Grater Peeler", 
    icon: "🥕",
    description: "Éplucheurs en silicone"
  },
  "grater-large": {
    name: "The Grater Large",
    icon: "🥒",
    description: "Grandes râpes multifonctions"
  },
  "grater-small": {
    name: "The Grater Small",
    icon: "🧄",
    description: "Petites râpes spécialisées"
  },
  "grater-cookbooks": {
    name: "The Grater Cookbooks",
    icon: "📚",
    description: "Livres de recettes et e-books"
  },
  "milk-frother": {
    name: "Mousseur de Lait",
    icon: "☕",
    description: "Mousseurs de lait rechargeables USB"
  },
  "pocket-shot": {
    name: "Pocket Shot – Power Banks ultra compactes",
    icon: "🔋",
    description: "Power banks miniatures et universelles"
  }
};

export const getCategoryConfig = (category: ProductCategory): CategoryConfig => {
  return categoryConfigs[category];
};
