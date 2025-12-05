import React from 'react'

export const metadata = {
  title: 'About | Process Improvement Consulting',
  description: 'Learn about the process improvement consultant, their approach, and values.',
}

export default function AboutPage() {
  return (
    <section className="px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <p className="text-gray-700 mb-4">We help solo founders and small business owners build scalable, simple processes so you can focus on what makes your business unique.</p>
        <p className="text-gray-700">Too many businesses get trapped in chaos: repeatable work buries your team, nothing feels documented, and growth feels impossible. We solve this by giving you <strong>clear process maps, practical improvements, and the confidence to implement them</strong>.</p>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-6">Why Us</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Multinational & Corporate Experience</h3>
            <p className="text-gray-700">We've worked in complex, multi-country environments. We know how to build robust processes at scale.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Deep Process Optimization Expertise</h3>
            <p className="text-gray-700">Supply chain, project management, operations—we've optimized processes across industries and understand what actually works.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Translators, Not Theorists</h3>
            <p className="text-gray-700">Deep understanding of how to translate corporate-level structure into simple, affordable systems for small businesses. We don't over-engineer.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Built for Your Reality</h3>
            <p className="text-gray-700">We respect your brand, your budget, and your team size. No unnecessary complexity. Just clarity and simple insights you can implement yourself.</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-6">Our Approach</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-accent mr-3 font-semibold">→</span>
            <span><strong>Simple, actionable insights</strong> — no jargon, no unnecessary complexity</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-3 font-semibold">→</span>
            <span><strong>Respect for your brand</strong> — we don't impose our way, we find yours and optimize it</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-3 font-semibold">→</span>
            <span><strong>Built for small businesses</strong> — practical, affordable, and built for your team to implement</span>
          </li>
          <li className="flex items-start">
            <span className="text-accent mr-3 font-semibold">→</span>
            <span><strong>Commitment to your success</strong> — we help you reclaim time, reduce stress, and build businesses that scale without burning out</span>
          </li>
        </ul>
      </section>
    </section>
  )
}
