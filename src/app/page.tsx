import React from 'react'
import Hero from '../components/Hero'

export const metadata = {
  title: 'Process Improvement Consulting | Home',
  description: 'Sell your process improvement service. Book a free process audit.',
}

export default function HomePage() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <Hero />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Is this you?</h2>
        <p className="text-gray-700">You’re a solo founder or small team, things feel chaotic, repeatable work keeps getting in the way of growth. You want clarity and simplicity.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Services</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-sm">Process auditing — identify quick wins</div>
          <div className="p-6 bg-white rounded-lg shadow-sm">Automation & tooling recommendations</div>
          <div className="p-6 bg-white rounded-lg shadow-sm">SOPs & training materials</div>
          <div className="p-6 bg-white rounded-lg shadow-sm">Retainer process coaching</div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">How it works</h2>
        <ol className="space-y-4">
          <li className="p-4 bg-white rounded-lg shadow-sm">1. Book a free process audit</li>
          <li className="p-4 bg-white rounded-lg shadow-sm">2. We map the process & find friction</li>
          <li className="p-4 bg-white rounded-lg shadow-sm">3. Quick wins + roadmap</li>
        </ol>
      </section>

      <section className="mt-12 border-t pt-8">
        <h3 className="text-xl font-semibold">Ready to get clarity?</h3>
        <p className="mt-2">Book a free audit or send a quick message via the contact form.</p>
        <div className="mt-4">
          <a href="/contact" className="inline-block px-5 py-3 rounded-md bg-accent text-white">Book a free process audit</a>
        </div>
      </section>
    </section>
  )
}
