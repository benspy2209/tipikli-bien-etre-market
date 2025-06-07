
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-market relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-tipikli-sage rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-tipikli-wood rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-tipikli-sage-light rounded-full animate-pulse-soft"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <Badge 
              variant="secondary" 
              className="inline-flex items-center space-x-2 bg-tipikli-beige text-tipikli-sage-dark border-tipikli-sage/20 px-4 py-2"
            >
              <span className="w-2 h-2 bg-tipikli-sage rounded-full animate-pulse"></span>
              <span className="font-medium">En direct du marché</span>
            </Badge>

            {/* Titre principal */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-tipikli-sage-dark leading-tight">
                <span className="text-gradient-sage">Tipikli</span>
                <br />
                Le marché du bien-être,{" "}
                <span className="text-tipikli-sage">à vivre chaque jour</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Découvrez un univers vivant où le bien-être se connecte au quotidien des marchés. 
                Démonstrations en direct, produits authentiques et contenus personnalisés vous attendent.
              </p>
            </div>

            {/* Call-to-actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-tipikli-sage hover:bg-tipikli-sage-dark text-white font-semibold px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🔴 Voir le marché en live
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white font-semibold px-8 py-6 text-lg transition-all duration-300"
              >
                Découvrir les essentiels
              </Button>
            </div>

            {/* Stats ou témoignages */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-tipikli-sage-dark">500+</div>
                <div className="text-sm text-muted-foreground">Produits testés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tipikli-sage-dark">50k+</div>
                <div className="text-sm text-muted-foreground">Habitués du marché</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tipikli-sage-dark">10+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
            </div>
          </div>

          {/* Visuel hero */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-square bg-gradient-to-br from-tipikli-cream via-tipikli-beige to-tipikli-wood rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-tipikli-sage rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">🥕</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-semibold text-xl text-tipikli-sage-dark">
                      Fraîcheur & Authenticité
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Chaque produit raconte une histoire
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Éléments flottants */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce-gentle">
                <span className="text-2xl">✨</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-tipikli-sage rounded-full p-3 shadow-lg animate-pulse-soft">
                <span className="text-2xl text-white">🌿</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
