import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gradient-to-b from-transparent to-gray-50/50">
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-2">VOLPRA</h3>
            <p className="text-gray-600 text-sm font-medium mb-1">Smarter Systems. Human Flow.</p>
            <p className="text-gray-600 text-sm">Helping businesses simplify, scale, and grow through intelligent process improvement.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-600 hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://linkedin.com" className="text-gray-600 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com" className="text-gray-600 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="mailto:hello@volpra.com" className="text-gray-600 hover:text-accent transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>© {new Date().getFullYear()} Volpra Consulting. All Rights Reserved.</div>
          <div className="mt-4 sm:mt-0 flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
