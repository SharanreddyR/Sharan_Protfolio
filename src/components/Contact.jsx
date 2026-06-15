import { useState } from 'react'
import { motion } from 'framer-motion'
import LeafButton from './LeafButton'
import ProfilePhoto from './ProfilePhoto'
import { IconMail, IconPhone } from './Icons'
import { profile, socialLinks, contactLinks, inquiryTemplates, getInquiryMailto } from '../data/content'
import { downloadVCard, sharePortfolio } from '../utils/contactHelpers'

const socialIconMap = {
  LinkedIn: 'linkedin',
  GitHub: 'github',
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function ContactTile({ href, label, value, sublabel, icon: Icon, external = false, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10"
    >
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="contact-premium-tile group block no-underline active:scale-[0.98]"
      >
        <span className="contact-premium-tile-shine" aria-hidden="true" />
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span className="contact-premium-tile-icon" aria-hidden="true">
              <Icon className="h-5 w-5" />
            </span>
            <p className="mt-4 text-[0.58rem] font-bold uppercase tracking-[0.24em] text-forest/40">{label}</p>
            <p className="mt-2 truncate text-base font-bold text-forest transition-colors group-hover:text-[#143022]">
              {value}
            </p>
            <p className="mt-1.5 text-xs font-medium text-moss">{sublabel}</p>
          </div>
          <span className="contact-premium-tile-arrow" aria-hidden="true">
            →
          </span>
        </div>
      </a>
    </motion.div>
  )
}

function ContactIdentity() {
  return (
    <motion.aside
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="contact-identity-panel"
    >
      <div className="contact-identity-photo-wrap">
        <ProfilePhoto size="contact" hoverZoom staticDisplay priority className="!mx-0" />
      </div>

      <div className="mt-6 text-center lg:text-left">
        <p className="font-display text-2xl font-bold tracking-tight text-forest">{profile.name}</p>
        <p className="mt-1 text-sm font-semibold text-moss">{profile.role}</p>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
        <span className="badge-live">{profile.availability}</span>
        <span className="contact-trust-pill">{profile.responseNote}</span>
      </div>

      <ul className="mt-6 space-y-3 border-t border-moss/15 pt-6">
        {[
          { label: 'Location', value: profile.address },
          { label: 'Timezone', value: profile.timezone },
        ].map((item) => (
          <li key={item.label} className="flex items-start gap-3 text-left">
            <span className="leaf-dot mt-1.5" />
            <div>
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-forest/40">{item.label}</p>
              <p className="mt-1 text-sm font-semibold leading-relaxed text-forest/75">{item.value}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
        {profile.domains.map((domain) => (
          <span key={domain} className="tag-pill">
            {domain}
          </span>
        ))}
      </div>
    </motion.aside>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [shared, setShared] = useState(false)

  const copyEmail = async (e) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = contactLinks.mailto
    }
  }

  const handleShare = async () => {
    const result = await sharePortfolio()
    if (result) {
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    }
  }

  return (
    <section id="contact" className="contact-premium-section section-block px-6 py-20 lg:px-10 lg:py-28">
      <div className="contact-premium-ambient" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-2xl text-center lg:mb-14"
        >
          <p className="eyebrow justify-center">The Gateway</p>
          <h2 className="section-title mt-4">
            Let&apos;s grow something <span className="text-gradient">together</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-forest/75 lg:text-base">
            Ready to start your next project? Reach out directly — I&apos;m available for{' '}
            <strong>freelance</strong>, <strong>contract</strong>, and <strong>remote</strong> work.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(280px,320px)_1fr] lg:gap-10">
          <ContactIdentity />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="contact-main-panel relative z-10"
          >
            <div className="contact-main-panel-head">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.24em] text-forest/40">Direct Contact</p>
              <p className="mt-2 text-sm leading-relaxed text-forest/70">
                Tap a channel below to connect instantly — email opens compose, phone opens your dialer.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ContactTile
                href={contactLinks.mailto}
                label="Email"
                value={profile.email}
                sublabel="Tap to open compose"
                icon={IconMail}
                delay={0.05}
              />
              <ContactTile
                href={contactLinks.tel}
                label="Phone"
                value={profile.phone}
                sublabel="Tap to open dial pad"
                icon={IconPhone}
                delay={0.1}
              />
            </div>

            <div className="mt-10 border-t border-moss/15 pt-8">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.24em] text-forest/40">
                Start with a template
              </p>
              <p className="mt-2 text-sm text-forest/70">
                Pick a project type — opens email with a ready-made message for clients.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {inquiryTemplates.map((template) => (
                  <a
                    key={template.label}
                    href={getInquiryMailto(template)}
                    className="tag-pill transition-colors hover:border-moss/50 hover:bg-sage/70"
                  >
                    {template.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-moss/15 pt-8">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.24em] text-forest/40">Quick Actions</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <LeafButton icon="mail" href={contactLinks.mailto}>
                  Compose Email
                </LeafButton>
                <LeafButton icon="phone" href={contactLinks.tel} variant="outline">
                  Call Now
                </LeafButton>
                <LeafButton icon="whatsapp" href={profile.whatsapp} variant="outline" external>
                  WhatsApp
                </LeafButton>
                <LeafButton icon="download" href={profile.resumeUrl} download={profile.resumeFileName} variant="outline">
                  Download Resume
                </LeafButton>
                <LeafButton type="button" icon={copied ? 'check' : 'copy'} onClick={copyEmail} variant="ghost">
                  {copied ? 'Email Copied!' : 'Copy Email'}
                </LeafButton>
                <LeafButton type="button" icon="download" onClick={downloadVCard} variant="ghost">
                  Save Contact
                </LeafButton>
                <LeafButton type="button" icon="external" onClick={handleShare} variant="ghost">
                  {shared ? 'Link Copied!' : 'Share Portfolio'}
                </LeafButton>
              </div>
            </div>

            <div className="mt-10 border-t border-moss/15 pt-8">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.24em] text-forest/40">Connect Online</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <LeafButton
                    key={link.href}
                    href={link.href}
                    icon={socialIconMap[link.label]}
                    variant="ghost"
                    external
                    className="!px-5 !py-2.5 !text-xs"
                  >
                    {link.label}
                  </LeafButton>
                ))}
              </div>
            </div>

            <div className="contact-main-panel-foot">
              <p className="text-xs font-medium leading-relaxed text-forest/65">
                <strong className="text-forest">{profile.engagement.slice(0, 2).join(' · ')}</strong>
                {' · '}
                {profile.engagement.slice(2).join(' · ')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
