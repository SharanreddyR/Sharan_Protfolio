import Nav from './components/Nav'
import Hero from './components/Hero'
import MarqueeTicker from './components/MarqueeTicker'
import Highlights from './components/Highlights'
import Services from './components/Services'
import TechStack from './components/TechStack'
import TreeTimeline from './components/TreeTimeline'
import ClientGuide from './components/ClientGuide'
import Contact from './components/Contact'
import FloatingContact from './components/FloatingContact'
import ScrollProgress from './components/ScrollProgress'
import Logo from './components/Logo'
import ProfilePhoto from './components/ProfilePhoto'
import { profile, socialLinks } from './data/content'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <MarqueeTicker />
        <Highlights />
        <Services />
        <TechStack />
        <TreeTimeline />
        <ClientGuide />
        <Contact />
      </main>
      <FloatingContact />
      <footer className="border-t border-moss/20 bg-white/60 px-6 py-12 backdrop-blur-sm lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3 md:items-start">
            <div className="flex items-start gap-4">
              <ProfilePhoto size="sm" hoverZoom className="!mx-0 hidden sm:block" />
              <div>
                <Logo as="div" size="sm" showWordmark className="!gap-2" />
              </div>
            </div>

            <div className="space-y-2">
              {/* <a
                href={`mailto:${profile.email}?subject=Project%20Inquiry`}
                className="block text-sm font-semibold text-forest transition-colors hover:text-moss"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phoneTel}`}
                className="block text-sm font-semibold text-forest transition-colors hover:text-moss"
              >
                {profile.phone}
              </a> */}
               <p className="mt-10 border-t border-moss/15 pt-6 text-center text-xs tracking-wide text-forest/45">
            © 2026 Sharan Reddy R · Built with React, Tailwind & Framer Motion
          </p>
            </div>

            <div className="flex flex-wrap gap-4 md:justify-end">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-[0.14em] text-forest/45 transition-colors hover:text-forest"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        
        </div>
      </footer>
    </>
  )
}
