'use client'
import React from 'react'
import TypeWriter from './animations/TypeWriter'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <header className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-hero font-bold mb-4">
          <TypeWriter text="Smarter Systems. Human Flow." speed={50} delay={200} />
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-700 mb-6">Intelligent. Human. Adaptive.</p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">We help businesses evolve through process improvement and mindful innovation.</p>
        <div className="flex justify-center">
          <a href="#contact" className="btn-primary text-lg">Book Your Free Audit</a>
        </div>
      </div>
    </header>
  )
}
