'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isOutsideMenu = mobileMenuRef.current && !mobileMenuRef.current.contains(target)
      const isOutsideButton = buttonRef.current && !buttonRef.current.contains(target)
      
      if (isOutsideMenu && isOutsideButton) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <header className="bg-green-900 shadow-lg sticky top-0 z-50 border-b-2 border-yellow-400">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
            Offerian
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/zorgverzekering" className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
              Zorgverzekering
            </Link>
            <Link href="/energie" className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
              Energie
            </Link>
            <Link href="/cashback" className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
              Cashback
            </Link>
            <Link href="/" className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
              Home
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            ref={buttonRef}
            className="md:hidden p-2 text-yellow-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div ref={mobileMenuRef} className="md:hidden mt-4 pb-4 space-y-3">
            <Link 
              href="/zorgverzekering" 
              className="block py-2 text-yellow-400 hover:text-yellow-300 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Zorgverzekering
            </Link>
            <Link 
              href="/energie" 
              className="block py-2 text-yellow-400 hover:text-yellow-300 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Energie
            </Link>
            <Link 
              href="/cashback" 
              className="block py-2 text-yellow-400 hover:text-yellow-300 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cashback
            </Link>
            <Link 
              href="/" 
              className="block py-2 text-yellow-400 hover:text-yellow-300 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
