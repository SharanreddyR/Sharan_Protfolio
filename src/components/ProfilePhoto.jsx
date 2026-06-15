import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/content'

const sizes = {
  sm: { wrap: 'w-16 h-16', img: 'w-full h-full' },
  md: { wrap: 'w-28 h-32 sm:w-32 sm:h-36', img: 'w-full h-full' },
  contact: {
    wrap: 'mx-auto w-[220px] h-[260px] sm:w-[240px] sm:h-[280px] lg:w-full lg:max-w-[280px] lg:h-64',
    img: 'w-full h-full',
  },
  lg: { wrap: 'w-56 h-64 sm:w-64 sm:h-72 lg:w-72 lg:h-80', img: 'w-full h-full' },
}

export default function ProfilePhoto({
  size = 'lg',
  className = '',
  priority = false,
  hoverZoom = false,
  staticDisplay = false,
}) {
  const { wrap } = sizes[size] ?? sizes.lg
  const reducedMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  const motionProps =
    staticDisplay || priority
      ? { initial: false, animate: { opacity: 1, scale: 1, y: 0 } }
      : {
          initial: { opacity: 0, scale: 0.96, y: 12 },
          whileInView: { opacity: 1, scale: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
        }

  const isZoomed = hoverZoom && !reducedMotion && (hovered || active)
  const imageScale = isZoomed ? 1.14 : 1

  const toggleZoom = () => {
    if (hoverZoom && !reducedMotion) setActive((value) => !value)
  }

  const image = (
    <motion.img
      src={profile.photoUrl}
      alt={profile.photoAlt}
      className="profile-photo-image"
      loading={priority || staticDisplay ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      draggable={false}
      animate={{ scale: imageScale }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    />
  )

  return (
    <motion.figure
      {...motionProps}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`profile-photo ${hoverZoom ? 'profile-photo-hover-zoom' : ''} ${wrap} ${className}`}
    >
      <span className="profile-photo-ring" aria-hidden="true" />
      <span className="profile-photo-glow" aria-hidden="true" />

      {hoverZoom ? (
        <button
          type="button"
          className="profile-photo-clip"
          aria-label={`View ${profile.name} profile photo`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => {
            setHovered(false)
            setActive(false)
          }}
          onFocus={() => setHovered(true)}
          onBlur={() => {
            setHovered(false)
            setActive(false)
          }}
          onClick={toggleZoom}
        >
          {image}
        </button>
      ) : (
        image
      )}

      {size === 'lg' && (
        <figcaption className="profile-photo-badge">
          <span className="leaf-dot" />
          {profile.role}
        </figcaption>
      )}
    </motion.figure>
  )
}
