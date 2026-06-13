import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import LeafButton from './LeafButton'

const GAME_SECONDS = 30

function randomX() {
  return 8 + Math.random() * 84
}

export default function LeafCatchGame() {
  const [playing, setPlaying] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS)
  const [leaves, setLeaves] = useState([])
  const [best, setBest] = useState(() => {
    try {
      return Number(localStorage.getItem('leaf-best') || 0)
    } catch {
      return 0
    }
  })
  const idRef = useRef(0)

  const endGame = useCallback(() => {
    setPlaying(false)
    setLeaves([])
    setScore((s) => {
      if (s > best) {
        setBest(s)
        try {
          localStorage.setItem('leaf-best', String(s))
        } catch {
          /* ignore */
        }
      }
      return s
    })
  }, [best])

  useEffect(() => {
    if (!playing) return undefined

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          endGame()
          return GAME_SECONDS
        }
        return t - 1
      })
    }, 1000)

    const spawner = setInterval(() => {
      const id = idRef.current++
      const duration = 2.8 + Math.random() * 1.4
      setLeaves((prev) => [...prev.slice(-14), { id, x: randomX(), duration }])
    }, 700)

    return () => {
      clearInterval(timer)
      clearInterval(spawner)
    }
  }, [playing, endGame])

  const startGame = () => {
    setScore(0)
    setTimeLeft(GAME_SECONDS)
    setLeaves([])
    setPlaying(true)
  }

  const catchLeaf = (id) => {
    setLeaves((prev) => prev.filter((l) => l.id !== id))
    setScore((s) => s + 1)
  }

  const message =
    score >= 25 ? 'Evergreen master! 🌳' : score >= 15 ? 'Great reflexes!' : score >= 8 ? 'Nice catch!' : 'Try again!'

  return (
    <section id="play" className="px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-forest/45">
            Interactive · Evergreen
          </span>
          <h2 className="section-title mt-4">
            Catch the <span className="font-bold text-forest">leaf</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-forest/70">
            A quick 30-second game — tap falling leaves to score. A fun break that shows attention to detail
            in UX.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="pro-card overflow-hidden p-1"
        >
          <div className="rounded-leaf bg-gradient-to-b from-sage/60 to-white p-6 lg:p-8">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-6">
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-widest text-forest/45">Score</p>
                  <p className="font-display text-2xl font-bold text-forest">{score}</p>
                </div>
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-widest text-forest/45">Time</p>
                  <p className="font-display text-2xl font-bold text-forest">{playing ? timeLeft : GAME_SECONDS}s</p>
                </div>
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-widest text-forest/45">Best</p>
                  <p className="font-display text-2xl font-bold text-moss">{best}</p>
                </div>
              </div>
              {!playing ? (
                <LeafButton type="button" onClick={startGame}>
                  {score > 0 && timeLeft === GAME_SECONDS ? 'Play Again' : 'Start Game'}
                </LeafButton>
              ) : (
                <span className="rounded-leaf-sm border border-moss/40 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-forest animate-pulse">
                  Playing…
                </span>
              )}
            </div>

            <div
              className="relative h-56 overflow-hidden rounded-leaf border-2 border-dashed border-moss/35 bg-white/80 sm:h-72"
              role="application"
              aria-label="Leaf catch game area"
            >
              {!playing && score === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-forest/40">
                  Press Start — then tap the falling leaves 🍃
                </div>
              )}
              {!playing && score > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/90"
                >
                  <p className="font-display text-2xl font-bold text-forest">{message}</p>
                  <p className="text-sm text-forest/60">Final score: {score}</p>
                </motion.div>
              )}
              {leaves.map((leaf) => (
                <button
                  key={leaf.id}
                  type="button"
                  aria-label="Catch leaf"
                  onClick={() => catchLeaf(leaf.id)}
                  className="leaf-falling absolute top-0 cursor-pointer text-2xl transition-transform hover:scale-125 active:scale-90 sm:text-3xl"
                  style={{
                    left: `${leaf.x}%`,
                    animationDuration: `${leaf.duration}s`,
                  }}
                >
                  🍃
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
