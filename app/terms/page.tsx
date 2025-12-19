import type { Metadata } from 'next'
import Container from '@/components/Container'
import Card from '@/components/Card'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden - Offerian.nl',
  description: 'Lees de algemene voorwaarden voor het gebruik van Offerian.nl.',
}

export default function Terms() {
  return (
    <section className="py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Algemene Voorwaarden
          </h1>

          <div className="space-y-6 text-gray-600">
            <Card>
              <p className="text-sm text-gray-500 mb-4">
                Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
              </p>
              
              <p>
                Deze algemene voorwaarden zijn van toepassing op het gebruik van de website 
                Offerian.nl. Door gebruik te maken van onze website, ga je akkoord met deze 
                voorwaarden.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Definities
              </h2>
              <ul className="space-y-2">
                <li><strong>Offerian.nl:</strong> de website offerian.nl</li>
                <li><strong>Wij/ons:</strong> de eigenaar en beheerder van Offerian.nl</li>
                <li><strong>Bezoeker/gebruiker/jij:</strong> de persoon die gebruik maakt van Offerian.nl</li>
                <li><strong>Aanbieder:</strong> partijen die producten of diensten aanbieden via onze website</li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Gebruik van de website
              </h2>
              <p className="mb-4">
                <strong>2.1</strong> Offerian.nl is een vergelijkingsplatform dat informatie 
                verstrekt over zorgverzekeringen en energiecontracten.
              </p>
              <p className="mb-4">
                <strong>2.2</strong> De informatie op de website is louter informatief. 
                Het afsluiten van een product gebeurt altijd bij de aanbieder zelf.
              </p>
              <p className="mb-4">
                <strong>2.3</strong> Je bent zelf verantwoordelijk voor het controleren van de 
                informatie bij de aanbieder voordat je een product afsluit.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Informatie en prijzen
              </h2>
              <p className="mb-4">
                <strong>3.1</strong> Wij streven ernaar om de informatie op onze website zo 
                actueel en correct mogelijk te houden, maar kunnen geen garantie geven voor de 
                volledigheid en juistheid.
              </p>
              <p className="mb-4">
                <strong>3.2</strong> Prijzen en voorwaarden kunnen wijzigen zonder voorafgaande 
                kennisgeving. Controleer altijd de actuele voorwaarden bij de aanbieder.
              </p>
              <p>
                <strong>3.3</strong> Wij zijn niet verantwoordelijk voor eventuele fouten of 
                onvolledigheden in de gepresenteerde informatie.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Affiliate marketing
              </h2>
              <p className="mb-4">
                <strong>4.1</strong> Offerian.nl is een affiliate website. Wij verdienen commissie 
                wanneer je via onze links een product afsluit bij een aanbieder.
              </p>
              <p className="mb-4">
                <strong>4.2</strong> Deze commissie heeft geen invloed op de prijs die je betaalt 
                aan de aanbieder.
              </p>
              <p>
                <strong>4.3</strong> Voor meer informatie, zie onze{' '}
                <a href="/affiliate-disclaimer" className="text-primary-600 hover:underline">
                  affiliate disclaimer
                </a>.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Cashback
              </h2>
              <p className="mb-4">
                <strong>5.1</strong> Wij kunnen cashback aanbieden bij bepaalde aanbieders. 
                De voorwaarden voor cashback worden duidelijk vermeld op de website.
              </p>
              <p className="mb-4">
                <strong>5.2</strong> Cashback wordt alleen uitgekeerd als:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                <li>Je het product hebt afgesloten via een van onze trackinglinks</li>
                <li>De aankoop is bevestigd door de aanbieder</li>
                <li>Het contract niet binnen de herroepingstermijn is geannuleerd</li>
                <li>We de commissie hebben ontvangen van de aanbieder</li>
              </ul>
              <p className="mb-4">
                <strong>5.3</strong> Cashback wordt uitgekeerd binnen 8-12 weken na bevestiging 
                van de aankoop, tenzij anders vermeld.
              </p>
              <p>
                <strong>5.4</strong> Wij behouden ons het recht voor om cashback te weigeren bij 
                misbruik of fraude.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Aansprakelijkheid
              </h2>
              <p className="mb-4">
                <strong>6.1</strong> Wij zijn niet aansprakelijk voor schade die voortvloeit uit 
                het gebruik van onze website of informatie hierop.
              </p>
              <p className="mb-4">
                <strong>6.2</strong> Wij zijn niet aansprakelijk voor de producten en diensten 
                van aanbieders. Geschillen hierover dien je rechtstreeks met de aanbieder op te lossen.
              </p>
              <p className="mb-4">
                <strong>6.3</strong> Wij zijn niet aansprakelijk voor schade als gevolg van 
                technische storingen, onderbrekingen of andere technische problemen.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Intellectueel eigendom
              </h2>
              <p className="mb-4">
                <strong>7.1</strong> Alle intellectuele eigendomsrechten met betrekking tot de 
                website en de inhoud berusten bij Offerian.nl of haar licentiegevers.
              </p>
              <p>
                <strong>7.2</strong> Het is niet toegestaan om zonder voorafgaande schriftelijke 
                toestemming content van de website te kopiëren, te verspreiden of op andere 
                wijze te gebruiken.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Privacy
              </h2>
              <p>
                Voor informatie over hoe wij omgaan met persoonsgegevens, zie onze{' '}
                <a href="/privacy" className="text-primary-600 hover:underline">
                  privacy policy
                </a>.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Wijzigingen
              </h2>
              <p className="mb-4">
                <strong>9.1</strong> Wij behouden ons het recht voor om deze algemene voorwaarden 
                op elk moment te wijzigen.
              </p>
              <p>
                <strong>9.2</strong> Wijzigingen worden van kracht vanaf het moment van publicatie 
                op de website. Het is jouw verantwoordelijkheid om regelmatig de voorwaarden te controleren.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Toepasselijk recht
              </h2>
              <p className="mb-4">
                <strong>10.1</strong> Op deze algemene voorwaarden is Nederlands recht van toepassing.
              </p>
              <p>
                <strong>10.2</strong> Geschillen zullen bij voorkeur in onderling overleg worden 
                opgelost. Als dit niet mogelijk is, zijn de bevoegde rechters in Nederland bevoegd.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Contact
              </h2>
              <p className="mb-4">
                Voor vragen over deze algemene voorwaarden kun je contact met ons opnemen:
              </p>
              <div className="space-y-1">
                <p><strong>Bedrijfsnaam:</strong> Offerian.nl</p>
                <p><strong>KvK nummer:</strong> [KvK nummer hier invoeren]</p>
                <p><strong>E-mail:</strong> info@offerian.nl</p>
                <p><strong>Website:</strong> <a href="/over-ons" className="text-primary-600 hover:underline">Contact pagina</a></p>
              </div>
            </Card>

            <Card className="bg-yellow-50 border border-yellow-200">
              <p className="text-sm text-gray-700">
                💡 <strong>Let op:</strong> Dit is een basis template voor algemene voorwaarden. 
                Laat deze tekst altijd controleren en aanpassen door een juridisch adviseur voordat 
                je de website live zet. Algemene voorwaarden moeten specifiek zijn voor jouw situatie.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}
