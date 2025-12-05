# Process Improvement Consulting — Starter

This is a starter Next.js (App Router) project scaffolded for a small consulting website.

Features included (scaffold):
- Next.js 14 (App Router) with TypeScript
- Tailwind CSS
- Framer Motion for animations
- React Hook Form + Zod for form validation (used in Contact)
- Serverless API route stub for contact form (/api/contact)
- Calendly embed support on the Contact page
- Placeholder styling and components (Navbar, Footer, Hero, ContactForm)

Local development

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

Environment

- Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` and `GA_MEASUREMENT_ID` if you want email sending and GA.

Deployment

- Vercel is recommended (free tier) and integrates seamlessly with Next.js and GitHub for CI/CD.

Next steps

- Replace placeholder copy, logo, and colors in `tailwind.config.js`.
- Add your Resend API key to send form-submission emails.
- Configure Google Analytics ID in `.env.local`.
