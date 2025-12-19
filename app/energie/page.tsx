'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Container from '@/components/Container'
import Badge from '@/components/Badge'
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer'

type ContractType = 'all' | 'variabel' | 'vast'

interface EnergyProvider {
  id: number
  name: string
  logo: string
  usp: string
  contractType: 'variabel' | 'vast'
  affiliateUrl: string
  popular?: boolean
}

const providers: EnergyProvider[] = [
  {
    id: 1,
    name: 'Vattenfall',
    logo: '⚡',
    usp: 'Beste keuze voor vaste tarieven en zekerheid',
    contractType: 'vast',
    affiliateUrl: '#',
    popular: true,
  },
  {
    id: 2,
    name: 'Eneco',
    logo: '🌱',
    usp: 'Ideaal voor duurzame energie',
    contractType: 'vast',
    affiliateUrl: '#',
  },
  {
    id: 3,
    name: 'Essent',
    logo: '💡',
    usp: 'Betrouwbare keuze met goede service',
    contractType: 'vast',
    affiliateUrl: '#',
    popular: true,
  },
  {
    id: 4,
    name: 'Budget Energie',
    logo: '💰',
    usp: 'Geschikt voor prijsbewuste overstappers',
    contractType: 'variabel',
    affiliateUrl: '#',
    popular: true,
  },
  {
    id: 5,
    name: 'Greenchoice',
    logo: '🌿',
    usp: '100% groene energie voor bewuste keuze',
    contractType: 'vast',
    affiliateUrl: '#',
  },
  {
    id: 6,
    name: 'ANWB Energie',
    logo: '🚗',
    usp: 'Interessant voor dynamische tarieven',
    contractType: 'variabel',
    affiliateUrl: '#',
  },
]

