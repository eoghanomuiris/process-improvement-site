'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  business: z.string().optional(),
  email: z.string().email('Invalid email'),
  message: z.string().min(1, 'Message is required')
})

type ContactFormValues = z.infer<typeof ContactSchema>

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({ resolver: zodResolver(ContactSchema) })

  async function onSubmit(values: ContactFormValues) {
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input {...register('name')} className="mt-1 w-full rounded-md border px-3 py-2" />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Business name (optional)</label>
        <input {...register('business')} className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input {...register('email')} className="mt-1 w-full rounded-md border px-3 py-2" />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">What feels most chaotic right now?</label>
        <textarea {...register('message')} rows={5} className="mt-1 w-full rounded-md border px-3 py-2" />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <div>
        <button type="submit" className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-md">
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
      </div>

      {status === 'success' && <div className="p-3 mt-2 bg-green-50 text-green-800 rounded">Thanks — I’ll get back to you within 2-3 working days.</div>}
      {status === 'error' && <div className="p-3 mt-2 bg-red-50 text-red-800 rounded">Something went wrong. Please try again later.</div>}
    </form>
  )
}
