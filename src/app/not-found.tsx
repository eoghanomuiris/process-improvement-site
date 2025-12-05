import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="px-6 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">404 — Page not found</h1>
      <p className="mb-6">Looks like that page doesn't exist. Try going back home.</p>
      <Link href="/" className="px-4 py-2 bg-accent text-white rounded-md">Go Home</Link>
    </section>
  )
}
