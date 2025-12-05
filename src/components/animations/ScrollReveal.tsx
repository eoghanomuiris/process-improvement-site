'use client'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  React.useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
    >
      {children}
    </motion.div>
  )
}
