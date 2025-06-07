import { Product } from "@/types/product";
import { getProductImage } from "@/utils/imageUtils";

export const products: Product[] = [
  // The Grater Large - 16 produits individuels par ville
  // ... keep existing code (all The Grater Large products from Liège to Libramont)
  {
    id: "grater-liege",
    name: "The Grater Liège",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Liège"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-namur",
    name: "The Grater Namur",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Namur"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-bastogne",
    name: "The Grater Bastogne",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Bastogne"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-brugges",
    name: "The Grater Brugges",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Brugges"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-tournai",
    name: "The Grater Tournai",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Tournai"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-ath",
    name: "The Grater Ath",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Ath"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-mouscron",
    name: "The Grater Mouscron",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Mouscron"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-rhode-saint-genese",
    name: "The Grater Rhode-Saint-Genèse",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Rhode-Saint-Genèse"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-waterloo",
    name: "The Grater Waterloo",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Waterloo"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-saint-gilles",
    name: "The Grater Saint-Gilles",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Saint-Gilles"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-evere",
    name: "The Grater Evere",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Evere"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-jette",
    name: "The Grater Jette",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Jette"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-etterbeek",
    name: "The Grater Etterbeek",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Etterbeek"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-ixelles",
    name: "The Grater Ixelles",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Ixelles"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-auderghem",
    name: "The Grater Auderghem",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Auderghem"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },
  {
    id: "grater-libramont",
    name: "The Grater Libramont",
    description: "The Grater – L'outil ultime pour râper avec précision !",
    longDescription: "Découvrez The Grater, l'assiette parfaite pour râper votre ail en toute simplicité. Conçue avec soin, cette assiette unique vous permet de transformer vos gousses d'ail en une pâte lisse et homogène en un rien de temps. Plus besoin de hacher ou d'écraser, The Grater fait tout le travail avec une précision incomparable.",
    price: 39,
    image: getProductImage("", "Libramont"),
    category: "grater-large",
    type: "physical",
    badge: "Best-seller",
    features: ["Dimensions optimales : 20 cm de diamètre et 5 cm de profondeur", "Design ergonomique", "Matériau durable : Céramique de haute qualité", "Râpe efficace", "Entretien facile : Passe au lave-vaisselle"]
  },

  // The Grater Small - 11 produits individuels par ville
  {
    id: "grater-small-charleroi",
    name: "The Grater Small Charleroi",
    description: "The Grater Small – Le râpeur compact pour des préparations précises !",
    longDescription: "<h3>The Grater Small – Le râpeur compact pour des préparations précises !</h3>\n<p>Découvrez The Grater Small, une assiette de 13 cm de diamètre et 3 cm de profondeur, spécialement conçue pour râper efficacement l'ail et d'autres petits ingrédients. Avec son format compact, The Grater Small est idéal pour des préparations rapides, sans encombrer votre espace de travail. Transformez l'ail, le gingembre et plus encore en une pâte lisse en quelques gestes simples.</p>\n<h3>Caractéristiques :</h3>\n<p><strong>• Format compact : Avec ses dimensions de 13 cm de diamètre et 3 cm de profondeur, The Grater Small est parfait pour les petites préparations.</strong><br /><strong>• Ergonomique et pratique : Conçue pour une prise en main confortable, elle permet un râpage facile et précis.</strong><br /><strong>• Céramique durable : Fabriquée en céramique résistante, The Grater Small assure une longue durée de vie sans rayures.</strong><br /><strong>• Râpe fine et efficace : Les picots spécialement conçus râpent finement sans gaspiller les ingrédients.</strong><br /><strong>• Entretien facile : Passe au lave-vaisselle pour un nettoyage rapide et pratique.</strong></p>\n<h3>Polyvalence d'utilisation :</h3>\n<p>Idéale pour râper l'ail, le gingembre, les zestes d'agrumes et même des petits morceaux de chocolat, The Grater Small est un outil de cuisine indispensable pour les amateurs de préparations rapides et précises. Simplifiez vos tâches culinaires au quotidien avec ce râpeur compact et efficace !</p>",
    price: 19,
    image: getProductImage("", "Charleroi"),
    category: "grater-small",
    type: "physical",
    badge: "Compact",
    features: ["Format compact : 13 cm de diamètre et 3 cm de profondeur", "Ergonomique et pratique", "Céramique durable", "Râpe fine et efficace", "Entretien facile"]
  },
  {
    id: "grater-small-louvain",
    name: "The Grater Small Louvain",
    description: "The Grater Small – Le râpeur compact pour des préparations précises !",
    longDescription: "<h3>The Grater Small – Le râpeur compact pour des préparations précises !</h3>\n<p>Découvrez The Grater Small, une assiette de 13 cm de diamètre et 3 cm de profondeur, spécialement conçue pour râper efficacement l'ail et d'autres petits ingrédients. Avec son format compact, The Grater Small est idéal pour des préparations rapides, sans encombrer votre espace de travail. Transformez l'ail, le gingembre et plus encore en une pâte lisse en quelques gestes simples.</p>\n<h3>Caractéristiques :</h3>\n<p><strong>• Format compact : Avec ses dimensions de 13 cm de diamètre et 3 cm de profondeur, The Grater Small est parfait pour les petites préparations.</strong><br /><strong>• Ergonomique et pratique : Conçue pour une prise en main confortable, elle permet un râpage facile et précis.</strong><br /><strong>• Céramique durable : Fabriquée en céramique résistante, The Grater Small assure une longue durée de vie sans rayures.</strong><br /><strong>• Râpe fine et efficace : Les picots spécialement conçus râpent finement sans gaspiller les ingrédients.</strong><br /><strong>• Entretien facile : Passe au lave-vaisselle pour un nettoyage rapide et pratique.</strong></p>\n<h3>Polyvalence d'utilisation :</h3>\n<p>Idéale pour râper l'ail, le gingembre, les zestes d'agrumes et même des petits morceaux de chocolat, The Grater Small est un outil de cuisine indispensable pour les amateurs de préparations rapides et précises. Simplifiez vos tâches culinaires au quotidien avec ce râpeur compact et efficace !</p>",
    price: 19,
    image: getProductImage("", "Louvain"),
    category: "grater-small",
    type: "physical",
    badge: "Compact",
    features: ["Format compact : 13 cm de diamètre et 3 cm de profondeur", "Ergonomique et pratique", "Céramique durable", "Râpe fine et efficace", "Entretien facile"]
  },
  {
    id: "grater-small-malines",
    name: "The Grater Small Malines",
    description: "The Grater Small – Le râpeur compact pour des préparations précises !",
    longDescription: "<h3>The Grater Small – Le râpeur compact pour des préparations précises !</h3>\n<p>Découvrez The Grater Small, une assiette de 13 cm de diamètre et 3 cm de profondeur, spécialement conçue pour râper efficacement l'ail et d'autres petits ingrédients. Avec son format compact, The Grater Small est idéal pour des préparations rapides, sans encombrer votre espace de travail. Transformez l'ail, le gingembre et plus encore en une pâte lisse en quelques gestes simples.</p>\n<h3>Caractéristiques :</h3>\n<p><strong>• Format compact : Avec ses dimensions de 13 cm de diamètre et 3 cm de profondeur, The Grater Small est parfait pour les petites préparations.</strong><br /><strong>• Ergonomique et pratique : Conçue pour une prise en main confortable, elle permet un râpage facile et précis.</strong><br /><strong>• Céramique durable : Fabriquée en céramique résistante, The Grater Small assure une longue durée de vie sans rayures.</strong><br /><strong>• Râpe fine et efficace : Les picots spécialement conçus râpent finement sans gaspiller les ingrédients.</strong><br /><strong>• Entretien facile : Passe au lave-vaisselle pour un nettoyage rapide et pratique.</strong></p>\n<h3>Polyvalence d'utilisation :</h3>\n<p>Idéale pour râper l'ail, le gingembre, les zestes d'agrumes et même des petits morceaux de chocolat, The Grater Small est un outil de cuisine indispensable pour les amateurs de préparations rapides et précises. Simplifiez vos tâches culinaires au quotidien avec ce râpeur compact et efficace !</p>",
    price: 19,
    image: getProductImage("", "Malines"),
    category: "grater-small",
    type: "physical",
    badge: "Compact",
    features: ["Format compact : 13 cm de diamètre et 3 cm de profondeur", "Ergonomique et pratique", "Céramique durable", "Râpe fine et efficace", "Entretien facile"]
  },
  {
    id: "grater-small-beveren",
    name: "The Grater Small Beveren",
    description: "The Grater Small – Le râpeur compact pour des préparations précises !",
    longDescription: "<h3>The Grater Small – Le râpeur compact pour des préparations précises !</h3>\n<p>Découvrez The Grater Small, une assiette de 13 cm de diamètre et 3 cm de profondeur, spécialement conçue pour râper efficacement l'ail et d'autres petits ingrédients. Avec son format compact, The Grater Small est idéal pour des préparations rapides, sans encombrer votre espace de travail. Transformez l'ail, le gingembre et plus encore en une pâte lisse en quelques gestes simples.</p>\n<h3>Caractéristiques :</h3>\n<p><strong>• Format compact : Avec ses dimensions de 13 cm de diamètre et 3 cm de profondeur, The Grater Small est parfait pour les petites préparations.</strong><br /><strong>• Ergonomique et pratique : Conçue pour une prise en main confortable, elle permet un râpage facile et précis.</strong><br /><strong>• Céramique durable : Fabriquée en céramique résistante, The Grater Small assure une longue durée de vie sans rayures.</strong><br /><strong>• Râpe fine et efficace : Les picots spécialement conçus râpent finement sans gaspiller les ingrédients.</strong><br /><strong>• Entretien facile : Passe au lave-vaisselle pour un nettoyage rapide et pratique.</strong></p>\n<h3>Polyvalence d'utilisation :</h3>\n<p>Idéale pour râper l'ail, le gingembre, les zestes d'agrumes et même des petits morceaux de chocolat, The Grater Small est un outil de cuisine indispensable pour les amateurs de préparations rapides et précises. Simplifiez vos tâches culinaires au quotidien avec ce râpeur compact et efficace !</p>",
    price: 19,
    image: getProductImage("", "Beveren"),
    category: "grater-small",
    type: "physical",
    badge: "Compact",
    features: ["Format compact : 13 cm de diamètre et 3 cm de profondeur", "Ergonomique et pratique", "Céramique durable", "Râpe fine et efficace", "Entretien facile"]
  },
  {
    id: "grater-small-turnhout",
    name: "The Grater Small Turnhout",
    description: "The Grater Small – Le râpeur compact pour des préparations précises !",
    longDescription: "<h3>The Grater Small – Le râpeur compact pour des préparations précises !</h3>\n<p>Découvrez The Grater Small, une assiette de 13 cm de diamètre et 3 cm de profondeur, spécialement conçue pour râper efficacement l'ail et d'autres petits ingrédients. Avec son format compact, The Grater Small est idéal pour des préparations rapides, sans encombrer votre espace de travail. Transformez l'ail, le gingembre et plus encore en une pâte lisse en quelques gestes simples.</p>\n<h3>Caractéristiques :</h3>\n<p><strong>• Format compact : Avec ses dimensions de 13 cm de diamètre et 3 cm de profondeur, The Grater Small est parfait pour les petites préparations.</strong><br /><strong>• Ergonomique et pratique : Conçue pour une prise en main confortable, elle permet un râpage facile et précis.</strong><br /><strong>• Céramique durable : Fabriquée en céramique résistante, The Grater Small assure une longue durée de vie sans rayures.</strong><br /><strong>• Râpe fine et efficace : Les picots spécialement conçus râpent finement sans gaspiller les ingrédients.</strong><br /><strong>• Entretien facile : Passe au lave-vaisselle pour un nettoyage rapide et pratique.</strong></p>\n<h3>Polyvalence d'utilisation :</h3>\n<p>Idéale pour râper l'ail, le gingembre, les zestes d'agrumes et même des petits morceaux de chocolat, The Grater Small est un outil de cuisine indispensable pour les amateurs de préparations rapides et précises. Simplifiez vos tâches culinaires au quotidien avec ce râpeur compact et efficace !</p>",
    price: 19,
    image: getProductImage("", "Turnhout"),
    category: "grater-small",
    type: "physical",
    badge: "Compact",
    features: ["Format compact : 13 cm de diamètre et 3 cm de profondeur", "Ergonomique et pratique", "Céramique durable", "Râpe fine et efficace", "Entretien facile"]
  },
  {
    id: "grater-small-roeselare",
    name: "The Grater Small Roeselare",
    description: "The Grater Small – Le râpeur compact pour des préparations précises !",
    longDescription: "<h3>The Grater Small – Le râpeur compact pour des préparations précises !</h3>\n<p>Découvrez The Grater Small, une assiette de 13 cm de diamètre et 3 cm de profondeur, spécialement conçue pour râper efficacement l'ail et d'autres petits ingrédients. Avec son format compact, The Grater Small est idéal pour des préparations rapides, sans encombrer votre espace de travail. Transformez l'ail, le gingembre et plus encore en une pâte lisse en quelques gestes simples.</p>\n<h3>Caractéristiques :</h3>\n<p><strong>• Format compact : Avec ses dimensions de 13 cm de diamètre et 3 cm de profondeur, The Grater Small est parfait pour les petites préparations.</strong><br /><strong>• Ergonomique et pratique : Conçue pour une prise en main confortable, elle permet un râpage facile et précis.</strong><br /><strong>• Céramique durable : Fabriquée en céramique résistante, The Grater Small assure une longue durée de vie sans rayures.</strong><br /><strong>• Râpe fine et efficace : Les picots spécialement conçus râpent finement sans gaspiller les ingrédients.</strong><br /><strong>• Entretien facile : Passe au lave-vaisselle pour un nettoyage rapide et pratique.</strong></p>\n<h3>Polyvalence d'utilisation :</h3>\n<p>Idéale pour râper l'ail, le gingembre, les zestes d'agrumes et même des petits morceaux de chocolat, The Grater Small est un outil de cuisine indispensable pour les amateurs de préparations rapides et précises. Simplifiez vos tâches culinaires au quotidien avec ce râpeur compact et efficace !</p>",
    price: 19,
    image: getProductImage("", "Roeselare"),
    category: "grater-small",
    type: "physical",
    badge: "Compact",
    features: ["Format compact : 13 cm de diamètre et 3 cm de profondeur", "Ergonomique et pratique", "Céramique durable", "Râpe fine et efficace", "Entretien facile"]
  },
  {
    id: "grater-small-saint-nicolas",
    name: "The Grater Small Saint-Nicolas",
    description: "The Grater Small – Le râpeur compact pour des préparations précises !",
    longDescription: "<h3>The Grater Small – Le râpeur compact pour des préparations précises !</h3>\n<p>Découvrez The Grater Small, une assiette de 13 cm de diamètre et 3 cm de profondeur, spécialement conçue pour râper efficacement l'ail et d'autres petits ingrédients. Avec son format compact, The Grater Small est idéal pour des préparations rapides, sans encombrer votre espace de travail. Transformez l'ail, le gingembre et plus encore en une pâte lisse en quelques gestes simples.</p>\n<h3>Caractéristiques :</h3>\n<p><strong>• Format compact : Avec ses dimensions de 13 cm de diamètre et 3 cm de profondeur, The Grater Small est parfait pour les petites préparations.</strong><br /><strong>• Ergonomique et pratique : Conçue pour une prise en main confortable, elle permet un râpage facile et précis.</strong><br /><strong>• Céramique durable : Fabriquée en céramique résistante, The Grater Small assure une longue durée de vie sans rayures.</strong><br /><strong>• Râpe fine et efficace : Les picots spécialement conçus râpent finement sans gaspiller les ingrédients.</strong><br /><strong>• Entretien facile : Passe au lave-vaisselle pour un nettoyage rapide et pratique.</strong></p>\n<h3>Polyvalence d'utilisation :</h3>\n<p>Idéale pour râper l'ail, le gingembre, les zestes d'agrumes et même des petits morceaux de chocolat, The Grater Small est un outil de cuisine indispensable pour les amateurs de préparations rapides et précises. Simplifiez vos tâches culinaires au quotidien avec ce râpeur compact et efficace !</p>",
    price: 19,
    image: getProductImage("", "Saint-Nicolas"),
    category: "grater-small",
    type: "physical",
    badge: "Compact",
    features: ["Format compact : 13 cm de diamètre et 3 cm de profondeur", "Ergonomique et pratique", "Céramique durable", "Râpe fine et efficace", "Entretien facile"]
  },
  {
    id: "grater-small-binche",
    name: "The Grater Small Binche",
    description: "The Grater Small – Le râpeur compact pour des préparations précises !",
    longDescription: "<h3>The Grater Small – Le râpeur compact pour des préparations précises !</h3>\n<p>Découvrez The Grater Small, une assiette de 13 cm de diamètre et 3 cm de profondeur, spécialement conçue pour râper efficacement l'ail et d'autres petits ingrédients. Avec son format compact, The Grater Small est idéal pour des préparations rapides, sans encombrer votre espace de travail. Transformez l'ail, le gingembre et plus encore en une pâte lisse en quelques gestes simples.</p>\n<h3>Caractéristiques :</h3>\n<p><strong>• Format compact : Avec ses dimensions de 13 cm de diamètre et 3 cm de profondeur, The Grater Small est parfait pour les petites préparations.</strong><br /><strong>• Ergonomique et pratique : Conçue pour une prise en main confortable, elle permet un râpage facile et précis.</strong><br /><strong>• Céramique durable : Fabriquée en céramique résistante, The Grater Small assure une longue durée de vie sans rayures.</strong><br /><strong>• Râpe fine et efficace : Les picots spécialement conçus râpent finement sans gaspiller les ingrédients.</strong><br /><strong>• Entretien facile : Passe au lave-vaisselle pour un nettoyage rapide et pratique.</strong></p>\n<h3>Polyvalence d'utilisation :</h3>\n<p>Idéale pour râper l'ail, le gingembre, les zestes d'agrumes et même des petits morceaux de chocolat, The Grater Small est un outil de cuisine indispensable pour les amateurs de préparations rapides et précises. Simplifiez vos tâches culinaires au quotidien avec ce râpeur compact et efficace !</p>",
    price: 19,
    image: getProductImage("", "Binche"),
    category: "grater-small",
    type: "physical",
    badge: "Compact",
    features: ["Format compact : 13 cm de diamètre et 3 cm de profondeur", "Ergonomique et pratique", "Céramique durable", "Râpe fine et efficace", "Entretien facile"]
  },
  {
    id: "grater-small-wavre",
    name: "The Grater Small Wavre",
    description: "The Grater Small – Le râpeur compact pour des préparations précises !",
    longDescription: "<h3>The Grater Small – Le râpeur compact pour des préparations précises !</h3>\n<p>Découvrez The Grater Small, une assiette de 13 cm de diamètre et 3 cm de profondeur, spécialement conçue pour râper efficacement l'ail et d'autres petits ingrédients. Avec son format compact, The Grater Small est idéal pour des préparations rapides, sans encombrer votre espace de travail. Transformez l'ail, le gingembre et plus encore en une pâte lisse en quelques gestes simples.</p>\n<h3>Caractéristiques :</h3>\n<p><strong>• Format compact : Avec ses dimensions de 13 cm de diamètre et 3 cm de profondeur, The Grater Small est parfait pour les petites préparations.</strong><br /><strong>• Ergonomique et pratique : Conçue pour une prise en main confortable, elle permet un râpage facile et précis.</strong><br /><strong>• Céramique durable : Fabriquée en céramique résistante, The Grater Small assure une longue durée de vie sans rayures.</strong><br /><strong>• Râpe fine et efficace : Les picots spécialement conçus râpent finement sans gaspiller les ingrédients.</strong><br /><strong>• Entretien facile : Passe au lave-vaisselle pour un nettoyage rapide et pratique.</strong></p>\n<h3>Polyvalence d'utilisation :</h3>\n<p>Idéale pour râper l'ail, le gingembre, les zestes d'agrumes et même des petits morceaux de chocolat, The Grater Small est un outil de cuisine indispensable pour les amateurs de préparations rapides et précises. Simplifiez vos tâches culinaires au quotidien avec ce râpeur compact et efficace !</p>",
    price: 19,
    image: getProductImage("", "Wavre"),
    category: "grater-small",
    type: "physical",
    badge: "Compact",
    features: ["Format compact : 13 cm de diamètre et 3 cm de profondeur", "Ergonomique et pratique", "Céramique durable", "Râpe fine et efficace", "Entretien facile"]
  },
  {
    id: "grater-small-marche-en-famenne",
    name: "The Grater Small Marche-en-famenne",
    description: "The Grater Small – Le râpeur compact pour des préparations précises !",
    longDescription: "<h3>The Grater Small – Le râpeur compact pour des préparations précises !</h3>\n<p>Découvrez The Grater Small, une assiette de 13 cm de diamètre et 3 cm de profondeur, spécialement conçue pour râper efficacement l'ail et d'autres petits ingrédients. Avec son format compact, The Grater Small est idéal pour des préparations rapides, sans encombrer votre espace de travail. Transformez l'ail, le gingembre et plus encore en une pâte lisse en quelques gestes simples.</p>\n<h3>Caractéristiques :</h3>\n<p><strong>• Format compact : Avec ses dimensions de 13 cm de diamètre et 3 cm de profondeur, The Grater Small est parfait pour les petites préparations.</strong><br /><strong>• Ergonomique et pratique : Conçue pour une prise en main confortable, elle permet un râpage facile et précis.</strong><br /><strong>• Céramique durable : Fabriquée en céramique résistante, The Grater Small assure une longue durée de vie sans rayures.</strong><br /><strong>• Râpe fine et efficace : Les picots spécialement conçus râpent finement sans gaspiller les ingrédients.</strong><br /><strong>• Entretien facile : Passe au lave-vaisselle pour un nettoyage rapide et pratique.</strong></p>\n<h3>Polyvalence d'utilisation :</h3>\n<p>Idéale pour râper l'ail, le gingembre, les zestes d'agrumes et même des petits morceaux de chocolat, The Grater Small est un outil de cuisine indispensable pour les amateurs de préparations rapides et précises. Simplifiez vos tâches culinaires au quotidien avec ce râpeur compact et efficace !</p>",
    price: 19,
    image: getProductImage("", "Marche-en-famenne"),
    category: "grater-small",
    type: "physical",
    badge: "Compact",
    features: ["Format compact : 13 cm de diamètre et 3 cm de profondeur", "Ergonomique et pratique", "Céramique durable", "Râpe fine et efficace", "Entretien facile"]
  },
  {
    id: "grater-small-zaventem",
    name: "The Grater Small Zaventem",
    description: "The Grater Small – Le râpeur compact pour des préparations précises !",
    longDescription: "<h3>The Grater Small – Le râpeur compact pour des préparations précises !</h3>\n<p>Découvrez The Grater Small, une assiette de 13 cm de diamètre et 3 cm de profondeur, spécialement conçue pour râper efficacement l'ail et d'autres petits ingrédients. Avec son format compact, The Grater Small est idéal pour des préparations rapides, sans encombrer votre espace de travail. Transformez l'ail, le gingembre et plus encore en une pâte lisse en quelques gestes simples.</p>\n<h3>Caractéristiques :</h3>\n<p><strong>• Format compact : Avec ses dimensions de 13 cm de diamètre et 3 cm de profondeur, The Grater Small est parfait pour les petites préparations.</strong><br /><strong>• Ergonomique et pratique : Conçue pour une prise en main confortable, elle permet un râpage facile et précis.</strong><br /><strong>• Céramique durable : Fabriquée en céramique résistante, The Grater Small assure une longue durée de vie sans rayures.</strong><br /><strong>• Râpe fine et efficace : Les picots spécialement conçus râpent finement sans gaspiller les ingrédients.</strong><br /><strong>• Entretien facile : Passe au lave-vaisselle pour un nettoyage rapide et pratique.</strong></p>\n<h3>Polyvalence d'utilisation :</h3>\n<p>Idéale pour râper l'ail, le gingembre, les zestes d'agrumes et même des petits morceaux de chocolat, The Grater Small est un outil de cuisine indispensable pour les amateurs de préparations rapides et précises. Simplifiez vos tâches culinaires au quotidien avec ce râpeur compact et efficace !</p>",
    price: 19,
    image: getProductImage("", "Zaventem"),
    category: "grater-small",
    type: "physical",
    badge: "Compact",
    features: ["Format compact : 13 cm de diamètre et 3 cm de profondeur", "Ergonomique et pratique", "Céramique durable", "Râpe fine et efficace", "Entretien facile"]
  },

  // The Grater Cookbooks - E-books ail
  // ... keep existing code (ebook products)
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
    longDescription: "<h3>Petite brosse de nettoyage pour râpe – L'outil pratique pour rassembler vos ingrédients fraîchement râpés</h3>\nCette petite brosse est l'accessoire indispensable pour rassembler facilement les ingrédients râpés avec The Grater. Conçue avec des poils doux mais résistants, elle permet de récupérer chaque particule d'ail, de gingembre, de zestes ou de chocolat sans effort et sans laisser de résidus sur la râpe. Sa taille compacte la rend idéale pour nettoyer les coins difficiles d'accès et pour éviter le gaspillage d'ingrédients.\n\n<strong>• Utilisation facile : Parfaite pour rassembler et transférer le résultat de vos râpages avec précision.</strong>\n<strong>• Pratique et compacte : Sa petite taille permet de la ranger facilement dans n'importe quel tiroir de cuisine.</strong>\n<strong>• Poignée ergonomique : Pour une prise en main confortable et un nettoyage efficace.</strong>\n\nUn petit outil qui fait une grande différence dans votre routine de cuisine !",
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
    longDescription: "<h3>Petite brosse de nettoyage pour râpe – L'outil pratique pour rassembler vos ingrédients fraîchement râpés</h3>\nCette petite brosse est l'accessoire indispensable pour rassembler facilement les ingrédients râpés avec The Grater. Conçue avec des poils doux mais résistants, elle permet de récupérer chaque particule d'ail, de gingembre, de zestes ou de chocolat sans effort et sans laisser de résidus sur la râpe. Sa taille compacte la rend idéale pour nettoyer les coins difficiles d'accès et pour éviter le gaspillage d'ingrédients.\n\n<strong>• Utilisation facile : Parfaite pour rassembler et transférer le résultat de vos râpages avec précision.</strong>\n<strong>• Pratique et compacte : Sa petite taille permet de la ranger facilement dans n'importe quel tiroir de cuisine.</strong>\n<strong>• Poignée ergonomique : Pour une prise en main confortable et un nettoyage efficace.</strong>\n\nUn petit outil qui fait une grande différence dans votre routine de cuisine !",
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
    longDescription: "<h3>Silicone Peeler – Éplucheur d'ail en silicone, simple et pratique</h3>\nÉplucher l'ail n'a jamais été aussi facile ! Avec notre Silicone Peeler, retirez la peau des gousses d'ail en quelques secondes sans odeur sur les mains. Fabriqué en silicone de haute qualité, cet accessoire souple et durable vous permet d'éplucher l'ail en un tour de main : il suffit de glisser la gousse à l'intérieur, de rouler doucement et de laisser la magie opérer !\n\n<strong>• Rapide et sans effort : En quelques secondes, vos gousses d'ail sont parfaitement épluchées.</strong>\n<strong>• Hygiénique : Évitez les odeurs d'ail persistantes sur les mains.</strong>\n<strong>• Facile à nettoyer : Passe au lave-vaisselle pour un entretien sans souci.</strong>\n<strong>• Design compact : Léger et facile à ranger dans votre cuisine.</strong>\n\nUn indispensable pour tous les amateurs de cuisine qui recherchent rapidité et propreté dans leurs préparations !",
    price: 5,
    image: getProductImage("Silicon Peeler"),
    category: "grater-peeler",
    type: "physical",
    badge: "Innovation",
    features: ["Rapide et sans effort", "Hygiénique", "Facile à nettoyer", "Design compact"]
  }
];

// ... keep existing code (helper functions)
export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.slice(0, 4);
};
