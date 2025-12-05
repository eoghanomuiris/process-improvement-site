'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

      {/* Background image with icons - will be added when image is ready */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/background-process.png"
          alt="Process improvement background"
          fill
          className="object-cover"
          quality={75}
          priority
        />
      </div>

      {/* Overlay to control visibility and add depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/30 to-white/50" />

      {/* Floating orb accent (top right) */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-blue-200/5 rounded-full blur-3xl"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating orb accent (bottom left) */}
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-tr from-blue-100/10 to-accent/5 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
