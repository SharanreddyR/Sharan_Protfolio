import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ButtonIcon } from './Icons'
import { contactLinks, profile } from '../data/content'

const actions = [
  { id: 'email', href: contactLinks.mailto, label: 'Email', icon: 'mail' },
  { id: 'phone', href: contactLinks.tel, label: 'Call', icon: 'phone' },
  { id: 'whatsapp', href: profile.whatsapp, label: 'WhatsApp', icon: 'whatsapp', external: true },
]

function DockAction({ action }) {
  return (
    <a
      href={action.href}
      target={action.external ? '_blank' : undefined}
      rel={action.external ? 'noopener noreferrer' : undefined}
      aria-label={action.label}
      className={`quick-action-dock-btn ${action.id === 'whatsapp' ? 'is-primary' : ''}`}
    >
      <ButtonIcon name={action.icon} className="h-5 w-5 shrink-0" />
      <span className="quick-action-dock-label">{action.label}</span>
    </a>
  )
}

function FloatAction({ action, primary = false }) {
  return (
    <a
      href={action.href}
      target={action.external ? '_blank' : undefined}
      rel={action.external ? 'noopener noreferrer' : undefined}
      aria-label={action.label}
      className={`quick-action-float-btn ${primary ? 'is-primary' : ''}`}
    >
      <ButtonIcon name={action.icon} className="h-5 w-5" />
    </a>
  )
}

export default function QuickActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 280)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <nav className="quick-actions-dock md:hidden" aria-label="Quick contact">
        {actions.map((action) => (
          <DockAction key={action.id} action={action} />
        ))}
        <button
          type="button"
          aria-label="Back to top"
          onClick={scrollTop}
          className={`quick-action-dock-btn quick-action-dock-top ${showTop ? 'is-visible' : ''}`}
        >
          <span className="text-base font-bold leading-none">↑</span>
          <span className="quick-action-dock-label">Top</span>
        </button>
      </nav>

      <div className="quick-actions-float hidden md:flex" aria-label="Quick contact">
        {showTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            aria-label="Back to top"
            onClick={scrollTop}
            className="quick-action-float-btn quick-action-float-top"
          >
            ↑
          </motion.button>
        )}
        {actions.map((action, i) => (
          <motion.div
            key={action.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i }}
          >
            <FloatAction action={action} primary={action.id === 'whatsapp'} />
          </motion.div>
        ))}
      </div>
    </>
  )
}
