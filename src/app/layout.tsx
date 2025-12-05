import '../styles/globals.css'
import React from 'react'
import Script from 'next/script'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export const metadata = {
  title: 'Process Improvement Consulting',
  description: 'Small business process improvement — Book a free audit.',
  icons: { icon: '/favicon.ico' }
}

export const viewport = 'width=device-width, initial-scale=1'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.GA_MEASUREMENT_ID
  return (
    <html lang="en">
      <head>
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        )}
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
