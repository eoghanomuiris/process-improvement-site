import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    // Basic server-side validation
    const { name, email, message, business } = data
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // For now: log to server console
    console.log('Contact form submitted:', { name, email, business, message })

    // If RESEND_API_KEY is provided, you can use the Resend SDK here to send an email
    if (process.env.RESEND_API_KEY) {
      try {
        // Lazy import to avoid requiring the package during scaffolding
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        const to = process.env.CONTACT_RECEIVER_EMAIL || process.env.RESEND_FROM || ''
        if (to) {
          await resend.emails.send({
            from: process.env.RESEND_FROM || 'no-reply@example.com',
            to,
            subject: `New contact from ${name}`,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Business:</strong> ${business || '—'}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
          })
        }
      } catch (e) {
        console.error('Resend send failed', e)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
