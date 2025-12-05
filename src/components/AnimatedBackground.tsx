'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated SVG background with process arrows */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="arrowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.05" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
          </filter>
        </defs>

        {/* Animated arrow 1 - top left to middle */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.path
            d="M 100 150 Q 300 200, 500 250 L 480 240 L 495 270 L 520 250"
            stroke="url(#arrowGradient1)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            filter="url(#blur)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.4, duration: 2.5, ease: 'easeInOut' }}
          />
        </motion.g>

        {/* Animated arrow 2 - middle to right */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.path
            d="M 550 280 Q 750 320, 950 380 L 935 365 L 960 395 L 945 375"
            stroke="url(#arrowGradient1)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            filter="url(#blur)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 2.5, ease: 'easeInOut' }}
          />
        </motion.g>

        {/* Animated arrow 3 - right down */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.path
            d="M 980 410 Q 1000 600, 950 800 L 945 780 L 965 810 L 955 785"
            stroke="url(#arrowGradient1)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            filter="url(#blur)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2, duration: 2.5, ease: 'easeInOut' }}
          />
        </motion.g>

        {/* Animated arrow 4 - bottom loop back */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.path
            d="M 920 830 Q 600 900, 250 850 L 275 860 L 240 835 L 260 855"
            stroke="url(#arrowGradient1)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            filter="url(#blur)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2.8, duration: 2.5, ease: 'easeInOut' }}
          />
        </motion.g>

        {/* Animated circles at key points */}
        <motion.circle
          cx="500"
          cy="250"
          r="8"
          fill="#14B8A6"
          opacity="0.2"
          animate={{
            r: [8, 12, 8],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ delay: 0.6, duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="950"
          cy="380"
          r="8"
          fill="#14B8A6"
          opacity="0.2"
          animate={{
            r: [8, 12, 8],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ delay: 1.4, duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="950"
          cy="800"
          r="8"
          fill="#14B8A6"
          opacity="0.2"
          animate={{
            r: [8, 12, 8],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ delay: 2.2, duration: 2, repeat: Infinity }}
        />

        {/* Subtle grid background */}
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="1200" height="1200" fill="url(#grid)" />
      </svg>

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
