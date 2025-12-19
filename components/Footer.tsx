import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Offerian.nl</h3>
            <p className="text-sm text-gray-400">
              Eerlijk doorverwijzen en besparen op zorgverzekering en energie.
            </p>
          </div>

          {/* Vergelijken */}
          <div>
            <h4 className="text-white font-semibold mb-4">Vergelijken</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/zorgverzekering" className="hover:text-white transition-colors">
                  Zorgverzekering
                </Link>
              </li>
              <li>
                <Link href="/energie" className="hover:text-white transition-colors">
                  Energie
                </Link>
              </li>
              <li>
                <Link href="/cashback" className="hover:text-white transition-colors">
                  Cashback
                </Link>
              </li>
            </ul>
          </div>

          {/* Over Ons */}
          <div>
            <h4 className="text-white font-semibold mb-4">Over Ons</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/over-ons" className="hover:text-white transition-colors">
                  Over Offerian
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclaimer" className="hover:text-white transition-colors">
                  Affiliate Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Algemene Voorwaarden
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Offerian.nl. Alle rechten voorbehouden.</p>
          <p className="mt-2">
            Offerian.nl bevat affiliatelinks. Wij kunnen een vergoeding ontvangen wanneer je via onze website wordt doorgestuurd en een overstap maakt.
          </p>
        </div>
      </div>
    </footer>
  )
}
