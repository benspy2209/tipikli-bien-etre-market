
export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: ProductCategory;
  type: ProductType;
  variants?: ProductVariant[];
  badge?: string;
  features?: string[];
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  image?: string;
  language?: string;
  location?: string;
}

export type ProductCategory = 
  | "grater" 
  | "ebook" 
  | "brush" 
  | "peeler";

export type ProductType = 
  | "physical" 
  | "digital";

export interface ProductFilter {
  category?: ProductCategory;
  priceRange?: [number, number];
  type?: ProductType;
}
