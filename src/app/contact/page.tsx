import React from 'react'
import ContactForm from '../../components/ContactForm'

export const metadata = {
  title: 'Contact | Process Improvement Consulting',
  description: 'Send a message or book a call with the process improvement consultant.',
}

export default function ContactPage() {
  return (
    <section className="px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-700">Send a quick message or book a call using the calendar embed below.</p>

      <div className="mt-6">
        <ContactForm />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Book a call</h2>
        <div className="aspect-video bg-white rounded-lg shadow-sm">
          {/* Placeholder Calendly iframe */}
          <iframe src="https://calendly.com/" title="Calendly" className="w-full h-full rounded-lg" />
        </div>
      </div>
    </section>
  )
}
