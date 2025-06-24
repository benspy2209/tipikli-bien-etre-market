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
  "L'ail dans tous ses états, l'ebook": "/images/ail.png",
  "L'ail dans tous ses états (Français)": "/images/ail.png",
  "Le gingembre dans tous ses états - l'e book": "/images/Le_gingembre_png",
  "Le gingembre dans tous ses états (Français)": "/images/Le_gingembre_png",
  "The grater, l'e-book": "/images/The_grater,_l'e-book.png",
  "The grater, le livre (version papier)": "/images/The_grater,_le_livre_(version_papier).png",
  "L'ail dans tous ses états - l'e book (2024)": "/images/Lail-dans-tous-ses-etats-2024-lebook-300x300.png.webp",
  "Le gingembre dans tous ses états - l'e book (2024)": "/images/Le-gingembre-dans-tous-ses-etats-300x300.png.webp",
  // Images pour les variantes de mousseur avec les vrais noms de fichiers
  "Blanc": "/images/frrotherwhite.png",
  "Foncé": "/images/frotherdark.png", 
  "Argenté": "/images/frothersilver.png",
  // Également avec les noms complets au cas où
  "Mousseur Blanc": "/images/frrotherwhite.png",
  "Mousseur Foncé": "/images/frotherdark.png",
  "Mousseur Argenté": "/images/frothersilver.png"
};

export const getProductImage = (productName: string, location?: string): string => {
  // Handle Pocket Shot products with placeholder images
  if (productName.includes("Pocket Shot USB-C")) {
    return "https://images.unsplash.com/photo-1609592806047-beb5e8d030be?w=400&h=400&fit=crop"; // Power bank placeholder
  }
  
  if (productName.includes("Pocket Shot Lightning")) {
    return "https://images.unsplash.com/photo-1609592806047-beb5e8d030be?w=400&h=400&fit=crop"; // Power bank placeholder
  }
  
  if (productName.includes("Pack de 4 Pocket Shot")) {
    return "https://images.unsplash.com/photo-1607731734133-bb087b17ea67?w=400&h=400&fit=crop"; // Multiple power banks placeholder
  }

  // Handle milk frother products
  if (productName === "Milk Frother white") {
    return "/images/frrotherwhite.png";
  }
  if (productName === "Milk Frother dark") {
    return "/images/frotherdark.png";
  }
  if (productName === "Milk Frother silver") {
    return "/images/frothersilver.png";
  }

  // Handle The Grater cookbook products
  const cookbookMapping: { [key: string]: string } = {
    "The grater, le livre (version papier)": "/images/The_grater,_le_livre_(version_papier).png",
    "The grater, l'e-book": "/images/The_grater,_l'e-book.png",
    "L'ail dans tous ses états, l'ebook": "/images/Lail-dans-tous-ses-etats-2024-lebook-300x300.png.webp",
    "All about garlic - e book": "/images/All_about_garlic_-_e_book.png",
    "Alles over knoflook - e-book": "/images/Alles_over_knoflook_-_e-book.png",
    "Le gingembre dans tous ses états - l'e book": "/images/Le_gingembre_dans_tous_ses_états_-_l'e_book.png",
    "Ginger in all its flavor - e book": "/images/Ginger_in_all_its_flavor_-_e_book.png",
    "Alles over gember - e book": "/images/Alles_over_gember_-_e_book.png"
  };

  if (cookbookMapping[productName]) {
    return cookbookMapping[productName];
  }

  // Handle The Grater Brush products
  if (productName === "Small Brush") {
    return "/images/Small_Brush.png";
  }
  if (productName === "Lot de 2 Small Brush") {
    return "/images/Lot_de_2_Small_Brush.png";
  }

  // Handle The Grater Peeler products
  if (productName === "Silicon Peeler") {
    return "/images/Silicon_Peeler.png";
  }

  // Handle city-based products (The Grater Large and Small)
  if (location) {
    const locationImageMapping: { [key: string]: string } = {
      "Namur": "/images/Namur.jpeg",
      "Bastogne": "/images/Bastogne.jpeg",
      "Brugges": "/images/Brugges.jpeg",
      "Tournai": "/images/Tournai.jpeg",
      "Ath": "/images/Ath.jpeg",
      "Mouscron": "/images/Mouscron.jpeg",
      "Waterloo": "/images/Waterloo.jpeg",
      "Saint-Gilles": "/images/Saint-Gilles.jpeg",
      "Evere": "/images/Evere.jpeg",
      "Jette": "/images/Jette.jpeg",
      "Etterbeek": "/images/Etterbeek.jpeg",
      "Ixelles": "/images/Ixelles.jpeg",
      "Auderghem": "/images/Auderghem.jpeg",
      "Libramont": "/images/Libramont.jpeg",
      "Charleroi": "/images/Charleroi.jpeg",
      "Louvain": "/images/Louvain.jpeg",
      "Malines": "/images/Malines.jpeg",
      "Beveren": "/images/Beveren.jpeg",
      "Turnhout": "/images/Turnhout.jpeg",
      "Roeselare": "/images/Roeselare.jpeg",
      "Saint-Nicolas": "/images/Saint-Nicolas.jpeg",
      "Binche": "/images/Binche.jpeg",
      "Wavre": "/images/Wavre.jpeg",
      "Marche-en-famenne": "/images/Marche-en-famenne.jpeg",
      "Zaventem": "/images/Zaventem.jpeg"
    };

    return locationImageMapping[location] || "/images/placeholder.png";
  }

  // Default fallback
  return "/images/placeholder.png";
};

export const getCityImage = (cityName: string): string => {
  console.log('🔍 getCityImage called with:', cityName);
  const image = cityImageMap[cityName] || "/images/test.png";
  console.log('📷 Returning image:', image);
  return image;
};
