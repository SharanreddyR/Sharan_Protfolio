import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs, process, profile } from '../data/content'
import LeafButton from './LeafButton'

export default function ClientGuide() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <section className="px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center lg:text-left"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-forest/45">
              How We Work
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-forest">
              Simple process, <span className="font-bold text-forest">clear outcomes</span>
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-leaf border border-moss/30 green-wash p-6"
              >
                <span className="font-display text-3xl font-bold text-moss/80">{item.step}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest/70">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {profile.engagement.map((item) => (
              <span
                key={item}
                className="rounded-leaf-sm border border-moss/30 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-forest/70"
              >
                ✓ {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="faq" className="green-wash border-y border-moss/25 px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-forest/45">
              Client FAQ
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold text-forest">
              Questions clients <span className="font-bold text-forest">often ask</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="overflow-hidden rounded-leaf border border-moss/30 bg-white/90"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-bold text-forest">{faq.q}</span>
                  <span className="shrink-0 text-lg font-bold text-moss">{openFaq === i ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-moss/15 px-6 pb-5 pt-4 text-sm leading-relaxed text-forest/75">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <LeafButton href="#contact">Still have questions? Contact me</LeafButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}
