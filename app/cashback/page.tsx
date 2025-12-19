import type { Metadata } from 'next'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Acties en cashback bij aanbieders | Offerian.nl',
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
              💰 Mogelijke cashback
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Acties en cashback bij aanbieders
            </h1>
            <p className="text-xl text-gray-600">
              Sommige aanbieders bieden cashback of welkomstvoordelen aan. 
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
                      Je bekijkt aanbieders
                    </h3>
                    <p className="text-gray-600">
                      Via onze pagina's word je doorgestuurd naar aanbieders om hun actuele aanbiedingen te bekijken.
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
                      Mogelijke cashback van aanbieder
                    </h3>
                    <p className="text-gray-600">
                      Sommige aanbieders bieden cashback of welkomstvoordelen aan volgens hun voorwaarden.
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
                  <strong>Hoe werken cashback acties?</strong><br />
                  Cashback en welkomstvoordelen worden aangeboden door de aanbieders zelf volgens hun voorwaarden en actieperiodes.
                </p>
              </div>
            </Card>

            {/* When to Receive */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hoe werkt cashback?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Cashback en welkomstvoordelen worden aangeboden door aanbieders volgens hun eigen voorwaarden en actieperiodes.
                </p>
                <p className="mt-4">
                  <strong>Let op:</strong> Voorwaarden, bedragen en timing verschillen per aanbieder en per actie. Controleer de voorwaarden bij de aanbieder.
                </p>
              </div>
            </Card>

            {/* Amounts */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Welke acties zijn er?
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Zorgverzekering</h3>
                    <p className="text-sm text-gray-600">Mogelijke cashback (afhankelijk van aanbieder en actie)</p>
                  </div>
                </div>

                <div className="p-4 bg-secondary-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900">Energie</h3>
                    <p className="text-sm text-gray-600">Mogelijke cashback (afhankelijk van aanbieder en actie)</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-4">
                  Cashback en welkomstacties verschillen per aanbieder en per actieperiode. Controleer actuele voorwaarden bij de aanbieder.
                </p>
              </div>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <div className="text-center py-6">
                <h2 className="text-3xl font-bold mb-4">
                  Bekijk actuele aanbiedingen
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Begin met ontdekken van actuele aanbiedingen bij aanbieders.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/zorgverzekering">
                    <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
                      Bekijk zorgverzekering
                    </button>
                  </Link>
                  <Link href="/energie">
                    <button className="bg-white text-secondary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
                      Bekijk energie
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
                    Waar kan ik vragen stellen over cashback?
                  </h3>
                  <p className="text-gray-600">
                    Neem bij vragen contact op met de aanbieder waar je het product hebt afgesloten.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Kan ik cashback combineren met aanbiedingen?
                  </h3>
                  <p className="text-gray-600">
                    Dit verschilt per aanbieder en per actie. Controleer de voorwaarden bij de aanbieder.
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
