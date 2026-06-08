import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle, Scissors } from 'lucide-react'
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
 * - Transparente sobre el Hero.
 * - Se vuelve blanca con sombra suave al hacer scroll (estado `scrolled`).
 * - Menú hamburguesa en móvil.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cierra el menú móvil al hacer clic en un link.
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

        {/* Links de navegación */}
        <ul className={`navbar__links ${menuAbierto ? 'abierto' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={cerrarMenu}>
                {link.label}
              </a>
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
            onClick={() => setMenuAbierto((v) => !v)}
            aria-label="Abrir menú"
          >
            {menuAbierto ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
