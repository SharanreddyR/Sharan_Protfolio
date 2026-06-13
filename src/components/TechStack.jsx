import { motion } from 'framer-motion'
import { techStack } from '../data/content'

export default function TechStack() {
  return (
    <section id="stack" className="green-wash border-y border-moss/25 px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-forest/45">
            Tech Stack
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-forest">
            Tools I <span className="font-bold text-forest">work with</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-forest/75">
            A practical stack shaped by real projects — so clients know exactly what I can deliver.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="pro-card p-6"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-moss">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-leaf-sm border border-moss/25 bg-sage/50 px-3 py-1.5 text-xs font-semibold text-forest/75"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
