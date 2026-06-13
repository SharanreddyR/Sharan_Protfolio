import { useEffect, useState } from 'react'

const BOLD_PHRASE = 'ship to production.'

export default function TypewriterHeadline({ className = '' }) {
  const fullText = `Full Stack Developer building products that ${BOLD_PHRASE}`
  const boldStart = fullText.indexOf(BOLD_PHRASE)

  const [text, setText] = useState('')

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setText(fullText)
      return undefined
    }

    let index = 0
    const timer = setInterval(() => {
      index += 1
      setText(fullText.slice(0, index))
      if (index >= fullText.length) clearInterval(timer)
    }, 42)

    return () => clearInterval(timer)
  }, [fullText])

  const beforeBold = text.slice(0, Math.min(text.length, boldStart))
  const boldPart = text.length > boldStart ? text.slice(boldStart) : ''

  return (
    <h1 className={className} aria-label={fullText}>
      <span className="sr-only">{fullText}</span>
      <span aria-hidden="true">
        {beforeBold}
        {boldPart ? <span className="font-bold">{boldPart}</span> : null}
        <span
          className="typewriter-cursor typewriter-cursor-blink ml-0.5 inline-block w-[3px] translate-y-[0.08em] bg-forest align-baseline"
          aria-hidden="true"
        />
      </span>
    </h1>
  )
}
