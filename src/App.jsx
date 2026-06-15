import Nav from './components/Nav'
import Hero from './components/Hero'
import MarqueeTicker from './components/MarqueeTicker'
import Highlights from './components/Highlights'
import Services from './components/Services'
import TechStack from './components/TechStack'
import TreeTimeline from './components/TreeTimeline'
import ClientGuide from './components/ClientGuide'
import Contact from './components/Contact'
import QuickActions from './components/QuickActions'
import ScrollProgress from './components/ScrollProgress'
import Logo from './components/Logo'
import ProfilePhoto from './components/ProfilePhoto'
import { profile, socialLinks } from './data/content'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="main-with-dock">
        <Hero />
        <MarqueeTicker />
        <Highlights />
        <Services />
        <TechStack />
        <TreeTimeline />
        <ClientGuide />
        <Contact />
      </main>
      <QuickActions />
      <footer className="border-t border-moss/20 bg-white/60 px-6 py-12 backdrop-blur-sm lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3 md:items-start">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
              <ProfilePhoto size="sm" hoverZoom className="!mx-0 shrink-0" />
              <div className="text-center sm:text-left">
                <Logo as="div" size="sm" showWordmark className="!gap-2 justify-center sm:!justify-start" />
                <p className="mt-2 text-xs text-forest/45">{profile.timezone}</p>
              </div>
            </div>

            <div className="flex items-end justify-center md:justify-start">
              <p className="text-center text-xs tracking-wide text-forest/45 md:text-left">
                © 2026 Sharan Reddy R · Built with React, Tailwind & Framer Motion
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:justify-end">
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
