import { Instagram, Facebook, Scissors } from 'lucide-react'
import { config } from '../config/config'

// Mismos links que el navbar para navegación rápida.
const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

/**
 * Footer del sitio.
 * Wordmark gigante de fondo + marca, navegación y redes sociales.
 */
export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Wordmark decorativo gigante */}
      <div className="footer__wordmark serif" aria-hidden="true">
        {config.negocio}
      </div>

      <div className="contenedor">
        <div className="footer__grid">
          {/* Marca */}
          <div className="footer__brand">
            <div className="footer__logo serif">
              <Scissors size={22} strokeWidth={1.6} />
              {config.negocio}
              <span className="punto">.</span>
            </div>
            <p>
              {config.slogan}. Te esperamos en {config.direccion} para
              transformar tu look en una experiencia inolvidable.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4>Navegación</h4>
            <ul className="footer__links">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4>Síguenos</h4>
            <div className="footer__redes">
              {config.redes.instagram && (
                <a
                  href={config.redes.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
              )}
              {config.redes.facebook && (
                <a
                  href={config.redes.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {anio} {config.negocio}. Todos los derechos reservados.
          </span>
          <span>
            Hecho con 💖 por{' '}
            <a
              href="https://webalpaso.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebAlPaso
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
