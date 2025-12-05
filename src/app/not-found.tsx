import React from 'react'

export default function NotFound() {
  return (
    <section className="px-6 py-24 text-center max-w-6xl mx-auto lg:max-w-7xl">
      <h1 className="text-4xl font-bold mb-4">404 — Page not found</h1>
      <p className="mb-6">Looks like that page doesn't exist. Try going back home.</p>
      <a href="/" className="inline-block px-4 py-2 bg-accent text-white rounded-md hover:opacity-90 transition">Go Home</a>
    </section>
  )
}
