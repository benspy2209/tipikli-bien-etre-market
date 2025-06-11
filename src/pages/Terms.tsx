
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-tipikli-cream">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-tipikli-sage-dark mb-8 text-center">
              Conditions Générales de Vente
            </h1>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Article 1 - Objet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Les présentes conditions générales de vente s'appliquent à toutes les ventes 
                    conclues sur le site internet de Tipikli. Elles régissent les relations entre 
                    Tipikli et ses clients.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Article 2 - Prix</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Les prix sont indiqués en euros toutes taxes comprises (TTC). Tipikli se réserve 
                    le droit de modifier ses prix à tout moment mais les produits seront facturés 
                    sur la base des tarifs en vigueur au moment de la validation de la commande.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Article 3 - Commandes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Toute commande figurant sur le site internet suppose l'adhésion aux présentes 
                    conditions générales. Toutes les informations ou données personnelles fournies 
                    par l'acheteur sont nécessaires au traitement de la commande.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Article 4 - Livraison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      Les livraisons sont effectuées à l'adresse indiquée par l'acheteur lors de sa commande.
                    </p>
                    <p>
                      Les délais de livraison sont de 2 à 5 jours ouvrables pour la Belgique et de 
                      5 à 10 jours ouvrables pour l'Europe.
                    </p>
                    <p>
                      La livraison est gratuite pour toute commande supérieure à 50€ en Belgique.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Article 5 - Droit de rétractation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Conformément à la législation en vigueur, vous disposez d'un délai de 14 jours 
                    à compter de la réception de votre commande pour exercer votre droit de rétractation 
                    sans avoir à justifier de motifs ni à payer de pénalités.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Article 6 - Garanties</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tous nos produits bénéficient de la garantie légale de conformité et de la 
                    garantie contre les vices cachés. La durée de garantie est de 2 ans à compter 
                    de la date d'achat.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Article 7 - Responsabilité</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tipikli ne saurait être tenue responsable de l'inexécution du contrat conclu 
                    en cas de rupture de stock ou d'indisponibilité du produit, de force majeure, 
                    de perturbation ou grève totale ou partielle.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Article 8 - Données personnelles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tipikli s'engage à préserver la confidentialité des informations fournies par 
                    l'acheteur. Ces données sont utilisées uniquement pour le traitement des commandes 
                    et ne sont jamais cédées à des tiers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Article 9 - Litiges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tous les litiges auxquels les opérations d'achat et de vente pourraient donner 
                    lieu seront soumis aux tribunaux compétents dans le respect de la législation 
                    applicable.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8 text-sm text-muted-foreground">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              <p>Pour toute question, contactez-nous à : contact@tipikli.be</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
