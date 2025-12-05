'use client'
import React from 'react'
import TypeWriter from './animations/TypeWriter'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <header className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-hero font-bold mb-6">
          <TypeWriter text="Process improvement made simple" speed={50} delay={200} />
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Simple, practical process improvements that free up your time and remove friction.</p>
        <div className="flex justify-center">
          <a href="#contact" className="btn-primary text-lg">Start your process improvement journey</a>
        </div>
      </div>
    </header>
  )
}
