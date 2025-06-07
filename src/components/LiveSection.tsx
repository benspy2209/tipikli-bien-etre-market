
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LiveSection = () => {
  const liveEvents = [
    {
      time: "14h30",
      title: "Démonstration râpe céramique",
      presenter: "Marie, experte cuisine",
      viewers: "247 spectateurs",
      status: "En direct"
    },
    {
      time: "16h00",
      title: "Astuces bien-être du quotidien",
      presenter: "Paul, naturopathe",
      viewers: "À venir",
      status: "Programmé"
    },
    {
      time: "18h15",
      title: "Recettes d'automne faciles",
      presenter: "Sophie, chef à domicile",
      viewers: "À venir",
      status: "Programmé"
    }
  ];

  return (
    <section id="live" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-semibold">
            🔴 EN DIRECT
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-tipikli-sage-dark">
            Le marché en live
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Assistez en temps réel aux démonstrations de nos experts. 
            Posez vos questions, découvrez les astuces et vivez l'expérience du marché depuis chez vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Player vidéo principal */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-xl border-tipikli-beige">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-tipikli-sage/20 to-tipikli-wood/20 flex items-center justify-center">
                  {/* Simulation d'un player vidéo */}
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-tipikli-sage rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-3xl text-white">▶️</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-tipikli-sage-dark">
                        Démonstration en cours
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Cliquez pour rejoindre le live
                      </p>
                    </div>
                  </div>
                  
                  {/* Badge live */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white animate-pulse">
                      🔴 LIVE - 247 spectateurs
                    </Badge>
                  </div>
                  
                  {/* Titre de la démonstration */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-effect rounded-lg p-4">
                      <h4 className="font-semibold text-tipikli-sage-dark">
                        La râpe en céramique : révolutionnez votre cuisine
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        avec Marie, experte cuisine
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contrôles et interactions */}
            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button className="bg-tipikli-sage hover:bg-tipikli-sage-dark text-white">
                  💬 Poser une question
                </Button>
                <Button variant="outline" className="border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white">
                  📢 Partager le live
                </Button>
                <Button variant="outline" className="border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white">
                  🔔 M'alerter des prochains lives
                </Button>
              </div>
            </div>
          </div>

          {/* Programme des lives */}
          <div className="space-y-6">
            <h3 className="font-display font-semibold text-xl text-tipikli-sage-dark">
              Programme du jour
            </h3>
            
            <div className="space-y-4">
              {liveEvents.map((event, index) => (
                <Card key={index} className="border-tipikli-beige hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="font-semibold text-tipikli-sage-dark">
                        {event.time}
                      </div>
                      <Badge 
                        variant={event.status === "En direct" ? "destructive" : "secondary"}
                        className={event.status === "En direct" ? "bg-red-500 animate-pulse" : "bg-tipikli-beige text-tipikli-sage-dark"}
                      >
                        {event.status}
                      </Badge>
                    </div>
                    
                    <h4 className="font-medium text-foreground mb-2">
                      {event.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mb-2">
                      {event.presenter}
                    </p>
                    
                    <p className="text-xs text-muted-foreground">
                      {event.viewers}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA pour voir plus */}
            <Button 
              variant="outline" 
              className="w-full border-tipikli-sage text-tipikli-sage hover:bg-tipikli-sage hover:text-white"
            >
              Voir tout le programme
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSection;
