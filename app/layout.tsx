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
  other: {
    'e4e1bcdb9f962d2': '8a08ebfd35e00ba67246c68bd34d042d',
    'tradetracker-site-verification': '43c2c965f7c968b724a80afe92285912f88d6a7e',
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
        
        {/* TradeTracker SuperTag */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var _TradeTrackerTagOptions = {
                t: 'a',
                s: '503462',
                chk: 'cb612ee94da57a9bdafa6e2914438e1a',
                overrideOptions: {}
              };
              (function() {
                var tt = document.createElement('script'), s = document.getElementsByTagName('script')[0];
                tt.setAttribute('type', 'text/javascript');
                tt.setAttribute('src', (document.location.protocol == 'https:' ? 'https' : 'http') + '://tm.tradetracker.net/tag?t=' + _TradeTrackerTagOptions.t + '&s=' + _TradeTrackerTagOptions.s + '&chk=' + _TradeTrackerTagOptions.chk);
                s.parentNode.insertBefore(tt, s);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
