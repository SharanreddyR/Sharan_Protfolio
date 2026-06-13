import { motion } from 'framer-motion'
import LeafButton from './LeafButton'
import HeroDecor from './HeroDecor'
import TypewriterHeadline from './TypewriterHeadline'
import { profile } from '../data/content'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pb-20 pt-[calc(72px+4rem)] lg:px-10 lg:pb-28 lg:pt-[calc(72px+6rem)]"
    >
      <HeroDecor />
      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-8 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-forest/45">
            {profile.name}
          </span>
          <motion.span
            animate={{ boxShadow: ['0 0 0 rgba(143,188,143,0)', '0 0 20px rgba(143,188,143,0.35)', '0 0 0 rgba(143,188,143,0)'] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="rounded-leaf-sm border border-moss/40 bg-sage/60 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-forest/75"
          >
            {profile.availability}
          </motion.span>
        </motion.div>

        <motion.div variants={item}>
          <TypewriterHeadline className="font-display max-w-3xl text-balance text-[clamp(2.5rem,7vw,4.75rem)] font-semibold leading-[1.05] tracking-tight text-forest" />
        </motion.div>

        <motion.p variants={item} className="mt-8 max-w-2xl text-base leading-relaxed text-forest/75 lg:text-lg">
          <strong>Health-tech</strong> apps at <strong>Luniq Health</strong> · School <strong>LMS</strong> at{' '}
          <strong>Entrar</strong> · <strong>React Native</strong>, <strong>Laravel</strong>, <strong>PHP</strong> &{' '}
          <strong>REST APIs</strong> — mobile, web, and backend systems clients can trust.
        </motion.p>

        <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
          {profile.domains.map((domain, i) => (
            <motion.span
              key={domain}
              whileHover={{ scale: 1.06, y: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="rounded-leaf-sm border border-moss/30 bg-sage/50 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-forest/70"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {domain}
            </motion.span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <LeafButton href="#services">View Services</LeafButton>
          <LeafButton href="#play" variant="outline">
            Try Mini Game
          </LeafButton>
          <LeafButton href="#contact" variant="outline">
            Contact Me
          </LeafButton>
        </motion.div>

        <motion.div
          variants={item}
          className="mx-auto mt-20 hidden h-16 w-px origin-top bg-gradient-to-b from-moss/60 to-moss/20 lg:block"
          aria-hidden="true"
        />
      </motion.div>
    </section>
  )
}
