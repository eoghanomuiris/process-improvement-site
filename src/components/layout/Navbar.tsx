'use client'
import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMenuItemClick = () => setOpen(false)

  return (
    <header className={`sticky top-0 z-40 transition-shadow ${scrolled ? 'backdrop-blur bg-white/60 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#" className="text-lg font-bold hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded px-2 py-1">
            YourName
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <a href="#about" className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1">
            About
          </a>
          <a href="#services" className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1">
            Services
          </a>
          <a href="#contact" className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1">
            Contact
          </a>
          <a href="#contact" className="px-3 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
            Book a call
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            className="p-2 hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-white/95 border-t" aria-label="Mobile navigation">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#about" onClick={handleMenuItemClick} className="hover:text-accent transition-colors">About</a>
            <a href="#services" onClick={handleMenuItemClick} className="hover:text-accent transition-colors">Services</a>
            <a href="#contact" onClick={handleMenuItemClick} className="hover:text-accent transition-colors">Contact</a>
          </div>
        </nav>
      )}
    </header>
  )
}
