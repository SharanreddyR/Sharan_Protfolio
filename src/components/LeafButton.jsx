import { motion } from 'framer-motion'

export default function LeafButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  external = false,
}) {
  const base =
    'relative inline-flex items-center justify-center gap-2 overflow-hidden px-7 py-3.5 text-sm font-bold tracking-wide transition-colors duration-300 rounded-leaf'

  const variants = {
    primary: 'bg-forest text-white hover:bg-[#143022]',
      outline:
      'border border-moss/50 green-wash text-forest hover:border-moss hover:bg-sage/50',
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
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
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
