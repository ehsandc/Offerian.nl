import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vergelijk Energie Leveranciers - Bespaar tot €400 | Offerian.nl',
  description: 'Vergelijk energieleveranciers en bespaar honderden euro\'s per jaar. Vast of variabel contract. Ontvang cashback bij overstappen.',
  keywords: 'energie vergelijken, energieleveranciers, overstappen energie, goedkope energie, energiecontract',
}

export default function EnergieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
