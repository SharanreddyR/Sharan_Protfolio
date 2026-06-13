import { motion } from 'framer-motion'
import { services, whyWorkWithMe } from '../data/content'
import LeafButton from './LeafButton'

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-forest/45">
            What I Offer
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold text-forest">
            Services for <span className="font-bold text-forest">clients</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-forest/75 lg:text-base">
            Hire me for <strong>end-to-end product development</strong> — from mobile apps and LMS modules to{' '}
            <strong>APIs</strong> and <strong>healthcare platforms</strong>. Remote-friendly, based in <strong>Bengaluru</strong>.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="pro-card p-6"
            >
              <h3 className="font-display text-xl font-bold text-forest">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-forest/75">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-leaf-sm border border-moss/30 bg-sage/60 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-forest/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-leaf border border-moss/30 green-wash p-8 lg:p-10"
        >
          <h3 className="font-display text-2xl font-bold text-forest">
            Why work with me?
          </h3>
          <ul className="mt-6 space-y-3">
            {whyWorkWithMe.map((point) => (
              <li key={point} className="flex gap-3 text-sm font-medium leading-relaxed text-forest/75">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <LeafButton href="#contact">Discuss Your Project</LeafButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
