import { marqueeItems } from '../data/content'

export default function MarqueeTicker() {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div className="relative overflow-hidden border-y border-moss/25 bg-forest py-3.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-forest to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-forest to-transparent" />
      <div className="marquee-track flex w-max gap-10">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-white/90"
          >
            <span className="leaf-dot bg-moss" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
