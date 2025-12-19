import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Ons - Offerian.nl',
  description: 'Leer meer over Offerian.nl, onze missie om eerlijk te vergelijken, en hoe wij jou helpen besparen op verzekeringen en energie.',
  keywords: 'over ons, offerian, missie, transparantie, contact',
}

export default function OverOnsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
