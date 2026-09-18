import './App.css'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function App() {
  return (
    <>
      <nav className="nav">
        <a href="#home" className="nav-brand">
          <span className="nav-brand-mark">🌿</span>
          <span className="nav-brand-text">Jun's Space</span>
        </a>
        <ul className="nav-list">
          {navItems.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="nav-link">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-note">I'm ENFP</p>
          <p className="footer-copy">
            © {new Date().getFullYear()} Jun · Every page comes from a little tenderness
          </p>
          <a href="#home" className="footer-back">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}
