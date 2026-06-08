import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Menu,
  MessageCircle,
  Utensils,
  X,
} from 'lucide-react'
import { config, whatsappLink } from '../config/config'

const LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Carta', href: '#servicios' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Reserva', href: '#reserva' },
  { label: 'Ubicacion', href: '#ubicacion' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuAbierto(false)
    if (menuAbierto) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuAbierto])

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="contenedor navbar__inner navbar-restaurante__inner">
        <a href="#" className="navbar__logo" aria-label={config.negocio}>
          <span className="navbar__logo-sello">
            <Utensils size={18} strokeWidth={1.7} />
          </span>
          <span>
            {config.negocio}
            <small>{config.tipo}</small>
          </span>
        </a>

        <div className="navbar__centro">
          <ul className="navbar__links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar__cta">
          <a
            href={whatsappLink()}
            className="btn btn-wsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} />
            Reserva
          </a>

          <button
            className="navbar__toggle"
            onClick={() => setMenuAbierto(true)}
            aria-label="Abrir menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      <div
        className={`navbar__movil ${menuAbierto ? 'abierto' : ''}`}
        aria-hidden={!menuAbierto}
      >
        <div className="navbar__overlay" onClick={cerrarMenu} />

        <aside className="navbar__panel">
          <div className="navbar__panel-head">
            <span className="navbar__panel-logo">
              {config.negocio}
              <span className="punto">.</span>
            </span>
            <button
              className="navbar__cerrar"
              onClick={cerrarMenu}
              aria-label="Cerrar menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="navbar__panel-links">
            {LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={cerrarMenu}
                style={{ transitionDelay: `${0.08 + i * 0.06}s` }}
              >
                <span className="num">0{i + 1}</span>
                {link.label}
                <ArrowUpRight className="flecha" size={20} />
              </a>
            ))}
          </nav>

          <div className="navbar__panel-foot">
            <a
              href={whatsappLink()}
              className="btn btn-wsp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={cerrarMenu}
            >
              <MessageCircle size={18} />
              Reservar mesa
            </a>

            <div className="navbar__panel-redes">
              {config.redes.instagram && (
                <a
                  href={config.redes.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              )}
              {config.redes.facebook && (
                <a
                  href={config.redes.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              )}
            </div>
          </div>
        </aside>
      </div>
    </nav>
  )
}
