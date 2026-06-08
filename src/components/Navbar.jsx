import { useEffect, useState } from 'react'
import {
  Menu,
  X,
  MessageCircle,
  Scissors,
  Instagram,
  Facebook,
  ArrowUpRight,
} from 'lucide-react'
import { config, whatsappLink } from '../config/config'

// Links de navegación (apuntan a los ids de cada sección).
const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Ubicación', href: '#ubicacion' },
]

/**
 * Navbar fija.
 * - Transparente sobre el Hero; se vuelve sólida con sombra al hacer scroll.
 * - En móvil despliega un drawer elegante a pantalla completa con overlay,
 *   links animados de forma escalonada, CTA de WhatsApp y redes sociales.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquea el scroll del body y permite cerrar con la tecla Escape
  // mientras el menú móvil está abierto.
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
      <div className="contenedor navbar__inner">
        {/* Logo (tijeras + wordmark serif con punto dorado) */}
        <a href="#" className="navbar__logo" aria-label={config.negocio}>
          <Scissors className="navbar__logo-icono" size={22} strokeWidth={1.6} />
          {config.negocio}
          <span className="punto">.</span>
        </a>

        {/* Links de navegación (solo escritorio) */}
        <ul className="navbar__links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA + toggle móvil */}
        <div className="navbar__cta">
          <a
            href={whatsappLink()}
            className="btn btn-wsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} />
            Reservar
          </a>

          <button
            className="navbar__toggle"
            onClick={() => setMenuAbierto(true)}
            aria-label="Abrir menú"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* Drawer móvil                                                       */}
      {/* ----------------------------------------------------------------- */}
      <div
        className={`navbar__movil ${menuAbierto ? 'abierto' : ''}`}
        aria-hidden={!menuAbierto}
      >
        {/* Capa de fondo que cierra al tocar */}
        <div className="navbar__overlay" onClick={cerrarMenu} />

        <aside className="navbar__panel">
          {/* Cabecera del panel */}
          <div className="navbar__panel-head">
            <span className="navbar__panel-logo">
              {config.negocio}
              <span className="punto">.</span>
            </span>
            <button
              className="navbar__cerrar"
              onClick={cerrarMenu}
              aria-label="Cerrar menú"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links con numeración editorial y animación escalonada */}
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

          {/* Pie: CTA + contacto + redes */}
          <div className="navbar__panel-foot">
            <a
              href={whatsappLink()}
              className="btn btn-wsp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={cerrarMenu}
            >
              <MessageCircle size={18} />
              Reservar por WhatsApp
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
