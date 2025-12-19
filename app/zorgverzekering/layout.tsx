import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vergelijk Zorgverzekeringen 2026 - Bespaar tot €200 | Offerian.nl',
  description: 'Vergelijk alle zorgverzekeringen voor 2026. Overstappen voor 31 december en ontvang cashback. Onafhankelijk en transparant vergelijken.',
  keywords: 'zorgverzekering vergelijken, zorgverzekering 2026, overstappen zorgverzekering, goedkope zorgverzekering',
}

export default function ZorgverzekeringLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
