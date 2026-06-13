import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LeafButton from './LeafButton'

export default function TreeBranch({ branch, index }) {
  const [expanded, setExpanded] = useState(false)
  const isLeft = branch.side === 'left'

  return (
    <motion.li
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Mobile + desktop layout wrapper */}
      <div className="grid grid-cols-[28px_1fr] gap-5 lg:grid-cols-[1fr_48px_1fr] lg:gap-0">
        {/* Left column (desktop) */}
        <div className={`hidden lg:block ${isLeft ? '' : 'order-3'}`}>
          {isLeft && (
            <BranchCard
              branch={branch}
              expanded={expanded}
              setExpanded={setExpanded}
              align="right"
            />
          )}
        </div>

        {/* Trunk column */}
        <div className="relative flex flex-col items-center lg:order-2">
          {/* Horizontal branch line — desktop only */}
          <div
            className={`absolute top-8 hidden h-px bg-moss/35 lg:block ${
              isLeft ? 'right-full w-[calc(50%-24px)]' : 'left-full w-[calc(50%-24px)]'
            }`}
            aria-hidden="true"
          />

          {/* Node */}
          <motion.button
            type="button"
            aria-expanded={expanded}
            aria-label={`${branch.title} milestone`}
            onClick={() => setExpanded((v) => !v)}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            className="group relative z-10 mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-moss bg-white shadow-[0_0_0_4px_rgba(244,249,245,0.9)] lg:mt-6 lg:h-5 lg:w-5"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-moss lg:h-2.5 lg:w-2.5"
              animate={{ scale: expanded ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border border-moss/40"
              animate={{ scale: expanded ? 2.2 : 1, opacity: expanded ? 0 : 0.6 }}
              transition={{ duration: 0.45 }}
            />
          </motion.button>

          {/* Trunk segment below node */}
          <div className="mt-1 h-full min-h-[48px] w-px flex-1 bg-gradient-to-b from-moss/50 to-moss/15 lg:min-h-[72px]" />
        </div>

        {/* Right column — mobile content + desktop right branches */}
        <div className={`${isLeft ? 'lg:hidden' : 'lg:block lg:order-3'}`}>
          <BranchCard
            branch={branch}
            expanded={expanded}
            setExpanded={setExpanded}
            align={isLeft ? 'left' : 'left'}
          />
        </div>
      </div>
    </motion.li>
  )
}

function BranchCard({ branch, expanded, setExpanded, align }) {
  return (
    <motion.article
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`pro-card p-6 backdrop-blur-sm lg:p-7 ${
        align === 'right' ? 'lg:mr-8 lg:text-right' : 'lg:ml-8'
      }`}
      animate={{ y: expanded ? -6 : 0, scale: expanded ? 1.01 : 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`flex flex-wrap items-center gap-2 ${align === 'right' ? 'lg:justify-end' : ''}`}>
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-moss">
          {branch.label}
        </p>
        {branch.status && (
          <span
            className={`rounded-leaf-sm px-2 py-0.5 text-[0.58rem] font-medium uppercase tracking-wider ${
              branch.status === 'Live' || branch.status === 'Completed'
                ? 'bg-sage/80 text-forest/70'
                : 'border border-moss/40 bg-white text-forest/55'
            }`}
          >
            {branch.status}
          </span>
        )}
      </div>
      <h3 className="mt-2 font-display text-2xl font-bold leading-snug text-forest lg:text-[1.65rem]">
        {branch.title}
      </h3>
      <p className="mt-3 text-sm font-medium leading-relaxed text-forest/75">{branch.summary}</p>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className={`mt-4 border-t border-moss/20 pt-4 ${align === 'right' ? 'lg:text-right' : ''}`}>
              {branch.detail && (
                <p className="text-sm font-medium leading-relaxed text-forest/70">{branch.detail}</p>
              )}

              {branch.features && (
                <ul
                  className={`mt-3 space-y-2 ${align === 'right' ? 'lg:text-right' : ''}`}
                >
                  {branch.features.map((item) => (
                    <li
                      key={item}
                      className={`flex gap-2 text-sm font-medium leading-relaxed text-forest/70 ${
                        align === 'right' ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {branch.tags && (
                <div className={`mt-4 flex flex-wrap gap-2 ${align === 'right' ? 'lg:justify-end' : ''}`}>
                  {branch.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-leaf-sm border border-moss/30 bg-sage/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-forest/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {branch.metric && (
                <p className="mt-3 font-display text-lg font-bold text-forest">{branch.metric}</p>
              )}

              {branch.link && (
                <div className={`mt-5 ${align === 'right' ? 'lg:flex lg:justify-end' : ''}`}>
                  <LeafButton href={branch.link} variant="outline" external className="!px-5 !py-2.5 !text-xs">
                    {branch.linkLabel}
                  </LeafButton>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className={`mt-4 text-xs font-medium uppercase tracking-[0.16em] text-moss transition-colors hover:text-forest lg:hidden ${
          align === 'right' ? 'block w-full text-right' : ''
        }`}
      >
        {expanded ? 'Collapse' : 'Expand'}
      </button>
    </motion.article>
  )
}
