'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  business: z.string().optional(),
  email: z.string().email('Invalid email'),
  message: z.string().min(1, 'Message is required')
})

type ContactFormValues = z.infer<typeof ContactSchema>

export default function ContactForm() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({ resolver: zodResolver(ContactSchema) })

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
        reset()
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
      }
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg shadow-sm" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium">{t('name')}</label>
        <input
          {...register('name')}
          id="name"
          className={`mt-1 w-full rounded-md border px-3 py-2 transition-colors ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              id="name-error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-red-600 text-sm mt-1"
            >
              {errors.name.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label htmlFor="business" className="block text-sm font-medium">{t('business')}</label>
        <input
          {...register('business')}
          id="business"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">{t('email')}</label>
        <input
          {...register('email')}
          id="email"
          type="email"
          className={`mt-1 w-full rounded-md border px-3 py-2 transition-colors ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              id="email-error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-red-600 text-sm mt-1"
            >
              {errors.email.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">{t('message')}</label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className={`mt-1 w-full rounded-md border px-3 py-2 transition-colors ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              id="message-error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-red-600 text-sm mt-1"
            >
              {errors.message.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          {status === 'sending' ? t('sending') : 'Send message'}
        </button>
      </div>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="p-3 bg-green-50 text-green-800 rounded border border-green-200"
            role="status"
            aria-live="polite"
          >
            ✓ Thanks — I'll get back to you within 2-3 working days.
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="p-3 bg-red-50 text-red-800 rounded border border-red-200"
            role="alert"
          >
            Something went wrong. Please try again later.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
