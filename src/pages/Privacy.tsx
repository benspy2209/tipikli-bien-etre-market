
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-tipikli-cream">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-tipikli-sage-dark mb-8 text-center">
              Politique de Confidentialité
            </h1>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Collecte des informations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nous collectons des informations lorsque vous vous inscrivez sur notre site, 
                    passez une commande ou remplissez un formulaire. Les informations collectées 
                    incluent votre nom, votre adresse e-mail, votre adresse postale et votre numéro de téléphone.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Utilisation des informations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Les informations que nous collectons auprès de vous peuvent être utilisées pour :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                      <li>Traiter vos commandes et transactions</li>
                      <li>Améliorer notre site web</li>
                      <li>Améliorer le service client et vos besoins de soutien</li>
                      <li>Vous contacter par e-mail</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Protection des informations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité 
                    de vos informations personnelles. Nous utilisons un cryptage à la pointe de la 
                    technologie pour protéger les informations sensibles transmises en ligne.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Divulgation à des tiers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles 
                    identifiables à des tiers sans votre consentement, à l'exception de ce qui est 
                    nécessaire pour remplir une demande et/ou une transaction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cookies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Notre site peut utiliser des cookies pour améliorer l'expérience utilisateur. 
                    Les cookies sont de petits fichiers qu'un site ou son fournisseur de services 
                    transfère sur le disque dur de votre ordinateur par l'intermédiaire de votre 
                    navigateur Web qui permet aux sites ou aux systèmes de fournisseurs de services 
                    de reconnaître votre navigateur.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vos droits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground">
                    <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Droit d'accès à vos données personnelles</li>
                      <li>Droit de rectification de vos données</li>
                      <li>Droit à l'effacement de vos données</li>
                      <li>Droit à la limitation du traitement</li>
                      <li>Droit à la portabilité des données</li>
                      <li>Droit d'opposition au traitement</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Si vous avez des questions concernant cette politique de confidentialité, 
                    vous pouvez nous contacter à l'adresse suivante : privacy@tipikli.be
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8 text-sm text-muted-foreground">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
