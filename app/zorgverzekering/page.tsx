'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Container from '@/components/Container'
import Badge from '@/components/Badge'

type FilterType = 'all' | 'basis' | 'aanvullend'

interface Provider {
  id: number
  name: string
  logo: string
  usp: string
  affiliateUrl: string
  type: 'basis' | 'aanvullend'
  popular?: boolean
}

const providers: Provider[] = [
  {
    id: 1,
    name: 'Zilveren Kruis',
    logo: '🏥',
    usp: 'Bekende Nederlandse zorgverzekeraar',
    affiliateUrl: '#',
    type: 'basis',
    popular: true,
  },
  {
    id: 2,
    name: 'VGZ',
    logo: '💚',
    usp: 'Gewaardeerde zorgverzekeraar',
    affiliateUrl: '#',
    type: 'basis',
  },
  {
    id: 3,
    name: 'CZ',
    logo: '🔷',
    usp: 'Nederlandse zorgverzekeraar',
    affiliateUrl: '#',
    type: 'basis',
    popular: true,
  },
  {
    id: 4,
    name: 'Menzis',
    logo: '🩺',
    usp: 'Nederlandse zorgverzekeraar',
    affiliateUrl: '#',
    type: 'basis',
  },
  {
    id: 5,
    name: 'ONVZ',
    logo: '⭐',
    usp: 'Nederlandse zorgverzekeraar',
    affiliateUrl: '#',
    type: 'basis',
    popular: true,
  },
  {
    id: 6,
    name: 'Zilveren Kruis Aanvullend',
    logo: '🏥',
    usp: 'Aanvullende verzekering',
    affiliateUrl: '#',
    type: 'aanvullend',
  },
]

export default function Zorgverzekering() {
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredProviders = filter === 'all' 
    ? providers 
    : providers.filter(p => p.type === filter)

  return (
    <>
      {/* Hero Savings Signal */}
      <section className="bg-gradient-to-br from-green-700 to-green-800 py-16 md:py-20 overflow-x-hidden">
        <Container>
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl overflow-hidden max-w-full">
              <div className="bg-yellow-400 text-gray-900 inline-block px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-black text-xs sm:text-sm mb-6 max-w-full">
                ⏰ Deadline: 31 december 2025
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-4 break-words max-w-full">
                🏥 Zorgverzekering 2026
              </h1>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-yellow-600 mb-6 break-words max-w-full">
                €100 – €300 besparing*
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mb-8 break-words max-w-full px-2">
                *Mogelijk te besparen per jaar door over te stappen.
                Exacte voordeel verschilt per situatie en gekozen pakket.
              </p>
              <div className="border-t border-gray-200 pt-6 max-w-full">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed break-words max-w-full px-2">
                  Bekijk Nederlandse zorgverzekeraars en ga direct naar hun actuele aanbiedingen voor 2026.
                  Simpel, duidelijk, zonder gedoe.
                </p>
              </div>
            </div>
          </div>
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8">
            <div className="animate-bounce">
              <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className={`px-6 py-2 rounded-lg font-bold transition-colors ${
                  filter === 'all'
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🏥 Alle verzekeraars
              </button>
              <button
                onClick={() => setFilter('basis')}
                className={`px-6 py-2 rounded-lg font-bold transition-colors ${
                  filter === 'basis'
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Basis alleen
              </button>
              <button
                onClick={() => setFilter('aanvullend')}
                className={`px-6 py-2 rounded-lg font-bold transition-colors ${
                  filter === 'aanvullend'
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Aanvullend alleen
              </button>
            </div>

            {/* Provider Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => (
                <Card key={provider.id} className="border-2 hover:border-green-400 transition-all hover:shadow-xl overflow-hidden">
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
                      <div className="text-xs sm:text-sm font-medium text-green-700 mb-4 px-3 break-words">
                        {provider.usp}
                      </div>
                    </div>
                    
                    {/* Type Badge */}
                    <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-3 sm:p-4 mb-4">
                      <div className="text-center">
                        <Badge variant="info" className="text-xs sm:text-sm">
                          {provider.type === 'basis' ? '🏥 Basisverzekering' : '✨ Aanvullend'}
                        </Badge>
                        <p className="text-xs text-gray-600 mt-2 px-2 break-words">
                          Actuele premies & dekking bij aanbieder
                        </p>
                      </div>
                    </div>

                    {/* Benefit Hint */}
                    <div className="text-center mb-4 px-2">
                      <p className="text-xs sm:text-sm font-semibold text-yellow-600 break-words">
                        🎁 Mogelijke welkomstactie
                      </p>
                    </div>
                    
                    {/* CTA */}
                    <div className="mt-auto px-2">
                      <a 
                        href={provider.affiliateUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary" fullWidth size="lg" className="bg-green-700 hover:bg-green-800 font-bold text-sm sm:text-base md:text-lg py-3 sm:py-4 break-words">
                          Bekijk actuele premies →
                        </Button>
                      </a>
                      <div className="text-center mt-3">
                        <p className="text-xs text-gray-600 break-words">
                          ✔ Online afsluiten in 5–10 minuten
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Completion Reminder */}
            <div className="mt-8 text-center bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
              <p className="text-sm font-semibold text-gray-700">
                ⏰ Sluit je nieuwe zorgverzekering af voor 31 december om per 1 januari 2026 verzekerd te zijn.
              </p>
            </div>

            {/* Transparency & Info Section */}
            <div className="mt-12 space-y-6">
              {/* Affiliate Transparency */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
                <p className="flex items-start">
                  <span className="mr-2">ℹ️</span>
                  <span>
                    <strong>Transparantie:</strong> Wij kunnen een vergoeding ontvangen wanneer je via onze website wordt doorgestuurd en bij een aanbieder een overstap maakt. 
                    Dit heeft geen invloed op de prijs die je betaalt en helpt ons deze dienst gratis aan te bieden.
                  </span>
                </p>
              </div>

              {/* Clarification */}
              <Card className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
                <p className="text-sm text-gray-700">
                  Via bovenstaande links word je doorverwezen naar de website van de zorgverzekeraar, waar je actuele premies, voorwaarden en dekkingsopties vindt.
                </p>
              </Card>
            </div>

            {/* Info Section */}
            <div className="mt-8 space-y-6">
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Waarom overstappen naar een andere zorgverzekering?
                </h2>
                <div className="space-y-3 text-gray-600">
                  <p>
                    Elk jaar kun je tot 31 december overstappen naar een andere zorgverzekering. 
                    Dit is een goed moment om te kijken of een andere zorgverzekering mogelijk beter aansluit bij je wensen.
                  </p>
                  <p>
                    Sommige aanbieders bieden tijdelijke acties of welkomstvoordelen aan. 
                    Kijk bij de aanbieder zelf voor actuele voorwaarden en mogelijkheden.
                  </p>
                </div>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Hoe werkt overstappen?
                </h2>
                <ol className="space-y-3 text-gray-600 list-decimal list-inside">
                  <li>Klik op "Ga naar aanbieder" om door te gaan naar de website van de zorgverzekeraar</li>
                  <li>Bekijk daar de actuele aanbiedingen, voorwaarden en premies</li>
                  <li>Als je besluit over te stappen, kun je daar online je nieuwe verzekering afsluiten</li>
                  <li>De nieuwe verzekeraar regelt de opzegging bij je oude verzekeraar</li>
                  <li>Je nieuwe verzekering gaat in per 1 januari 2026</li>
                </ol>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
