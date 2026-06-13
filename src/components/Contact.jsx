import { useState } from 'react'
import { motion } from 'framer-motion'
import LeafButton from './LeafButton'
import { profile, socialLinks } from '../data/content'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="px-6 py-20 lg:px-10 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-2xl rounded-leaf border border-moss/35 green-wash px-8 py-14 text-center shadow-leaf backdrop-blur-sm lg:px-14 lg:py-16"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-forest/45">The Gateway</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold text-forest">
          Let&apos;s grow something <span className="font-bold text-forest">together</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-forest/75">
          <strong>{profile.availability}.</strong> {profile.responseNote}. Reach out by{' '}
          <strong>email</strong>, <strong>phone</strong>, or <strong>WhatsApp</strong>.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-leaf-sm border border-moss/25 bg-white/80 p-4 text-left">
            <p className="text-[0.6rem] font-bold uppercase tracking-widest text-forest/45">Email</p>
            <p className="mt-1 text-sm font-semibold text-forest">{profile.email}</p>
          </div>
          <div className="rounded-leaf-sm border border-moss/25 bg-white/80 p-4 text-left">
            <p className="text-[0.6rem] font-bold uppercase tracking-widest text-forest/45">Phone</p>
            <p className="mt-1 text-sm font-semibold text-forest">{profile.phone}</p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <LeafButton href={`mailto:${profile.email}`}>Send Email</LeafButton>
            <LeafButton type="button" onClick={copyEmail} variant="outline">
              {copied ? 'Copied!' : 'Copy Email'}
            </LeafButton>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <LeafButton href={`tel:${profile.phoneTel}`} variant="outline">
              Call Now
            </LeafButton>
            <LeafButton href={profile.whatsapp} variant="outline" external>
              WhatsApp
            </LeafButton>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {socialLinks.map((link) => (
              <LeafButton key={link.href} href={link.href} variant="ghost" external>
                {link.label}
              </LeafButton>
            ))}
            <LeafButton href={profile.resumeUrl} variant="ghost" external>
              Resume
            </LeafButton>
          </div>
        </div>

        <div className="mt-10 border-t border-moss/15 pt-8 text-left sm:text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest/40">
            Address & Timezone
          </p>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-forest/75">{profile.address}</p>
          <p className="mt-2 text-sm font-medium text-forest/65">{profile.timezone}</p>
          <p className="mt-3 text-sm font-medium text-forest/70">{profile.domains.join(' · ')}</p>
        </div>
      </motion.div>
    </section>
  )
}
