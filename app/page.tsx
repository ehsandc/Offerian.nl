'use client'

import Link from 'next/link'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Container from '@/components/Container'
import Badge from '@/components/Badge'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-800 py-16 md:py-20 overflow-x-hidden">
        <Container>
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl overflow-hidden max-w-full">
              {/* Value Statement */}
              <div className="text-center mb-6 sm:mb-8 max-w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 break-words max-w-full px-2">
                  Eerlijk doorverwijzen naar betere deals
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed break-words max-w-full px-2">
                  Geen eindeloos vergelijken. Geen formulieren. Geen verkooppraatjes.
                  Klik door, bekijk actuele aanbiedingen, en profiteer.
                </p>
              </div>

              {/* Benefit Highlight */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-4 border-yellow-400 rounded-xl p-4 sm:p-6 md:p-8 text-center max-w-full overflow-hidden">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-yellow-600 mb-2 break-words max-w-full">
                  💰 Tot €600 per jaar
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium break-words max-w-full px-2">
                  Gemiddelde besparing door overstap naar energie + zorg
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 break-words max-w-full px-2">
                  Indicatief. Exacte voordeel verschilt per situatie.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link 
                  href="/zorgverzekering" 
                  className="relative inline-block px-6 py-3 rounded-lg font-bold text-white uppercase tracking-wide text-center overflow-hidden transition-all hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-98"
                  style={{
                    background: 'linear-gradient(135deg, #f3be09 0%, #e6b800 50%, #d4a500 100%)',
                    textShadow: '1px 1px 2px rgba(139, 69, 19, 0.8), 0 0 3px rgba(160, 82, 45, 0.6)',
                    boxShadow: '0 4px 15px rgba(243, 190, 9, 0.4), 0 8px 25px rgba(243, 190, 9, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                    border: '1px solid rgba(212, 165, 0, 0.6)',
                    transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
                    transitionDuration: '0.4s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #ffd700 0%, #f3be09 50%, #e6b800 100%)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(243, 190, 9, 0.6), 0 15px 35px rgba(243, 190, 9, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.borderColor = '#e6b800';
                    const shine = e.currentTarget.querySelector('.shine') as HTMLElement;
                    if (shine) shine.style.left = '100%';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #f3be09 0%, #e6b800 50%, #d4a500 100%)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(243, 190, 9, 0.4), 0 8px 25px rgba(243, 190, 9, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.borderColor = 'rgba(212, 165, 0, 0.6)';
                    const shine = e.currentTarget.querySelector('.shine') as HTMLElement;
                    if (shine) shine.style.left = '-100%';
                  }}
                >
                  <span 
                    className="shine absolute inset-0 pointer-events-none transition-all duration-600 ease-out"
                    style={{
                      left: '-100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)'
                    }}
                  ></span>
                  <span className="relative z-10">🏥 Zorgverzekering 2026</span>
                </Link>
                <Link 
                  href="/energie" 
                  className="relative inline-block px-6 py-3 rounded-lg font-bold text-white uppercase tracking-wide text-center overflow-hidden transition-all hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-98"
                  style={{
                    background: 'linear-gradient(135deg, #f3be09 0%, #e6b800 50%, #d4a500 100%)',
                    textShadow: '1px 1px 2px rgba(139, 69, 19, 0.8), 0 0 3px rgba(160, 82, 45, 0.6)',
                    boxShadow: '0 4px 15px rgba(243, 190, 9, 0.4), 0 8px 25px rgba(243, 190, 9, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                    border: '1px solid rgba(212, 165, 0, 0.6)',
                    transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
                    transitionDuration: '0.4s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #ffd700 0%, #f3be09 50%, #e6b800 100%)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(243, 190, 9, 0.6), 0 15px 35px rgba(243, 190, 9, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.borderColor = '#e6b800';
                    const shine = e.currentTarget.querySelector('.shine') as HTMLElement;
                    if (shine) shine.style.left = '100%';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #f3be09 0%, #e6b800 50%, #d4a500 100%)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(243, 190, 9, 0.4), 0 8px 25px rgba(243, 190, 9, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.borderColor = 'rgba(212, 165, 0, 0.6)';
                    const shine = e.currentTarget.querySelector('.shine') as HTMLElement;
                    if (shine) shine.style.left = '-100%';
                  }}
                >
                  <span 
                    className="shine absolute inset-0 pointer-events-none transition-all duration-600 ease-out"
                    style={{
                      left: '-100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)'
                    }}
                  ></span>
                  <span className="relative z-10">⚡ Energie aanbieders</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Decision Cards */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white overflow-x-hidden">
        <Container>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4 px-4 break-words">
            Kies waar je wilt overstappen
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto px-4 break-words">
            Klik door naar actuele aanbieders. Geen gedoe, geen verplichtingen.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
            {/* Zorgverzekering Card */}
            <Card className="border-4 border-green-200 hover:border-green-400 transition-all hover:shadow-2xl overflow-hidden max-w-full">
              <div className="p-4 sm:p-6">
                <div className="text-center mb-6">
                  <div className="text-5xl sm:text-6xl md:text-7xl mb-4">🏥</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-green-800 mb-4 break-words">Zorgverzekering 2026</h3>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl p-3 sm:p-4 mb-6 text-center overflow-hidden">
                  <div className="text-2xl sm:text-3xl font-black text-yellow-700 break-words">
                    €100 – €300
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 break-words">mogelijk te besparen per jaar</div>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-sm sm:text-base text-gray-700 font-medium break-words">✔ Deadline: 31 december 2025</p>
                  <p className="text-sm sm:text-base text-gray-700 font-medium break-words">✔ Mogelijke welkomstacties</p>
                  <p className="text-sm sm:text-base text-gray-700 font-medium break-words">✔ Direct online regelen</p>
                </div>
                
                <Link href="/zorgverzekering">
                  <Button fullWidth size="lg" variant="primary" className="bg-green-700 hover:bg-green-800 font-bold text-sm sm:text-base md:text-lg py-3 sm:py-4 break-words">
                    Bekijk zorgverzekeraars →
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Energie Card */}
            <Card className="border-4 border-green-200 hover:border-green-400 transition-all hover:shadow-2xl overflow-hidden max-w-full">
              <div className="p-4 sm:p-6">
                <div className="text-center mb-6">
                  <div className="text-5xl sm:text-6xl md:text-7xl mb-4">⚡</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-green-800 mb-4 break-words">Energieleveranciers</h3>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl p-3 sm:p-4 mb-6 text-center overflow-hidden">
                  <div className="text-2xl sm:text-3xl font-black text-yellow-700 break-words">
                    €200 – €400
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700 break-words">mogelijk te besparen per jaar</div>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-sm sm:text-base text-gray-700 font-medium break-words">✔ Altijd overstappen mogelijk</p>
                  <p className="text-sm sm:text-base text-gray-700 font-medium break-words">✔ Vaste of variabele tarieven</p>
                  <p className="text-sm sm:text-base text-gray-700 font-medium break-words">✔ Actuele prijzen & voorwaarden</p>
                </div>
                
                <Link href="/energie">
                  <Button fullWidth size="lg" variant="secondary" className="font-bold text-sm sm:text-base md:text-lg py-3 sm:py-4 break-words">
                    Bekijk energieleveranciers →
                  </Button>
                </Link>
              </div>
            </Card>
          </div>

          {/* Cashback Teaser */}
          <div className="mt-12 max-w-3xl mx-auto px-4">
            <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-300 overflow-hidden max-w-full">
              <div className="text-center p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl mb-3">🎁</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 break-words">Cashback & welkomstacties</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 break-words">
                  Sommige aanbieders bieden welkomstvoordelen aan. Klik door om te zien welke acties er zijn.
                </p>
                <Link href="/cashback" className="text-green-700 hover:text-green-800 font-bold hover:underline text-sm sm:text-base break-words">
                  Meer info over cashback →
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-white overflow-x-hidden">
        <Container>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12 px-4 break-words">
            Zo eenvoudig werkt het
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
            <div className="text-center">
              <div className="bg-green-100 text-green-700 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Klik door</h3>
              <p className="text-gray-600">
                Ga naar de aanbieder en bekijk actuele tarieven en voorwaarden.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 text-green-700 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sluit direct af</h3>
              <p className="text-gray-600">
                Kies je pakket en rond de overstap online af. Alles geregeld in minuten.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 text-yellow-700 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Profiteer</h3>
              <p className="text-gray-600">
                Bespaar op je maandelijkse kosten en ontvang eventuele welkomstacties.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Urgency Banner */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-800 overflow-x-hidden">
        <Container>
          <div className="max-w-3xl mx-auto text-center px-4">
            <div className="bg-yellow-400 text-gray-900 inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full font-black text-sm sm:text-base md:text-lg mb-4">
              ⏰ Deadline: 31 december 2025
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-white break-words">
              Zorgverzekering overstappen?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-green-50 break-words">
              Je moet voor 31 december je nieuwe zorgverzekering geregeld hebben.
              Klik door en doe het vandaag nog.
            </p>
            <Link href="/zorgverzekering">
              <Button size="lg" className="!bg-white !text-green-800 hover:!bg-green-50 font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 break-words">
                Bekijk zorgverzekeraars nu →
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
