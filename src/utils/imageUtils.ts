
// Mapping des noms de villes vers les fichiers images locaux
const cityImageMap: Record<string, string> = {
  "Ath": "/images/Ath.jpeg",
  "Auderghem": "/images/Auderghem.jpeg",
  "Bastogne": "/images/Bastogne.jpeg",
  "Beveren": "/images/Beveren.jpeg",
  "Binche": "/images/Binche.jpeg",
  "Brugges": "/images/Brugges.jpeg",
  "Charleroi": "/images/Charleroi.jpeg",
  "Etterbeek": "/images/Etterbeek.jpeg",
  "Evere": "/images/Evere.jpeg",
  "Ixelles": "/images/Ixelles.jpeg",
  "Jette": "/images/Jette.jpeg",
  "Libramont": "/images/Libramont.jpeg",
  "Liège": "/images/Liège.jpeg",
  "Louvain": "/images/Louvain.jpeg",
  "Malines": "/images/Malines.jpeg",
  "Marche-en-famenne": "/images/Marche-en-famenne.jpeg",
  "Mouscron": "/images/Mouscron.jpeg",
  "Namur": "/images/Namur.jpeg",
  "Rhode-Saint-Genèse": "/images/Rhode-Saint-Genèse.jpeg",
  "Roeselare": "/images/Roeselare.jpeg",
  "Saint-Gilles": "/images/Saint-Gilles.jpeg",
  "Saint-Nicolas": "/images/Saint-Nicolas.jpeg",
  "Tournai": "/images/Tournai.jpeg",
  "Turnhout": "/images/Turnhout.jpeg",
  "Waterloo": "/images/Waterloo.jpeg",
  "Wavre": "/images/Wavre.jpeg",
  "Zaventem": "/images/Zaventem.jpeg"
};

const productImageMap: Record<string, string> = {
  "Small Brush": "/images/Small_Brush.png",
  "Lot de 2 Small Brush": "/images/Lot_de_2_Small_Brush.png",
  "Silicon Peeler": "/images/Silicon_Peeler.png",
  "All about garlic - e book": "/images/All_about_garlic_-_e_book.png",
  "Alles over gember - e book": "/images/Alles_over_gember_-_e_book.png",
  "Alles over knoflook - e-book": "/images/Alles_over_knoflook_-_e-book.png",
  "Ginger in all its flavor - e book": "/images/Ginger_in_all_its_flavor_-_e_book.png",
  "L'ail dans tous ses états, l'ebook": "/images/L'ail_dans_tous_ses_états,_l'ebook.png",
  "Le gingembre dans tous ses états - l'e book": "/images/Le_gingembre_dans_tous_ses_états_-_l'e_book.png",
  "The grater, l'e-book": "/images/The_grater,_l'e-book.png",
  "The grater, le livre (version papier)": "/images/The_grater,_le_livre_(version_papier).png"
};

export const getProductImage = (productName: string, cityName?: string): string => {
  // D'abord chercher dans les images de produits spécifiques
  if (productImageMap[productName]) {
    return productImageMap[productName];
  }
  
  // Ensuite chercher par ville pour les graters
  if (cityName && cityImageMap[cityName]) {
    return cityImageMap[cityName];
  }
  
  // Image par défaut
  return "/images/test.png";
};

export const getCityImage = (cityName: string): string => {
  return cityImageMap[cityName] || "/images/test.png";
};
