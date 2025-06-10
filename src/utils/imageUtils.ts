
// Mapping des noms de villes vers les fichiers images locaux
const cityImageMap: Record<string, string> = {
  "Ath": "/src/images/Ath.jpeg",
  "Auderghem": "/src/images/Auderghem.jpeg",
  "Bastogne": "/src/images/Bastogne.jpeg",
  "Beveren": "/src/images/Beveren.jpeg",
  "Binche": "/src/images/Binche.jpeg",
  "Brugges": "/src/images/Brugges.jpeg",
  "Charleroi": "/src/images/Charleroi.jpeg",
  "Etterbeek": "/src/images/Etterbeek.jpeg",
  "Evere": "/src/images/Evere.jpeg",
  "Ixelles": "/src/images/Ixelles.jpeg",
  "Jette": "/src/images/Jette.jpeg",
  "Libramont": "/src/images/Libramont.jpeg",
  "Liège": "/src/images/Liège.jpeg",
  "Louvain": "/src/images/Louvain.jpeg",
  "Malines": "/src/images/Malines.jpeg",
  "Marche-en-famenne": "/src/images/Marche-en-famenne.jpeg",
  "Mouscron": "/src/images/Mouscron.jpeg",
  "Namur": "/src/images/Namur.jpeg",
  "Rhode-Saint-Genèse": "/src/images/Rhode-Saint-Genèse.jpeg",
  "Roeselare": "/src/images/Roeselare.jpeg",
  "Saint-Gilles": "/src/images/Saint-Gilles.jpeg",
  "Saint-Nicolas": "/src/images/Saint-Nicolas.jpeg",
  "Tournai": "/src/images/Tournai.jpeg",
  "Turnhout": "/src/images/Turnhout.jpeg",
  "Waterloo": "/src/images/Waterloo.jpeg",
  "Wavre": "/src/images/Wavre.jpeg",
  "Zaventem": "/src/images/Zaventem.jpeg"
};

const productImageMap: Record<string, string> = {
  "Small Brush": "/src/images/Small_Brush.png",
  "Lot de 2 Small Brush": "/src/images/Lot_de_2_Small_Brush.png",
  "Silicon Peeler": "/src/images/Silicon_Peeler.png",
  "All about garlic - e book": "/src/images/All_about_garlic_-_e_book.png",
  "Alles over gember - e book": "/src/images/Alles_over_gember_-_e_book.png",
  "Alles over knoflook - e-book": "/src/images/Alles_over_knoflook_-_e-book.png",
  "Ginger in all its flavor - e book": "/src/images/Ginger_in_all_its_flavor_-_e_book.png",
  "L'ail dans tous ses états, l'ebook": "/src/images/L'ail_dans_tous_ses_états,_l'ebook.png",
  "Le gingembre dans tous ses états - l'e book": "/src/images/Le_gingembre_dans_tous_ses_états_-_l'e_book.png",
  "The grater, l'e-book": "/src/images/The_grater,_l'e-book.png",
  "The grater, le livre (version papier)": "/src/images/The_grater,_le_livre_(version_papier).png"
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
  return "/src/images/test.png";
};

export const getCityImage = (cityName: string): string => {
  return cityImageMap[cityName] || "/src/images/test.png";
};
