'use client'

import React from 'react'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import { useLanguage } from '../i18n/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      <section className="px-6 py-12 max-w-6xl mx-auto lg:max-w-7xl">
        <Hero />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">{t('isThisYouTitle')}</h2>
          <p className="text-gray-700 mb-2">{t('isThisYouText1')}</p>
          <p className="text-gray-700">{t('isThisYouText2')}</p>
        </section>

        <section className="mt-10" id="services">
          <h2 className="text-2xl font-semibold mb-6">{t('whatsIncluded')}</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">✓</span>
                <span>{t('initialDiscussion')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">✓</span>
                <span>{t('deepReview')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">✓</span>
                <span>{t('clearProcessMaps')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">✓</span>
                <span>{t('futureStateDesign')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">✓</span>
                <span>{t('practicalReport')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">✓</span>
                <span>{t('optionalSupport')}</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">{t('ourProcess')}</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="font-semibold text-gray-900">1. {t('understand')}</h3>
              <p className="text-gray-600 text-sm mt-1">{t('understandDesc')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="font-semibold text-gray-900">2. {t('map')}</h3>
              <p className="text-gray-600 text-sm mt-1">{t('mapDesc')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="font-semibold text-gray-900">3. {t('review')}</h3>
              <p className="text-gray-600 text-sm mt-1">{t('reviewDesc')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="font-semibold text-gray-900">4. {t('design')}</h3>
              <p className="text-gray-600 text-sm mt-1">{t('designDesc')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="font-semibold text-gray-900">5. {t('report')}</h3>
              <p className="text-gray-600 text-sm mt-1">{t('reportDesc')}</p>
            </div>
          </div>
        </section>

        <section className="mt-12 border-t pt-8" id="about">
          <h2 className="text-3xl font-bold mb-6">{t('aboutUs')}</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <p className="text-gray-700 mb-4">{t('aboutIntro1')}</p>
            <p className="text-gray-700">{t('aboutIntro2')}</p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-6">{t('whyUs')}</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('multinational')}</h4>
                <p className="text-gray-700">{t('multinationalDesc')}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('deepExpertise')}</h4>
                <p className="text-gray-700">{t('deepExpertiseDesc')}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('translators')}</h4>
                <p className="text-gray-700">{t('translatorsDesc')}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('builtForYou')}</h4>
                <p className="text-gray-700">{t('builtForYouDesc')}</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-6">{t('ourApproach')}</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">→</span>
                <span>{t('simpleInsights')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">→</span>
                <span>{t('respectBrand')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">→</span>
                <span>{t('builtSmallBusiness')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">→</span>
                <span>{t('commitmentSuccess')}</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-12 border-t pt-8" id="contact">
          <h2 className="text-3xl font-bold mb-6">{t('contactTitle')}</h2>
          <p className="text-gray-700 mb-8">{t('contactSubtitle')}</p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">{t('sendMessage')}</h3>
              <ContactForm />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">{t('bookCallTitle')}</h3>
              <div className="aspect-video bg-white rounded-lg shadow-sm overflow-hidden sticky top-20">
                {/* Placeholder Calendly iframe - replace URL with your Calendly link */}
                <iframe src="https://calendly.com/" title="Calendly booking" className="w-full h-full" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