export default function Energie() {
  const [filter, setFilter] = useState<ContractType>('all')

  const filteredProviders = filter === 'all' 
    ? providers 
    : providers.filter(p => p.contractType === filter)

  return (
    <>
      {/* Hero Savings Signal */}
      <section className="bg-gradient-to-br from-secondary-600 to-secondary-700 py-16 md:py-20 overflow-x-hidden">
        <Container>
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl overflow-hidden max-w-full">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 mb-4 leading-tight break-words max-w-full px-2">
                ⚡ Energieleveranciers
              </h1>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary-600 mb-6 break-words max-w-full">
                Mogelijke besparing bij overstap
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mb-8 break-words max-w-full px-2">
                Indicatief. Exacte besparing verschilt per situatie.
              </p>
              <div className="border-t border-gray-200 pt-6 max-w-full">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed break-words max-w-full px-2">
                  Offerian helpt je snel kiezen zonder formulieren,
                  verkooptrucs of eindeloos vergelijken.
                </p>
              </div>
            </div>
          </div>
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8">
            <div className="animate-bounce">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <Container>
          <div className="max-w-5xl mx-auto">
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-secondary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Alle leveranciers
              </button>
              <button
                onClick={() => setFilter('vast')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'vast'
                    ? 'bg-secondary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🔒 Vast contract
              </button>
              <button
                onClick={() => setFilter('variabel')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'variabel'
                    ? 'bg-secondary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                📊 Variabel contract
              </button>
            </div>

            {/* Provider Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => (
                <Card key={provider.id} className="border-2 hover:border-secondary-400 transition-all hover:shadow-xl overflow-hidden">
                  <div className="flex flex-col h-full p-3 sm:p-4">
                    {/* Header */}
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-5xl sm:text-6xl mb-3">{provider.logo}</div>
                      <div className="flex items-center justify-center gap-2 mb-3 flex-wrap px-2">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 break-words max-w-full">{provider.name}</h3>
                        {provider.popular && (
                          <Badge variant="success" className="text-xs whitespace-nowrap">Populair</Badge>
                        )}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-secondary-700 mb-4 px-3 break-words">
                        {provider.usp}
                      </div>
                    </div>
                    
                    {/* Contract Type */}
                    <div className="bg-gradient-to-br from-secondary-50 to-white border-2 border-secondary-200 rounded-xl p-3 sm:p-4 mb-4">
                      <div className="text-center">
                        <Badge variant="info" className="text-xs whitespace-nowrap">
                          {provider.contractType === 'vast' ? '🔒 Vast' : '📊 Variabel'}
                        </Badge>
                        <p className="text-xs text-gray-600 mt-2 px-2 break-words">
                          Actuele tarieven bij aanbieder
                        </p>
                      </div>
                    </div>

                    {/* Benefit Hint */}
                    <div className="text-center mb-4 px-2">
                      <p className="text-xs sm:text-sm font-semibold text-secondary-600 break-words">
                        💰 Mogelijke actie volgens voorwaarden van de aanbieder
                      </p>
                    </div>
                    
                    {/* CTA */}
                    <div className="mt-auto px-2">
                      <a 
                        href={provider.affiliateUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary" fullWidth size="lg" className="font-bold text-sm sm:text-base md:text-lg py-3 sm:py-4 break-words">
                          Ga naar aanbieder →
                        </Button>
                      </a>
                      <div className="text-center mt-3">
                        <p className="text-xs text-gray-600 break-words">
                          ✔ Overstappen in 5–10 minuten
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Completion Reminder */}
            <div className="mt-8 text-center bg-accent-50 border-2 border-accent-300 rounded-xl p-6">
              <p className="text-sm font-semibold text-gray-700">
                ⚡ Rond je overstap direct af om acties en eventuele voordelen te behouden.
              </p>
            </div>

            {/* Transparency & Info Section */}
            <div className="mt-12 space-y-6">
              {/* Clarification */}
              <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
                <p className="text-sm text-gray-700">
                  Via onderstaande links word je doorverwezen naar de website van de energieleverancier, waar je actuele tarieven en voorwaarden vindt.
                </p>
              </Card>
            </div>

            {/* Urgency Message */}
            <Card className="mt-8 bg-gradient-to-r from-accent-50 to-accent-100 border-2 border-accent-300">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  ⚡ Overstappen kan altijd!
                </h2>
                <p className="text-gray-700 mb-4">
                  Bij energie kun je het hele jaar door overstappen. Bekijk de actuele aanbiedingen bij de leveranciers.
                </p>
                <div className="inline-flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 text-secondary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Overstappen is eenvoudig geregeld
                </div>
              </div>
            </Card>

            {/* Affiliate Disclaimer */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700 mt-8">
              <p className="flex items-start">
                <span className="mr-2">ℹ️</span>
                <span>
                  <strong>Transparantie:</strong> Wij kunnen een vergoeding ontvangen wanneer je via onze website wordt doorgestuurd en bij een aanbieder een overstap maakt. 
                  Dit heeft geen invloed op de prijs die je betaalt en helpt ons deze dienst gratis aan te bieden.
                </span>
              </p>
            </div>

            {/* Contract Type Explanation */}
            <Card className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Vast of variabel contract?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-2">🔒</span>
                    Vast contract
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Je tarief blijft gedurende de looptijd hetzelfde. Zekerheid over je 
                    energiekosten, maar je profiteert niet van dalende prijzen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-2">📊</span>
                    Variabel contract
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Je tarief kan maandelijks wijzigen. Je kunt profiteren van lage energieprijzen, 
                    maar let op: bij stijgende prijzen betaal je meer.
                  </p>
                </div>
              </div>
            </Card>

            {/* Info Section */}
            <div className="mt-12 space-y-6">
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Waarom overstappen naar een andere energieleverancier?
                </h2>
                <div className="space-y-3 text-gray-600">
                  <p>
                    De energiemarkt is volop in beweging. Het kan nuttig zijn om regelmatig te kijken of een andere leverancier beter aansluit bij je wensen.
                  </p>
                  <p>
                    Het overstappen is eenvoudig: je nieuwe leverancier regelt alles voor je. 
                    Je energielevering wordt niet onderbroken. Sommige aanbieders bieden tijdelijke acties of welkomstvoordelen aan.
                  </p>
                </div>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Hoe werkt overstappen?
                </h2>
                <ol className="space-y-3 text-gray-600 list-decimal list-inside">
                  <li>Klik op "Ga naar aanbieder" om door te gaan naar de website van de energieleverancier</li>
                  <li>Bekijk daar de actuele tarieven, voorwaarden en contractopties</li>
                  <li>Kies voor duurzame energie als dat belangrijk voor je is</li>
                  <li>Als je besluit over te stappen, kun je daar online je nieuwe contract afsluiten</li>
                  <li>De nieuwe leverancier regelt de opzegging bij je oude leverancier</li>
                </ol>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
