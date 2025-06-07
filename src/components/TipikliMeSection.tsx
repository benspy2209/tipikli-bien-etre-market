
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TipikliMeSection = () => {
  const memberBenefits = [
    {
      icon: "📚",
      title: "Livres personnalisés",
      description: "Recevez des guides sur mesure selon vos besoins bien-être",
      features: ["Nutrition personnalisée", "Exercices adaptés", "Conseils saisonniers"]
    },
    {
      icon: "🃏",
      title: "Jeux de cartes bien-être",
      description: "Découvrez nos jeux éducatifs pour toute la famille",
      features: ["Cartes recettes", "Défis bien-être", "Quiz santé"]
    },
    {
      icon: "👨‍🍳",
      title: "Livres de recettes exclusifs",
      description: "Accédez à notre collection de recettes secrètes",
      features: ["Recettes de saison", "Techniques pro", "Ingrédients du marché"]
    },
    {
      icon: "💎",
      title: "Bons plans exclusifs",
      description: "Profitez d'offres privilégiées et contenus premium",
      features: ["Réductions membres", "Avant-premières", "Support prioritaire"]
    }
  ];

  const testimonials = [
    {
      name: "Marie L.",
      text: "Les recettes personnalisées ont transformé ma cuisine !",
      rating: 5,
      location: "Lyon"
    },
    {
      name: "Jean-Paul R.",
      text: "Enfin un contenu bien-être qui me correspond vraiment.",
      rating: 5,
      location: "Marseille"
    }
  ];

  return (
    <section id="tipikli-me" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-tipikli-sage text-white px-6 py-2 text-sm font-semibold">
            ✨ ESPACE MEMBRE
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-tipikli-sage-dark">
            Tipikli Me
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rejoignez notre communauté d'habitués du marché et accédez à des contenus 
            personnalisés pour enrichir votre quotidien bien-être.
          </p>
        </div>

        {/* Grille des avantages membres */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {memberBenefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-tipikli-beige group"
            >
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-tipikli-sage-dark">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
                
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-muted-foreground flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-tipikli-sage rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section CTA et tarifs */}
        <div className="bg-gradient-to-br from-tipikli-cream to-tipikli-beige rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Tarif et CTA */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-tipikli-sage-dark">
                Rejoignez Tipikli Me dès aujourd'hui
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-tipikli-sage-dark">19€</span>
                  <span className="text-lg text-muted-foreground line-through">29€</span>
                  <span className="text-sm text-tipikli-sage font-medium">/mois</span>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Offre de lancement - 30% de réduction les 3 premiers mois
                </p>
              </div>

              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full bg-tipikli-sage hover:bg-tipikli-sage-dark text-white font-semibold text-lg py-6"
                >
                  🚀 Commencer mon essai gratuit
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  7 jours gratuits • Résiliation sans engagement
                </p>
              </div>
            </div>

            {/* Témoignages */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg text-tipikli-sage-dark">
                Ce que disent nos membres :
              </h4>
              
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-white border-tipikli-beige">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-tipikli-sage rounded-full flex items-center justify-center text-white font-semibold">
                            {testimonial.name.charAt(0)}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-1 mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-sm">⭐</span>
                            ))}
                          </div>
                          <p className="text-sm text-foreground mb-2">
                            "{testimonial.text}"
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.name} • {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Garanties et confiance */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="text-3xl">🔒</div>
            <h4 className="font-semibold text-tipikli-sage-dark">Sécurisé</h4>
            <p className="text-sm text-muted-foreground">
              Vos données sont protégées et jamais partagées
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="text-3xl">💝</div>
            <h4 className="font-semibold text-tipikli-sage-dark">Sans engagement</h4>
            <p className="text-sm text-muted-foreground">
              Résiliez à tout moment en un clic
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="text-3xl">📞</div>
            <h4 className="font-semibold text-tipikli-sage-dark">Support dédié</h4>
            <p className="text-sm text-muted-foreground">
              Une équipe à votre écoute 7j/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipikliMeSection;
