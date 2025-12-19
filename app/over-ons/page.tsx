'use client'

import type { Metadata } from 'next'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { useState } from 'react'

export default function OverOns() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Over Offerian.nl
            </h1>
            <p className="text-xl text-gray-600">
              Eerlijk doorverwijzen en besparen. Dat is waar wij voor staan.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Mission */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Onze missie
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Bij Offerian.nl geloven we dat iedereen recht heeft op transparante en 
                  onafhankelijke informatie over verzekeringen en energiecontracten. Elk jaar 
                  kunnen Nederlanders honderden euro's besparen door over te stappen, maar het 
                  vergelijken van alle opties kan overweldigend zijn.
                </p>
                <p>
                  Daarom hebben we Offerian.nl opgericht: om het ontdekken van aanbieders makkelijk en transparant te maken. Wij presenteren een selectie van beschikbare 
                  en relevante aanbieders op één plek, zodat je aanbieders kunt bekijken en zelf een keuze kunt maken.
                </p>
              </div>
            </Card>

            {/* What We Do */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Wat wij doen
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl mb-3">🔍</div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Onafhankelijk vergelijken
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We tonen een selectie van beschikbare en relevante aanbieders zonder voorkeur. 
                    Jij ziet altijd een helder overzicht.
                  </p>
                </div>

                <div>
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Cashback delen
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sommige aanbieders bieden cashback of welkomstacties aan volgens hun voorwaarden.
                  </p>
                </div>

                <div>
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Duidelijke informatie
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Geen verborgen voorwaarden of kleine lettertjes. We presenteren alle 
                    informatie helder en begrijpelijk.
                  </p>
                </div>

                <div>
                  <div className="text-3xl mb-3">🤝</div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Transparant verdienmodel
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We verdienen via affiliate commissies. Dit leggen we eerlijk uit en heeft 
                    geen invloed op onze vergelijkingen.
                  </p>
                </div>
              </div>
            </Card>

            {/* Transparency Statement */}
            <Card className="bg-blue-50 border-2 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                💙 Transparantie statement
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Hoe verdienen wij geld?</strong><br />
                  Offerian.nl is een affiliate vergelijkingswebsite. We verdienen een commissie 
                  van aanbieders wanneer je via onze links een product afsluit. Deze commissie 
                  heeft geen invloed op de prijs die jij betaalt.
                </p>
                <p>
                  <strong>Beïnvloedt dit onze vergelijkingen?</strong><br />
                  Nee. We tonen een selectie van beschikbare aanbieders op basis van beschikbaarheid bij onze samenwerkingspartners.
                </p>
                <p>
                  <strong>Samenwerking met affiliate netwerken</strong><br />
                  We werken samen met erkende affiliate netwerken zoals Daisycon, TradeTracker 
                  en Awin. Deze partijen faciliteren de samenwerking tussen ons en de aanbieders.
                </p>
                <p>
                  Voor meer details, zie onze{' '}
                  <a href="/affiliate-disclaimer" className="text-primary-600 hover:underline">
                    affiliate disclaimer
                  </a>.
                </p>
              </div>
            </Card>

            {/* Contact Form */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Neem contact op
              </h2>
              
              {submitted ? (
                <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    Bedankt voor je bericht!
                  </p>
                  <p className="text-gray-600">
                    We nemen zo spoedig mogelijk contact met je op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Naam
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Je naam"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mailadres
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="je@email.nl"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Bericht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Je bericht..."
                    />
                  </div>

                  <Button type="submit" variant="primary" fullWidth>
                    Verstuur bericht
                  </Button>
                </form>
              )}
            </Card>

            {/* Company Info */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Bedrijfsinformatie
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Offerian.nl is een onafhankelijk online doorverwijsplatform in opstartfase. 
                  Formele bedrijfsgegevens, zoals een KvK- en btw-nummer, worden toegevoegd zodra de inschrijving is afgerond.
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900 mb-2">Contact:</p>
                  <p><strong>E-mail:</strong> info@offerian.nl</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
