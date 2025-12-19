import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://offerian.nl'),
  title: 'Offerian.nl - Bespaar op zorgverzekering & energie',
  description: 'Vergelijk betrouwbare aanbieders en stap vóór 31 december over. Ontvang cashback bij het afsluiten.',
  keywords: 'zorgverzekering vergelijken, energie vergelijken, overstappen, cashback, Nederland',
  openGraph: {
    title: 'Offerian.nl - Bespaar op zorgverzekering & energie',
    description: 'Vergelijk betrouwbare aanbieders en stap vóór 31 december over.',
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
