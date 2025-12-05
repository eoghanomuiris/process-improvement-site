import React from 'react'
import Hero from '../components/Hero'

export const metadata = {
  title: 'Process Improvement Consulting',
  description: 'Build scalable, simple processes for your small business. Book a free consultation with our process improvement experts.',
}

export default function HomePage() {
  return (
    <>
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <Hero />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Is this you?</h2>
          <p className="text-gray-700 mb-2">You're a solo founder or small business owner. You know your process should be cleaner, faster, more scalable—but you don't have time to figure it out yourself.</p>
          <p className="text-gray-700">You want clarity and simple, actionable insights that respect your brand and actually work for a small team.</p>
        </section>

        <section className="mt-10" id="services">
          <h2 className="text-2xl font-semibold mb-6">What's Included</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">✓</span>
                <span><strong>Initial discussion</strong> — understand your business, goals, and pain points</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">✓</span>
                <span><strong>Deep review</strong> — we observe and map your selected processes in detail</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">✓</span>
                <span><strong>Clear process maps</strong> — visual, step-by-step documentation of how things work today</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">✓</span>
                <span><strong>Future-state design</strong> — a cleaner, faster, more scalable version of your processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">✓</span>
                <span><strong>Practical report</strong> — actionable next steps you can implement immediately</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-semibold">✓</span>
                <span><strong>Optional ongoing support</strong> — help implementing changes and fine-tuning as you grow</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="font-semibold text-gray-900">1. Understand</h3>
              <p className="text-gray-600 text-sm mt-1">We learn your business, priorities, and the specific processes causing friction.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="font-semibold text-gray-900">2. Map</h3>
              <p className="text-gray-600 text-sm mt-1">Clear documentation of how things work today—every step, every decision point, every bottleneck.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="font-semibold text-gray-900">3. Review</h3>
              <p className="text-gray-600 text-sm mt-1">We identify friction, inefficiencies, and opportunities for improvement with fresh eyes.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="font-semibold text-gray-900">4. Design</h3>
              <p className="text-gray-600 text-sm mt-1">A cleaner, faster, more scalable future version of your process—built for your team's reality.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-accent">
              <h3 className="font-semibold text-gray-900">5. Report</h3>
              <p className="text-gray-600 text-sm mt-1">A practical roadmap with clear next steps you can start implementing right away.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 border-t pt-8" id="about">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <p className="text-gray-700 mb-4">We help solo founders and small business owners build scalable, simple processes so you can focus on what makes your business unique.</p>
            <p className="text-gray-700">Too many businesses get trapped in chaos: repeatable work buries your team, nothing feels documented, and growth feels impossible. We solve this by giving you <strong>clear process maps, practical improvements, and the confidence to implement them</strong>.</p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-6">Why Us</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Multinational & Corporate Experience</h4>
                <p className="text-gray-700">We've worked in complex, multi-country environments. We know how to build robust processes at scale.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Deep Process Optimization Expertise</h4>
                <p className="text-gray-700">Supply chain, project management, operations—we've optimized processes across industries and understand what actually works.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Translators, Not Theorists</h4>
                <p className="text-gray-700">Deep understanding of how to translate corporate-level structure into simple, affordable systems for small businesses. We don't over-engineer.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Built for Your Reality</h4>
                <p className="text-gray-700">We respect your brand, your budget, and your team size. No unnecessary complexity. Just clarity and simple insights you can implement yourself.</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-6">Our Approach</h3>
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
          </div>
        </section>

        <section className="mt-12 border-t pt-8" id="contact">
          <h3 className="text-xl font-semibold">Ready to reclaim your time?</h3>
          <p className="mt-2 text-gray-700">Let's talk about your processes and explore how you can build a business that scales without burning you out.</p>
          <div className="mt-6 flex gap-4 flex-wrap">
            <a href="/contact" className="inline-block px-6 py-3 rounded-md bg-accent text-white font-medium hover:opacity-90 transition">Book a free consultation</a>
          </div>
        </section>
      </section>
    </>
  )
}
