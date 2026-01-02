'use client'
import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMenuItemClick = () => setOpen(false)

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/80 shadow-lg border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded">
            <img src="/volpra-logo.png" alt="Volpra" className="h-20 w-auto" />
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <a href="#about" className="text-gray-700 font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1">
            {t('about')}
          </a>
          <a href="#services" className="text-gray-700 font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1">
            {t('services')}
          </a>
          <a href="#contact" className="text-gray-700 font-medium hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1">
            {t('contact')}
          </a>
          <div className="flex items-center gap-3 border-l border-gray-300 pl-8 ml-4">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 rounded-md font-medium transition-all duration-200 ${
                language === 'en'
                  ? 'bg-accent text-white'
                  : 'text-gray-600 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent'
              }`}
              aria-label="English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('it')}
              className={`px-3 py-1.5 rounded-md font-medium transition-all duration-200 ${
                language === 'it'
                  ? 'bg-accent text-white'
                  : 'text-gray-600 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent'
              }`}
              aria-label="Italiano"
            >
              IT
            </button>
          </div>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            className="p-2 hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-white/95 backdrop-blur border-t border-gray-200" aria-label="Mobile navigation">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#about" onClick={handleMenuItemClick} className="text-gray-700 font-medium hover:text-accent transition-colors">{t('about')}</a>
            <a href="#services" onClick={handleMenuItemClick} className="text-gray-700 font-medium hover:text-accent transition-colors">{t('services')}</a>
            <a href="#contact" onClick={handleMenuItemClick} className="text-gray-700 font-medium hover:text-accent transition-colors">{t('contact')}</a>
            <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setLanguage('en')
                  handleMenuItemClick()
                }}
                className={`px-3 py-1.5 rounded-md font-medium transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-accent text-white'
                    : 'text-gray-600 hover:text-accent'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  setLanguage('it')
                  handleMenuItemClick()
                }}
                className={`px-3 py-1.5 rounded-md font-medium transition-all duration-200 ${
                  language === 'it'
                    ? 'bg-accent text-white'
                    : 'text-gray-600 hover:text-accent'
                }`}
              >
                IT
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
