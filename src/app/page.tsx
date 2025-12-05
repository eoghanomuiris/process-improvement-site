'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import { useLanguage } from '../i18n/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()

  const whyUsCards = [
    { title: t('multinational'), body: t('multinationalDesc') },
    { title: t('deepExpertise'), body: t('deepExpertiseDesc') },
    { title: t('translators'), body: t('translatorsDesc') },
    { title: t('builtForYou'), body: t('builtForYouDesc') }
  ]

  const includeItems = [
    { id: 1, title: t('initialDiscussion'), icon: '💬', desc: t('initialDiscussion') },
    { id: 2, title: t('deepReview'), icon: '🔍', desc: t('deepReview') },
    { id: 3, title: t('clearProcessMaps'), icon: '📋', desc: t('clearProcessMaps') },
    { id: 4, title: t('futureStateDesign'), icon: '✨', desc: t('futureStateDesign') },
    { id: 5, title: t('practicalReport'), icon: '📊', desc: t('practicalReport') },
    { id: 6, title: t('optionalSupport'), icon: '🤝', desc: t('optionalSupport') }
  ]

  return (
    <>
      <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto lg:max-w-7xl">
        <Hero />

        <section className="mt-16 md:mt-20 py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('isThisYouTitle')}</h2>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md border border-gray-200 p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-4">{t('isThisYouText1')}</p>
            <p className="text-lg text-gray-700">{t('isThisYouText2')}</p>
          </div>
        </section>

        <section className="mt-16 md:mt-20 py-8" id="services">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">{t('whatsIncluded')}</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid md:grid-cols-3 gap-4"
          >
            {includeItems.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                }}
                className="bg-white rounded-2xl shadow-md border p-6 transition duration-200 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mt-16 md:mt-20 py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">{t('ourProcess')}</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } }
            }}
            className="grid md:grid-cols-5 gap-4 relative"
          >
            {[
              { num: 1, title: t('understand'), desc: t('understandDesc'), icon: '🔍' },
              { num: 2, title: t('map'), desc: t('mapDesc'), icon: '🗺️' },
              { num: 3, title: t('review'), desc: t('reviewDesc'), icon: '✓' },
              { num: 4, title: t('design'), desc: t('designDesc'), icon: '✏️' },
              { num: 5, title: t('report'), desc: t('reportDesc'), icon: '📊' }
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                }}
                className="relative"
              >
                {/* Connecting arrow to next card (desktop only) */}
                {idx < 4 && (
                  <div className="hidden md:block absolute -right-2 top-20 w-4 h-0.5 bg-accent" />
                )}

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-md border p-6 transition duration-200 hover:-translate-y-1.5 hover:shadow-2xl h-full flex flex-col">
                  {/* Icon circle with number badge */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-3xl mb-2">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                      {step.num}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-gray-900 text-base">{step.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 flex-grow">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mt-16 md:mt-20 py-8 border-t border-gray-200" id="about">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">{t('aboutUs')}</h2>
          
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md border border-gray-200 p-8 md:p-12 mb-12 transition duration-200 hover:-translate-y-1.5 hover:shadow-2xl">
            <p className="text-lg text-gray-700 mb-4">{t('aboutIntro1')}</p>
            <p className="text-lg text-gray-700">{t('aboutIntro2')}</p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">{t('whyUs')}</h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7, margin: '-10% 0px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="grid gap-4 md:grid-cols-2"
            >
              {whyUsCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={{
                    hidden: { opacity: 0, x: 80 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } }
                  }}
                  whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl shadow-md border p-5"
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h4>
                  <p className="text-gray-700">{card.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">{t('ourApproach')}</h3>
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

        <section className="mt-16 md:mt-20 py-8 border-t border-gray-200" id="contact">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('contactTitle')}</h2>
          <p className="text-xl text-gray-600 mb-12">{t('contactSubtitle')}</p>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 transition duration-200 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('sendMessage')}</h3>
              <ContactForm />
            </motion.div>

            <motion.div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 transition duration-200 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('bookCallTitle')}</h3>
              <div className="aspect-video rounded-xl overflow-hidden">
                {/* Placeholder Calendly iframe - replace URL with your Calendly link */}
                <iframe src="https://calendly.com/" title="Calendly booking" className="w-full h-full" />
              </div>
            </motion.div>
          </div>
        </section>
      </section>
    </>
  )
}
