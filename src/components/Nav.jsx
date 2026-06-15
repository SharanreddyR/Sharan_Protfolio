import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, profile } from '../data/content'
import LeafButton from './LeafButton'
import Logo from './Logo'

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
        initial={{ y: -12, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? 'border-moss/30 bg-white/94 shadow-[0_8px_32px_rgba(26,58,43,0.08)] backdrop-blur-xl'
            : 'border-moss/15 bg-white/78 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex h-[84px] max-w-6xl items-center justify-between gap-4 px-6 lg:px-10">
          <Logo size="md" showWordmark priority />

          <nav className="hidden items-center gap-4 xl:flex xl:gap-7">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative text-[0.65rem] font-bold uppercase tracking-[0.16em] text-forest/60 transition-colors hover:text-forest"
                whileHover={{ y: -1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <LeafButton
              icon="download"
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              variant="outline"
              className="!px-4 !py-2.5 !text-xs"
            >
              Resume
            </LeafButton>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-leaf-sm border border-moss/30 bg-white/80 px-3 py-2 text-xs font-bold uppercase tracking-widest text-forest xl:hidden"
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
            className="fixed inset-x-0 top-[84px] z-40 max-h-[80vh] overflow-y-auto border-b border-moss/20 bg-white/96 px-6 py-8 backdrop-blur-xl xl:hidden"
          >
            <div className="flex flex-col gap-5">
              <Logo size="md" showWordmark href="#hero" />
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="font-display text-2xl font-bold text-forest"
                >
                  {link.label}
                </motion.a>
              ))}
              <LeafButton icon="download" href={profile.resumeUrl} download={profile.resumeFileName} variant="outline">
                Download Resume
              </LeafButton>
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
