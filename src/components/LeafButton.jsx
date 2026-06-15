import { motion } from 'framer-motion'
import { ButtonIcon } from './Icons'

export default function LeafButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  external = false,
  download,
  icon,
}) {
  const base =
    'relative inline-flex items-center justify-center gap-2.5 overflow-hidden px-7 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 rounded-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2'

  const variants = {
    primary:
      'bg-forest text-white shadow-[0_8px_24px_rgba(26,58,43,0.22)] hover:bg-[#143022] hover:shadow-[0_12px_32px_rgba(26,58,43,0.28)]',
    outline:
      'border border-moss/50 bg-white/80 text-forest backdrop-blur-sm hover:border-moss hover:bg-sage/50 hover:shadow-leaf',
    ghost: 'font-semibold text-forest/75 hover:text-forest hover:bg-sage/50',
  }

  const inner = (
    <>
      <motion.span
        className="pointer-events-none absolute inset-0 bg-moss/20"
        initial={{ scale: 0, opacity: 0.6 }}
        whileHover={{ scale: 2.2, opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ borderRadius: '50%', left: '50%', top: '50%', x: '-50%', y: '-50%' }}
      />
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {icon && <ButtonIcon name={icon} className="h-[1.05rem] w-[1.05rem]" />}
        {children}
      </span>
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={download}
        className={`${base} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
      >
        {inner}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
    >
      {inner}
    </motion.button>
  )
}
