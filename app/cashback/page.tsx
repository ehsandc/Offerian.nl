import type { Metadata } from 'next'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hoe werkt Cashback? - Offerian.nl',
  description: 'Begrijp hoe je cashback ontvangt bij het afsluiten van verzekeringen en energiecontracten via Offerian.nl. Transparant en eerlijk uitgelegd.',
  keywords: 'cashback, commissie, vergoeding, overstappen, besparen',
}

export default function Cashback() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-50 to-white py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="success" className="mb-4">
              💰 Tot €200 cashback
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hoe werkt cashback?
            </h1>
            <p className="text-xl text-gray-600">
              Bij Offerian.nl ontvang je cashback wanneer je via onze vergelijker overstapt. 
              Hier leggen we eerlijk uit hoe dit werkt.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* How It Works */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Zo werkt cashback
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Je vergelijkt en kiest een aanbieder
                    </h3>
                    <p className="text-gray-600">
                      Via onze vergelijkingspagina's bekijk je verschillende aanbieders en 
                      kiest de beste voor jouw situatie.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Je klikt door naar de aanbieder
                    </h3>
                    <p className="text-gray-600">
                      Wanneer je op "Bekijk aanbieding" klikt, word je doorgestuurd naar de 
                      website van de aanbieder. Dit gebeurt via een speciale trackinglink.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Je sluit het product af
                    </h3>
                    <p className="text-gray-600">
                      Je voltooit het aanmeldproces bij de aanbieder en sluit het product af 
                      (zorgverzekering of energiecontract).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Wij ontvangen commissie
                    </h3>
                    <p className="text-gray-600">
                      De aanbieder betaalt ons een commissie omdat wij jou als klant hebben 
                      doorverwezen. Dit heeft geen invloed op de prijs die jij betaalt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary-100 text-secondary-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Jij ontvangt cashback
                    </h3>
                    <p className="text-gray-600">
                      Een deel van de commissie die wij ontvangen, geven we aan jou terug als 
                      cashback. Dit gebeurt binnen 8-12 weken na bevestiging van je aankoop.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Transparency */}
            <Card className="bg-blue-50 border-2 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                💙 Volledige transparantie
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Waarom verdienen wij geld?</strong><br />
                  Offerian.nl is een affiliate vergelijkingswebsite. Dit betekent dat wij 
                  commissie ontvangen van aanbieders wanneer jij via onze links een product 
                  afsluit. Dit verdienmodel is gebruikelijk in de vergelijkingsindustrie.
                </p>
                <p>
                  <strong>Beïnvloedt dit de vergelijking?</strong><br />
                  Nee. Wij tonen aanbieders op basis van prijs, voorwaarden en populariteit. 
                  De commissie die wij ontvangen heeft geen invloed op de volgorde van de 
                  resultaten.
                </p>
                <p>
                  <strong>Waarom geven wij cashback?</strong><br />
                  Wij willen transparant zijn en onze klanten belonen. Door een deel van onze 
                  commissie aan jou terug te geven, bespaar je nóg meer bij het overstappen.
                </p>
              </div>
            </Card>

            {/* When to Receive */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Wanneer ontvang ik mijn cashback?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Je ontvangt je cashback <strong>binnen 8-12 weken</strong> nadat je 
                  aankoop is bevestigd door de aanbieder. Dit proces duurt even omdat:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>De aanbieder eerst moet bevestigen dat het contract actief is</li>
                  <li>Er een wachttijd is voor eventuele annuleringen of herroepingen</li>
                  <li>Wij de commissie eerst moeten ontvangen van de aanbieder</li>
                </ul>
                <p className="mt-4">
                  <strong>Let op:</strong> Je ontvangt alleen cashback als je het product 
                  afsluit via een van onze trackinglinks en het contract niet binnen de 
                  herroepingstermijn annuleert.
                </p>
              </div>
            </Card>

            {/* Amounts */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hoeveel cashback kan ik ontvangen?
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900">Zorgverzekering</h3>
                      <p className="text-sm text-gray-600">Afhankelijk van de aanbieder</p>
                    </div>
                    <div className="text-2xl font-bold text-primary-600">
                      Tot €200
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-secondary-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900">Energie</h3>
                      <p className="text-sm text-gray-600">Afhankelijk van het contract</p>
                    </div>
                    <div className="text-2xl font-bold text-secondary-600">
                      Tot €150
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-4">
                  De exacte cashback bedragen worden vermeld op de vergelijkingspagina's en 
                  kunnen per aanbieder verschillen. Sommige aanbieders bieden hogere cashback 
                  tijdens speciale acties.
                </p>
              </div>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <div className="text-center py-6">
                <h2 className="text-3xl font-bold mb-4">
                  Klaar om te besparen?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Begin nu met vergelijken en ontvang cashback bij je overstap.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/zorgverzekering">
                    <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
                      Vergelijk zorgverzekering
                    </button>
                  </Link>
                  <Link href="/energie">
                    <button className="bg-white text-secondary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
                      Vergelijk energie
                    </button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* FAQ */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Veelgestelde vragen
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Moet ik me ergens registreren voor cashback?
                  </h3>
                  <p className="text-gray-600">
                    Nee, je hoeft je niet te registreren. De cashback wordt automatisch 
                    gekoppeld aan je aankoop via de trackinglink.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Wat als ik mijn cashback niet ontvang?
                  </h3>
                  <p className="text-gray-600">
                    Neem contact met ons op via de contactpagina. We controleren dan je 
                    aankoop en zorgen dat je je cashback ontvangt.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Kan ik cashback combineren met aanbiedingen van de aanbieder?
                  </h3>
                  <p className="text-gray-600">
                    Ja! Je kunt onze cashback combineren met acties en kortingen die de 
                    aanbieder zelf biedt. Zo bespaar je dubbel.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hoe ontvang ik mijn cashback?
                  </h3>
                  <p className="text-gray-600">
                    Cashback wordt uitbetaald via bankoverschrijving. Je ontvangt een email 
                    met instructies zodra je cashback gereed staat voor uitbetaling.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
