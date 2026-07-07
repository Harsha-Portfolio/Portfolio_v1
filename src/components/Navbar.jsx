import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['home', ...LINKS.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/80 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-end px-6 py-4">
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`text-sm tracking-wide transition-colors ${
                  active === link.id ? 'text-champagne' : 'text-mist hover:text-paper'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
