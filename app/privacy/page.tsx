import type { Metadata } from 'next'
import Container from '@/components/Container'
import Card from '@/components/Card'

export const metadata: Metadata = {
  title: 'Privacy Policy - Offerian.nl',
  description: 'Lees hoe Offerian.nl omgaat met jouw privacy en persoonlijke gegevens volgens de AVG.',
}

export default function Privacy() {
  return (
    <section className="py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-gray-600">
            <Card>
              <p className="text-sm text-gray-500 mb-4">
                Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
              </p>
              
              <p className="mb-4">
                Offerian.nl respecteert de privacy van alle bezoekers van de website en draagt 
                zorg voor de bescherming van de persoonlijke informatie die je met ons deelt.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Welke gegevens verzamelen wij?
              </h2>
              <p className="mb-4">
                Wij verzamelen en verwerken de volgende gegevens:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Technische informatie zoals IP-adres, browsertype en apparaatinformatie</li>
                <li>Gebruiksgegevens zoals bezochte pagina's en klikgedrag</li>
                <li>Gegevens die je zelf verstrekt via contactformulieren (naam, e-mailadres)</li>
                <li>Cookie-gerelateerde gegevens (zie ons cookiebeleid)</li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Waarvoor gebruiken wij je gegevens?
              </h2>
              <p className="mb-4">
                Wij gebruiken je gegevens voor de volgende doeleinden:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Het verbeteren van onze website en dienstverlening</li>
                <li>Het verzenden van informatie die je hebt aangevraagd</li>
                <li>Het bijhouden van bezoekersstatistieken</li>
                <li>Het afhandelen van algemene vragen</li>
                <li>Het voldoen aan wettelijke verplichtingen</li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Delen van gegevens met derden
              </h2>
              <p className="mb-4">
                Wij delen je gegevens alleen met derden in de volgende gevallen:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Met erkende affiliate netwerken voor doorverwijzing en attributie</li>
                <li>Met analytische tools zoals Google Analytics (geanonimiseerd)</li>
                <li>Wanneer dit wettelijk verplicht is</li>
              </ul>
              <p className="mt-4">
                Wij verkopen jouw gegevens nooit aan derden voor marketingdoeleinden.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Bewaartermijn
              </h2>
              <p>
                Wij bewaren je persoonsgegevens niet langer dan noodzakelijk voor de doeleinden 
                waarvoor ze zijn verzameld. Technische gegevens worden maximaal 2 jaar bewaard. 
                Contactgegevens worden verwijderd zodra het doel van de communicatie is bereikt.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Jouw rechten
              </h2>
              <p className="mb-4">
                Op grond van de AVG (Algemene Verordening Gegevensbescherming) heb je de 
                volgende rechten:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Recht op inzage van je persoonsgegevens</li>
                <li>Recht op rectificatie van onjuiste gegevens</li>
                <li>Recht op verwijdering van je gegevens ('recht op vergetelheid')</li>
                <li>Recht op beperking van de verwerking</li>
                <li>Recht op dataportabiliteit</li>
                <li>Recht van bezwaar tegen verwerking</li>
              </ul>
              <p className="mt-4">
                Om gebruik te maken van deze rechten, neem contact met ons op via info@offerian.nl.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Beveiliging
              </h2>
              <p>
                Wij nemen passende technische en organisatorische maatregelen om je 
                persoonsgegevens te beschermen tegen verlies, misbruik en ongeautoriseerde 
                toegang. Onze website maakt gebruik van een beveiligde verbinding (HTTPS/SSL).
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Wijzigingen in deze privacy policy
              </h2>
              <p>
                Wij kunnen deze privacy policy van tijd tot tijd aanpassen. De meest recente 
                versie vind je altijd op deze pagina. Controleer deze pagina regelmatig om op 
                de hoogte te blijven van eventuele wijzigingen.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Contact
              </h2>
              <p>
                Voor vragen over onze privacy policy of het gebruik van je gegevens, kun je 
                contact met ons opnemen:
              </p>
              <div className="mt-4 space-y-1">
                <p><strong>E-mail:</strong> info@offerian.nl</p>
                <p><strong>Website:</strong> <a href="/over-ons" className="text-primary-600 hover:underline">Contact pagina</a></p>
              </div>
            </Card>


          </div>
        </div>
      </Container>
    </section>
  )
}
