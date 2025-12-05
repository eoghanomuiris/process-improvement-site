'use client'

import React from 'react'
import ContactForm from '../../components/ContactForm'
import { useLanguage } from '../../i18n/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto lg:max-w-7xl">
      <h1 className="text-3xl font-bold mb-6">{t('contactTitle')}</h1>
      <p className="text-gray-700 mb-8">{t('contactSubtitle')}</p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">{t('sendMessage')}</h2>
        <ContactForm />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">{t('bookCallTitle')}</h2>
        <div className="aspect-video bg-white rounded-lg shadow-sm">
          {/* Placeholder Calendly iframe - replace URL with your Calendly link */}
          <iframe src="https://calendly.com/" title="Calendly booking" className="w-full h-full rounded-lg" />
        </div>
      </div>
    </section>
  )
}
