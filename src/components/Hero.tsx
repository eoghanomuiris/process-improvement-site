'use client'
import React from 'react'
import TypeWriter from './animations/TypeWriter'

export default function Hero() {
  return (
    <header className="py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold">
          <TypeWriter text="Process clarity for solo founders" speed={50} delay={200} />
        </h1>
        <p className="mt-4 text-gray-700">Simple, practical process improvements that free up your time and remove friction.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="/contact" className="px-5 py-3 rounded-md bg-accent text-white">Book a free process audit</a>
          <a href="/about" className="px-5 py-3 rounded-md border">Learn more</a>
        </div>
      </div>
    </header>
  )
}
