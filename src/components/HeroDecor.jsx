import { motion } from 'framer-motion'

const leaves = [
  { x: '8%', y: '18%', delay: 0, size: 'text-2xl' },
  { x: '85%', y: '12%', delay: 0.5, size: 'text-xl' },
  { x: '72%', y: '55%', delay: 1, size: 'text-3xl' },
  { x: '15%', y: '62%', delay: 1.5, size: 'text-lg' },
  { x: '92%', y: '38%', delay: 0.8, size: 'text-2xl' },
]

export default function HeroDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {leaves.map((leaf, i) => (
        <motion.span
          key={i}
          className={`absolute float-leaf select-none opacity-20 ${leaf.size}`}
          style={{ left: leaf.x, top: leaf.y }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: leaf.delay + 0.5, duration: 0.8 }}
        >
          🍃
        </motion.span>
      ))}
      <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-moss/10 blur-3xl pulse-ring" />
      <div className="absolute -left-16 bottom-10 h-48 w-48 rounded-full bg-sage/40 blur-3xl" />
    </div>
  )
}
