import Nav from './components/Nav'
import Hero from './components/Hero'
import MarqueeTicker from './components/MarqueeTicker'
import Highlights from './components/Highlights'
import Services from './components/Services'
import TechStack from './components/TechStack'
import TreeTimeline from './components/TreeTimeline'
import ClientGuide from './components/ClientGuide'
import LeafCatchGame from './components/LeafCatchGame'
import Contact from './components/Contact'
import FloatingContact from './components/FloatingContact'
import ScrollProgress from './components/ScrollProgress'
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
        <LeafCatchGame />
        <Contact />
      </main>
      <FloatingContact />
      <footer className="border-t border-moss/20 px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-display font-bold text-forest">
                Sharan <span className="font-bold text-moss">Reddy R</span>
              </p>
              <p className="mt-1 text-xs font-semibold text-forest/55">
                <a href={`mailto:${profile.email}`} className="hover:text-forest">{profile.email}</a>
                {' · '}
                <a href={`tel:${profile.phoneTel}`} className="hover:text-forest">{profile.phone}</a>
              </p>
              <p className="mt-1 text-xs text-forest/45">{profile.timezone}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.14em] text-forest/45 transition-colors hover:text-forest"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.14em] text-forest/45 transition-colors hover:text-forest"
              >
                Resume
              </a>
            </div>
            <p className="text-xs tracking-wide text-forest/45">© 2026 · {profile.role}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
