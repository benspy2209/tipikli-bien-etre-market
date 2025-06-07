
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Simulation d'inscription
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const marketInsights = [
    {
      icon: "🥬",
      title: "Légumes de saison",
      description: "Découvrez les produits frais du moment"
    },
    {
      icon: "👩‍🍳",
      title: "Astuces de chef",
      description: "Secrets et techniques de nos experts"
    },
    {
      icon: "💡",
      title: "Bons plans exclusifs",
      description: "Offres réservées aux habitués"
    },
    {
      icon: "🎯",
      title: "Conseils personnalisés",
      description: "Selon vos préférences bien-être"
    }
  ];

  const recentContent = [
    {
      type: "Article",
      title: "Comment bien choisir ses légumes d'automne",
      date: "Il y a 2 jours",
      readTime: "3 min"
    },
    {
      type: "Vidéo",
      title: "Démonstration : râper du gingembre sans effort",
      date: "Il y a 4 jours",
      readTime: "2 min"
    },
    {
      type: "Recette",
      title: "Soupe de butternut aux épices douces",
      date: "Il y a 1 semaine",
      readTime: "15 min"
    }
  ];

  return (
    <section className="py-20 bg-tipikli-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Inscription newsletter */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-tipikli-sage text-white px-4 py-2">
                📮 LE COIN DES HABITUÉS
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-tipikli-sage-dark">
                Rejoignez le coin des habitués du marché
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Recevez chaque semaine nos meilleures découvertes, astuces bien-être 
                et bons plans directement dans votre boîte mail. Comme au marché, 
                on garde les meilleurs conseils pour nos habitués !
              </p>
            </div>

            {/* Formulaire d'inscription */}
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="votre-email@exemple.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 border-tipikli-beige-dark focus:border-tipikli-sage"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-tipikli-sage hover:bg-tipikli-sage-dark text-white font-semibold px-8"
                  >
                    Rejoindre
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  🔒 Vos données sont protégées. Désinscription en un clic.
                </p>
              </form>
            ) : (
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="font-semibold text-green-800 mb-2">
                    Bienvenue parmi nos habitués !
                  </h3>
                  <p className="text-sm text-green-600">
                    Vous recevrez votre première newsletter dans les prochains jours.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Avantages de la newsletter */}
            <div className="grid grid-cols-2 gap-4">
              {marketInsights.map((insight, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-tipikli-beige">
                  <span className="text-2xl">{insight.icon}</span>
                  <div>
                    <h4 className="font-medium text-sm text-tipikli-sage-dark">
                      {insight.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {insight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Statistiques */}
            <div className="flex justify-center space-x-8 pt-6 border-t border-tipikli-beige">
              <div className="text-center">
                <div className="text-2xl font-bold text-tipikli-sage-dark">12k+</div>
                <div className="text-xs text-muted-foreground">Abonnés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tipikli-sage-dark">95%</div>
                <div className="text-xs text-muted-foreground">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tipikli-sage-dark">2x</div>
                <div className="text-xs text-muted-foreground">par semaine</div>
              </div>
            </div>
          </div>

          {/* Aperçu du contenu récent */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-tipikli-sage-dark">
                Aperçu de nos derniers contenus
              </h3>
              <p className="text-muted-foreground">
                Découvrez le type de contenus que reçoivent nos habitués
              </p>
            </div>

            <div className="space-y-4">
              {recentContent.map((content, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-tipikli-beige">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge 
                            variant="secondary" 
                            className="text-xs bg-tipikli-beige text-tipikli-sage-dark"
                          >
                            {content.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {content.readTime}
                          </span>
                        </div>
                        
                        <h4 className="font-medium text-tipikli-sage-dark mb-2 leading-tight">
                          {content.title}
                        </h4>
                        
                        <p className="text-xs text-muted-foreground">
                          {content.date}
                        </p>
                      </div>
                      
                      <div className="text-2xl ml-4">
                        {content.type === "Vidéo" ? "📹" : 
                         content.type === "Recette" ? "👨‍🍳" : "📝"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA pour voir plus */}
            <Card className="bg-tipikli-sage text-white">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2">
                  Plus de 50 contenus exclusifs vous attendent
                </h4>
                <p className="text-sm opacity-90 mb-4">
                  Inscrivez-vous pour accéder à notre bibliothèque complète
                </p>
                <Button 
                  variant="secondary" 
                  className="bg-white text-tipikli-sage hover:bg-tipikli-beige"
                >
                  Découvrir tous les contenus
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
