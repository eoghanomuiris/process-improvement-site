import React from 'react'

export const metadata = {
  title: 'About | Process Improvement Consulting',
  description: 'Learn about the process improvement consultant, their approach, and values.',
}

export default function AboutPage() {
  return (
    <section className="px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-gray-700">Placeholder: A short story about your background, how you work, and your values: clarity, practicality, no-nonsense.</p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">How I work</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Start with a short audit</li>
          <li>Show practical, prioritized recommendations</li>
          <li>Help you implement the highest-impact changes</li>
        </ul>
      </section>
    </section>
  )
}
