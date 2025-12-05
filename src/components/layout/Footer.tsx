import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
        <div>© {new Date().getFullYear()} YourName</div>
        <div className="mt-3 sm:mt-0">Email: <a href="mailto:hello@example.com" className="underline">hello@example.com</a></div>
      </div>
    </footer>
  )
}
