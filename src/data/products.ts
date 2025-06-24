import { Product } from "@/types/product";
import { pocketShotProducts } from "./pocket-shot-products";

export const products: Product[] = [
  {
    id: "grater-large-1",
    name: "The Grater Large – Râpe multifonction 4 faces",
    description: "La râpe multifonction idéale pour tous vos besoins culinaires.",
    longDescription: "Avec ses 4 faces interchangeables, cette râpe vous permet de râper, trancher et zester tous types d'aliments : légumes, fromages, chocolats, etc. Sa grande capacité et sa poignée ergonomique en font un outil indispensable pour toutes vos préparations.",
    price: 29,
    originalPrice: 35,
    image: "/images/graterlarge.png",
    category: "grater-large",
    type: "physical",
    badge: "Populaire",
    features: [
      "4 faces interchangeables",
      "Grande capacité",
      "Poignée ergonomique",
      "Acier inoxydable",
      "Facile à nettoyer"
    ]
  },
  {
    id: "grater-small-1",
    name: "The Grater Small – Mini-râpe zesteur",
    description: "La mini-râpe parfaite pour zester tous vos agrumes et épices.",
    longDescription: "Grâce à sa petite taille et sa lame ultra-fine, cette râpe vous permet de zester finement tous vos agrumes, épices et chocolats. Son format compact la rend facile à ranger et à transporter.",
    price: 15,
    image: "/images/gratersmall.png",
    category: "grater-small",
    type: "physical",
    badge: "Pratique",
    features: [
      "Lame ultra-fine",
      "Format compact",
      "Acier inoxydable",
      "Facile à nettoyer",
      "Prise en main facile"
    ]
  },
  {
    id: "grater-brush-1",
    name: "The Grater Brush – Brosse de nettoyage pour râpe",
    description: "La brosse idéale pour nettoyer efficacement toutes vos râpes.",
    longDescription: "Avec ses poils résistants et sa forme ergonomique, cette brosse vous permet de nettoyer facilement et rapidement toutes vos râpes, même les plus difficiles d'accès. Elle est également idéale pour nettoyer les autres ustensiles de cuisine.",
    price: 9,
    image: "/images/graterbrush.png",
    category: "grater-brush",
    type: "physical",
    badge: "Économique",
    features: [
      "Poils résistants",
      "Forme ergonomique",
      "Facile à utiliser",
      "Nettoyage rapide",
      "Pour tous types de râpes"
    ]
  },
  {
    id: "grater-peeler-1",
    name: "The Grater Peeler – Éplucheur en silicone",
    description: "L'éplucheur en silicone idéal pour éplucher tous vos fruits et légumes.",
    longDescription: "Grâce à sa lame en acier inoxydable et son revêtement en silicone, cet éplucheur vous permet d'éplucher facilement et rapidement tous vos fruits et légumes, même les plus délicats. Sa prise en main ergonomique le rend très agréable à utiliser.",
    price: 12,
    image: "/images/graterpeeler.png",
    category: "grater-peeler",
    type: "physical",
    badge: "Artisanal",
    features: [
      "Lame en acier inoxydable",
      "Revêtement en silicone",
      "Prise en main ergonomique",
      "Facile à utiliser",
      "Pour tous types de fruits et légumes"
    ]
  },
  {
    id: "grater-cookbooks-1",
    name: "The Grater Cookbooks – Recettes originales à la râpe",
    description: "Un livre de recettes originales et créatives pour utiliser votre râpe au quotidien.",
    longDescription: "Découvrez des recettes originales et créatives pour utiliser votre râpe au quotidien. Des entrées aux desserts, en passant par les plats principaux, ce livre vous propose une multitude d'idées pour sublimer vos plats grâce à la râpe.",
    price: 19,
    image: "/images/gratercookbooks.png",
    category: "grater-cookbooks",
    type: "digital",
    badge: "Numérique",
    features: [
      "Recettes originales",
      "Idées créatives",
      "Pour tous les niveaux",
      "Illustrations gourmandes",
      "Format numérique"
    ]
  },
  {
    id: "milk-frother-1",
    name: "Mousseur de Lait Électrique",
    description: "Créez une mousse de lait parfaite en quelques secondes.",
    longDescription: "Notre mousseur de lait électrique vous permet de créer une mousse de lait onctueuse et crémeuse en quelques secondes. Idéal pour préparer de délicieux cappuccinos, lattes et autres boissons gourmandes. Facile à utiliser et à nettoyer.",
    price: 25,
    image: "/images/frotherlight.png",
    category: "milk-frother",
    type: "physical",
    badge: "Innovation",
    features: [
      "Mousse de lait onctueuse",
      "Quelques secondes",
      "Facile à utiliser",
      "Facile à nettoyer",
      "Silencieux"
    ],
    variants: [
      {
        id: "milk-frother-1-white",
        name: "Blanc",
        price: 25,
        image: "/images/frotherlight.png"
      },
      {
        id: "milk-frother-1-black",
        name: "Noir",
        price: 25,
        image: "/images/frotherdark.png"
      }
    ]
  },
  ...pocketShotProducts
];
