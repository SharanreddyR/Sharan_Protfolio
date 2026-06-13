import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'
import { highlights, profile } from '../data/content'

export default function Highlights() {
  return (
    <section className="green-wash border-y border-moss/25 px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, type: 'spring', stiffness: 120 }}
              whileHover={{ y: -4 }}
              className="pro-card cursor-default p-5 text-center lg:text-left"
            >
              <AnimatedCounter value={item.value} />
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-forest/65">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm font-semibold text-forest/70 lg:text-left"
        >
          <strong>{profile.location}</strong> · <strong>{profile.availability}</strong>
        </motion.p>
      </div>
    </section>
  )
}
