
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-natural relative overflow-hidden spacing-section">
      {/* Éléments décoratifs de fond - plus doux et organiques */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-tipikli-jaune to-tipikli-orange rounded-full animate-pulse-soft blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-tipikli-terre to-tipikli-rose rounded-full animate-bounce-gentle blur-lg"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-tipikli-jaune/30 rounded-full animate-pulse-soft blur-md"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-tipikli-orange/40 rounded-full animate-bounce-gentle blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu principal */}
          <div className="space-y-10 animate-fade-in-up-soft">
            {/* Badge élégant */}
            <Badge 
              variant="secondary" 
              className="inline-flex items-center space-x-3 bg-glass-effect-warm backdrop-blur-md text-tipikli-noir border-tipikli-jaune/30 px-6 py-3 rounded-full shadow-warm hover-glow transition-all duration-300"
            >
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-tipikli-jaune to-tipikli-orange rounded-full animate-pulse-soft"></span>
              <span className="font-medium font-display">En direct du marché</span>
            </Badge>

            {/* Titre principal - plus moderne et impactant */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-tipikli-noir leading-[1.1] tracking-tight">
                <span className="text-gradient-warm block">Tipikli</span>
                <span className="block mt-2">Le marché du</span>
                <span className="text-gradient-warm block">bien-être</span>
                <span className="block text-tipikli-noir/80 text-2xl md:text-3xl lg:text-4xl font-handwriting mt-4 italic">
                  à vivre chaque jour
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-tipikli-noir/70 max-w-2xl leading-relaxed font-light">
                Découvrez un univers vivant où le bien-être se connecte au quotidien des marchés. 
                <span className="text-tipikli-noir font-medium"> Démonstrations en direct, produits authentiques</span> et contenus personnalisés vous attendent.
              </p>
            </div>

            {/* Call-to-actions - plus élégants */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-10 py-6 rounded-2xl font-display font-semibold shadow-warm hover-lift transform transition-all duration-300"
              >
                <span className="mr-3 text-xl">🔴</span>
                Voir le marché en live
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="btn-secondary text-lg px-10 py-6 rounded-2xl font-display font-semibold hover-lift transition-all duration-300"
              >
                Découvrir les essentiels
              </Button>
            </div>

            {/* Stats avec nouveau design - plus sophistiqué */}
            <div className="flex flex-wrap gap-12 pt-12">
              <div className="text-center group">
                <div className="text-4xl font-bold text-gradient-warm font-display group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-tipikli-noir/60 font-medium mt-1">Produits testés</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-gradient-warm font-display group-hover:scale-110 transition-transform duration-300">50k+</div>
                <div className="text-sm text-tipikli-noir/60 font-medium mt-1">Habitués du marché</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-gradient-warm font-display group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-sm text-tipikli-noir/60 font-medium mt-1">Années d'expérience</div>
              </div>
            </div>
          </div>

          {/* Visuel hero - design plus moderne et organique */}
          <div className="relative animate-slide-up-soft">
            <div className="relative">
              {/* Carte principale avec glassmorphism */}
              <div className="relative glass-effect-warm rounded-3xl p-10 shadow-warm transform hover:rotate-0 transition-all duration-700 rotate-1 hover-lift">
                <div className="aspect-square bg-gradient-to-br from-tipikli-cream via-tipikli-beige to-tipikli-beige-dark rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Motif de fond subtil */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-tipikli-jaune/30 rounded-full"></div>
                    <div className="absolute bottom-6 right-6 w-6 h-6 bg-tipikli-orange/40 rounded-full"></div>
                    <div className="absolute top-1/2 right-4 w-4 h-4 bg-tipikli-terre/30 rounded-full"></div>
                  </div>
                  
                  <div className="text-center space-y-6 relative z-10">
                    <div className="w-28 h-28 bg-gradient-to-br from-tipikli-jaune to-tipikli-orange rounded-full flex items-center justify-center mx-auto shadow-warm hover-glow transition-all duration-300">
                      <span className="text-4xl filter drop-shadow-sm">🥕</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-display font-semibold text-2xl text-tipikli-noir">
                        Fraîcheur & Authenticité
                      </h3>
                      <p className="text-tipikli-noir/70 font-medium">
                        Chaque produit raconte une histoire
                      </p>
                      <p className="text-sm text-tipikli-noir/50 font-handwriting italic">
                        "Du marché à votre cœur"
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Éléments flottants plus sophistiqués */}
                <div className="absolute -top-6 -right-6 glass-effect rounded-full p-4 shadow-natural animate-bounce-gentle hover-glow transition-all duration-300">
                  <span className="text-3xl filter drop-shadow-sm">✨</span>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-tipikli-terre to-tipikli-rose rounded-full p-4 shadow-earth animate-pulse-soft hover-glow transition-all duration-300">
                  <span className="text-3xl text-white filter drop-shadow-sm">🌿</span>
                </div>
                <div className="absolute top-1/2 -left-4 bg-gradient-to-br from-tipikli-jaune to-tipikli-orange rounded-full p-3 shadow-warm animate-bounce-gentle hover-glow transition-all duration-300">
                  <span className="text-2xl filter drop-shadow-sm">🍯</span>
                </div>
              </div>

              {/* Cercles décoratifs en arrière-plan */}
              <div className="absolute -z-10 top-8 left-8 w-32 h-32 bg-gradient-to-br from-tipikli-jaune/20 to-tipikli-orange/20 rounded-full blur-2xl animate-pulse-soft"></div>
              <div className="absolute -z-10 bottom-8 right-8 w-24 h-24 bg-gradient-to-br from-tipikli-terre/20 to-tipikli-rose/20 rounded-full blur-xl animate-bounce-gentle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
