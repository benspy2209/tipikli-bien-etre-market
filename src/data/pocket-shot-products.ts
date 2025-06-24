
import { Product } from "@/types/product";

export const pocketShotProducts: Product[] = [
  {
    id: "pocket-shot-usbc",
    name: "Pocket Shot USB-C – Power Bank universelle compacte",
    description: "Power bank universelle ultra compacte, compatible USB-C, disponible en 5 couleurs.",
    longDescription: "Le Pocket Shot USB-C est un chargeur portable intelligent, ultra compact, qui se glisse facilement dans toutes les poches ou sacs. Avec sa connectique USB-C, il recharge rapidement tous vos appareils récents : smartphones, tablettes, écouteurs, rasoirs électriques, vapeurs, haut-parleurs Bluetooth, et bien plus encore. Rechargez-le en seulement 1 heure. Disponible en 5 couleurs élégantes : blanc, gris clair, gris foncé, noir et bleu marine. Emportez-le partout – plage, terrasse, festival, bureau, camping, voiture – et restez connecté sans jamais craindre de tomber à plat.",
    price: 19,
    image: "/images/pocket-shot-usbc-blanc.jpg",
    category: "pocket-shot",
    type: "physical",
    badge: "Nouveau",
    features: [
      "Connecteur USB-C universel",
      "Recharge rapide : 1h pour 2-3 jours d'autonomie",
      "Ultra compact et léger",
      "Compatible avec tous les appareils USB-C",
      "5 couleurs disponibles",
      "Recharge en toute sécurité, sans abîmer la batterie"
    ],
    variants: [
      {
        id: "pocket-shot-usbc-blanc",
        name: "Blanc",
        price: 19,
        image: "/images/pocket-shot-usbc-blanc.jpg"
      },
      {
        id: "pocket-shot-usbc-gris-clair",
        name: "Gris clair",
        price: 19,
        image: "/images/pocket-shot-usbc-gris-clair.jpg"
      },
      {
        id: "pocket-shot-usbc-gris-fonce",
        name: "Gris foncé",
        price: 19,
        image: "/images/pocket-shot-usbc-gris-fonce.jpg"
      },
      {
        id: "pocket-shot-usbc-noir",
        name: "Noir",
        price: 19,
        image: "/images/pocket-shot-usbc-noir.jpg"
      },
      {
        id: "pocket-shot-usbc-bleu-marine",
        name: "Bleu marine",
        price: 19,
        image: "/images/pocket-shot-usbc-bleu-marine.jpg"
      }
    ]
  },
  {
    id: "pocket-shot-lightning",
    name: "Pocket Shot Lightning – Power Bank pour iPhone (jusqu'à iPhone 14)",
    description: "Power bank compact avec prise Lightning, compatible iPhone jusqu'à la version 14.",
    longDescription: "Le Pocket Shot Lightning est spécialement conçu pour les utilisateurs d'iPhone équipés d'une prise Lightning, c'est-à-dire tous les iPhones jusqu'à la version 14. Il offre la même autonomie et les mêmes qualités que la version USB-C : recharge ultra rapide, sécurité optimale, format mini pour l'emmener partout. Disponible en couleur noire élégante, ce modèle assure que votre iPhone reste toujours chargé, même loin des prises électriques. Parfait pour vos voyages, vos soirées, vos journées à la plage ou vos déplacements professionnels.",
    price: 19,
    image: "/images/pocket-shot-lightning-noir.jpg",
    category: "pocket-shot",
    type: "physical",
    badge: "Nouveau",
    features: [
      "Connecteur Lightning",
      "Recharge rapide : 1h",
      "Ultra compact et léger",
      "Compatible uniquement avec iPhones Lightning (jusqu'à iPhone 14)",
      "Recharge sûre, sans risque d'abîmer la batterie",
      "Couleur noire élégante"
    ]
  }
];
