import type { Metadata } from 'next'
import Container from '@/components/Container'
import Card from '@/components/Card'

export const metadata: Metadata = {
  title: 'Affiliate Disclaimer - Offerian.nl',
  description: 'Transparante uitleg over hoe Offerian.nl geld verdient via affiliate marketing en hoe dit ons vergelijkingsplatform niet beïnvloedt.',
}

export default function AffiliateDisclaimer() {
  return (
    <section className="py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Affiliate Disclaimer
          </h1>

          <div className="space-y-6 text-gray-600">
            <Card className="bg-blue-50 border-2 border-blue-200">
              <p className="text-lg text-gray-800">
                Offerian.nl gelooft in volledige transparantie. Op deze pagina leggen we eerlijk 
                uit hoe wij geld verdienen en hoe dit ons platform beïnvloedt (spoiler: dat doet het niet).
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Wat is affiliate marketing?
              </h2>
              <p className="mb-4">
                Affiliate marketing is een vorm van online marketing waarbij een website (zoals 
                Offerian.nl) bezoekers doorstuurt naar aanbieders van producten of diensten. 
                Wanneer een bezoeker via onze link een product afsluit, ontvangen wij een 
                commissie van de aanbieder.
              </p>
              <p>
                Dit verdienmodel is gebruikelijk in de vergelijkingsindustrie en stelt ons in 
                staat om een gratis vergelijkingsplatform aan te bieden.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hoe verdient Offerian.nl geld?
              </h2>
              <p className="mb-4">
                Wij werken samen met erkende affiliate netwerken zoals:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Daisycon</li>
                <li>TradeTracker</li>
                <li>Awin</li>
                <li>En directe partnerschappen met aanbieders</li>
              </ul>
              <p className="mb-4">
                Deze netwerken faciliteren de samenwerking tussen ons en aanbieders van 
                zorgverzekeringen en energiecontracten. Wanneer je via onze website een product 
                afsluit, ontvangen wij een commissie.
              </p>
              <p className="font-semibold">
                Belangrijk: Deze commissie heeft geen invloed op de prijs die jij betaalt. 
                Je betaalt exact hetzelfde als wanneer je rechtstreeks naar de aanbieder zou gaan.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Beïnvloedt dit onze vergelijkingen?
              </h2>
              <p className="mb-4">
                <strong>Nee, absoluut niet.</strong> Onze vergelijkingen zijn objectief en 
                gebaseerd op:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Prijs van het product</li>
                <li>Voorwaarden en dekking</li>
                <li>Populariteit bij consumenten</li>
                <li>Klanttevredenheid</li>
              </ul>
              <p className="mb-4">
                We ontvangen voor sommige aanbieders mogelijk een hogere commissie dan voor 
                andere. Dit heeft echter geen invloed op de volgorde waarin we aanbieders tonen 
                of op onze aanbevelingen.
              </p>
              <p>
                Ons doel is om jou te helpen de beste keuze te maken voor jouw situatie, niet 
                om de aanbieder met de hoogste commissie te promoten.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cashback delen
              </h2>
              <p className="mb-4">
                We gaan nog een stap verder in transparantie: een deel van de commissie die wij 
                ontvangen, geven we terug aan jou in de vorm van cashback.
              </p>
              <p>
                Dit betekent dat je niet alleen profiteert van een lagere prijs bij een nieuwe 
                aanbieder, maar ook nog eens extra geld terugkrijgt van ons. Zo bespaar je dubbel.
              </p>
              <p className="mt-4">
                Lees meer over hoe cashback werkt op onze{' '}
                <a href="/cashback" className="text-primary-600 hover:underline font-semibold">
                  cashback pagina
                </a>.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Welke aanbieders tonen we?
              </h2>
              <p className="mb-4">
                We streven ernaar om alle beschikbare aanbieders in Nederland te tonen. In 
                sommige gevallen kan het voorkomen dat een aanbieder niet met ons samenwerkt 
                via affiliate netwerken. In dat geval kunnen we deze aanbieder mogelijk niet tonen.
              </p>
              <p>
                We zijn continu bezig om ons aanbod uit te breiden zodat je altijd het meest 
                complete overzicht hebt.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Tracking en privacy
              </h2>
              <p className="mb-4">
                Om te kunnen bepalen of een aankoop via onze website is gedaan, maken we gebruik 
                van tracking cookies. Deze cookies zijn noodzakelijk om:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Je cashback correct toe te wijzen</li>
                <li>Commissies te kunnen ontvangen van aanbieders</li>
                <li>Statistieken bij te houden</li>
              </ul>
              <p>
                Voor meer informatie over cookies en privacy, zie onze{' '}
                <a href="/cookies" className="text-primary-600 hover:underline">cookie policy</a>
                {' '}en{' '}
                <a href="/privacy" className="text-primary-600 hover:underline">privacy policy</a>.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Onze belofte
              </h2>
              <div className="space-y-3">
                <p className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  <span>We zijn altijd transparant over hoe we geld verdienen</span>
                </p>
                <p className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  <span>We laten commissies nooit onze vergelijkingen beïnvloeden</span>
                </p>
                <p className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  <span>We delen onze commissies gedeeltelijk met jou via cashback</span>
                </p>
                <p className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  <span>We tonen alle relevante informatie eerlijk en volledig</span>
                </p>
                <p className="flex items-start">
                  <span className="text-secondary-600 mr-2">✓</span>
                  <span>We respecteren je privacy en gebruiken cookies alleen waar nodig</span>
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Vragen of opmerkingen?
              </h2>
              <p className="mb-4">
                Heb je vragen over ons affiliate programma of over hoe we geld verdienen? 
                We staan altijd open voor je vragen en feedback.
              </p>
              <p>
                Neem contact met ons op via info@offerian.nl of via onze{' '}
                <a href="/over-ons" className="text-primary-600 hover:underline">
                  contact pagina
                </a>.
              </p>
            </Card>

            <Card className="bg-secondary-50 border-2 border-secondary-200">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  💚 Bedankt voor je vertrouwen
                </h3>
                <p className="text-gray-700">
                  Door gebruik te maken van Offerian.nl help je ons om ons platform gratis aan 
                  te bieden én profiteer je van extra cashback. Een win-win situatie!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}
