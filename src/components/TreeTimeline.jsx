import { motion } from 'framer-motion'
import { branches } from '../data/content'
import TreeBranch from './TreeBranch'

export default function TreeTimeline() {
  return (
    <section id="tree" className="relative px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center lg:mb-20"
        >
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-forest/45">
            Evergreen Architecture
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-forest">
            The journey, <span className="font-bold text-forest">branch by branch</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-forest/75">
            <strong>Philosophy</strong>, <strong>projects</strong>, <strong>experience</strong>,{' '}
            <strong>education</strong>, and <strong>certifications</strong> — hover or tap each node to explore.
          </p>
        </motion.div>

        {/* Continuous trunk — desktop center */}
        <div className="relative">
          <div
            className="pointer-events-none absolute bottom-0 left-[13px] top-0 w-px bg-gradient-to-b from-moss/40 via-moss/30 to-moss/10 lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="relative space-y-10 lg:space-y-6">
            {branches.map((branch, i) => (
              <TreeBranch key={branch.id} branch={branch} index={i} />
            ))}
          </ol>

          {/* Canopy end node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mt-4 flex justify-start pl-[6px] lg:justify-center lg:pl-0"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-moss/40 bg-sage/60">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A3A2B" strokeWidth="1.5">
                <path d="M12 22V12M12 12C12 12 8 8 5 8C5 8 5 14 12 16C19 14 19 8 19 8C16 8 12 12 12 12Z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
