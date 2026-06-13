import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/content'
import LeafButton from './LeafButton'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? 'border-moss/30 bg-white/92 shadow-leaf backdrop-blur-xl'
            : 'border-moss/15 bg-white/75 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6 lg:px-10">
          <motion.a
            href="#hero"
            className="font-display text-xl font-bold tracking-tight text-forest"
            whileHover={{ scale: 1.02 }}
          >
            Sharan <span className="font-bold text-moss">Reddy</span>
          </motion.a>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-forest/65 transition-colors hover:text-forest xl:text-xs xl:tracking-[0.18em]"
                whileHover={{ y: -1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <LeafButton href="#contact" variant="primary" className="!px-5 !py-2.5 !text-xs">
              Get in Touch
            </LeafButton>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-leaf-sm border border-moss/30 px-3 py-2 text-xs font-medium uppercase tracking-widest text-forest lg:hidden"
          >
            Menu
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-[72px] z-40 max-h-[80vh] overflow-y-auto border-b border-moss/20 bg-white/95 px-6 py-8 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display text-2xl text-forest"
                >
                  {link.label}
                </motion.a>
              ))}
              <LeafButton href="#contact" onClick={() => setOpen(false)}>
                Get in Touch
              </LeafButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
