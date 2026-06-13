import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!isInView) return
    if (value === '∞') {
      setDisplay('∞')
      return
    }

    const match = value.match(/^(\d+)(\+)?$/)
    if (!match) {
      setDisplay(value)
      return
    }

    const target = parseInt(match[1], 10)
    const plus = match[2] || ''
    let current = 0
    const step = Math.max(1, Math.floor(target / 20))
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setDisplay(`${target}${plus}`)
        clearInterval(timer)
      } else {
        setDisplay(`${current}${plus}`)
      }
    }, 40)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-forest lg:text-4xl">
      {display}
      {suffix}
    </span>
  )
}
