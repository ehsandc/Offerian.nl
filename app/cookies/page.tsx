import type { Metadata } from 'next'
import Container from '@/components/Container'
import Card from '@/components/Card'

export const metadata: Metadata = {
  title: 'Cookie Policy - Offerian.nl',
  description: 'Lees hoe Offerian.nl cookies gebruikt om de website te verbeteren en je ervaring te optimaliseren.',
}

export default function Cookies() {
  return (
    <section className="py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Cookie Policy
          </h1>

          <div className="space-y-6 text-gray-600">
            <Card>
              <p className="text-sm text-gray-500 mb-4">
                Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
              </p>
              
              <p>
                Offerian.nl maakt gebruik van cookies om de website te verbeteren en je 
                gebruikservaring te optimaliseren. In deze cookie policy leggen we uit welke 
                cookies we gebruiken en waarvoor.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Wat zijn cookies?
              </h2>
              <p>
                Cookies zijn kleine tekstbestanden die op je computer of mobiele apparaat worden 
                geplaatst wanneer je een website bezoekt. Cookies worden veel gebruikt om websites 
                te laten werken of om deze efficiënter te laten werken, en om informatie te 
                verstrekken aan de eigenaren van de website.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Welke cookies gebruiken wij?
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    1. Functionele cookies (noodzakelijk)
                  </h3>
                  <p className="mb-2">
                    Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen 
                    niet worden uitgeschakeld.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Sessie cookies voor het onthouden van je voorkeuren</li>
                    <li>Beveiligingscookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    2. Analytische cookies
                  </h3>
                  <p className="mb-2">
                    Deze cookies helpen ons begrijpen hoe bezoekers onze website gebruiken, zodat 
                    we deze kunnen verbeteren.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Google Analytics (geanonimiseerd)</li>
                    <li>Bezoekersstatistieken</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    3. Marketing/Tracking cookies
                  </h3>
                  <p className="mb-2">
                    Deze cookies worden gebruikt om je surfgedrag te volgen en om gepersonaliseerde 
                    advertenties te tonen. Ook worden ze gebruikt voor affiliate tracking.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Affiliate tracking cookies voor affiliate toewijzing</li>
                    <li>Conversie tracking</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Affiliate tracking cookies
              </h2>
              <p className="mb-4">
                Wij gebruiken affiliate tracking cookies om te bepalen welke bezoeker via onze 
                website een product heeft afgesloten. Dit is noodzakelijk om:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Te bepalen of een overstap via onze website heeft plaatsgevonden</li>
                <li>De juiste affiliate commissie te ontvangen</li>
                <li>Statistieken te kunnen bijhouden</li>
              </ul>
              <p className="mt-4">
                Deze cookies worden geplaatst door erkende affiliate netwerken.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Bewaartermijn cookies
              </h2>
              <p className="mb-4">
                Verschillende cookies hebben verschillende bewaartermijnen:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Sessie cookies:</strong> Worden verwijderd zodra je de browser sluit</li>
                <li><strong>Functionele cookies:</strong> Maximaal 1 jaar</li>
                <li><strong>Analytische cookies:</strong> Maximaal 2 jaar</li>
                <li><strong>Affiliate tracking cookies:</strong> variabele bewaartermijn</li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies beheren en verwijderen
              </h2>
              <p className="mb-4">
                Je kunt cookies op elk moment via je browserinstellingen beheren of verwijderen. 
                Let op: als je cookies uitschakelt, kan dit de functionaliteit van de website 
                beïnvloeden.
              </p>
              <p className="mb-4">
                Instructies voor het beheren van cookies in verschillende browsers:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                    Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/nl-nl/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Toestemming
              </h2>
              <p>
                Bij je eerste bezoek aan onze website vragen we je toestemming voor het plaatsen 
                van cookies, behalve voor functionele cookies die noodzakelijk zijn voor het 
                functioneren van de website. Je kunt je toestemming op elk moment intrekken.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Vragen?
              </h2>
              <p>
                Heb je vragen over ons gebruik van cookies? Neem dan contact met ons op via 
                info@offerian.nl of via onze <a href="/over-ons" className="text-primary-600 hover:underline">contact pagina</a>.
              </p>
            </Card>


          </div>
        </div>
      </Container>
    </section>
  )
}
