import React from 'react'
import ContactForm from '../../components/ContactForm'

export const metadata = {
  title: 'Contact | Process Improvement Consulting',
  description: 'Get in touch or book a call with our process improvement consultants.',
}

export default function ContactPage() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto lg:max-w-7xl">
      <h1 className="text-3xl font-bold mb-6">Let's talk about your processes</h1>
      <p className="text-gray-700 mb-8">Send a quick message or book a call using the form and calendar below.</p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
        <ContactForm />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Book a call</h2>
        <div className="aspect-video bg-white rounded-lg shadow-sm">
          {/* Placeholder Calendly iframe - replace URL with your Calendly link */}
          <iframe src="https://calendly.com/" title="Calendly booking" className="w-full h-full rounded-lg" />
        </div>
      </div>
    </section>
  )
}
