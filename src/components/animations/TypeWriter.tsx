'use client'
import React, { useState, useEffect } from 'react'

interface TypeWriterProps {
  text: string
  speed?: number
  delay?: number
}

export default function TypeWriter({ text, speed = 80, delay = 0 }: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!text) return

    let timeoutId: NodeJS.Timeout
    let charIndex = 0

    const typeCharacter = () => {
      if (charIndex < text.length) {
        setDisplayedText(text.slice(0, charIndex + 1))
        charIndex++
        timeoutId = setTimeout(typeCharacter, speed)
      } else {
        setIsComplete(true)
      }
    }

    // Start typing after delay
    const startTimeout = setTimeout(typeCharacter, delay)

    return () => {
      clearTimeout(startTimeout)
      clearTimeout(timeoutId)
    }
  }, [text, speed, delay])

  return (
    <span>
      {displayedText}
      <span className="ml-1 inline-block w-[2px] h-[1.2em] bg-black align-middle blink-caret" aria-hidden />
    </span>
  )
}
