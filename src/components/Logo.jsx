const sizes = {
  sm: { mark: 60, text: 'text-base', gap: 'gap-3' },
  md: { mark: 78, text: 'text-xl', gap: 'gap-3.5' },
  lg: { mark: 96, text: 'text-2xl', gap: 'gap-4' },
}

function LogoMark({ size = 78, className = '', priority = false }) {
  return (
    <span
      className={`logo-mark relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="logo-mark-glow-outer" aria-hidden="true" />
      <span className="logo-mark-glow" aria-hidden="true" />
      <img
        src="/sharan_reddy.png"
        alt=""
        width={size}
        height={size}
        className="logo-mark-image relative z-20 h-full w-full object-contain"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="sync"
        draggable={false}
      />
    </span>
  )
}

export default function Logo({
  className = '',
  showWordmark = true,
  size = 'md',
  href = '#hero',
  as = 'a',
  priority = false,
}) {
  const { mark, text, gap } = sizes[size] ?? sizes.md

  const content = (
    <>
      <LogoMark size={mark} priority={priority} />
      {showWordmark && (
        <span className={`logo-wordmark-stack hidden min-w-0 sm:flex sm:flex-col ${text}`}>
          <span className="logo-wordmark truncate font-display text-[1.05em] font-bold leading-none tracking-tight">
            Sharan Reddy
          </span>
          <span className="logo-designation mt-0.5 truncate text-[0.58rem] font-bold uppercase leading-none tracking-[0.22em] text-moss/90">
            Full Stack Developer
          </span>
        </span>
      )}
    </>
  )

  const baseClass = `group inline-flex items-center ${gap} ${className}`

  if (as === 'div') {
    return <div className={baseClass}>{content}</div>
  }

  return (
    <a href={href} className={baseClass} aria-label="Sharan Reddy R — Home">
      {content}
    </a>
  )
}

export { LogoMark }
