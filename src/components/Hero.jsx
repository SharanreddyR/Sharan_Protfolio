import { motion } from 'framer-motion'
import LeafButton from './LeafButton'
import HeroDecor from './HeroDecor'
import TypewriterHeadline from './TypewriterHeadline'
import { profile } from '../data/content'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="hero" className="section-hero relative overflow-hidden">
      <HeroDecor />
      <div className="hero-mesh" aria-hidden="true" />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-8 flex flex-wrap items-center gap-3">
          <span className="eyebrow">{profile.name}</span>
          <motion.span
            animate={{
              boxShadow: [
                '0 0 0 rgba(143,188,143,0)',
                '0 0 24px rgba(143,188,143,0.4)',
                '0 0 0 rgba(143,188,143,0)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="badge-live"
          >
            {profile.availability}
          </motion.span>
        </motion.div>

        <motion.div variants={item}>
          <TypewriterHeadline className="font-display text-balance text-[clamp(2.2rem,6vw,4.35rem)] font-bold leading-[1.06] tracking-tight text-forest" />
        </motion.div>

        <motion.p variants={item} className="mt-8 max-w-2xl text-base leading-[1.85] text-forest/75 lg:text-lg">
          <strong>Health-tech</strong> apps at <strong>Luniq Health</strong> · School <strong>LMS</strong> at{' '}
          <strong>Entrar</strong> · <strong>React Native</strong>, <strong>Laravel</strong>, <strong>PHP</strong> &{' '}
          <strong>REST APIs</strong> — production systems clients can trust.
        </motion.p>

        <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
          {profile.domains.map((domain) => (
            <motion.span key={domain} whileHover={{ scale: 1.05, y: -2 }} className="tag-pill">
              {domain}
            </motion.span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
      
          <LeafButton icon="download" href={profile.resumeUrl} download={profile.resumeFileName} variant="outline">
            Download Resume
          </LeafButton>
          <LeafButton icon="services" href="#services" variant="ghost">
            View Services
          </LeafButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
